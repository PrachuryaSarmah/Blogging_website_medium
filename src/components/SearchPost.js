import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPost.css'


const SearchPost = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const fetchSearchResults = async () => {
    try {
      const response = await axios.get(`YOUR_ROR_API_ENDPOINT/posts/search?query=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='container'>
      <h2>Search</h2>
      <div className='search-bar'>
      <input
        type="text"
        placeholder="Search for posts, authors, or topics"
        value={searchTerm}
        onChange={handleSearchChange}
        className='search-input'
      />
      <button onClick={fetchSearchResults} className="search-button">Search</button>
      </div>
      <div className="search-results"> 
      <h2>Search Results</h2>
      {searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        searchResults.map((post) => (
          <div className='search-item' key={post.id}>
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
            <p>Date: {post.dateTime}</p>
            
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default SearchPost;
