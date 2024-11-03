import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries.</p>
      
      <h2>Get in Touch</h2>
      <p>You can contact us via email, phone, or through the form below.</p>

      <div className="contact-info">
        <h3>Email:</h3>
        <p>info@ouritcompany.com</p>

        <h3>Phone:</h3>
        <p>+1 (234) 567-890</p>

        <h3>Address:</h3>
        <p>1234 IT Avenue, Tech City, State, 12345</p>
      </div>

      <h2>Contact Form</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" required></textarea>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
