import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Services = () => {
    useEffect(() => {
        document.title = "Our Services | HR Talent Solutions";
    }, []);
    return (
        <main>
            <Hero
                title="End-to-End Workforce & HR Solutions"
                subtitle="Streamlining your HR processes with professional expertise."
                bgImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="section" data-reveal>
                <div className="container">
                    <div className="services-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                        <div>
                            <div className="card-img-container" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=600&q=80" alt="Manpower Outsourcing" />
                            </div>
                            <h2 className="section-title">Manpower Outsourcing</h2>
                            <ul className="footer-links" style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>
                                <li style={{ marginBottom: '10px' }}>• Recruitment & Selection</li>
                                <li style={{ marginBottom: '10px' }}>• Seamless Onboarding</li>
                                <li style={{ marginBottom: '10px' }}>• Comprehensive Payroll</li>
                                <li style={{ marginBottom: '10px' }}>• Exit Management</li>
                                <li style={{ marginBottom: '10px' }}>• Performance Appraisal</li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: 'var(--dark-blue)', padding: '50px', borderRadius: '15px', color: 'var(--white)' }}>
                            <div className="card-img-container" style={{ height: '200px' }}>
                                <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=600&q=80" alt="RPO Services" />
                            </div>
                            <h2 className="section-title" style={{ color: 'var(--white)' }}>RPO Services</h2>
                            <ul style={{ fontSize: '1.1rem' }}>
                                <li style={{ marginBottom: '10px' }}>• On-site RPO Experts</li>
                                <li style={{ marginBottom: '10px' }}>• Multi-channel sourcing</li>
                                <li style={{ marginBottom: '10px' }}>• Pan-India Hiring</li>
                                <li style={{ marginBottom: '10px' }}>• Recruitment Dashboards</li>
                                <li style={{ marginBottom: '10px' }}>• Governance & Compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light" data-reveal>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">IT & NON-IT Staffing</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.2rem' }}>
                            We provide both Permanent & Temporary Staffing across various domains including Finance, Sales, Developers, Manufacturing, Healthcare, and Field Executives.
                        </p>
                    </div>
                    <div className="industries-grid">
                        {["Finance", "Sales", "IT Developers", "Manufacturing", "Healthcare", "Field Ops"].map((s, i) => (
                            <div key={i} className="industry-item">
                                <h3>{s}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--dark-blue)', color: 'var(--white)' }} data-reveal>
                <div className="container">
                    <div className="services-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                        <div>
                            <h2 className="section-title" style={{ color: 'var(--white)' }}>Payroll & Compliance</h2>
                            <ul style={{ fontSize: '1.1rem' }}>
                                <li style={{ marginBottom: '10px' }}>• PF & ESI Management</li>
                                <li style={{ marginBottom: '10px' }}>• Accurate Salary Processing</li>
                                <li style={{ marginBottom: '10px' }}>• Form 16 Generation</li>
                                <li style={{ marginBottom: '10px' }}>• Bonus & Gratuity Calculation</li>
                                <li style={{ marginBottom: '10px' }}>• Audit & Statutory Support</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="card-img-container" style={{ height: '300px', maxWidth: '400px', margin: '0 auto 30px' }}>
                                <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80" alt="Payroll Compliance" />
                            </div>
                            <Link to="/contact#contact-form" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', padding: '20px 40px', fontSize: '1.2rem' }}>
                                Request Service Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section" data-reveal style={{backgroundColor: 'var(--white)'}}>
                <div className="container">
                    <div className="services-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                        <div className="text-center">
                            <div className="card-img-container" style={{ height: '300px', maxWidth: '400px', margin: '0 auto 30px' }}>
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Talent Acquisition" />
                            </div>
                        </div>
                        <div>
                            <h2 className="section-title">Talent Acquisition</h2>
                            <ul className="footer-links" style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>
                                <li style={{ marginBottom: '10px' }}>• Executive Search</li>
                                <li style={{ marginBottom: '10px' }}>• Headhunting Services</li>
                                <li style={{ marginBottom: '10px' }}>• Specialized Skill Sourcing</li>
                                <li style={{ marginBottom: '10px' }}>• Leadership Recruitment</li>
                                <li style={{ marginBottom: '10px' }}>• Market Intelligence & Mapping</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
