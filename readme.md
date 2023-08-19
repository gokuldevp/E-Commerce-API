# E Commerce API

This is a E Commerce API built using Node.js and Express.js. It allows you to manage products by creating, updating, displaying, and deleting them.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [GitHublink](#contributing)
- [Links](#links)

## Getting Started

### Prerequisites

To run this application, you'll need:

- Node.js
- MongoDB

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running:
```
npm install express mongoose body-parser nodemon dotevn 
```
4. Configure the MongoDB connection in the config/mongoose.js file.

## Usage
1. Start the server by running:
```
npm start
```
2. API testing tool (eg. postman) and making requests to the specified routes.

## Endpoints

1. GET /products: Get a list of all products.
2. POST /products/create: Create a new product.
3. POST /products/:id/update_quantity: Update the quantity of a specific product.
4. DELETE /products/:id: Delete a specific product.
* For more information about the API endpoints and their usage, refer to the code documentation and comments.

## Links
[github link](https://github.com/gokuldevp/E-Commerce-API)
[deployment link](https://e-commerce-api-s0eu.onrender.com/)


