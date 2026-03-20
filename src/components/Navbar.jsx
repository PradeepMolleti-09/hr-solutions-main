import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                {/* Left Compartment: Logo */}
                <Link to="/" className="nav-logo">
                    <img
                        src="/Logo.jpeg"
                        alt="HR Talent Solutions"
                        style={{ height: '60px', display: 'block', borderRadius: '4px' }}
                    />
                </Link>

                {/* Right Compartment: Nav Links + CTA Button */}
                <div className="nav-right-compartment">
                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</NavLink>
                        <NavLink to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</NavLink>
                        {/* <NavLink to="/compliance" className="nav-link" onClick={() => setIsOpen(false)}>Compliance</NavLink> */}
                        <NavLink to="/clients" className="nav-link" onClick={() => setIsOpen(false)}>Clients</NavLink>
                        <NavLink to="/careers" className="nav-link" onClick={() => setIsOpen(false)}>Careers</NavLink>
                        <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</NavLink>

                        {/* Mobile view CTA */}
                        <Link to="/contact" className="mobile-cta" onClick={() => setIsOpen(false)}>
                            <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                                HIRE TALENT NOW
                            </button>
                        </Link>
                    </div>

                    <div className="nav-actions">
                        <Link to="/contact" className="desktop-cta">
                            <button className="btn-primary" style={{ fontSize: '0.75rem', padding: '8px 18px', fontWeight: '700' }}>
                                HIRE TALENT NOW
                            </button>
                        </Link>

                        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
