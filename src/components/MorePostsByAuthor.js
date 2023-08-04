import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MorePostsByAuthor.css';


const MorePostsByAuthor = ({ author }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPostsByAuthor();
    }, [author]);

    const fetchPostsByAuthor = async () => {
        try {
            const response = await axios.get(`YOUR_ROR_API_ENDPOINT/posts?author=${author}`);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts by author:', error);
        }
    };

    return (
        <div>
            <h2>More Posts by {author}</h2>
            {posts.map((post) => (
                <div className='postitem' key={post.id}>
                    <h3 className='posttitle'>{post.title}</h3>
                    <p>Date: {post.dateTime}</p>
                    <p className='postauthor'>Author: {post.author}</p>
                    <p>Likes: {post.likes}</p>
                    <p>Comments: {post.comments}</p>
                    <p>Comments: {post.topic}</p>
                    
                </div>
            ))}
        </div>
    );
};

export default MorePostsByAuthor;
