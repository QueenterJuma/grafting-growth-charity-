import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer animate-fade">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Grafting Growth for the Society. All rights reserved.</p>
        <p>Email: graftinggrowth@gmail.com | Address: 912-00100, Nairobi, Kenya</p>
      </div>
    </footer>
  );
};

export default Footer;
