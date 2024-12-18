// @copyright 2024 shamsul alam
// @license Apache-2

import { useState } from 'react';
import { done } from '../assets';
import { Snail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch('https://getform.io/f/bnllypob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setLoading(true);
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);
      } else {
        setError('Form submission failed. Please try again');
      }
    } catch (error) {
      console.log('error submitting form');
      setError('Form submission failed. Please try again');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
          {error}
        </div>
      )}

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
            {error && <p className="text-red-500 text-sm">{error}</p>}
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
          disabled={isLoading}
          className={`btn btn-primary [&]:max-w-full w-full justify-center reveal-up ${
            isSubmitted ? 'btn-success' : ''
          } `}
        >
          {isLoading ? (
            <Snail className="animate-bounce size-5" />
          ) : isSubmitted ? (
            <>
              <img src={done} alt="Success" className="inline-block h-5 w-5" />
              Message sent
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
