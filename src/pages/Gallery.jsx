import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg'
  ];

  return (
    <section className="gallery animate-zoom">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
