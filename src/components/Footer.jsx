import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaWhatsapp,
    FaYoutube
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link to="/" className="nav-logo">
                            <img src="/Logo.jpeg" alt="HR Talent Solutions" style={{ height: '50px', display: 'block' }} />
                        </Link>
                        <p style={{ marginTop: '20px', opacity: 0.8 }}>
                            Partnering with businesses since 2008 to provide world-class HR and staffing solutions across India.
                        </p>
                        <div className="social-links" style={{ marginTop: '25px', display: 'flex', gap: '15px' }}>
                            <a href="https://www.linkedin.com/company/hr-talent-solutions-pvt-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.instagram.com/hrtalentsolutions.in/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61583921061860" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://x.com/hrts_pvt_ltd" target="_blank" rel="noopener noreferrer" className="social-icon" title="X (Twitter)">
                                <FaXTwitter />
                            </a>
                            <a href="https://whatsapp.com/channel/0029Vb7cjydI7BeF03WyTD1n" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.youtube.com/@HRTalentSolutions" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/clients">Our Clients</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">Manpower Outsourcing</Link></li>
                            <li><Link to="/services">RPO Services</Link></li>
                            <li><Link to="/services">IT & NON - IT Staffing</Link></li>
                            <li><Link to="/services">Payroll Compliance</Link></li>
                            <li><Link to="/services"> Talent Acquisition</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <ul className="footer-links" style={{ opacity: 0.8 }}>
                            <li>📞 +91 75 69 06 70 02</li>
                            <li>📧 info@hrtalentsolutions.in</li>
                            <li>🌐 www.hrtalentsolutions.in</li>
                            <li>📍 Pan-India Presence</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} HR Talent Solutions Pvt Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
