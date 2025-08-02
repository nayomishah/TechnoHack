import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../Images/Headerlogobike.jpeg';
import signinIcon from '../Images/log-out.png';
import cartIcon from '../Images/shopping-cart.png';
import searchIcon from "../Images/magnifying-glass.png";
//dabbaexpress\src\Components\Images\magnifying-glass.png
const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    };

    return (
        <header className="myheader-header">
            <div className="myheader-header-container">
                {/* LEFT: Logo */}
                <div className="myheader-logo-container" onClick={() => handleNavigation('/')}>
                    <img src={logo} alt="Logo" className="myheader-logo-image" />
                    <span className="myheader-logo-text">Dabba Express</span>
                </div>

                {/* MIDDLE: Main Nav */}
                <div className="myheader-center-nav">
                    <button className="myheader-nav-button" onClick={() => handleNavigation('/')}>Home</button>
                    <button className="myheader-nav-button" onClick={() => handleNavigation('/categories')}>Categories</button>
                </div>

                {/* RIGHT: Search, Cart, Login */}
                <div className="myheader-right-section">
                    <div className="myheader-search-container">
                        <input type="text" placeholder="       Search..." className="myheader-search-input" />
                    </div>
                    <button className="myheader-nav-button" onClick={() => handleNavigation('/cart')}>
                        <img src={cartIcon} alt="Cart" className="myheader-icon" />
                        Cart
                    </button>
                    <button className="myheader-login-button" onClick={() => handleNavigation('/login')}>
                        <img src={signinIcon} alt="Sign In" className="myheader-icon" />
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
