import React, { useState, useEffect } from 'react';
import DevBlogPost from './DevBlogPost';
import './BlogContainer.css';

function BlogContainer() {
    const [expandedPost, setExpandedPost] = useState(null);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetchPosts();
    }, []);
    
    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5232/api/blogposts');
            const data = await response.json();
            console.log('First post keys:', Object.keys(data[0] || {})); // This will show all property names
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const deletePost = async (id) => {
        console.log('Delete button clicked for post ID:', id);
        try {
            const response = await fetch(`http://localhost:5232/api/blogposts/${id}`, {
                method: 'DELETE'
            });
            
            console.log('Delete response:', response.status);
            
            if (response.ok) {
                setPosts(posts.filter(post => post.id !== id));
                console.log('Post deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const togglePost = (postTitle) => {
        if (expandedPost === postTitle) {
            setExpandedPost(null);
        } else {
            setExpandedPost(postTitle);
        }
    };

    return (
        <div className="blog-container">
            {posts.map(post => (
                <DevBlogPost 
                    key={post.title} 
                    {...post} 
                    isExpanded={expandedPost === post.title}
                    onToggle={() => togglePost(post.title)}
                    onDelete={() => deletePost(post.id)}
                />
            ))}
        </div>
    );
}

export default BlogContainer;