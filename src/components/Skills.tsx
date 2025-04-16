import React from 'react';
import html from '../assets/skills/HTML.png';
import css from '../assets/skills/CSS.png';
import js from '../assets/skills/JavaScript.png';
import react from '../assets/skills/React.png';
import python from '../assets/skills/Python.png';
import github from '../assets/skills/GitHub.png';
import powerbi from '../assets/skills/PowerBI.png';
import excel from '../assets/skills/Excel.png';
import vite from '../assets/Skills/Vite.png'
import typescript from '../assets/Skills/TypeScript.png'
import vscode from '../assets/Skills/VSCode.png'
import nodejs from '../assets/Skills/Node.js.png'
import raspberrypi from '../assets/Skills/RaspberryPi.png'
import network from '../assets/Skills/Network.png'
import msword from '../assets/Skills/MsWord.png'
import powerpoint from '../assets/Skills/PowerPoint.png'


const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JavaScript', icon: js },
      { name: 'TypeScript', icon: typescript },
      { name: 'React', icon: react },
      { name: 'Vite', icon: vite },
      
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Python', icon: python },
      { name: 'VSCode', icon: vscode },
      { name: 'GitHub', icon: github },
      { name: 'Node.JS', icon: nodejs },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Power BI', icon: powerbi },
      { name: 'Excel', icon: excel }, 
    ],
  },
  {
  title: 'General & Others',
    skills: [
      { name: 'RaspberryPi', icon: raspberrypi },
      { name: 'Networking', icon: network },
      { name: 'MSWord', icon: msword },
      { name: 'PowerPoint', icon: powerpoint },

    ],
  },
];

const Skills: React.FC = () => {
  return (
    <aside
      style={{
        minWidth: '250px',
        maxWidth: '300px',
        backgroundColor: '#f9fafb',
        padding: '1rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
        height: 'fit-content',
        position: 'sticky',
        top: '100px',
        alignSelf: 'flex-start',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Skills</h2>

      {categories.map((category, idx) => (
        <div key={idx} style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#374151' }}>
            {category.title}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {category.skills.map((skill, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {skill.icon && (
                  <img src={skill.icon} alt={skill.name} style={{ width: '20px', height: '20px' }} />
                )}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Skills;
