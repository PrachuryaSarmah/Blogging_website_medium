// import React from 'react';

// const PostFilter = ({ handleFilterChange }) => {
//   return (
//     <div>
//       <h2>Filter Posts</h2>
//       <label>
//         Filter by:
//         <select onChange={handleFilterChange}>
//           <option value="all">All</option>
//           <option value="author">Author</option>
//           <option value="date">Date</option>
//           <option value="likes">Likes</option>
//           <option value="comments">Comments</option>
//         </select>
//       </label>
//     </div>
//   );
// };

// export default PostFilter;


import React, { useState } from 'react';

const PostFilter = ({ handleFilterChange }) => {
  const [minLikes, setMinLikes] = useState('');
  const [minComments, setMinComments] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [date, setDate] = useState('');

  const handleLikesChange = (e) => {
    setMinLikes(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setMinComments(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFilter = () => {
    handleFilterChange(minLikes, minComments, authorName, date);
  };

  return (
    <div>
      <h2>Filter Posts</h2>
      <label>
        Minimum Likes:
        <input type="number" value={minLikes} onChange={handleLikesChange} />
      </label>
      <label>
        Minimum Comments:
        <input type="number" value={minComments} onChange={handleCommentsChange} />
      </label>
      <label>
        Author:
        <input type="text" value={authorName} onChange={handleAuthorChange} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default PostFilter;
