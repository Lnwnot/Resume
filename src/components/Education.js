import React from 'react';

function Education({ education, language, t }) {
  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">🎓</i>
        {t.education}
      </h2>
      
      <div className="education-grid">
        {education.map(edu => (
          <div key={edu.id} className="education-card">
            <div className="education-icon">
              <i>🎓</i>
            </div>
            <div className="education-content">
              <h3 className="degree-title">{language === 'th' ? edu.degreeTh : edu.degreeEn}</h3>
              <h4 className="institution-name">{language === 'th' ? edu.institutionTh : edu.institutionEn}</h4>
              <p className="field-of-study">{language === 'th' ? edu.fieldTh : edu.fieldEn}</p>
              <div className="graduation-year">
                <span className={`year-badge ${edu.degreeTh === 'กำลังศึกษา' || edu.degreeEn === 'Currently Studying' ? 'studying' : ''}`}>
                  {language === 'th' ? edu.graduationYearTh : edu.graduationYearEn}
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

