import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Header from './Header'; 
import './Sidebar.css'; 

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuIcon, setIsMenuIcon] = useState(true); // State for toggle button icon

  const toggleSidebar = () => {
    setIsActive(!isActive);
    setIsMenuIcon(!isMenuIcon); // Toggle between menu and close icon
  };

  const closeSidebar = () => {
    setIsActive(false);
    setIsMenuIcon(true); // Reset to menu icon
  };

  return (
    <div className='sidebar-container'>
      <Header title="School Events Manager" toggleSidebar={toggleSidebar} />


      <div className={`icon ${isMenuIcon ? 'menu' : 'close'}`} onClick={toggleSidebar}></div>

      {isActive && ( 
        <nav className={`sidebar active`} id=''>
          <div className='sbt'>
          </div> 
          <ul className='sidebar-link'>
            <Link to="/"><li className='home' id='sidebar-hover'>Home</li></Link>
            <Link to="/calendar"><li className='calendar' id='sidebar-hover'>Calendar</li></Link>
            <li className='divider'></li>
            <li className='events' id='sidebar-hover'><Link to="/events">Events</Link></li>
            <li className='holidays' id='sidebar-hover'><Link to="/holidays">Holidays</Link></li>
            <li className='divider2'></li>
            <li className='settings' id='sidebar-hover'><Link to="/settings">Settings</Link></li>
            <li className='visit' id='sidebar-hover'><a href="https://www.facebook.com/CIC.Cabanatuan" target="_blank" rel="noopener noreferrer">Visit Us</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
