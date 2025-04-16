import React, { useState } from 'react';
import Raspi1 from '../assets/Raspi1.jpg';
import Raspi2 from '../assets/Raspi2.jpg';
import Dashboard from '../assets/Dashboard.jpg';

const projects = [
  {
    title: 'License-Plate Recognition using Raspberry Pi',
    images: [Raspi1, Raspi2],
    description:
      'I designed and developed a License-Plate Recognition system using Raspberry Pi, leveraging Google APIs and implementing core logic with TypeScript, JavaScript, and Python to deliver accurate and efficient recognition.',
    technologies: ['Python', 'TypeScript', 'JavaScript', 'Google APIs', 'Raspberry Pi'],
  },
  {
    title: 'Power BI Dashboard',
    images: [Dashboard],
    description:
      'I developed an interactive Power BI dashboard to visualize and analyze key data insights, using advanced data modeling and dynamic visuals to support decision-making.',
    technologies: ['Power BI', 'Excel'],
  },
];

const Projects: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (img: string) => {
    setLightboxImage(img);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="projects">
      <h2
  
  style={{
    fontSize: '2.25rem',
    fontWeight: 700,
    color: '#10b981', // emerald green
    marginBottom: '2rem',
    borderBottom: '4px solid #10b981',
    display: 'inline-block',
    paddingBottom: '0.25rem',
    letterSpacing: '-0.5px',
  }}
>
  Projects
</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              {project.title}
            </h3>

            {/* Image section */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} Screenshot ${i + 1}`}
                  onClick={() => openLightbox(img)}
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '0.75rem',
                    objectFit: 'cover',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              ))}
            </div>

            <p style={{ marginBottom: '0.75rem', color: '#4b5563' }}>{project.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#e5e7eb',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={lightboxImage}
            alt="Full View"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '1rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
