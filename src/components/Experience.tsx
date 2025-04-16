import React from 'react';
import ITStaffImg from '../assets/ITStaff.jpg';
import NetworkImg from '../assets/Network.jpg';
import STIImg from '../assets/STI.jpg';

// Array of experience data
const experiences = [
  {
    title: 'IT Instructor',
    company: 'STI College Marikina – Faculty Department',
    period: 'Feb 2025 – June 2025',
    image: STIImg,
    details: [
      '🧑‍🏫 Taught core IT subjects including Cybersecurity, Programming Fundamentals, and Computer Organization to college students.',
      '📚 Designed engaging lesson plans, teaching materials, and hands-on coding activities tailored for beginner and intermediate learners.',
      '💡 Simplified complex technical concepts into student-friendly lessons, using real-life analogies, visuals, and demos.',
    ],
  },
  {
    title: 'IT Support - Intern',
    company: 'OJT  – ICCT Colleges San Mateo Campus',
    period: 'September 2024 – November 2024',
    image: NetworkImg,
    details: [
      '🖧 Assisted in maintaining and troubleshooting LAN/WAN networks, ensuring stable internet and intranet connectivity campus-wide.',
      '💻 Performed diagnostics, repair, and maintenance of desktop computers, printers, and other peripherals.',
      '🔌 Supported network cable management, ensuring organized and safe hardware environments in computer laboratories.',
    ],
  },
  {
    title: 'IT Head',
    company: 'Manggahan Barangay Hall',
    period: 'Nov 2023 – May 2024',
    image: ITStaffImg,
    details: [
      '🖥️ Led the planning, installation, and maintenance of computer systems and networks for day-to-day barangay operations.',
      '📡 Managed internet connectivity, routers, and local networks, ensuring stable communication and efficient workflow.',
      '🧑‍🔧 Provided technical support to barangay staff, resolving issues related to hardware, software, and basic systems.',
    ],
  },
];

// Main component
const Experience: React.FC = () => {

    <section id="about" data-aos="fade-up">
  <h2>About Me</h2>
  {/* other content */}
</section>

  return (
    <section id="experience">
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
  Technical Experiences
</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start',
              backgroundColor: '#ffffff',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            }}
          >
            <img
              src={exp.image}
              alt={exp.title}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '0.75rem',
              }}
            />

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{exp.title}</h3>
              <p style={{ fontWeight: 500, color: '#2563eb' }}>{exp.company}</p>
              <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{exp.period}</p>
              <ul style={{ paddingLeft: '1.25rem' }}>
                {exp.details.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', color: '#4b5563' }}>
                     {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
