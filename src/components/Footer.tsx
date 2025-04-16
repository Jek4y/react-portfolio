import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1f2937',
        color: '#f9fafb',
        padding: '2rem 1rem',
        marginTop: '4rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center',
        }}
      >
        {/* Branding / Message */}
        <p style={{ fontSize: '1rem', fontWeight: 500 }}>
          © {new Date().getFullYear()} Jekay Veloso — All rights reserved.
        </p>

        {/* Quick Navigation Links */}
        <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </nav>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" style={iconStyle}>
            GitHub
          </a>
          <a href="mailto:youremail@example.com" style={iconStyle}>
            Email
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" style={iconStyle}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

const linkStyle: React.CSSProperties = {
  color: '#9ca3af',
  fontSize: '0.95rem',
  textDecoration: 'none',
};

const iconStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 600,
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'color 0.3s',
};

export default Footer;
