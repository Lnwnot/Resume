import React from 'react';

function Skills({ skills }) {
  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">🛠️</i>
        ทักษะ
      </h2>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">
                {getSkillIcon(skill)}
              </div>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getSkillIcon(skill) {
  const skillIcons = {
    'Java': '☕',
    'JavaScript': '🟨',
    'React': '⚛️',
    'Python': '🐍',
    'SQL': '🗄️',
    'MongoDB': '🍃',
    'CSS': '🎨',
    'Node.js': '🟢',
    'HTML': '🌐',
    'Express': '🚀'
  };
  
  return skillIcons[skill] || '💻';
}

export default Skills;
