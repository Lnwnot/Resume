import React from 'react';

function Experience({ experience }) {
  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">💼</i>
        ประสบการณ์การทำงาน
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
                  <h3 className="position-title">{exp.position}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="work-duration">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>
                <div className="experience-description">
                  <p>{exp.description}</p>
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
