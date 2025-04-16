import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '1rem 2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      {/* Social Icons */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href="https://github.com/Jek4y"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:jekayveloso@gmail.com"
          target="_blank"
          style={iconStyle}
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/jedekiah-veloso-623a8b254/"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* Navigation Links */}
      <ul
        style={{
          display: 'flex',
          gap: '1.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#experience" style={linkStyle}>Experience</a></li>
        <li><a href="#projects" style={linkStyle}>Projects</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#1f2937',
  fontWeight: 500,
  fontSize: '1rem',
  transition: 'color 0.3s',
};

const iconStyle: React.CSSProperties = {
  color: '#374151',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

export default Navbar;
