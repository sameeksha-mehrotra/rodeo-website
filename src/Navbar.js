import React, { useState } from 'react';
import './Navbar.css';
import bats from './bat menu icon.png';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleToggle = () => setOpen(!open);

  const handleClick = (tab) => {
    setActive(tab);
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
            className={active === 'home' ? 'active' : ''}
            onClick={() => handleClick('home')}
          >Home</a>
          <a
            href="#about"
            className={active === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >About Us</a>
          <a
            href="#directors"
            className={active === 'directors' ? 'active' : ''}
            onClick={() => handleClick('directors')}
          >Directors</a>
          <a
            href="#board"
            className={active === 'board' ? 'active' : ''}
            onClick={() => handleClick('board')}
          >Board</a>
          <a
            href="#partnerships"
            className={active === 'partnerships' ? 'active' : ''}
            onClick={() => handleClick('partnerships')}
          >Partnerships</a>
          <a
            href="#media"
            className={active === 'media' ? 'active' : ''}
            onClick={() => handleClick('media')}
          >Media Page</a>
          <a
            href="#application"
            className={active === 'application' ? 'active' : ''}
            onClick={() => handleClick('application')}
          >Application Info</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;