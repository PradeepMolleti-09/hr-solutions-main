import { useEffect } from 'react';
import Hero from '../components/Hero';
import { FaFileShield, FaDownload, FaCircleCheck } from "react-icons/fa6";

const Compliance = () => {
    useEffect(() => {
        document.title = "Compliance & Certificates | HR Talent Solutions";
    }, []);

    const certificates = [
        {
            id: "ESIC",
            name: "ESIC Registration",
            description: "Employees' State Insurance Corporation registration for worker social security.",
            icon: <FaFileShield />
        },
        {
            id: "EPF",
            name: "EPF Registration",
            description: "Employees' Provident Fund Organization registration for retirement benefits.",
            icon: <FaFileShield />
        },
        {
            id: "GST",
            name: "GST Registration",
            description: "Goods and Services Tax registration certificate issued by Govt of India.",
            icon: <FaFileShield />
        },
        {
            id: "Udyam",
            name: "Udyam Certificate",
            description: "MSME Registration certificate for small and medium enterprise recognition.",
            icon: <FaFileShield />
        },
        {
            id: "PAN",
            name: "PAN Card",
            description: "Permanent Account Number issued by the Income Tax Department.",
            icon: <FaFileShield />
        },
        {
            id: "TAN",
            name: "TAN Certificate",
            description: "Tax Deduction and Collection Account Number for statutory compliance.",
            icon: <FaFileShield />
        }
    ];

    return (
        <main>
            <Hero
                title="Compliance & Certificates"
                subtitle="Committed to 100% statutory compliance and transparent business practices."
                bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="section-title">Legal Recognitions</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8 }}>
                            HR Talent Solutions Pvt Ltd is a fully compliant entity, adhering to all regulatory frameworks of the Government of India.
                        </p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                        {certificates.map((cert, i) => (
                            <div key={i} className="cert-card">
                                <div className="cert-header">
                                    <div className="cert-icon">{cert.icon}</div>
                                    <span className="cert-tag">Verified</span>
                                </div>
                                <div className="cert-body">
                                    <h3>{cert.name}</h3>
                                    <p>{cert.description}</p>
                                    <div className="cert-preview">
                                        {/* Placeholder for Certificate Image */}
                                        <div className="placeholder-cert">
                                            <div className="placeholder-content">
                                                <FaFileShield style={{ fontSize: '3rem', opacity: 0.2 }} />
                                                <span>{cert.id} CERTIFICATE</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn-download">
                                        <FaDownload /> View Full Certificate
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--dark-blue)', color: 'var(--white)' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
                        <div>
                            <h2 className="section-title" style={{ color: 'var(--white)', textAlign: 'left' }}>Our Commitment to Compliance</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '20px', opacity: 0.9 }}>
                                At HR Talent Solutions, compliance is not just a requirement; it's our core strength. We ensure that all our clients are protected from any legal or statutory risks through:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <FaCircleCheck style={{ color: 'var(--orange)' }} /> Monthly statutory deposit screenshots
                                </li>
                                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <FaCircleCheck style={{ color: 'var(--orange)' }} /> Real-time compliance dashboards
                                </li>
                                <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <FaCircleCheck style={{ color: 'var(--orange)' }} /> Transparency in payroll and tax filings
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ color: 'var(--orange)', marginBottom: '20px' }}>Audit Ready - Always</h3>
                            <p style={{ opacity: 0.8 }}>
                                We maintain 100% audit readiness for our clients. Our systems are designed to generate compliance reports (ESIC, EPF, LWF, Professional Tax) instantly, ensuring zero documentation lag during external audits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Compliance;
