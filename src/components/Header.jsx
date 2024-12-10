import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const navStyle = {
    display: 'flex',
    gap: '15px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>My Portfolio</h1>
      <nav style={navStyle}>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
