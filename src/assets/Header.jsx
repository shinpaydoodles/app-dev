
import React from 'react';

const Header = ({ title, toggleSidebar }) => {
  return (
    <header className="header">
      <h1 className='header-title'>{title}</h1>

      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
    </header>
  );
};

export default Header;
