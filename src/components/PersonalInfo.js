import React from 'react';

function PersonalInfo({ personalInfo, language, t }) {
  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">👤</i>
        {t.personalInfo}
      </h2>
      
      <div className="personal-info-card">
        <div className="contact-info">
          <div className="contact-item">
            <i className="contact-icon">📧</i>
            <span>{personalInfo.email}</span>
          </div>
          <div className="contact-item">
            <i className="contact-icon">📱</i>
            <span>{personalInfo.phone}</span>
          </div>
        </div>
        
        <div className="contact-me-section">
          <h3>{t.contactMe}</h3>
          <div className="contact-me-email">
            <a href={`mailto:${personalInfo.email}`} className="contact-me-btn">
              <i className="contact-icon">📧</i>
              {t.sendEmail}
            </a>
          </div>
        </div>
        
        <div className="summary-section">
          <h3>{t.summary}</h3>
          <p className="summary-text">{language === 'th' ? personalInfo.summaryTh : personalInfo.summaryEn}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;

