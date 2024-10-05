
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Header from './Header'; 
import './Sidebar.css'; 

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false); 


  const closeSidebar = () => {
    setIsActive(false);
  };

  return (
    <div className='sidebar-container'>
      <Header title="School Events Manager" toggleSidebar={() => setIsActive(!isActive)} />

      {isActive && ( 
        <nav className={`sidebar active`} id=''>
          <div className='sbt'>
          <button className="close-btn" onClick={closeSidebar}>X</button>
          </div> 
          <ul className='sidebar-link'>
            <li className='home' id='sidebar-hover'><Link to="/">Home</Link></li>
            <li className='calendar' id='sidebar-hover'><Link to="/calendar">Calendar</Link></li>
            <li className='events' id='sidebar-hover'><Link to="/events">Events</Link></li>
            <li className='settings' id='sidebar-hover'><Link to="/settings">Settings</Link></li>
            <li className='visit' id='sidebar-hover'><a href="https://www.facebook.com/CIC.Cabanatuan" target="_blank" rel="noopener noreferrer">Visit Us</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
