import React from 'react';

function Education({ education }) {
  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">🎓</i>
        การศึกษา
      </h2>
      
      <div className="education-grid">
        {education.map(edu => (
          <div key={edu.id} className="education-card">
            <div className="education-icon">
              <i>🎓</i>
            </div>
            <div className="education-content">
              <h3 className="degree-title">{edu.degree}</h3>
              <h4 className="institution-name">{edu.institution}</h4>
              <p className="field-of-study">{edu.field}</p>
              <div className="graduation-year">
                <span className={`year-badge ${edu.degree === 'กำลังศึกษา' ? 'studying' : ''}`}>
                  {edu.graduationYear}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
