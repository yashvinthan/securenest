import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">SecureNest</div>
      <ul className="flex gap-4 text-sm font-medium">
        <li><Link to="/" className="hover:text-blue-600">Dashboard</Link></li>
        <li><Link to="/phishing" className="hover:text-blue-600">Phishing</Link></li>
        <li><Link to="/breaches" className="hover:text-blue-600">Breaches</Link></li>
        <li><Link to="/compliance" className="hover:text-blue-600">Compliance</Link></li>
        <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;