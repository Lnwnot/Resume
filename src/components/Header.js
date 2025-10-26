import React from 'react';

function Header({ personalInfo, language }) {
  return (
    <div className="resume-header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-avatar">
            <div className="avatar-circle">
              <span className="avatar-text">
                {(language === 'th' ? personalInfo.nameTh : personalInfo.nameEn).split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{language === 'th' ? personalInfo.nameTh : personalInfo.nameEn}</h1>
            <h2 className="profile-title">{language === 'th' ? personalInfo.titleTh : personalInfo.titleEn}</h2>
            <div className="profile-badges">
              <span className="badge">Computer Engineering</span>
              <span className="badge">Software Developer</span>
              <span className="badge">Internship Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

