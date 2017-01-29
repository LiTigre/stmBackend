// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

var dataSchema = new mongoose.Schema({
	busNumber: Number,
	posterId: Number,
	time: Date,
	likes: Number
});



module.exports = restful.model('data', dataSchema);