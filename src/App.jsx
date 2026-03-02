import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Privacy from './Privacy';
import Navbar from './assets/Navbar';

function App() {
  return (
    <Router>
      <nav>
        <Navbar/>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
