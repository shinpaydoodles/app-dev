import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/Sidebar.jsx";  
import Calendar from "./assets/Calendar.jsx";  
import Settings from "./assets/Settings.jsx";  
import Events from "./assets/Events.jsx";
import Home from "./assets/Home.jsx";
import './assets/App.css';

const App = () => {
    return (
      <Router>
        <div className="header">
        <Sidebar />
        <div className="app-container">
          <main className="content">
            <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/calendar" element={<Calendar />} />
              <Route path="/events" element={<Events />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          </div>
        </div>
      </Router>
    );
  };

  export default App;