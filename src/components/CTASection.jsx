import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--orange)', color: 'var(--white)', padding: '60px 0' }}>
            <div className="container text-center">
                <h2 style={{ color: 'var(--white)', marginBottom: '30px', fontSize: '2.5rem' }}>Ready to Scale Your Workforce?</h2>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Link to="/contact" className="btn-secondary" style={{ borderColor: 'var(--white)' }}>Talk to an Expert</Link>
                    <Link to="/contact#contact-form" className="btn-secondary" style={{ backgroundColor: 'var(--white)', color: 'var(--orange)', borderColor: 'var(--white)' }}>Request Proposal</Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
