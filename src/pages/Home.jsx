import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-content">
        <h1>Welcome to Animal Care 🐾</h1>
        <img
          src="/logo2.png"  // Ensure this file is in public/
          alt="Adopt a pet and give them a loving home"
          className="center-image"
        />
        <p>
          We connect loving families with pets in need. Browse, adopt, and make a difference in an animal’s life today.
        </p>
      </div>
    </div>
  );
};

export default Home;
