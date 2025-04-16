import React from 'react';

const AboutMe: React.FC = () => {



    



  return (
    <section id="about">
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
</h2>

      <p>
      Hey there! <strong> I'm Jekay </strong> — an IT Professional and College Instructor with a passion for turning complex tech into practical solutions and teaching moments. Whether it's building smart, responsive web apps or mentoring future tech leaders in the classroom, I bring energy, clarity, and creativity to every line of code and lesson plan. I thrive on learning, love clean design, and believe that great tech should feel like magic ✨ When I'm not coding or teaching, you can find me exploring the latest tech trends, diving into a good book, or enjoying a cup of coffee while brainstorming my next big idea. Let's connect and create something amazing together! 🚀
      </p>

      <a
  href="Jedekiah_Veloso_Resume.pdf" // Adjust the path to your resume file
  download
  style={{
    display: 'inline-block',
    marginTop: '1rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    fontWeight: 500,
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  }}
>
  📄 Download Resume
</a>
    </section>

    
  );
};

export default AboutMe;
