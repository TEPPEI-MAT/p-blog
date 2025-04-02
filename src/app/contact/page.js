'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Contact</h1>
      <p className="mb-6 text-lg">You can reach me via email or the form below.</p>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto">
        <div className="mb-4">
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}