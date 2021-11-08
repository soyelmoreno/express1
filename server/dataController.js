const path = require('path');
const fs = require('fs');

const basePathToData = path.join(__dirname, './data');

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

exports.getHome = function (request, response) {
  return response.send('Hello World');
};

exports.getData = function (request, response) {
  var data = getJsonData(basePathToData, 'data.json');
  setTimeout(function () {
    return response.send(data);
  }, 100);
};

exports.getProductByQuery = function (request, response) {
  console.log('Running getProductByQuery.');
  var products = getJsonData(basePathToData, 'products.json');
  const handle = request.query.handle;
  let output;
  if (!handle) {
    output = products;
  } else if (products[handle]) {
    output = products[handle];
  } else {
    output = {
      id: 'xxxxxxxxquery',
      description: 'No product found with the requested handle',
    };
  }
  setTimeout(function () {
    return response.send(output);
  }, 100);
};

exports.getProductByRoute = function (request, response) {
  console.log('Running getProductByRoute.');
  var products = getJsonData(basePathToData, 'products.json');
  const handle = request.params.handle;
  let output;
  if (products[handle]) {
    output = products[handle];
  } else {
    output = {
      id: 'ddddddddroute',
      description: 'No product found with the requested handle',
    };
  }
  setTimeout(function () {
    return response.send(output);
  }, 100);
};
