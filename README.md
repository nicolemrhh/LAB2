# Student & Course Management API

A simple Node.js + Express + MySQL API for managing students and courses.  
Supports full CRUD operations for both resources.

## 🚀 Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
Install dependencies:

npm install


Create a .env file (see .env.example for reference) and configure your database connection.

Start the server:

node server.js


Server will run at: http://localhost:3000/api

📌 Endpoints
Students

GET /api/students → Get all students

GET /api/students/:id → Get student by ID

POST /api/students → Create a new student

PUT /api/students/:id → Update a student

DELETE /api/students/:id → Delete a student

Courses

GET /api/courses → Get all courses

GET /api/courses/:id → Get course by ID

POST /api/courses → Create a new course

PUT /api/courses/:id → Update a course

DELETE /api/courses/:id → Delete a course

✅ Notes

node_modules and .env are excluded using .gitignore.

Database must be created in MySQL with the required students and courses tables.

Conclusion:


While building this project, I faced challenges with route configuration, MySQL schema setup, and Git identity errors.
Debugging Postman responses taught me to carefully check controllers and routes.
Overall, I learned the importance of clean structure, debugging with logs, and version control best practices when developing APIs. Also to be strict in checking the variables created, to make sure everything is in flow according to the steps and requirements given

