import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact animate-slide-up">
      <h2 className="section-title">Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
