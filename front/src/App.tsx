import React, { useState, useEffect } from 'react';
import { Customer } from './types/Customer';
import { customersApi } from './services/api';
import CustomersTable from './components/CustomersTable';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await customersApi.getAll();
      setCustomers(data);
    } catch (err) {
      setError('Erro ao carregar Video Game. Verifique se a API está rodando.');
      console.error('Erro ao buscar Video Game:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>DevOps - Lista de Video Game</h1>
        <p>Frontend React conectado à API NestJS</p>
      </header>

      <main>
        <button 
          className="refresh-btn" 
          onClick={fetchCustomers}
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'Atualizar Lista'}
        </button>

        <CustomersTable 
          customers={customers}
          loading={loading}
          error={error}
          onRefresh={fetchCustomers}
        />
      </main>
    </div>
  );
};

export default App;
