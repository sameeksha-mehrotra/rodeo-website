import React, { useState } from 'react';
import './Navbar.css';
import bats from './bat menu icon.png';

function Navbar({ activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleClick = (tab) => {
    setActiveTab(tab);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-lineIcon" onClick={handleToggle} style={{ cursor: 'pointer' }}>
        <img src={bats} alt="bats icon" />
      </div>
      {open && (
        <div className="navbar-links">
          <a
            href="#home"
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => handleClick('home')}
          >Home</a>
          <a
            href="#about"
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >About Us</a>
          <a
            href="#directors"
            className={activeTab === 'directors' ? 'active' : ''}
            onClick={() => handleClick('directors')}
          >Directors</a>
          <a
            href="#board"
            className={activeTab === 'board' ? 'active' : ''}
            onClick={() => handleClick('board')}
          >Board</a>
          <a
            href="#partnerships"
            className={activeTab === 'partnerships' ? 'active' : ''}
            onClick={() => handleClick('partnerships')}
          >Partnerships</a>
          <a
            href="#media"
            className={activeTab === 'media' ? 'active' : ''}
            onClick={() => handleClick('media')}
          >Media Page</a>
          <a
            href="#application"
            className={activeTab === 'application' ? 'active' : ''}
            onClick={() => handleClick('application')}
          >Application Info</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;