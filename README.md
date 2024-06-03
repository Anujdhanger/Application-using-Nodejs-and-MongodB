# Node.js, MongoDB and Fastify API

## Introduction

This project is an API built using Node.js, MongoDB, and Fastify. It provides features such as user registration, login, posting, commenting, and liking functionalities. The API endpoints are available for integration with front-end applications.

## Features

- User registration
- User login
- Posting functionality
- Commenting functionality
- Liking functionality

## Installation

To get started with the project, follow these steps:

### Prerequisites

- Node.js v12+
- MongoDB installed and running locally

### Clone the Repository

1. Clone the repository:
    ```bash
    git clone https://github.com/Anujdhanger/Application-using-Nodejs-and-MongodB.git
    cd Application-using-Nodejs-and-MongodB
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To run the API, use the following command:

```bash
npm run dev
```

### API Endpoints

- POST http://127.0.0.1:3030/auth/register : **Register a new user.**
- POST http://127.0.0.1:3030/auth/login : **Log in an existing user.**
- POST http://127.0.0.1:3030/auth/post : **Create a new post.**
- POST http://127.0.0.1:3030/auth/comment : **Add a comment to a post.**
- POST http://127.0.0.1:3030/auth/like : **Like a post.**