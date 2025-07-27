import React, { useState } from 'react';

function DevBlogPost({ title, content, category, date, isExpanded, onToggle, onDelete }) {
    return (
        <div className="blog-post-card" onClick={onToggle}>
            <h2>{title}</h2>
            <div className="post-preview">
                <span>{category} | {date}</span>
            </div>
            {isExpanded && (
                <div className="post-content">
                    <p>{content}</p>
                </div>
            )}
            <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>
    );
}

export default DevBlogPost;
