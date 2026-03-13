import { useState, useEffect } from 'react';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsStrip = () => {
    return (
        <section className="stats-strip" data-reveal>
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <h2><Counter end={18} suffix="+" /></h2>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                        <h2><Counter end={50} suffix="+" /></h2>
                        <p>Clients</p>
                    </div>
                    <div className="stat-item">
                        <h2><Counter end={50000} suffix="+" /></h2>
                        <p>Professionals Placed</p>
                    </div>
                    <div className="stat-item">
                        <h2><Counter end={125} suffix=" Cr" /></h2>
                        <p>Turnover (FY 24–25)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
