const services = [
    {
        icon: "🏢",
        title: "Manpower Outsourcing",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
    },
    {
        icon: "🎯",
        title: "RPO",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
    },
    {
        icon: "💻",
        title: "IT & Non-IT Staffing",
        img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
    },
    {
        icon: "💰",
        title: "Payroll",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80"
    },
    {
        icon: "⚖️",
        title: "Statutory Compliance",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80"
    }
];

const ServicesGrid = () => {
    return (
        <section className="section bg-light" data-reveal>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Comprehensive Workforce Solutions</h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="card-img-container">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
