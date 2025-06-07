# TaskManager 🗂️

![TaskManager](https://img.shields.io/badge/TaskManager-Full--stack%20Web%20Application-blue)

Welcome to the **TaskManager** repository! This is a full-stack web application designed to help you manage your tasks efficiently. Built with a robust backend and a user-friendly frontend, this application allows users to create, update, and delete tasks seamlessly.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Frontend](#frontend)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)
10. [Releases](#releases)

## Features ✨

- **User Authentication**: Secure sign-up and login for users.
- **Task Management**: Create, read, update, and delete tasks.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Real-time Updates**: Changes reflect immediately for all users.
- **Dark Mode**: Switch between light and dark themes easily.

## Technologies Used 🛠️

- **Frontend**: React, Tailwind CSS, HTML, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Heroku (or your preferred hosting service)

## Getting Started 🚀

To get started with the TaskManager application, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mhrawnak/TaskManager.git
   cd TaskManager
   ```

2. **Install dependencies**:

   For the backend:

   ```bash
   cd backend
   npm install
   ```

   For the frontend:

   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the backend directory and add your MongoDB connection string and other necessary environment variables.

4. **Run the application**:

   Start the backend server:

   ```bash
   cd backend
   npm start
   ```

   Start the frontend application:

   ```bash
   cd frontend
   npm start
   ```

Now, you can access the application at `http://localhost:3000`.

## Usage 📖

Once the application is running, you can create an account or log in. After logging in, you can:

- **Add a new task**: Click on the "Add Task" button and fill in the task details.
- **Edit a task**: Click on the task you want to edit and update the information.
- **Delete a task**: Click on the delete icon next to the task you wish to remove.

## API Endpoints 📡

The backend API provides several endpoints for task management:

- **POST /api/tasks**: Create a new task.
- **GET /api/tasks**: Retrieve all tasks.
- **GET /api/tasks/:id**: Retrieve a task by ID.
- **PUT /api/tasks/:id**: Update a task by ID.
- **DELETE /api/tasks/:id**: Delete a task by ID.

### Example Request

To create a new task, send a POST request to `/api/tasks` with the following JSON body:

```json
{
  "title": "My new task",
  "description": "Details about my new task"
}
```

## Frontend 🎨

The frontend of TaskManager is built using React and styled with Tailwind CSS. This combination allows for a modern and responsive user interface. The components are structured for easy navigation and usability.

### Component Structure

- **App.js**: Main application component.
- **TaskList.js**: Displays the list of tasks.
- **TaskForm.js**: Form for adding and editing tasks.
- **Navbar.js**: Navigation bar for user actions.

## Contributing 🤝

We welcome contributions to TaskManager! If you want to help improve the application, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact 📬

For any questions or suggestions, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [mhrawnak](https://github.com/mhrawnak)

## Releases 📦

You can find the latest releases of the TaskManager application [here](https://github.com/mhrawnak/TaskManager/releases). Download the necessary files and execute them to run the application. 

For further updates and version changes, please check the "Releases" section regularly.

---

Thank you for checking out TaskManager! We hope you find it useful for managing your tasks effectively.