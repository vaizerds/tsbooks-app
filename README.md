# 📚 TSBooks App

A full stack book manager built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## ✨ Features
- 🔐 Sign in with GitHub (via NextAuth)
- ➕ Add and view books with title, author, and rating
- 👥 User-based access control
- 🗄️ PostgreSQL database via Prisma ORM
- 🎨 Styled with Tailwind CSS
- 🚀 Ready for deployment on Vercel or similar platforms

## 🧰 Tech Stack
- ⚛️ [Next.js](https://nextjs.org/)
- ⚛️ [React](https://reactjs.org/)
- 📜 [TypeScript](https://www.typescriptlang.org/)
- 🗃️ [Prisma ORM](https://www.prisma.io/)
- 🔑 [NextAuth.js](https://next-auth.js.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🐘 [PostgreSQL](https://www.postgresql.org/)

## 🚀 Getting Started

### 📋 Prerequisites
- ⚙️ Node.js >= 18
- 🐘 PostgreSQL database instance
- 🔐 GitHub OAuth App for authentication (https://github.com/settings/developers)

### 📦 Installation

```bash
git clone https://github.com/seu-usuario/tsbooks-app.git
cd tsbooks-app
npm install
```

### ⚙️ Set up Environment Variables
Create a `.env` file based on the example:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=any-random-string
DATABASE_URL=postgresql://user:password@localhost:5432/tsbooks
```

### 🏃 Run the Application

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## 🎯 Usage
- 🔑 Login using GitHub account
- ➕ Add books with title, author, rating (1-10)
- 📖 View and manage your list

## 📄 License
MIT
