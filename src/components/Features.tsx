
import React from 'react';

const Features: React.FC = () => (
  <section className="bg-white py-12">
    <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
      <div className="p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Open Source</h2>
        <p>Kat Pool is fully open-source, aligning with Nacho's commitment to transparency and community involvement.</p>
      </div>
      <div className="p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Kaspa Integration</h2>
        <p>Integrated with Kaspa, ensuring miners get the best performance and transparency.</p>
      </div>
      <div className="p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Rewards System</h2>
        <p>25% of miner fees are used to buy back Nacho tokens and distribute to Kat Pool miners.</p>
      </div>
    </div>
  </section>
);

export default Features;
