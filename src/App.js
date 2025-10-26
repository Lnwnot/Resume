import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import translations from './i18n';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('th');
  
  // Toggle dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  const t = translations[language];

  const resumeData = {
    personalInfo: {
      nameTh: 'อัคราธร อัครวาณิช',
      nameEn: 'Akaratorn Akarawanit',
      titleTh: 'นักศึกษาวิศวกรรมคอมพิวเตอร์',
      titleEn: 'Computer Engineering Student',
      email: '23008dev@email.com',
      phone: '061-793-9541',
      summaryTh: 'นักศึกษาที่กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ มีประสบการณ์การฝึกงานที่ Tokio Marine ในตำแหน่งนักพัฒนาซอฟต์แวร์ มีความสนใจในการพัฒนาเว็บแอปพลิเคชันและระบบต่างๆ พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และทำงานเป็นทีมได้อย่างมีประสิทธิภาพ',
      summaryEn: 'A student studying at King Mongkut\'s University of Technology North Bangkok with internship experience at Tokio Marine as a software developer. Interested in web application and system development, ready to learn new technologies and work effectively as a team.'
    },
    experience: [
      {
        id: 1,
        company: 'Tokio Marine',
        positionTh: 'นักศึกษาฝึกงาน',
        positionEn: 'Software Development Intern',
        startDate: '2024-01',
        endDate: '2024-06',
        descriptionTh: 'ฝึกงานในตำแหน่งนักพัฒนาซอฟต์แวร์ เรียนรู้การทำงานในองค์กรขนาดใหญ่ ได้รับประสบการณ์ในการพัฒนาแอปพลิเคชันและระบบต่างๆ ทำงานร่วมกับทีมพัฒนาซอฟต์แวร์และเรียนรู้กระบวนการทำงานในอุตสาหกรรมประกันภัย',
        descriptionEn: 'Interned as a software developer, learning to work in a large organization. Gained experience in developing applications and systems. Worked with the software development team and learned about processes in the insurance industry.'
      }
    ],
    education: [
      {
        id: 1,
        institutionTh: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
        institutionEn: 'King Mongkut\'s University of Technology North Bangkok',
        degreeTh: 'กำลังศึกษา',
        degreeEn: 'Currently Studying',
        fieldTh: 'เทคโนโลยีวิศวกรรมคอมพิวเตอร์',
        fieldEn: 'Computer Engineering Technology',
        graduationYearTh: 'ยังไม่มีประกาศนียบัตร',
        graduationYearEn: 'No Diploma Yet'
      }
    ],
    skills: [
      'Java', 'JavaScript', 'React', 'Python', 'SQL', 
      'MongoDB', 'CSS', 'Node.js', 'HTML', 'Express'
    ]
  };

  const tabs = [
    { id: 'about', labelTh: 'เกี่ยวกับฉัน', labelEn: 'About', icon: '👤' },
    { id: 'portfolio', labelTh: 'ผลงาน', labelEn: 'Portfolio', icon: '🎨' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <PersonalInfo personalInfo={resumeData.personalInfo} language={language} t={t} />
            <Experience experience={resumeData.experience} language={language} t={t} />
            <Education education={resumeData.education} language={language} t={t} />
            <Skills skills={resumeData.skills} language={language} t={t} />
          </>
        );
      case 'portfolio':
        return <Portfolio language={language} t={t} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Language & Theme Toggle */}
      <div className="control-buttons">
        <button 
          className="control-btn"
          onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}
          title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
        >
          {language === 'th' ? '🇬🇧 EN' : '🇹🇭 TH'}
        </button>
        <button 
          className="control-btn"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="resume-container">
        <Header personalInfo={resumeData.personalInfo} language={language} />
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{language === 'th' ? tab.labelTh : tab.labelEn}</span>
            </button>
          ))}
        </div>

        <div className="resume-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
