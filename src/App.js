import React from 'react';
import { useState } from 'react';
import { PlanCard, PlanSwitcher } from './components';
import './style.css';

export default function App() {
  const plans = [
    {
      title: 'basic',
      price: {
        year: 199.99,
        month: 19.99,
      },
      details: {
        storage: '500 GB',
        users: 2,
        upload: 3,
      },
    },
    {
      title: 'professional',
      price: {
        year: 249.99,
        month: 24.99,
      },
      details: {
        storage: '1 TB',
        users: 5,
        upload: 10,
      },
    },
    {
      title: 'master',
      price: {
        year: 399.99,
        month: 39.99,
      },
      details: {
        storage: '2 TB',
        users: 10,
        upload: 20,
      },
    },
  ];
  const [monthly, setMonthly] = useState(false);
  const toggleMonthly = (e) => {
    setMonthly(e.target.checked);
  };
  return (
    <div className="wrapper">
      <h1 className="main-title">Our Pricing</h1>
      <PlanSwitcher toggleMonthly={toggleMonthly} />
      <div className="plans-wrapper">
        {plans.map((plan) => (
          <PlanCard {...plan} monthly={monthly} />
        ))}
      </div>
    </div>
  );
}
