import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <header className="container mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Advanced analytics to <span className="text-primary">grow your business</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis impedit consequatur.
        </p>
        <Link
          to="/login"
          className="bg-primary text-white py-3 px-6 rounded-full font-semibold text-sm shadow-md hover:bg-indigo-600"
        >
          Get started →
        </Link>
      </header>
      <section className="container mx-auto px-6 pb-10 text-center">
        <img
          src="https://dummyimage.com/800x400/edf2f7/aaa.png&text=SecureNest+Dashboard+Preview"
          alt="dashboard preview"
          className="mx-auto rounded-xl shadow-lg"
        />
      </section>
    </div>
  );
};

export default Landing;