import React, { useState } from 'react';
import './App.css';
import BlogContainer from './BlogContainer.jsx';
import CreateBlogPost from './components/CreateBlogPost.jsx';

function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Dev Blog</h1>
        <button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="create-button"
        >
          {showCreateForm ? 'Cancel' : 'Create New Post'}
        </button>
      </header>
      
      {showCreateForm && <CreateBlogPost />}
      <BlogContainer />
    </div>
  );
}

export default App;
