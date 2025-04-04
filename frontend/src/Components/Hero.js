import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
      <section className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Furniture</h1>
        <p>
          Welcome to Furniture Store, your one-stop online shop for high-quality furniture and homeware at affordable prices.
        </p>
        <Link href="/furnitures" legacyBehavior>
          <a>
            <button className="btn">View Furnitures</button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
