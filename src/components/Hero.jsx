import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, bgImage = "" }) => {
    return (
        <section
            className="hero"
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            <div className="container">
                <div className="hero-content fade-in">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <div className="hero-btns">
                        <Link to="/contact" className="btn-primary">HIRE TALENT NOW</Link>
                        <Link to="/services" className="btn-secondary">Explore Services</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
