import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <section className="donate section">
      <div className="container">
        <h2 className="section-title">Donate Now</h2>
        <p className="donate-description">Your donation helps us support orphans, empower women and youth, and improve lives in our community.</p>
        <div className="donate-button animate-bounce">
          <Link to="/payment" className="btn-donate">Proceed to Payment</Link>
        </div>
      </div>
    </section>
  );
};

export default Donate;
