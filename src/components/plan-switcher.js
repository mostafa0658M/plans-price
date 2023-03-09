import React from 'react';

export default function PlanSwitcher({ toggleMonthly }) {
  return (
    <div className="switcher">
      <span>Annually</span>
      <div>
        <input type="checkbox" id="switch" onChange={toggleMonthly} />
        <label htmlFor="switch">
          <span></span>
        </label>
      </div>
      <span>Monthly</span>
    </div>
  );
}
