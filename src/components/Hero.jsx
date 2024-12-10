import React from 'react';
import HeroPic from './HeroPic.jpg';


const Hero = () => {
  const heroStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
    color: '#ffffff',
    fontFamily: "'Poppins', sans-serif",
    padding: '0 20px',
  };

  const contentStyles = {
    maxWidth: '600px',
  };

  const titleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subtitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '20px',
  };

  const buttonStyles = {
    padding: '15px 30px',
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#2575fc',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: '#1b62d1',
    transform: 'scale(1.05)',
  };

  const handleMouseOver = (e) => {
    Object.assign(e.target.style, buttonHoverStyles);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.target.style, buttonStyles);
  };

  const imageContainerStyles = {
    position: 'relative',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const handleImageHover = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.currentTarget.style.transform = 'translateY(-10px)';
  };

  const handleImageOut = (e) => {
    e.target.style.transform = 'scale(1)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <section style={heroStyles}>
      <div style={contentStyles}>
        <h1 style={titleStyles}>Hi, I'm Jason</h1>
        <p style={subtitleStyles}>
          I build beautiful, modern, and user-friendly websites that stand out.
        </p>
        <button
          style={buttonStyles}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
          View My Work
        </button>
      </div>
      <div
        style={imageContainerStyles}
        onMouseOver={handleImageHover}
        onMouseOut={handleImageOut}
      >
        <img
          src={HeroPic} // Replace with your picture URL
          alt="Your Portrait"
          style={imageStyles}
        />
      </div>
    </section>
  );
};

export default Hero;
