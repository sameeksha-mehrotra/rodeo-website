import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ activeTab, setActiveTab, onHomeClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (tab) => {
    if (tab === 'home' && onHomeClick) {
      onHomeClick();
    } else {
      setActiveTab(tab);
    }
    setMobileOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'directors', label: 'Directors', href: '#directors' },
    { id: 'board', label: 'Board', href: '#board' },
    { id: 'media', label: 'Media', href: '#media' },
    { id: 'application', label: 'Links', href: '#application' },
  ];

  return (
    <nav className="navbar">
      {/* Desktop Navigation - Horizontal Tabs */}
      <div className="navbar-tabs">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`navbar-tab ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
            <span className="tab-underline"></span>
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`navbar-mobile-link ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;