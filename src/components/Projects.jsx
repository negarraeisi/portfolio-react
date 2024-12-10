import React from 'react';
import icon from './icon.png'; // Import the icon.png from the same folder

const Projects = () => {
  const sectionStyles = {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  };

  const headingStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  };

  const subHeadingStyles = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '40px',
  };

  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const cardStyles = {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHoverStyles = {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  };

  const imageStyles = {
    width: '80px',
    height: '80px',
    borderRadius: '50%', // Makes the image circular
    border: '2px solid #007BFF',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
    transition: 'transform 0.3s ease',
  };

  const imageHoverStyles = {
    transform: 'scale(1.1)',
  };

  const titleStyles = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const descriptionStyles = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '15px',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  const handleMouseOverCard = (e) => {
    Object.assign(e.currentTarget.style, cardHoverStyles);
  };

  const handleMouseOutCard = (e) => {
    Object.assign(e.currentTarget.style, cardStyles);
  };

  const handleMouseOverImage = (e) => {
    Object.assign(e.target.style, imageHoverStyles);
  };

  const handleMouseOutImage = (e) => {
    Object.assign(e.target.style, imageStyles);
  };

  const handleMouseOverButton = (e) => {
    Object.assign(e.target.style, buttonHoverStyles);
  };

  const handleMouseOutButton = (e) => {
    Object.assign(e.target.style, buttonStyles);
  };

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my projects and skills.',
      image: icon, // Use the imported icon.png as the image
    },
    {
      title: 'E-Commerce App',
      description: 'A responsive app for online shopping with secure payment.',
      image: icon, // Use the imported icon.png as the image
    },
    {
      title: 'Task Manager',
      description: 'A task management tool with reminders and collaboration.',
      image: icon, // Use the imported icon.png as the image
    },
  ];

  return (
    <section style={sectionStyles}>
      <h2 style={headingStyles}>My Projects</h2>
      <p style={subHeadingStyles}>Here are a few of the projects I've worked on recently.</p>
      <div style={gridContainerStyles}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyles}
            onMouseOver={handleMouseOverCard}
            onMouseOut={handleMouseOutCard}
          >
            <img
              src={project.image}
              alt={project.title}
              style={imageStyles}
              onMouseOver={handleMouseOverImage}
              onMouseOut={handleMouseOutImage}
            />
            <h3 style={titleStyles}>{project.title}</h3>
            <p style={descriptionStyles}>{project.description}</p>
            <button
              style={buttonStyles}
              onMouseOver={handleMouseOverButton}
              onMouseOut={handleMouseOutButton}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
