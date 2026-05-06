import React from "react";
import "./Faq.css";

const faqs = [
  {
    q: "How fast can I get approved?",
    a: "Most applications receive a decision within 10 minutes.",
  },
  {
    q: "Do you check my credit score?",
    a: "Yes, your credit score is checked during the application process.",
  },
  {
    q: "What documents do I need?",
    a: "You will need a government-issued ID, proof of income, and recent bank statements.",
  },
  {
    q: "Can I pay off my loan early?",
    a: "Yes, you can pay off your loan early without any penalties.",
  },
  {
    q: "Is my information secure?",
    a: "We use industry-standard encryption to protect your information.",
  },
  {
    q: "What if I have bad credit?",
    a: "We understand every financial situation is unique. Even with a low credit score, we still offer loan options that may suit you.",
  },
];

export default function Faq() {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about our loan services.
        </p>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <details className="faq-item" key={idx}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
