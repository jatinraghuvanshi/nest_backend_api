# 🚀 NestJS Backend API – SDE Intern (Backend)

This repository contains a **backend REST API** developed using **NestJS**, **PostgreSQL**, and **TypeORM** as part of the **SDE Intern (Backend) technical assessment** for **Code Inbound LLP**.  
The project follows clean architecture principles, secure authentication practices, and includes proper validation, error handling, and unit testing.

---

## 📌 Project Overview

The goal of this project is to demonstrate strong backend development fundamentals using NestJS.  
It implements a modular and scalable API with authentication, authorization, database integration, and testing, following industry best practices commonly used in real-world backend systems.

---

## ✨ Features

- Modular and scalable **NestJS architecture**
- **PostgreSQL** database integration using **TypeORM**
- Full **CRUD (Create, Read, Update, Delete)** operations
- **JWT-based Authentication & Authorization**
- Secure password hashing using **bcrypt**
- **Input validation** using `class-validator`
- Proper **error handling** and HTTP responses
- **Unit tests** written using Jest
- Clean Git commit history and documentation

---

## 🛠️ Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** class-validator, class-transformer
- **Testing:** Jest
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

src/
├── auth/ # Authentication & JWT logic
├── users/ # User CRUD operations
├── app.module.ts # Root module
├── main.ts # Application entry point
test/
├── e2e tests # End-to-end test setup

## API Endpoints

Users API
Method	Endpoint	Description
POST	/users	Create a new user
GET	/users	Get all users (JWT required)
GET	/users/:id	Get user by ID
PUT	/users/:id	Update user details
DELETE	/users/:id	Delete a user


## 👨‍💻 Author
Jatin Rana
B.Sc. Computer Science (Hons)
Full Stack Developer