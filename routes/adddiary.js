var data = require("../diaries.json");

exports.addDiary = function(req, res) {  
	var name = req.query.diaryname;

	
	var jsonObject = 		{
			"diaryname": name		
		};
	console.log(jsonObject);
	
	data["diaries"].push(jsonObject);
	
}