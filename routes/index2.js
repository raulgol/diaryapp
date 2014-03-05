// Get all of our diaries data
var data = require('../diaries.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index2',data);
	};