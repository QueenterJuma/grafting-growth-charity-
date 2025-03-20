import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../styles/TopNav.css";

const TopNav = () => (
  <div className="topnav">
    <div className="contact-info">
      <FaEnvelope /> graftinggrowth@gmail.com | <FaPhoneAlt /> +254 700 000 000
    </div>
    <div className="social-icons">
      <FaFacebookF /> <FaTwitter /> <FaInstagram />
    </div>
  </div>
);

export default TopNav;
