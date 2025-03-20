import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <TopNav />
      <nav className="navbar">
        <div className="logo">
          <a href="/"><img src="/logo.png" alt="Logo" /></a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/payment-methods">Payment Methods</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
