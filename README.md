# 📚 Book Management REST API

A RESTful API built using Node.js and TypeScript that allows users to manage a collection of books with CRUD operations and CSV bulk import support.

---

## 🚀 Features

- Create, Read, Update, Delete books
- Bulk CSV import with validation
- Type-safe code with TypeScript
- Logging with Morgan
- Centralized error handling
- Unit test support with Jest
- MVC project structure

---

## 🔧 Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/book-management-api.git
   cd book-management-api
Install dependencies:

bash
npm install

Create .env file:
.env
PORT=5000
Run in development mode:
bash
npm run dev
Run tests:
npm test

```
📦 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get a specific book
POST	/books	Add a new book
PUT	/books/:id	Update a book
DELETE	/books/:id	Delete a book
POST	/books/import	Upload CSV file (form-data)

📂 Postman Collection
🔗 Download or open Postman Collection

🧪 Sample CSV Format
title,author,publishedYear
The Hobbit,J.R.R. Tolkien,1937
1984,George Orwell,1949


🏗️ Tech Stack
Node.js

TypeScript

Express

Multer (for file upload)

Jest (for testing)
---
