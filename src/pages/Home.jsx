import React from 'react';
import { Link } from 'react-router-dom';
//import heroImage from '../assets/hero.jpg';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section animate-slide">
        {/* <img src={heroImage} alt="Empowering Community" className="hero-img" /> */}
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Grafting Growth for the Society</h1>
          <p className="hero-description">
            Empowering children, women, youth, and persons with disabilities to transform lives and build a resilient community.
          </p>
          <Link to="/donate" className="btn-donate">Donate Now</Link>
        </div>
      </div>
      <div className="mission-section animate-fade">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          To nurture sustainable growth in society by empowering children, youth, women, and persons with disabilities through education, mentorship, training, and advocacy.
        </p>
      </div>
      <div className="vision-section animate-zoom">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-description">
          A transformed society where every individual, regardless of circumstance, thrives and contributes to the collective well-being of the community.
        </p>
      </div>
    </div>
  );
};

export default Home;
