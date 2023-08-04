import React from 'react';

const PostFilter = ({ handleFilterChange }) => {
  return (
    <div>
      <h2>Filter Posts</h2>
      <label>
        Filter by:
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="author">Author</option>
          <option value="date">Date</option>
          <option value="likes">Likes</option>
          <option value="comments">Comments</option>
        </select>
      </label>
    </div>
  );
};

export default PostFilter;
