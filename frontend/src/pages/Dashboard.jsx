import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
        <p className="text-2xl font-bold text-primary mt-2">$1.4M</p>
        <p className="text-sm text-gray-400">↑ 12% from last month</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700">Conversion</h2>
        <div className="h-24 w-24 bg-gray-100 rounded-full mx-auto mt-4"></div>
        <p className="text-center text-primary mt-2 text-xl font-bold">88%</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700">Phishing Alerts</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>• Suspicious login from Germany</li>
          <li>• Employee click rate: 5.2%</li>
          <li>• Dark Web match: 2 accounts</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;