import React, { useState } from 'react';
import axios from 'axios';
import './AddPost.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [topic, setTopic] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      author,
      topic,
      featuredImage,
      text,
      dateTime: new Date().toISOString(), // Store current date-time when the post was published
    };

    try {
      const response = await axios.post('YOUR_ROR_API_ENDPOINT/posts', newPost);
      console.log('New post added:', response.data);
      // Clear the form after successful submission
      setTitle('');
      setAuthor('');
      setTopic('');
      setFeaturedImage('');
      setText('');
    } catch (error) {
      console.error('Error adding new post:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Add New Post</h2>
      <form className='add-post-form'    onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Featured Image URL"
          value={featuredImage}
          onChange={(e) => setFeaturedImage(e.target.value)}
        />
        <textarea
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
