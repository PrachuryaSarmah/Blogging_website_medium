// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PostFilter from './PostFilter';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('YOUR_ROR_API_ENDPOINT/posts');
//       setPosts(response.data);
//       setFilteredPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleFilterChange = (e) => {
//     const value = e.target.value;
//     setFilter(value);

//     if (value === 'all') {
//       setFilteredPosts(posts);
//     } else if (value === 'author') {
//       const sortedByAuthor = [...posts].sort((a, b) => a.author.localeCompare(b.author));
//       setFilteredPosts(sortedByAuthor);
//     } else if (value === 'date') {
//       const sortedByDate = [...posts].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
//       setFilteredPosts(sortedByDate);
//     } else if (value === 'likes') {
//       const sortedByLikes = [...posts].sort((a, b) => b.likes - a.likes);
//       setFilteredPosts(sortedByLikes);
//     } else if (value === 'comments') {
//       const sortedByComments = [...posts].sort((a, b) => b.comments - a.comments);
//       setFilteredPosts(sortedByComments);
//     }
//   };

//   return (
//     <div>
//       <h2>Post List</h2>
//       <PostFilter handleFilterChange={handleFilterChange} />
//       {filteredPosts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>Author: {post.author}</p>
//           <p>Date: {post.dateTime}</p>
//           <p>Date: {post.topic}</p>
//           {/* Display other post details here */}
//         </div>
//       ))}
//     </div>
//   );
// };

// // export default PostList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostFilter from './PostFilter';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('YOUR_ROR_API_ENDPOINT/posts');
      setPosts(response.data);
      setFilteredPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleFilterChange = (minLikes, minComments, authorName, selectedDate) => {
    setFilter('custom'); // Set a custom filter identifier, if desired.

    let filteredByLikesAndComments = [...posts];

    // Filter by Likes
    if (filter === 'likes') {
      filteredByLikesAndComments = filteredByLikesAndComments.filter((post) => post.likes >= minLikes);
    }

    // Filter by Comments
    if (filter === 'comments') {
      filteredByLikesAndComments = filteredByLikesAndComments.filter((post) => post.comments >= minComments);
    }

    // Filter by Author
    if (filter === 'author') {
      filteredByLikesAndComments = filteredByLikesAndComments.filter((post) => post.author === authorName);
    }

    // Filter by Date
    if (filter === 'date') {
      filteredByLikesAndComments = filteredByLikesAndComments.filter(
        (post) => new Date(post.dateTime) >= new Date(selectedDate)
      );
    }

    setFilteredPosts(filteredByLikesAndComments);
  };

  return (
    <div>
      <h2>Post List</h2>
      <PostFilter handleFilterChange={handleFilterChange} />
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>Author: {post.author}</p>
          <p>Date: {post.dateTime}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          {/* Display other post details here */}
        </div>
      ))}
    </div>
  );
};

export default PostList;


