import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a leading IT solutions provider, specializing in software development, cloud services, and IT consulting.</p>
      <p>Our mission is to deliver high-quality services that help businesses achieve their goals.</p>
      
      <div className="cards-container">
        <div className="card">
          <h2>Our Vision</h2>
          <p>To be the most trusted IT partner for our clients.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="card">
          <h2>Our Values</h2>
          <p>Integrity, Innovation, and Excellence.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="card">
          <h2>Our Team</h2>
          <p>A dedicated team of professionals committed to your success.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
