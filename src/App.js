import './assets/css/App.css';

import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import logo from './assets/images/logo-white.png'; //Tell webpack this JS file uses this image
console.log(logo);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div class="logo-box">
            <div class="logo">
                <img class="App-logo" src={logo} alt="logo" />
            </div>
            <nav class="main-menu">
              <ul class="menu-items">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
