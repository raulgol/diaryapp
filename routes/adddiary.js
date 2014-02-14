var data = require("../diaries.json");

exports.addFriend = function(req, res) {  
	var name = req.query.name;

	
	var jsonObject = 		{
			"diaryname": name		
		};
	console.log(jsonObject);
	
	data["diaries"].push(jsonObject);
	
}