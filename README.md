# 🗂️ Task Manager App

A beginner-friendly full-stack Task Manager built with React, Tailwind CSS, Node.js, Express, and MongoDB. Users can register, log in, and manage their daily tasks.

---

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- ✅ Add, Edit, Delete Tasks
- 📅 Set Deadlines
- 🎯 Mark Tasks as Complete
- 📊 Dashboard for Task Overview

---

## 🛠 Tech Stack

**Frontend:**
- React
- Tailwind CSS
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Install Client Dependencies

```bash
cd client
npm install
```

### 3. Install Server Dependencies

```bash
cd ../server
npm install
```

### 4. Set Environment Variables

Create a `.env` file in the `server` directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start the Server

```bash
cd server
npm run dev
```

### 6. Start the Client

Open a new terminal, then:

```bash
cd client
npm start
```

## API Endpoints
| Method |  Endpoints | Description |


