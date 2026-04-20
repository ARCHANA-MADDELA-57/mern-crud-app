# MERN CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project demonstrates basic operations for managing data with a RESTful API and a responsive frontend interface.

---

## Features

* Create new records
* Read and display records
* Update existing records
* Delete records
* RESTful API integration
* Responsive user interface

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS 

### Backend

* Node.js
* Express.js

### Database

* MongoDB (MongoDB Atlas)

---

## Project Structure

```
mern-crud-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/ARCHANA-MADDELA-57/mern-crud-app
cd mern-crud-app
```

---

### 2. Backend Setup

```
cd backend
npm install 
```

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend server:

```
npm run dev
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm start
```

---

## API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | /api/create     | Create new record |
| GET    | /api/read       | Get all records   |
| PUT    | /api/update/:id | Update a record   |
| DELETE | /api/delete/:id | Delete a record   |

---

## Testing

* Use Postman to test API endpoints
* Ensure MongoDB connection is active

---
