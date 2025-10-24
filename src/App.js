import React, { useState } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const resumeData = {
    personalInfo: {
      name: 'อัคราธร อัครวาณิช',
      title: 'นักศึกษาร์',
      email: '23008dev@email.com',
      phone: '061-793-9541',
      summary: 'นักศึกษาที่กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ มีประสบการณ์การฝึกงานที่ Tokio Marine ในตำแหน่งนักพัฒนาซอฟต์แวร์ มีความสนใจในการพัฒนาเว็บแอปพลิเคชันและระบบต่างๆ พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และทำงานเป็นทีมได้อย่างมีประสิทธิภาพ'
    },
    experience: [
      {
        id: 1,
        company: 'Tokio Marine',
        position: 'นักศึกษาฝึกงาน',
        startDate: '2024-01',
        endDate: '2024-06',
        description: 'ฝึกงานในตำแหน่งนักพัฒนาซอฟต์แวร์ เรียนรู้การทำงานในองค์กรขนาดใหญ่ ได้รับประสบการณ์ในการพัฒนาแอปพลิเคชันและระบบต่างๆ ทำงานร่วมกับทีมพัฒนาซอฟต์แวร์และเรียนรู้กระบวนการทำงานในอุตสาหกรรมประกันภัย'
      }
    ],
    education: [
      {
        id: 1,
        institution: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
        degree: 'กำลังศึกษา',
        field: 'เทคโนโลยีวิศวกรรมคอมพิวเตอร์',
        graduationYear: 'ยังไม่มีประกาศนียบัตร'
      }
    ],
    skills: [
      'Java', 'JavaScript', 'React', 'Python', 'SQL', 
      'MongoDB', 'CSS', 'Node.js', 'HTML', 'Express'
    ]
  };

  const tabs = [
    { id: 'about', label: 'เกี่ยวกับฉัน', icon: '👤' },
    { id: 'portfolio', label: 'ผลงาน', icon: '🎨' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <PersonalInfo personalInfo={resumeData.personalInfo} />
            <Experience experience={resumeData.experience} />
            <Education education={resumeData.education} />
            <Skills skills={resumeData.skills} />
          </>
        );
      case 'portfolio':
        return <Portfolio />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="resume-container">
        <Header personalInfo={resumeData.personalInfo} />
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
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
