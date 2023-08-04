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






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './AddPost.css';

// const AddPost = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [topic, setTopic] = useState('');
//   const [featuredImage, setFeaturedImage] = useState('');
//   const [text, setText] = useState('');

//   const { postId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (postId) {
//       // Fetch post details for editing if postId is available
//       fetchPost();
//     }
//   }, [postId]);

//   const fetchPost = async () => {
//     try {
//       const response = await axios.get(`YOUR_ROR_API_ENDPOINT/posts/${postId}`);
//       const { title, author, topic, featuredImage, text } = response.data;
//       setTitle(title);
//       setAuthor(author);
//       setTopic(topic);
//       setFeaturedImage(featuredImage);
//       setText(text);
//     } catch (error) {
//       console.error('Error fetching post:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       title,
//       author,
//       topic,
//       featuredImage,
//       text,
//       dateTime: new Date().toISOString(), // Store current date-time when the post was published
//     };

//     try {
//       if (postId) {
//         // Perform update for editing existing post
//         await axios.put(`YOUR_ROR_API_ENDPOINT/posts/${postId}`, newPost);
//         alert('Post updated successfully!');
//       } else {
//         // Perform create for adding a new post
//         await axios.post('YOUR_ROR_API_ENDPOINT/posts', newPost);
//         alert('Post added successfully!');
//       }
//       // Clear the form after successful submission or update
//       setTitle('');
//       setAuthor('');
//       setTopic('');
//       setFeaturedImage('');
//       setText('');
//       navigate('/'); // Navigate back to the post list after successful submission or update
//     } catch (error) {
//       console.error('Error adding/editing post:', error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       // Make an API call to delete the post based on the postId
//       await axios.delete(`YOUR_ROR_API_ENDPOINT/posts/${postId}`);
//       alert('Post deleted successfully!');
//       navigate('/'); // Navigate back to the post list after successful deletion
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   return (
//     <div className='container'>
//       <h2>{postId ? 'Edit Post' : 'Add New Post'}</h2>
//       <form className='add-post-form' onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Topic"
//           value={topic}
//           onChange={(e) => setTopic(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Featured Image URL"
//           value={featuredImage}
//           onChange={(e) => setFeaturedImage(e.target.value)}
//         />
//         <textarea
//           placeholder="Text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         ></textarea>
//         <button type="submit">{postId ? 'Update' : 'Add'}</button>
//         {postId && <button type="button" onClick={handleDelete}>Delete</button>}
//       </form>
//     </div>
//   );
// };

// export default AddPost;
