// Get all of our diaries data
var data = require('../diaries.json');

exports.view = function(req, res){
	console.log(data);
	data ['grid'] = false;
	res.render('index',data);
	};
	
exports.index2 = function(req, res){
	console.log(data);
	data ['grid'] = true;
	res.render('index2',data);
	};
	