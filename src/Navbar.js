import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import hamMenu from './hamburgerMenu.png';

function Navbar({ activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => setOpen(!open);

  const handleClick = (tab) => {
    setActiveTab(tab);
    setOpen(false);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (open && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  return (
    <div className="navbar" ref={navbarRef}>
      <div className="navbar-lineIcon" onClick={handleToggle} style={{ cursor: 'pointer' }}>
        <img src={hamMenu} alt="hamburger icon" />
      </div>
      {open && (
        <div className="navbar-links">
          <a
            href="#home"
            className={activeTab === 'home' ? 'active' : ''}
            scroll-behavior="smooth"
            onClick={() => handleClick('home')}
          >Home</a>
          <a
            href="#about"
            className={activeTab === 'about' ? 'active' : ''}
            scroll-behavior="smooth"
            onClick={() => handleClick('about')}
          >About</a>
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