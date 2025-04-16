import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Certifications from './components/Certifications';



const App: React.FC = () => {
  // Check screen width for responsive layout
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  // Initialize AOS animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 800, // how long the animation lasts (ms)
      once: true,    // animate only once when section is in view
    });
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main style={{ paddingTop: '100px', paddingInline: '1rem' }}>
        {/* Portfolio Title */}
        <h1
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: 700,
            background: 'linear-gradient(to right, #06b6d4, #3b82f6)', // cyan to blue
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            borderBottom: '4px solid #06b6d4',
            marginBottom: '3rem',
          }}
        >
          Jekay's Domain!
        </h1>

        {/* Main Content + Sidebar Layout */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '2rem',
            alignItems: 'flex-start',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Left: Main Sections */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <AboutMe />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </div>

          {/* Right: Skills Sidebar */}
          <Skills />
        </div>
      </main>
      <Footer />

    </>
  );
};

export default App;
