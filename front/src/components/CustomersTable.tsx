import React from 'react';
import { Customer } from '../types/Customer';

interface CustomersTableProps {
  customers: Customer[];
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
}

const CustomersTable: React.FC<CustomersTableProps> = ({ customers, loading, error, onRefresh }) => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatBirthDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  if (loading) {
    return (
      <div className="table-container">
        <div className="loading">
          <h3>Carregando clientes...</h3>
          <p>Por favor, aguarde enquanto buscamos os dados.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-container">
        <div className="error">
          <h3>Erro ao carregar clientes</h3>
          <p>{error}</p>
          <button className="refresh-btn" onClick={onRefresh}>
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  if (customers.length === 0) {
    return (
      <div className="table-container">
        <div className="empty">
          <h3>Nenhum Video Game encontrado</h3>
          <p>Não há Video Game cadastrados no sistema.</p>
          <button className="refresh-btn" onClick={onRefresh}>
            Atualizar Lista
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome Completo</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>
                <strong>{customer.full_name}</strong>
              </td>
              <td>
                <a href={`mailto:${customer.email}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                  {customer.email}
                </a>
              </td>
              <td>
                {customer.phone || (
                  <span style={{ color: '#6c757d', fontStyle: 'italic' }}>
                    Não informado
                  </span>
                )}
              </td>
              <td className="date">{formatBirthDate(customer.birth_date)}</td>
              <td className="price">{calculateAge(customer.birth_date)} anos</td>
              <td className="date">{formatDate(customer.createdAt)}</td>
              <td className="date">{formatDate(customer.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
