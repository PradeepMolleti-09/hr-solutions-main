const JobCard = ({ title, location, experience, img }) => {
    return (
        <div className="service-card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="card-img-container" style={{ height: '150px' }}>
                <img src={img || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80"} alt={title} />
            </div>
            <div style={{ flexGrow: 1 }}>
                <h3 style={{ marginBottom: '10px' }}>{title}</h3>
                <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>📍 {location}</p>
                <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>💼 {experience}</p>
            </div>
            <button className="btn-primary" style={{ marginTop: '20px', width: '100%', padding: '10px' }}>Apply Now</button>
        </div>
    );
};

export default JobCard;
