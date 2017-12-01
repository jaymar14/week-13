var tableData = require("../data/tableData.js");
var waitListData = require("../data/waitListData.js");

module.exports = function(app){
	app.get("/api/tables",function(req,res){
		res.json(tableData);
	});
	app.get("/api/waitList", function(req,res){
		res.json(waitListData);
	});

	app.post("api/tables", function(req,res){
		if(tableData.length < 5) {
			tableData.push(req.body);
			res.json(true);
		} else{
			waitingListData.push(req.body);
			res.json(false);
		}
	});

	app.post("/api/clear", function(){
		tableData = [];
		waitingListData = [];

		console.log(tableData);
	});	
};