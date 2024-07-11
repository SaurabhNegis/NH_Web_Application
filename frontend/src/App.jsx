import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Header from './components/header/Header';
import Layout from './Layout/Layout.jsx'
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout> <Home/></Layout>} />
        <Route path="/header" element={<Layout> <Header/></Layout>} />
      </Routes>
    </div>
  );
};

export default App;