import React from 'react';
import './topbar.css';
import Logo from '../../assets/logo.png'

const TopbarWhite = () => {
  return (
    <header className="topbar topbar--white">
      <div className="topbar__inner">
        <div className="topbar__logo">
          <img
            src={Logo}
            alt="Premier Schools Exhibition"
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
    </header>
  );
};

export default TopbarWhite;
