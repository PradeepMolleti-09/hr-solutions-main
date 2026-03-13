import { useEffect } from 'react';
import Hero from '../components/Hero';

const Clients = () => {
    useEffect(() => {
        document.title = "Our Clients | HR Talent Solutions";
    }, []);
    const clients = [
        "Tata Projects", "HSBC", "Adani", "Novartis",
        "PwC", "Pfizer", "Sandoz", "NCBS", "Inox Solar"
    ];

    return (
        <main>
            <Hero
                title="Trusted by Industry Leaders"
                subtitle="We take pride in our long-standing relationships with global corporations."
                bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="section" style={{ overflow: 'hidden' }} data-reveal>
                <div className="logo-strip" style={{ padding: '0' }}>
                    <div className="logo-track" style={{ gap: '30px' }}>
                        {[...clients, ...clients, ...clients].map((client, i) => (
                            <div key={i} className="service-card" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '150px',
                                width: '280px',
                                flex: '0 0 auto',
                                backgroundColor: 'var(--orange)',
                                border: 'none'
                            }}>
                                <h3 style={{ color: 'var(--white)', opacity: 1 }}>{client}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--dark-blue)', color: 'var(--white)' }} data-reveal>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title" style={{ color: 'var(--white)' }}>Case Snapshots</h2>
                    </div>
                    <div className="services-grid" style={{ marginTop: '30px' }}>
                        <div className="service-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: 'none', textAlign: 'left' }}>
                            <h3 style={{ color: 'var(--orange)', marginBottom: '15px' }}>Mass Hiring – Adani Solar</h3>
                            <p style={{ color: 'var(--white)' }}>Successfully placed 500+ professionals across technical and administrative roles within a 3-month window.</p>
                        </div>
                        {/* <div className="service-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: 'none', textAlign: 'left' }}>
                            <h3 style={{ color: 'var(--orange)', marginBottom: '15px' }}>Bulk Onboarding – Tata Projects</h3>
                            <p style={{ color: 'var(--white)' }}>Managed end-to-end onboarding and KYC for 1000+ associates at multiple project sites Pan-India.</p>
                        </div> */}
                        <div className="service-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: 'none', textAlign: 'left' }}>
                            <h3 style={{ color: 'var(--orange)', marginBottom: '15px' }}>Compliance Excellence</h3>
                            <p style={{ color: 'var(--white)' }}>Achieved 100% statutory compliance audit score for top-tier manufacturing clients consistently for 5 years.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light" data-reveal>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--white)', padding: '50px', borderRadius: '15px', boxShadow: 'var(--shadow)', borderLeft: '10px solid var(--orange)' }}>
                        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--dark-blue)', marginBottom: '30px' }}>
                            "HR Talent Solutions is more than a vendor; they are a strategic partner who understands our business needs and delivers quality talent consistently."
                        </p>
                        <div>
                            <h4 style={{ fontSize: '1.2rem' }}>Senior HR Director</h4>
                            <p style={{ color: 'var(--orange)', fontWeight: 'bold' }}>Global Banking Partner</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Clients;
