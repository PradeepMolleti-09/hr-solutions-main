import { useState } from 'react';

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        role: '',
        resume: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Resume submitted successfully (Frontend Demo Only)");
        setFormData({
            name: '',
            email: '',
            phone: '',
            experience: '',
            role: '',
            resume: null
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div style={{ backgroundColor: 'var(--dark-blue)', padding: '50px', borderRadius: '15px', color: 'var(--white)' }}>
            <h2 style={{ color: 'var(--white)', marginBottom: '30px' }}>Submit Your Resume for Future Opportunities</h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <input
                    type="text" name="name" placeholder="Full Name" required
                    value={formData.name} onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '4px', border: 'none' }}
                />
                <input
                    type="email" name="email" placeholder="Email" required
                    value={formData.email} onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '4px', border: 'none' }}
                />
                <input
                    type="tel" name="phone" placeholder="Phone" required
                    value={formData.phone} onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '4px', border: 'none' }}
                />
                <input
                    type="text" name="experience" placeholder="Experience (Years)" required
                    value={formData.experience} onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '4px', border: 'none' }}
                />
                <input
                    type="text" name="role" placeholder="Preferred Role" required
                    value={formData.role} onChange={handleChange}
                    style={{ padding: '12px', borderRadius: '4px', border: 'none' }}
                />
                <input
                    type="file" name="resume" required
                    style={{ padding: '10px', color: 'var(--white)' }}
                />
                <button type="submit" className="btn-primary" style={{ gridColumn: 'span 2' }}>SUBMIT RESUME</button>
            </form>
        </div>
    );
};

export default ResumeForm;
