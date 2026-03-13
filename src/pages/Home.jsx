import { useEffect } from 'react';
import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import ServicesGrid from '../components/ServicesGrid';
import CTASection from '../components/CTASection';

const Home = () => {
    useEffect(() => {
        document.title = "HR Talent Solutions | Building Strong Teams";
    }, []);
    const industries = [
        { name: "BFSI", img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=400&q=80" },
        { name: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" },
        { name: "Technology", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
        { name: "Healthcare", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80" },
        { name: "Telecom", img: "https://images.unsplash.com/photo-1544669146-6242bc68da86?auto=format&fit=crop&w=400&q=80" },
        { name: "Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80" },
        { name: "Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80" },
        { name: "E-Commerce", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <main>
            <Hero
                title="Building Strong Teams for Growing Businesses"
                subtitle="Trusted Recruitment & Staffing Partner Since 2008"
                bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            />
            <StatsStrip />
            <ServicesGrid />

            <section className="section industries-section" data-reveal>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">Industries We Serve</h2>
                    </div>
                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <div key={index} className="industry-item" style={{ overflow: 'hidden', padding: '0', position: 'relative' }}>
                                <div className="card-img-container" style={{ height: '220px', marginBottom: '0' }}>
                                    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(22, 32, 113, 0.9), transparent)', zIndex: '1' }}></div>
                                    <img src={industry.img} alt={industry.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', zIndex: '2', color: 'white', bottom: '20px', left: '20px', textAlign: 'left' }}>
                                        <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{industry.name}</h3>
                                        <div style={{ width: '30px', height: '2px', background: 'var(--orange)', marginTop: '5px' }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section logo-strip" data-reveal>
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--dark-blue)', opacity: 0.7 }}>
                        Trusted by Industry Leaders
                    </h4>
                </div>
                <div className="logo-track">
                    {[...Array(2)].map((_, listIdx) => (
                        <div key={listIdx} style={{ display: 'flex' }}>
                            {["ADANI", "TATA", "RELIANCE", "WIPRO", "HCL", "INFOSYS", "GENPACT", "AMAZON"].map((item, i) => (
                                <div key={i} className="logo-item" style={{ fontSize: '1.4rem', fontWeight: '900', letterSpacing: '4px', color: 'var(--dark-blue)', whiteSpace: 'nowrap' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" style={{
                backgroundColor: 'var(--dark-blue)',
                color: 'var(--white)',
                backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(236, 123, 36, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(22, 32, 113, 0.2) 0%, transparent 40%)'
            }} data-reveal>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title" style={{ color: 'var(--white)' }}>What Our Clients Say</h2>
                    </div>
                    <div className="services-grid">
                        <div className="service-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: 'none' }}>
                            <img src="https://i.pravatar.cc/100?u=adani" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 20px', border: '2px solid var(--orange)' }} />
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--white)' }}>
                                "HR Talent Solutions has been instrumental in our rapid scaling. Their RPO model is highly efficient."
                            </p>
                            <h4 style={{ color: 'var(--orange)' }}>Director, Adani Solar</h4>
                        </div>
                        <div className="service-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: 'none' }}>
                            <img src="https://i.pravatar.cc/100?u=tata" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 20px', border: '2px solid var(--orange)' }} />
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--white)' }}>
                                "The payroll compliance services provided by HRTS are seamless and accurate. Highly recommended."
                            </p>
                            <h4 style={{ color: 'var(--orange)' }}>HR Manager, Tata Projects</h4>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main >
    );
};

export default Home;
