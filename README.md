# Ecommerce-API

Hosted URL:  `https://ecommerce-api-sle6.onrender.com/`

# Introduction
This is a simple REST API implementation using Node.js, Express.js and MongoDB. The API allows to perform CRUD operations on a Product resource.

## Installation
To run this API locally, follow these steps:

Clone the repository to your local machine

`$ git clone https://github.com/durgesh14/Ecommerce-API.git`

### Install the required dependencies

`$ npm install`

- Connect to your MongoDB database by setting the DB_URI environment variable in a .env file

- Start the server

`$ npm start`

## API Endpoints
### Create a product

`POST /products/create`

#### Request Body (raw - json)
```javascript
{
  "product": {
    "name": "Laptop",
    "quantity": 10
  }
}```

#### Response
```javascript
{
  "data": {
    "product": {
      "_id": "5f1b7f2df70cab22d8f24c5f",
      "name": "Laptop",
      "quantity": 10,
      "createdAt": "2022-07-28T16:54:21.187Z",
      "updatedAt": "2022-07-28T16:54:21.187Z",
      "__v": 0
    }
  }
}
```
`Get all products`

#### GET /products/
Response
```javascript
{
  "data": {
    "products": [
      {
        "_id": "5f1b7f2df70cab22d8f24c5f",
        "name": "Laptop",
        "quantity": 10,
        "createdAt": "2022-07-28T16:54:21.187Z",
        "updatedAt": "2022-07-28T16:54:21.187Z",
        "__v": 0
      },
      ...
    ]
  }
}
```

#### Update a product

`POST /products/:id/update_quantity?number=10`

`Request URL`

`/products/5f1b7f2df70cab22d8f24c5f/update_quantity?number=10`

Response
```javascript
{
  "data": {
    "product": {
      "_id": "5f1b7f2df70cab22d8f24c5f",
      "name": "Laptop",
      "quantity": 20,
      "createdAt": "2022-07-28T16:54:21.187Z",
      "updatedAt": "2022-07-28T17:01:37.148Z",
      "__v": 0
    },
    "message": "updated successfully"
  }
}
```

`Delete a product`

#### DELETE /products/:id

`Request URL`

`/products/5f1b7f2df70cab22d8f24c5f`

Response
```javascript
{
    "data": {
        "message": "product deleted"
    }
}
```
