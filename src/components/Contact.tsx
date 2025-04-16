// src/components/Contact.tsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_xo5q7gp',    // ✅ Replace with your EmailJS Service ID
          'template_wcw5uk5',   // ✅ Replace with your Template ID
          form.current,
          'dIww_OYVFflhGzPJa'     // ✅ Replace with your Public Key
        )
        .then(
          () => {
            alert('✅ Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            alert('❌ Failed to send message. Please try again.');
            console.error(error.text);
          }
        );
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Got a question, an opportunity, or just want to say hi? Fill out the form below!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </section>
  );
};

// CSS-in-JS styles
const inputStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '1rem',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#2563eb',
  color: 'white',
  fontWeight: 600,
  fontSize: '1rem',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Contact;
