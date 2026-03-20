import { useEffect } from 'react';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import ResumeForm from '../components/ResumeForm';

const Careers = () => {
    useEffect(() => {
        document.title = "Careers | HR Talent Solutions";
    }, []);
    const jobs = [
        { title: "Talent Acquisition Specialist", location: "Hyderabad", experience: "2-4 Years", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80" },
        { title: "HR Operations Associate", location: "Mumbai", experience: "1-3 Years", img: "https://images.unsplash.com/photo-1573161158365-59b82f3d959c?auto=format&fit=crop&w=400&q=80" },
        { title: "Statutory Compliance Manager", location: "Chennai", experience: "5-8 Years", img: "https://images.unsplash.com/photo-1507679799987-c7377fb18a90?auto=format&fit=crop&w=400&q=80" },
        { title: "Payroll Executive", location: "Bangalore", experience: "2-5 Years", img: "https://images.unsplash.com/photo-1554224155-1697467275c7?auto=format&fit=crop&w=400&q=80" },
        { title: "IT Recruiter", location: "Remote", experience: "3-5 Years", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" },
        { title: "Business Development Manager", location: "Delhi", experience: "4-7 Years", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <main>
            <Hero
                title="Build Your Career with HRTS"
                subtitle="Join a team of driven HR professionals and make an impact."
                bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="section" data-reveal>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">Active Job Openings</h2>
                    </div>
                    <div className="services-grid" style={{ marginTop: '30px' }}>
                        {jobs.map((job, i) => (
                            <JobCard key={i} {...job} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light" id="apply" data-reveal>
                <div className="container">
                    <ResumeForm />
                </div>
            </section>

            <section className="section" data-reveal>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">Why Join HRTS?</h2>
                    </div>
                    <div className="industries-grid-3" style={{ marginTop: '30px' }}>
                        <div className="industry-item">
                            <span className="item-icon">🌍</span>
                            <h3>Pan-India Exposure</h3>
                            <p>Work with clients and candidates across the country.</p>
                        </div>
                        <div className="industry-item">
                            <span className="item-icon">⚡</span>
                            <h3>Fast Hiring Process</h3>
                            <p>We value time and ensure a swift recruitment cycle.</p>
                        </div>
                        <div className="industry-item">
                            <span className="item-icon">🏆</span>
                            <h3>Top Brand Clients</h3>
                            <p>Build your portfolio by working with industry giants.</p>
                        </div>
                        <div className="industry-item">
                            <span className="item-icon">💬</span>
                            <h3>Transparent Communication</h3>
                            <p>Open culture with merit-based growth opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
