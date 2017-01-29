// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

var dataSchema = new mongoose.Schema({
	_id: Number,
	userName: String,
	password: String,
	infamy: Number
});



module.exports = restful.model('userdata', dataSchema);