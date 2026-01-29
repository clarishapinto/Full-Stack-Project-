import React, { useState } from 'react';
import axios from 'axios';
import './AdoptionForm.css';

const AdoptionForm = ({ petId, petName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');

    try {
      const response = await axios.put(`http://localhost:5000/animals/adopt/${petId}`, formData);

      if (response.status === 200) {
        const { pickupDeadline } = response.data;
        setStatus(`🎉 You've adopted ${petName}! Pickup before ${new Date(pickupDeadline).toLocaleString()}`);
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Adoption error:', err.response?.data || err.message);
      setStatus('❌ Adoption failed. Please ensure the pet exists and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adopt {petName}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Confirm Adoption'}
          </button>
        </form>

        {status && <p className="status-msg">{status}</p>}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AdoptionForm;
