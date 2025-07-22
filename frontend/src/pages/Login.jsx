import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: authService.login(email, password)
    alert('Logged in');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign in to SecureNest</h2>
        <input
          type="email"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full mb-6 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded hover:bg-indigo-600 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;