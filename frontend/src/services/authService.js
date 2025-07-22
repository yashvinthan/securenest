import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const authService = {
  login,
};