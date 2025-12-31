import React from 'react';
import './topbar.css';
import Logo from '../../assets/logo.png'

const TopbarPurple = () => {
  return (
    <div
      className="topbar topbar--purple"
      aria-hidden="true"
    > 
      <div className="topbar__inner">
        <div className="topbar__logo">
          <img
            src={Logo}
            alt=""
          />
        </div>

        <a href="#register" className="topbar__cta">
          <span className="topbar__cta-icon">
            ↗
          </span>

          <span className="topbar__cta-text">
            Register Now
          </span>
        </a>
      </div>
    </div>
  );
};

export default TopbarPurple;

