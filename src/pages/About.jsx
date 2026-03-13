import { useEffect } from 'react';
import Hero from '../components/Hero';

import { FaLinkedinIn } from "react-icons/fa6";

const About = () => {
    useEffect(() => {
        document.title = "About Us | HR Talent Solutions";
    }, []);
    const snapshot = [
        { label: "Branches", val: "2" },
        { label: "Operating Locations", val: "80+" },
        { label: "Direct Employees", val: "70+" },
        { label: "Associates", val: "2,000+" },
        { label: "Placements", val: "1,00,000+" }
    ];

    const management = [
        { name: "Narendra Kotti", role: "CEO", img: "https://i.pravatar.cc/150?u=nk", linkedin: "https://www.linkedin.com/in/narendra-kotti-9b34a116/" },
        { name: "Dr SSN Srinivas", role: "Advisor", img: "https://i.pravatar.cc/150?u=dsn", linkedin: "https://www.linkedin.com" },
        { name: "KVS Rajani Kant", role: "AVP HR Operations", img: "https://i.pravatar.cc/150?u=kvs", linkedin: "https://www.linkedin.com/in/kvs-rajanikant-b67683aa/" }
    ];


    return (
        <main>
            <Hero
                title="About HR Talent Solutions Pvt Ltd"
                subtitle="Established June 9, 2008 - A Legacy of Excellence in Workforce Management"
                bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="section" data-reveal>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">Company Snapshot</h2>
                    </div>
                    <div className="stats-grid" style={{ marginTop: '30px' }}>
                        {snapshot.map((s, i) => (
                            <div key={i} className="stat-item">
                                <h2>{s.val}</h2>
                                <p>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light" data-reveal>
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="section-title">Our Management</h2>
                    </div>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {management.map((m, i) => (
                            <div key={i} className="management-card">
                                <div className="management-img-wrapper">
                                    <img src={m.img} alt={m.name} />
                                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className="management-info">
                                    <h3>{m.name}</h3>
                                    <p className="role">{m.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="section" style={{ backgroundColor: 'var(--dark-blue)', color: 'var(--white)' }} data-reveal>
                <div className="container text-center">
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>Vision & Values</h2>
                    <div className="industries-grid" style={{ marginTop: '30px' }}>
                        {["Integrity", "Compliance", "Reliability", "Scalability", "Technology-Driven"].map((v, i) => (
                            <div key={i} className="industry-item value-card" style={{ backgroundColor: 'rgba(236, 123, 36, 0.8)' }}>
                                <h3>{v}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
