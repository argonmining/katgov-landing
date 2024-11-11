import React from 'react';
import catImage from '../assets/cat.png';

const KatGovLanding: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-600 text-center">
    <img src={catImage} alt="Meditating Cat" className="w-1/3 max-w-xs mb-8" />
    <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
    <h2 className="text-6xl font-extrabold mb-4">Kat Gov</h2>
    <p className="text-xl italic mb-8">Decentralized KRC-20 Project Governance</p>
  </div>
);

export default KatGovLanding;
