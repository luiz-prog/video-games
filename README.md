# Projeto DevOps - Avaliação Trio

Este projeto implementa uma aplicação full-stack com API NestJS, Frontend React e banco PostgreSQL, todos orquestrados via Docker Compose. O sistema serve para cadastro de video games.

## 📋 Sumário

- [Requisitos](#requisitos)
- [Como Executar](#como-executar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Resposta](#exemplos-de-resposta)
- [Comandos de Gerenciamento](#comandos-de-gerenciamento)

## 🔧 Requisitos

- Docker
- Docker Compose
- Git

## 🚀 Como Executar

### Subir todos os serviços
```bash
docker compose up -d
```

### Verificar status dos serviços
```bash
docker compose ps
```

### Ver logs dos serviços
```bash
docker compose logs -f
```

### Parar todos os serviços
```bash
docker compose down
```

### Parar e remover volumes (limpeza completa)
```bash
docker compose down -v
```

## 📁 Estrutura do Projeto

```
├── api/                 # API NestJS
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── front/               # Frontend React
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── deploy/              # Configurações Docker
│   └── docker-compose.yml
├── .gitignore
├── .dockerignore
└── README.md
```

## 🌐 Endpoints da API

### Base URL: http://localhost:3000

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/customers` | Lista todos os video games |
| GET | `/customers/:id` | Busca video game por ID |
| POST | `/customers` | Cria novo video games |
| PUT | `/customers/:id` | Atualiza video game |
| DELETE | `/customers/:id` | Remove video game |

### Documentação Swagger
Acesse: http://localhost:3000/api

## 📊 Exemplos de Resposta

### GET /customers
```json
[
  {
    "id": 1,
    "full_name": "Playstation 6",
  }
]
```

### POST /customers
```json
{
  "full_name": "Playstation 4",
}
```

## 🎯 Acesso aos Serviços

- **Frontend React**: http://localhost:3001
- **API NestJS**: http://localhost:3000
- **Swagger Documentation**: http://localhost:3000/api
- **PostgreSQL**: localhost:5432

## 🗄️ Banco de Dados

- **Host**: localhost
- **Porta**: 5432
- **Database**: devops_db
- **Usuário**: postgres
- **Senha**: postgres
- **Volume**: Dados persistem em volume nomeado `postgres_data`

## 🔄 Comandos de Gerenciamento

### Desenvolvimento
```bash
# Subir apenas o banco
docker compose up postgres -d

# Subir API e banco
docker compose up postgres api -d

# Subir tudo
docker compose up -d
```

### Limpeza
```bash
# Parar serviços
docker compose down

# Parar e remover volumes
docker compose down -v

# Remover imagens
docker compose down --rmi all

# Limpeza completa
docker compose down -v --rmi all
```

## 📝 Notas Importantes

- Os dados do PostgreSQL são persistidos em volume nomeado
- A comunicação entre serviços usa redes Docker isoladas
- O frontend se comunica com a API via DNS interno
- Todos os serviços são expostos em portas específicas para acesso externo
