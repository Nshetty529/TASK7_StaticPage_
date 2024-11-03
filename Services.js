import React from 'react';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to meet your IT needs:</p>
      
      <div className="service-card">
        <h2>Software Development</h2>
        <p>Custom software solutions tailored to your business requirements.</p>
      </div>

      <div className="service-card">
        <h2>Cloud Services</h2>
        <p>Secure and scalable cloud solutions to enhance your operations.</p>
      </div>

      <div className="service-card">
        <h2>IT Consulting</h2>
        <p>Expert guidance to help you navigate the complex IT landscape.</p>
      </div>

      <div className="service-card">
        <h2>Cybersecurity</h2>
        <p>Protect your business with our comprehensive cybersecurity services.</p>
      </div>
      
      <div className="service-card">
        <h2>Data Analytics</h2>
        <p>Transform data into actionable insights to drive your business forward.</p>
      </div>
      
      <div className="service-card">
        <h2>Support and Maintenance</h2>
        <p>Ongoing support to ensure your systems run smoothly.</p>
      </div>
    </div>
  );
}

export default Services;
