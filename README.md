# E-commerce API

This is an E-commerce API built with Node.js and Express. It provides routes for managing products and orders.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- Yarn (Package Manager)

### Installation

1. Clone the repository from GitHub:

   ```sh
   git clone https://github.com/fsmdsohel/e-commerce-product-server
   ```

2. Navigate to the project directory:

   ```sh
   cd e-commerce-product-server
   ```

3. Install the dependencies using Yarn:

   ```sh
   yarn install
   ```

## Running the Application

### Development

To start the development server, use the following command:

```sh
  yarn start:dev
```

The server will run on `http://localhost:9000`.

### Production

To start the production server, use the following command:

```sh
  yarn start
```

## Linting

To check the code for linting errors, run:

```sh
yarn eslint
```

To fix the linting errors automatically, run:

```sh
yarn eslint:fix
```

## API Endpoints

### Products

- **Create a new product**

  ```http
  POST /api/products
  ```

- **Get all products**

  ```http
  GET /api/products
  ```

- **Get a product by ID**

  ```http
  GET /api/products/:id
  ```

- **Update a product by ID**

  ```http
  PUT /api/products/:productId
  ```

- **Delete a product by ID**

  ```http
  DELETE /api/products/:productId
  ```

- **Search a product**

  ```http
  DELETE /api/products?searchTerm=iphone
  ```

### Orders

- **Create a new order**

  ```http
  POST /api/orders
  ```

- **Get all orders**

  ```http
  GET /api/orders
  ```

- **Retrieve Orders by User Email**

  ```http
  GET /api/orders?email=level2@programming-hero.com
  ```

## Default Route

- **Welcome Message**

  ```http
  GET /
  ```

  Response:

  ```json
  {
    "success": true,
    "message": "Welcome to the E-commerce API"
  }
  ```

## 404 Route

If a route is not found, the API will respond with a 404 status code:

```json
{
  "success": false,
  "message": "Route not found"
}
```

## Project Structure

- `app/`: Contains the application modules.
  - `modules/`
    - `product/`: Contains the product module files (controller, route, etc.).
    - `order/`: Contains the order module files (controller, route, etc.).
- `server.ts`: Main entry point for the application.

## License

This project is licensed under the MIT License.
