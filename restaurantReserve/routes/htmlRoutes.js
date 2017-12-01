var path = require("path");

module.exports = function(app){
	app.get("/tables.html", function(req,res){
		res.sendFile(path.join(__dirname,"./public/tables.html"));
	});
	app.get("/reserve.html", function(req,res){
	res.sendFile(path.join(__dirname,"./public/reserve.html"));
	});
	app.get("*", function(req,res){
		res.sendFile(path.join(__dirname,"./public/reserve.html"));
	});
};