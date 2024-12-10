import React from 'react';

const Contact = () => {
  const sectionStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  };

  const inputStyle = {
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contact Me</h2>
      <form style={formStyle}>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <textarea placeholder="Your Message" style={inputStyle} rows="5" required></textarea>
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
