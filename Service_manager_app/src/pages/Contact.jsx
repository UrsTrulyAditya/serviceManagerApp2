import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
     const spinTimer =  setTimeout(() => {
        setLoading(false);
      }, 1200);
  
      return () => clearTimeout(spinTimer);
    },[]);
  

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (captchaValue) {
      setSubmittedData(formData);
      alert('Form submitted!');
    } else {
      alert('Please complete reCAPTCHA');
    }
  };

  return (
    <>
      <Navbar />
      {loading ? <Spinner/> : <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-xl shadow-md"
        >
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 border rounded w-full h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={setCaptchaValue}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="mt-8 p-6 bg-green-50 border border-green-300 rounded-lg">
            <h3 className="font-bold mb-2">Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </section>}
    </>
  );
};

export default Contact;
