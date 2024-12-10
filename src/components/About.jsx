import React from 'react';

const About = () => {
  const sectionStyles = {
    backgroundColor: '#f9f9f9',
    padding: '50px',
    textAlign: 'center',
    borderRadius: '15px',
    margin: '20px auto',
    maxWidth: '800px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const headingStyles = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
    position: 'relative',
  };

  const subHeadingStyles = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const listContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const listItemStyles = {
    backgroundColor: '#fff',
    padding: '15px 30px',
    borderRadius: '25px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#555',
    cursor: 'pointer',
  };

  const listItemHoverStyles = {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  };

  const handleMouseOver = (e) => {
    Object.assign(e.target.style, listItemHoverStyles);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.target.style, listItemStyles);
  };

  return (
    <section style={sectionStyles}>
      <h2 style={headingStyles}>About Me</h2>
      <p style={subHeadingStyles}>
        Hi! I'm a front-end developer with a knack for creating intuitive, responsive, and visually appealing web
        experiences. I'm passionate about blending creativity with technology to solve real-world problems.
      </p>
      <h3>Skills</h3>
      <div style={listContainerStyles}>
        {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'].map((skill) => (
          <div
            key={skill}
            style={listItemStyles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
