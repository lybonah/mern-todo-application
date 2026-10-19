# MERN Todo Application

## About the Project
The MERN Todo Application is a full-stack web application that helps users manage their daily tasks. It demonstrates frontend and backend development using the MERN stack.

## Technologies Used
- **MongoDB** – Database to store tasks
- **Express.js** – Backend API framework
- **React.js** – User interface
- **Node.js** – Server-side JavaScript

## Features
- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Store tasks in a database
- Responsive and user-friendly interface

## Project Structure
- `frontend/` – React frontend application
- `backend/` – Node.js and Express backend API

## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/lybonah/mern-todo-application.git
cd mern-todo-application
```

### 2. Set up the backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add your own MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend using the command configured in `backend/package.json`, for example:

```bash
npm run dev
```

### 3. Set up the frontend
Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Security
Do not upload `.env` files, database passwords, or other secret credentials to GitHub.

## Author
Lybonah
