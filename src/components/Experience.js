import React from 'react';

function Experience({ experience, language, t }) {
  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">💼</i>
        {t.experience}
      </h2>
      
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < experience.length - 1 && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-content">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="position-title">{language === 'th' ? exp.positionTh : exp.positionEn}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="work-duration">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>
                <div className="experience-description">
                  <p>{language === 'th' ? exp.descriptionTh : exp.descriptionEn}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

