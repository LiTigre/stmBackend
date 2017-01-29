// dependencies
var express = require('express');
var router = express.Router();


var Data = require('../models/data');
var userData = require('../models/userdata');

Data.methods(['get', 'put', 'post', 'delete']);
Data.register(router, '/data');
userData.methods(['get', 'put', 'post', 'delete']);
userData.register(router, '/userdata');




module.exports = router;