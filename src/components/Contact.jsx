import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-lead">
          We&apos;re here to help! Reach out anytime.
        </p>

        <div className="contact-info">
          <div className="info-row">
            <span className="info-label">Email</span>
            <span className="info-value">support@loanapp.com</span>
          </div>
          <div className="info-row">
            <span className="info-label">Phone</span>
            <span className="info-value">+1 (555) 123-4567</span>
          </div>
          <div className="info-row">
            <span className="info-label">Hours</span>
            <span className="info-value">Mon–Fri, 9AM–6PM EST</span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
