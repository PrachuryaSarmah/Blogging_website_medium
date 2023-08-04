// TopPost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopPost.css'

const TopPost = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    fetchTopPosts();
  }, []);

  const fetchTopPosts = async () => {
    try {
      const response = await axios.get('YOUR_ROR_API_ENDPOINT/posts');
      const sortedByLikes = response.data.sort((a, b) => b.likes - a.likes);
      setTopPosts(sortedByLikes);
    } catch (error) {
      console.error('Error fetching top posts:', error);
    }
  };

  return (
    
    <div className="container">
        <h1>Top Posts</h1>
      <div className="top-posts-section"> 
        {topPosts.length === 0 ? (
          <p>No top posts found.</p>
        ) : (
          <ul className="top-posts-list">
            {topPosts.map((post) => (
              <li key={post.id} className="top-posts-item"> 
                <h3>{post.title}</h3>
                <p className="margin-bottom-10">Author: {post.author}</p>
                <p>Likes: {post.likes}</p>
                {/* Display other post details here */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default TopPost;
