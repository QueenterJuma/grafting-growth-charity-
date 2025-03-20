import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Support for Orphans', desc: 'Providing education, psychosocial and material support.' },
    { title: 'Empowering Single Mothers', desc: 'Mentorship and resources for small business growth.' },
    { title: 'Youth Training', desc: 'Vocational and entrepreneurship training.' },
    { title: 'PWD Support', desc: 'Assistive devices and skill training for PWDs.' }
  ];

  return (
    <section className="services animate-slide">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
