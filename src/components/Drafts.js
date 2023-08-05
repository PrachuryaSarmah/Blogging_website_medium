import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Drafts.css';

const DraftPosts = () => {
  const [drafts, setDrafts] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    fetchDrafts();
  }, []);

  const fetchDrafts = async () => {
    try {
      const response = await axios.get('YOUR_ROR_API_ENDPOINT/drafts');
      setDrafts(response.data);
    } catch (error) {
      console.error('Error fetching drafts:', error);
    }
  };

  const handleSaveDraft = async () => {
    const newDraft = {
      title,
      author,
      topic,
      featuredImage,
      text,
      dateTime: new Date().toISOString(),
      // Add other properties as needed (e.g., author, topic, etc.)
    };

    try {
      const response = await axios.post('YOUR_ROR_API_ENDPOINT/drafts', newDraft);
      console.log('Draft saved successfully:', response.data);
      setTitle('');
      setAuthor('');
      setTopic('');
      setFeaturedImage('');
      setText('');
      
      fetchDrafts(); // Refresh the drafts list after saving
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  };

  const handleDeleteDraft = async (id) => {
    try {
      await axios.delete(`YOUR_ROR_API_ENDPOINT/drafts/${id}`);
      alert('Draft deleted successfully.');
      fetchDrafts(); // Refresh the drafts list after deletion
    } catch (error) {
      console.error('Error deleting draft:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Draft Posts</h2>
      <form className='draft-form' onSubmit={handleSaveDraft}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
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
        <button type="submit">Save Draft</button>
      </form>

      <div className='drafts-section'>
        <h3>Saved Drafts:</h3>
        {drafts.length === 0 ? (
          <p>No drafts found.</p>
        ) : (
          <ul className='saved-drafts'>
            {drafts.map((draft) => (
              <li key={draft.id}>
                <h4>{draft.title}</h4>
                <p>{draft.content}</p>
                {/* Display other draft details here */}
                <button onClick={() => handleDeleteDraft(draft.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DraftPosts;


