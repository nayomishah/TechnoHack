import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">&copy; 2025 Dabba Express All rights reserved</p>
                <div className="social-links">
                    <a href="">Instagram</a>
                    <span> | </span>
                    <a href="">Mobile</a>
                    <span> | </span>
                    <a href="">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;