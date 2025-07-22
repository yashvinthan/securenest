import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
//import Phishing from '../pages/Phishing';
//import Breaches from '../pages/Breaches';
//import Compliance from '../pages/Compliance';
import Landing from '../pages/Landing';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    {/* <Route path="/phishing" element={<Phishing />} /> */}
{/* <Route path="/breaches" element={<Breaches />} /> */}
{/* <Route path="/compliance" element={<Compliance />} /> */}
<Route path="/" element={<Landing />} />

    </Routes>
  );
};

export default AppRoutes;