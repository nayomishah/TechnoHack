import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        // First scroll to top immediately
        window.scrollTo(0, 0);

        // Then navigate
        navigate(path);

        // Additional scroll for smoothness (works in most cases)
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 0);
    };

    return (
        <header className="myheader-header">
            <div className="myheader-header-container">
                <h1 className="myheader-logo">Dabba Express</h1>
                <nav className="myheader-nav-links">
                    <button className="myheader-nav-button" onClick={() => handleNavigation('/')}>Home</button>
                    <button className="myheader-nav-button" onClick={() => handleNavigation('/categories')}>Categories</button>
                    <button className="myheader-nav-button" onClick={() => handleNavigation('/aboutus')}>About Us</button>
                    <button className="myheader-nav-button" onClick={() => handleNavigation('/contactus')}>Contact Us</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;