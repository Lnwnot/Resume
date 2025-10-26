import React, { useState } from 'react';

function Portfolio({ language, t }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Transcript',
      descriptionTh: 'ใบแสดงผลการเรียน',
      descriptionEn: 'Academic Transcript',
      image: 'https://via.placeholder.com/400x600/667eea/ffffff?text=Transcript+Image',
      technologies: ['Academic Record'],
      category: 'Education'
    }
  ];

  const categories = language === 'th' 
    ? ['ทั้งหมด', 'การศึกษา'] 
    : ['All', 'Education'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredItems = activeCategory === categories[0] || activeCategory === 'All'
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="section">
      <h2 className="section-title">
        <i className="icon">🎨</i>
        {t.portfolio}
      </h2>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-item" onClick={() => openModal(item)}>
            <div className="portfolio-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;