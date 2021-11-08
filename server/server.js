const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'build')));

var dataController = require('./dataController');

// Routes
app.get('/api', dataController.getHome);
app.get('/api/data', dataController.getData);
app.get('/api/products', dataController.getProducts);

const port = 3002;

app.listen(process.env.PORT || port, () => {
  console.log(`App listening at http://localhost:${port}...`);
});
