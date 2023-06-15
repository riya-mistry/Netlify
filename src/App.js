import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import ProfileDetailPage from './ProfileDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/profile/user" element={<ProfileDetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
