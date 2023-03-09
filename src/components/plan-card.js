import React from 'react';

export default function PlanCard({ title, price, details, monthly }) {
  return (
    <div className={'plan-card ' + (monthly ? 'monthly' : 'yearly')}>
      <p className="plan-title">{title}</p>
      <p className="plan-price">${monthly ? price.month : price.year}</p>
      <div className="details">
        <div>{details.storage} Storage</div>
        <div>{details.users} Users Allowed</div>
        <div>Send up to {details.upload} GB</div>
      </div>
      <a href="#" className="learn-more">
        Learn More
      </a>
    </div>
  );
}
