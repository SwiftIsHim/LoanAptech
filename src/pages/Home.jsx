import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to LoanAptech</h1>
        <p className="hero-subtitle">
          Get instant personal loans up to $50,000 with low interest rates and
          flexible repayment options.
        </p>
        <Link to="/apply" className="hero-cta-btn">
          Apply Now — It&apos;s Free
        </Link>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast Approval</h3>
          <p>Get a decision in under 10 minutes.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <h3>No Paperwork Required</h3>
          <p>100% digital and hassle-free process.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Lowest Interest Rates</h3>
          <p>Starting from just 8.99% p.a.</p>
        </div>
      </section>

      <section className="home-links">
        <span>Already applied?</span>
        <Link to="/dashboard" className="home-link">
          Go to Dashboard
        </Link>
      </section>
    </div>
  );
}
