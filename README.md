# 🚀 TSBooks API

> API REST para gerenciamento de biblioteca pessoal — cadastro, listagem e avaliação de livros.

---

## 🔖 Sobre o Projeto

TSBooks API é uma aplicação backend construída com Node.js, Express e Prisma ORM para gerenciar livros de usuários, utilizando banco de dados PostgreSQL em container Docker.

Essa API oferece endpoints para criação e consulta de livros, com relacionamento entre usuários e livros, utilizando as melhores práticas modernas para desenvolvimento de APIs.

---

## 🛠 Tecnologias Utilizadas

| Tecnologia    | Versão/Detalhe                   |
| ------------ | ------------------------------- |
| Node.js      | 18+                             |
| Express      | 4.x                             |
| Prisma ORM   | 4.x                             |
| PostgreSQL   | 15 (container Docker)            |
| Docker       | Compose para containerização    |
| TypeScript   | Para tipagem estática           |

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

---

### Passo 1: Iniciar o banco PostgreSQL via Docker

No diretório `backend`:

docker-compose up -d
