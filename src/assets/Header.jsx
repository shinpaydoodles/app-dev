import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

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
                <Sidebar />
            </div>
        </>
    );
}

export default Header;
