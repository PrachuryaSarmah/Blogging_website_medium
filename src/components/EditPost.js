import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [topic, setTopic] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`YOUR_ROR_API_ENDPOINT/posts/${postId}`);
      setPost(response.data);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setTopic(response.data.topic);
      setFeaturedImage(response.data.featuredImage);
      setText(response.data.text);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      author,
      topic,
      featuredImage,
      text,
      dateTime: new Date().toISOString(),
    };

    try {
      await axios.put(`YOUR_ROR_API_ENDPOINT/posts/${postId}`, updatedPost);
      console.log('Post updated successfully.');
      // Redirect to the post detail page after successful update
      navigate.push(`/post/${postId}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
