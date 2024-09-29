import { useState } from "react";


function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="rectangle">
                <button id="group" className="hamburger" onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="sept">September 2024 Calendar</h1>
            </header>

            <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
                <h1 className="dashboard" id="dashboard-title">School Events <br></br> Manager</h1>
            <button id="group2" className="hamburger2" onClick={toggleSidebar}>
                    <span className="barx"></span>  
                    <span className="barx2"></span>
                </button>
                <div>
                <div className="week">Week</div>
                <div className="month">Month</div>
                <div className="divider"></div>
                </div>
                <div>
                <div className="events">Events</div>
                <div className="holidays">Holidays</div>
                <div className="divider2"></div>
                <div className="logo">
                <img src="/public/cic.png" alt="cic logo"/>
                </div>
                <div className="settings">Settings</div>
                <div className="visit">Visit us</div>  
                </div>
            </div>
        </>
    );
}

export default Header;
