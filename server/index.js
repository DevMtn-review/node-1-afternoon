const express = require('express');
const app = express();
const controller = require('./Controller');
const port = 8080;

app.listen(port, () => console.log(`listening on port ${port}`));

//endpoints
app.get('/api/products', controller.getProducts());

app.get('/api/products/:id', controller.getOneProduct())