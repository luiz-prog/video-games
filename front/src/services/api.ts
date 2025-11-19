import axios from 'axios';
import { Customer } from '../types/Customer';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const customersApi = {
  getAll: async (): Promise<Customer[]> => {
    const response = await api.get('/customers');
    return response.data;
  },

  getById: async (id: number): Promise<Customer> => {
    const response = await api.get(`/customers/${id}`);
    return response.data;
  },

  create: async (customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>): Promise<Customer> => {
    const response = await api.post('/customers', customer);
    return response.data;
  },

  update: async (id: number, customer: Partial<Customer>): Promise<Customer> => {
    const response = await api.patch(`/customers/${id}`, customer);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/customers/${id}`);
  },
};

export default api;
