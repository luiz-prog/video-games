import React from 'react';
import { Customer } from '../types/Customer';

interface CustomersTableProps {
  customers: Customer[];
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
}

const CustomersTable: React.FC<CustomersTableProps> = ({ customers, loading, error, onRefresh }) => {
  if (loading) {
    return (
      <div className="table-container">
        <div className="loading">
          <h3>Carregando video games...</h3>
          <p>Por favor, aguarde enquanto buscamos os dados.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-container">
        <div className="error">
          <h3>Erro ao carregar video games</h3>
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
            <th>Criado em</th>
            <th>Atualizado em</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td><strong>{customer.full_name}</strong></td>
              <td className="date">{new Date(customer.createdAt).toLocaleString('pt-BR')}</td>
              <td className="date">{new Date(customer.updatedAt).toLocaleString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
