import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="pt-16 bg-gradient-to-r from-blue-600 to-indigo-700 relative"
      style={{
        backgroundImage: 'url("https://primefaces.org/cdn/templates/genesis//pages/e-learning/hero-background.jpg?w=1920&q=75")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0  opacity-75"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Academic Excellence
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive development and support for academic projects across multiple technologies
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <GraduationCap className="w-64 h-64 text-white opacity-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
