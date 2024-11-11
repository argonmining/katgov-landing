import React from 'react';
import catImage from '../assets/cat.png';

const KatPoolLanding: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-600 text-center">
    <img src={catImage} alt="Meditating Cat" className="w-1/3 max-w-xs mb-8" />
    <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
    <h2 className="text-6xl font-extrabold mb-4">Kat Pool</h2>
    <p className="text-xl italic mb-8">Nacho typical Kaspa Mining Pool</p>
    <div className="flex space-x-4">
      <button className="px-6 py-2 bg-white text-black font-semibold rounded shadow">
        Get Connected
      </button>
      <button className="px-6 py-2 bg-white text-black font-semibold rounded shadow">
        Dashboard
      </button>
    </div>
  </div>
);

export default KatPoolLanding;
