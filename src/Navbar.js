import React, { useState } from 'react';
import './Navbar.css';
import bats from './bat menu icon.png';


function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <div className="navbar">
      <div className="navbar-lineIcon" onClick={handleToggle} style={{ cursor: 'pointer' }}>
        <img src={bats} alt="bats icon" />
      </div>
      {open && (
        <div className="navbar-links">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#events" onClick={() => setOpen(false)}>Events</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;