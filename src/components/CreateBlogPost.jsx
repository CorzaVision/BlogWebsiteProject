import React, { useState } from 'react';

function CreateBlogPost() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted:', formData);
        
        try {
            console.log('Sending request to API...');
            const response = await fetch('http://localhost:5232/api/blogposts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            console.log('Response status:', response.status);
            
            if (response.ok) {
                console.log('Post created successfully');
                setFormData({ title: '', content: '', category: '' });
            } else {
                console.error('Failed to create post, status:', response.status);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <div className="create-form">
            <h2>Create New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreateBlogPost;