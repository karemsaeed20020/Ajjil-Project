'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('رسالة تم إرسالها بنجاح!');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 w-full">
      <h2 className="text-lg md:text-xl font-semibold text-[#019683] mb-6 text-center">أرسل لنا رسالة</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right text-sm md:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right text-sm md:text-base"
        />
        <textarea
          name="message"
          placeholder="رسالتك"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right resize-none text-sm md:text-base"
        ></textarea>
        <button
          type="submit"
          className="sm:w-full lg:w-[320px] lg:h-[48px] lg:relative lg:left-20 bg-[#019683] text-white font-medium py-3 px-6 rounded-lg transition"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}
