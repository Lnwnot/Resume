import React from 'react';

function PlaceholderImage({ width = 400, height = 600, text = 'Transcript' }) {
  return (
    <div 
      className="placeholder-image"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '10px',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}
    >
      <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📄</div>
      <div>{text}</div>
    </div>
  );
}

export default PlaceholderImage;
