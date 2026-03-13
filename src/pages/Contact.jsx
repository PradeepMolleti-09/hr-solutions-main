import { useState, useEffect } from 'react';
import Hero from '../components/Hero';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us | HR Talent Solutions";
    }, []);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <main>
            <Hero
                title="Let's Build Your Workforce Together"
                subtitle="Get in touch with our experts for customized HR solutions."
                bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="section" data-reveal>
                <div className="container">
                    <div className="services-grid" style={{ gridTemplateColumns: '1fr 1.5fr', gap: '50px' }}>
                        <div>
                            <h2 className="section-title">Contact Details</h2>
                            <div style={{ marginTop: '30px' }}>
                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Office Address</h4>
                                    <p>HR Talent Solutions Pvt Ltd<br />1st Floor, Finecab Chambers, 1-8-229/2 & 2/A<br />PG Road, Sindhi Colony, Begumpet<br />Secunderabad, Hyderabad, Telangana - 500003</p>
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Call Us</h4>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--orange)' }}>+91 75 69 06 70 02</p>
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Email Us</h4>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--orange)' }}>info@hrtalentsolutions.in</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Visit Us</h4>
                                    <p>www.hrtalentsolutions.in</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'var(--dark-blue)', padding: '50px', borderRadius: '15px', color: 'var(--white)' }}>
                            <h2 className="section-title" style={{ color: 'var(--white)' }}>Business Inquiry Form</h2>
                            {submitted ? (
                                <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', textAlign: 'center' }}>
                                    <h3 style={{ color: 'var(--white)' }}>✅ Thank you!</h3>
                                    <p style={{ marginTop: '10px' }}>Our representative will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <input type="text" placeholder="Your Name" required style={{ padding: '12px', borderRadius: '4px', border: 'none' }} />
                                        <input type="text" placeholder="Company Name" required style={{ padding: '12px', borderRadius: '4px', border: 'none' }} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <input type="tel" placeholder="Phone Number" required style={{ padding: '12px', borderRadius: '4px', border: 'none' }} />
                                        <input type="email" placeholder="Business Email" required style={{ padding: '12px', borderRadius: '4px', border: 'none' }} />
                                    </div>
                                    <select style={{ padding: '12px', borderRadius: '4px', border: 'none' }}>
                                        <option>Requirement Type</option>
                                        <option>Manpower Outsourcing</option>
                                        <option>RPO Services</option>
                                        <option>IT Staffing</option>
                                        <option>Payroll & Compliance</option>
                                    </select>
                                    <textarea placeholder="Your Message" rows="4" style={{ padding: '12px', borderRadius: '4px', border: 'none' }}></textarea>
                                    <button type="submit" className="btn-primary">SEND MESSAGE</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section" data-reveal>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3907767784323!2d78.47957067490409!3d17.44102618222923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a329900001%3A0xc0d82e238c363e1b!2sHR%20Talent%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1741816535219!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </main>
    );
};

export default Contact;
