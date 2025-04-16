import React from 'react';
import DA1 from '../assets/Certifications/DA1.png';

const certifications = [
  {
    title: 'Certificate of Completion: Business Intelligence with Power BI Desktop',
    issuer: 'DataSense Analytics',
    date: 'January 2025',
    image: DA1, // optional: add certificate image path later
    link: '',  // optional: link to certificate PDF or page
  },
  {
    title: 'Certificate of Completion: Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'September 2024',
    image: '',
    link: '',
  },
  {
    title: 'Certificate of Completion: Learn MySQL - For Beginners  ',
    issuer: 'YouAccel Training',
    date: 'August 2023',
    image: '',
    link: '',
  },
  {
    title: 'Certificate of Completion: Nmap Course For Cyber Security',
    issuer: 'XL Teaching',
    date: 'August 2023',
    image: '',
    link: '',
  },
  // Add more as needed
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" data-aos="fade-up">
      <h2
  style={{
    fontSize: '2rem',
    fontWeight: 700,
    color: '#10b981',
    marginBottom: '1rem',
    display: 'inline-block',
    borderBottom: '4px solid #10b981',
    paddingBottom: '0.25rem',
  }}
>
  Certifications
</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f9fafb',
              padding: '1rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{cert.title}</h3>
            <p style={{ color: '#4b5563', marginBottom: '0.25rem' }}>
              <strong>Issuer:</strong> {cert.issuer}
            </p>
            <p style={{ color: '#6b7280' }}>
              <strong>Date:</strong> {cert.date}
            </p>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: '0.5rem',
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                }}
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
