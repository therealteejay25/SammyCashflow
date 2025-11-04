"use client";
import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="What's your name?"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white/4 border border-white/6 rounded-2xl px-6 py-4 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="What's your email address?"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/4 border border-white/6 rounded-2xl px-6 py-4 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="What's your phone number?"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white/4 border border-white/6 rounded-2xl px-6 py-4 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
          required
        />
        <input
          type="text"
          name="interest"
          placeholder="Which trading package interests you?"
          value={formData.interest}
          onChange={handleChange}
          className="w-full bg-white/4 border border-white/6 rounded-2xl px-6 py-4 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your trading goals..."
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full bg-white/4 border border-white/6 rounded-2xl px-6 py-4 text-white/90 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all resize-none"
        required
      />
      <button
        type="submit"
        className="w-full bg-base hover:opacity-90 text-white font-semibold rounded-2xl px-6 py-4 transition-all flex items-center justify-center gap-2"
      >
        Join Now
        <img
          src="/PaperPlaneTilt.svg"
          alt=""
          className="w-5 h-5 opacity-90"
        />
      </button>
    </form>
  );
};

export default ContactForm;