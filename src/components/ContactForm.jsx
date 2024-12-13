// @copyright 2024 shamsul alam
// @license Apache-2

import { useState } from 'react';
import { done } from '../assets';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://getform.io/f/bnllypob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="xl:pl-10 2xl:pl-20">
      <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
        <div className="mb-4">
          <label htmlFor="name" className="label reveal-up">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            spellCheck="false"
            required
            placeholder="Name"
            className="text-field reveal-up"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="label reveal-up">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            required
            placeholder="email@example.com"
            className="text-field reveal-up"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="label reveal-up">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Hi!"
          className="text-field text-resize-y min-h-32 max-h-80 reveal-up"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className={`btn btn-primary [&]:max-w-full w-full justify-center reveal-up ${
          isSubmitted ? 'btn-success' : ''
        } `}
      >
        {!isSubmitted ? (
          'Send Message'
        ) : (
          <>
            <img src={done} alt="Success" className="inline-block  h-5 w-5" />
            Message sent
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
