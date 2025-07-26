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
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#directors" onClick={() => setOpen(false)}>Directors</a>
          <a href="#board" onClick={() => setOpen(false)}>Board</a>
          <a href="#partnerships" onClick={() => setOpen(false)}>Partnerships</a>
          <a href="#media" onClick={() => setOpen(false)}>Media Page</a>
          <a href="#application" onClick={() => setOpen(false)}>Application Info</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;