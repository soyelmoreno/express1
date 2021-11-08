const path = require('path');
const fs = require('fs');

const basePathToData = path.join(__dirname, './data');

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

exports.getData = function (request, response) {
  var data = getJsonData(basePathToData, 'data.json');
  setTimeout(function () {
    return response.send(data);
  }, 100);
};
