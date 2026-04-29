import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome To dashboard</h1>
        <h1>Welcome To dashboard</h1>
        {/* <h1>Welcome To dashboard</h1>

        <p>Here's a quick overview of your loan account.</p> */}
      </header>

      {/* <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Active Loan</h3>
          <p className="stat-value">12,500</p>
          <span className="stat-label">Outstanding balance</span>
        </div>
        <div className="stat-card">
          <h3>Next Payment</h3>
          <p className="stat-value">420</p>
          <span className="stat-label">Due May 15, 2026</span>
        </div>
        <div className="stat-card">
          <h3>Credit Score</h3>
          <p className="stat-value">742</p>
          <span className="stat-label">Good standing</span>
        </div>
      </section> */}

      {/* <section className="dashboard-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/apply" className="action-btn">
            Apply for new loan
          </Link>
          <Link to="/loanstatus" className="action-btn">
            Check loan status
          </Link>
          <Link to="/contact" className="action-btn">
            Contact support
          </Link>
        </div>
      </section> */}
      {/* 
      <section className="dashboard-activity">
        <h2>Recent Activity</h2>
        <ul className="activity-list">
          <li>
            <span>Payment received</span>
            <span className="activity-date">Apr 15, 2026</span>
          </li>
          <li>
            <span>Statement generated</span>
            <span className="activity-date">Apr 01, 2026</span>
          </li>
          <li>
            <span>Loan disbursed</span>
            <span className="activity-date">Jan 10, 2026</span>
          </li>
        </ul>
      </section> */}
    </div>
  );
}
