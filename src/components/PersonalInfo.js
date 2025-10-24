import React from 'react';

function PersonalInfo({ personalInfo }) {
  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">👤</i>
        ข้อมูลส่วนตัว
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
          <h3>Contact Me</h3>
          <div className="contact-me-email">
            <a href={`mailto:${personalInfo.email}`} className="contact-me-btn">
              <i className="contact-icon">📧</i>
              Send Email
            </a>
          </div>
        </div>
        
        <div className="summary-section">
          <h3>สรุปประวัติ</h3>
          <p className="summary-text">{personalInfo.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
