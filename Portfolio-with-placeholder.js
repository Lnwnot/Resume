import React, { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Transcript',
      description: 'ใบแสดงผลการเรียน',
      image: null, // ใช้ null เพื่อแสดง placeholder
      technologies: ['Academic Record'],
      category: 'Education'
    }
  ];

  const categories = ['All', 'Education'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
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
        ผลงาน
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
              {item.image ? (
                <img src={item.image} alt={item.title} />
              ) : (
                <PlaceholderImage text={item.title} />
              )}
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
              {selectedImage.image ? (
                <img src={selectedImage.image} alt={selectedImage.title} />
              ) : (
                <PlaceholderImage width={600} height={800} text={selectedImage.title} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
