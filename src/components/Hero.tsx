import React from 'react';

const Hero: React.FC = () => (
  <section className="bg-primary text-white min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-5xl font-bold mb-4">Welcome to Kat Pool</h1>
    <p className="text-xl max-w-2xl text-center">
      The open-source Kaspa mining pool designed for the Nacho community, providing rewards and supporting decentralization.
    </p>
    <button className="mt-6 px-8 py-3 bg-secondary text-white rounded-lg text-lg hover:bg-accent transition duration-200">
      Get Started
    </button>
  </section>
);

export default Hero;
