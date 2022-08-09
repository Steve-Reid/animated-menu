import React, { useState } from 'react';
import {
  IoCameraOutline,
  IoSettingsOutline,
  IoTrashOutline
} from 'react-icons/io5';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navigation">
      <div
        className={`menuToggle ${isActive ? 'active' : ''}`}
        onClick={handleMenuToggle}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        aria-label="toggle"
      ></div>
      <div className="menu">
        <ul>
          <li style={{ transitionDelay: isActive ? '0.85s' : '0.1s' }}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">
              <IoCameraOutline />
            </a>
          </li>
          <li style={{ transitionDelay: isActive ? '0.95s' : '0.2s' }}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">
              <IoSettingsOutline />
            </a>
          </li>
          <li style={{ transitionDelay: isActive ? '1.05s' : '0.3s' }}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">
              <IoTrashOutline />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
