 import React from 'react';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';
import SearchPost from './components/SearchPost';
import './App.css';

const App = () => {
  return (
    <Routes>
      
        
          <Route  path="/" element={<PostList />} />
          <Route  path="/add" element={<AddPost/>} />
          <Route  path="/edit/:postId" element={<EditPost/>} />
          <Route  path="/delete/:postId" element={<DeletePost/>} />
          <Route  path="/search" element={<SearchPost/>} />
        
      
    </Routes>
  );
};

export default App;

