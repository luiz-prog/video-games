-- Script para popular o banco com dados de exemplo
-- Este arquivo é executado automaticamente quando o container do PostgreSQL é criado

INSERT INTO customers (full_name, email, phone, birth_date, "createdAt", "updatedAt") VALUES
('Nintendo 64', NOW(), NOW()),
('Playstatin 1', NOW(), NOW()),
('Playstation 2', NOW(), NOW()),
('Playstation 3', NOW(), NOW()),
('Playstation 4', NOW(), NOW()),
('Playstation 5', NOW(), NOW()),
('Xbox 360', NOW(), NOW()),
('Xbox one', NOW(), NOW()),
('Xbox series x', NOW(), NOW()),
('Xbox series s', NOW(), NOW()),