# 📚 TSBooks API

> Uma API REST moderna para gerenciar sua biblioteca pessoal de livros com Node.js, Prisma e PostgreSQL containerizado no Docker.

---

## 🚀 Sobre

Você já quis organizar seus livros favoritos de forma simples, rápida e eficiente?  
O **TSBooks API** foi feito para isso! Uma API backend poderosa, escalável e fácil de usar para cadastrar, listar e gerenciar livros associados a usuários.

---

## 💡 Funcionalidades

- 🚀 API RESTful simples e eficiente  
- 📦 CRUD completo de livros com relacionamento a usuários  
- 🐘 Banco PostgreSQL em container Docker  
- ⚡ Utiliza Prisma ORM para produtividade e segurança no banco  
- 🔐 Preparada para autenticação e segurança futuras  
- 🧪 Fácil de testar e ampliar

---

## 🛠️ Tecnologias

| Tecnologia     | Descrição                       |
| -------------- | ------------------------------ |
| Node.js + TS   | Backend moderno e tipado       |
| Express        | Framework web minimalista      |
| Prisma ORM     | Banco de dados com segurança   |
| PostgreSQL     | Banco relacional robusto       |
| Docker         | Containerização para fácil setup |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Docker
- Node.js
- npm

### Passos rápidos

```bash
cd backend
docker-compose up -d
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

---

## 🔗 Endpoints principais

| Método | Endpoint | Descrição               |
| ------ | -------- | ---------------------- |
| GET    | /books   | Listar todos os livros  |
| POST   | /books   | Criar um novo livro     |

---

## 📁 Estrutura do projeto

```
backend/
├── prisma/            # Schema Prisma e migrações
├── src/               # Código backend (Express + Prisma)
│   └── index.ts       # Entry point
├── docker-compose.yml
├── .env                # Variáveis de ambiente
├── package.json
└── tsconfig.json
```

---

## 🤝 Contribuindo

Contribuições são super bem-vindas!  
Abra issues, forks e pull requests para ajudar a melhorar o projeto.

---

## 📞 Contato

**Daniel Lucas Costa Rodrigues**  
[LinkedIn](https://www.linkedin.com/in/dlcrodrigues/) | daniel.l.c.rodrigues@gmail.com

---

## 📝 Licença

MIT License © 2025 Daniel Lucas Costa Rodrigues
