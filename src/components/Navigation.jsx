import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../components/HomeScreen';
import DiscoverScreen from '../components/DiscoverScreen';
import GuideScreen from '../components/GuideScreen';

const Navigation = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <h1>Resort Navigator</h1>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/discover">Discover</a></li>
            <li><a href="/guide">Guide</a></li>
          </ul>
        </nav>

        <main role="main">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/discover" element={<DiscoverScreen />} />
            <Route path="/guide" element={<GuideScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Navigation;
