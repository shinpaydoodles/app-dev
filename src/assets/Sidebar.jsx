import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Header from './Header'; 
import './Sidebar.css'; 

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuIcon, setIsMenuIcon] = useState(true); 

  const toggleSidebar = () => {
    setIsActive(!isActive);
    setIsMenuIcon(!isMenuIcon); 
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
            <Link to="/events"><li className='events' id='sidebar-hover'>Events</li></Link>
            <Link to="/holidays"><li className='holidays' id='sidebar-hover'>Holidays</li></Link>
            <li className='divider2'></li>
            <div className='iconbg'></div>
            <li className='divider3'></li>
            <Link to="/settings"><li className='settings' id='sidebar-hover'>Settings</li></Link>
            <li className='visit' id='sidebar-hover'><a href="https://www.facebook.com/CIC.Cabanatuan" target="_blank" rel="noopener noreferrer" className='visit'>Visit Us</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
