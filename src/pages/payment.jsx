import React from "react";
//import "./Donate.css";

const Payment = () => {
  return (
    <section className="payment section">
      <div className="container">
        <h2 className="section-title">Donation Payment Methods</h2>
        <p className="donate-description">Choose a convenient method to make your donation.</p>
        <ul className="payment-methods animate-fade">
          <li><strong>M-PESA Paybill:</strong> 123456<br />Account: GROWTH</li>
          <li><strong>Bank Transfer:</strong><br />Bank: ABC Bank<br />Account Name: Grafting Growth for the Society<br />Account Number: 0123456789</li>
          <li><strong>PayPal:</strong> <a href="https://paypal.me/graftinggrowth">paypal.me/graftinggrowth</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Payment;
