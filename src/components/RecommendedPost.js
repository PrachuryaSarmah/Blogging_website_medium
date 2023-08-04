
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecommendedPost.css';

// const RecommendedPost = () => {
//     const [userPreferences, setUserPreferences] = useState([]);
//     const [recommendedPosts, setRecommendedPosts] = useState([]);

//     useEffect(() => {
//         fetchUserPreferences();
//     }, []);

//     const fetchUserPreferences = async () => {
//         try {
//             const response = await axios.get('YOUR_ROR_API_ENDPOINT/user/preferences');
//             setUserPreferences(response.data);
//             fetchRecommendedPosts(response.data);
//         } catch (error) {
//             console.error('Error fetching user preferences:', error);
//         }
//     };

//     const fetchRecommendedPosts = async (userPreferences) => {
//         try {
//             // Get the most preferred topics previously read by the user
//             const mostPreferredTopics = userPreferences.map((preference) => preference.topic);

//             const response = await axios.get('YOUR_ROR_API_ENDPOINT/posts/recommended', {
//                 params: {
//                     topics: mostPreferredTopics.join(','),
//                 },
//             });
//             setRecommendedPosts(response.data);
//         } catch (error) {
//             console.error('Error fetching recommended posts:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="recommended-posts-section">
//                 <h1>Recommended Posts</h1>
//                 {recommendedPosts.length === 0 ? (
//                     <p>No recommended posts found.</p>
//                 ) : (
//                     <ul className="recommended-posts-list">
//                         {recommendedPosts.map((post) => (
//                             <li key={post.id} className="recommended-posts-item">
//                                 <h3>{post.title}</h3>
//                                 <p className="mrgn">Author: {post.author}</p>
//                                 <p className='mrgn'>Date: {post.dateTime}</p>
//                                 <p className='mrgn'>Likes: {post.likes}</p>
//                                 <p className='mrgn'>Comments: {post.comments}</p>
//                                 <p className='mrgn'>Comments: {post.topic}</p>
//                                 {/* Display other post details here */}
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// }

//     export default RecommendedPost;



const RecommendedPost = () => {
    // State for storing recommended posts
    const [recommendedPosts, setRecommendedPosts] = useState([]);

    // Fetch recommended posts from the backend API
    useEffect(() => {
        fetchRecommendedPosts();
    }, []);

    // Function to fetch recommended posts from the backend API
    const fetchRecommendedPosts = async () => {
        try {
            // Make an API call to fetch the recommended posts
            const response = await axios.get('YOUR_ROR_API_ENDPOINT/posts/recommended');
            setRecommendedPosts(response.data);
        } catch (error) {
            console.error('Error fetching recommended posts:', error);
        }
    };

    // JSX to render the component
    return (
        <div className="container">
            <div className="recommended-posts-section"> {/* Add the class name for the recommended posts section */}
                <h1>Recommended Posts</h1>
                {recommendedPosts.length === 0 ? (
                    <p>No recommended posts found.</p>
                ) : (
                    <ul className="recommended-posts-list">
                        {recommendedPosts.map((post) => (
                            <li key={post.id} className="recommended-posts-item"> {/* Add the class name for each recommended post item */}
                                <h3>{post.title}</h3>
                                <p className="mrgn">Author: {post.author}</p>
                                <p className='mrgn'>Date: {post.dateTime}</p>
                                <p className='mrgn'>Likes: {post.likes}</p>
                                 <p className='mrgn'>Comments: {post.comments}</p>
                                 <p className='mrgn'>Comments: {post.topic}</p>

                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default RecommendedPost;

