const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const products = [];

// HOW TO SEND DATA FOR THIS API
//  {
//   "title": "Product Name 1",
//   "description": "Product Description 1",
//   "price": 12999
// }
// TITLE, DESCRIPTION AND PRICE TO POST THE DATA


// API LINK FOR POST AND GET
// http://localhost:3000/api/products 



app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});