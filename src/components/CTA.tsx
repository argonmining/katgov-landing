import React from 'react';

const CTA: React.FC = () => (
  <section className="bg-primary text-white py-12">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Join Kat Pool?</h2>
      <p>Start mining with us today and enjoy rewards like never before.</p>
      <button className="mt-6 px-8 py-3 bg-accent text-white rounded-lg text-lg hover:bg-secondary transition duration-200">
        Start Mining
      </button>
    </div>
  </section>
);

export default CTA;
