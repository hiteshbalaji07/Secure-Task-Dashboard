# React + TypeScript + Vite
# Secure Task Dashboard

A full-stack task management dashboard built using React, TypeScript, and Node.js.  
This application allows users to register, log in securely, and manage tasks efficiently.

---
 🚀 Tech Stack

Frontend
- React
- TypeScript
- Vite
- React Router
- Context API (State Management)
- Axios

Backend
- Node.js
- Express
- JWT Authentication
- Swagger (API Documentation)

---

📦 Installation & Setup

1️⃣ Clone the Repository

```bash
git clone https://github.com/hiteshbalaji07/Secure-Task-Dashboard.git
cd Secure-Task-Dashboard
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

2️⃣ Setup Backend
cd server
npm install
npm run dev

Server runs on:

http://localhost:5000

Swagger docs available at:

http://localhost:5000/api-docs

3️⃣ Setup Frontend

Open new terminal:

cd client
npm install
npm run dev

Frontend runs on:

http://localhost:5173

🔐 Features

User Registration & Login
JWT-based Authentication
Protected Routes
Task CRUD operations
API Documentation using Swagger
Clean UI/UX
React Context for state management

📚 Third-Party Packages Used
Frontend
react-router-dom – Routing
axios – API requests
typescript – Type safety

Backend
express – Server framework
jsonwebtoken – Authentication
bcryptjs – Password hashing
swagger-ui-express – API documentation

⚠️ Limitations

No role-based access control
No task filtering/sorting
No email verification
No deployment configuration included

🚀 Future Improvements

Add role-based authentication
Add pagination & filtering
Add dark mode
Deploy to production (Vercel + Render)
Add unit testing


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
