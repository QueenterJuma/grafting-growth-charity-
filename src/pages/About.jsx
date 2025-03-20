import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about animate-fade">
      <h2 className="section-title">About Us</h2>
      <p className="section-description">
        Grafting Growth for the Society (CBO) is based in Hamza Ward, Makadara Constituency, Nairobi. We aim to empower orphans, women, youth, and persons with disabilities through education, training, mentorship, and advocacy.
      </p>
      <div className="about-image">
        <img src="/images/about-demo.jpg" alt="About CBO" />
      </div>
    </section>
  );
};

export default About;
