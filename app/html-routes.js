var path = requuire("path";)

module.exports = function(app){
	app.get("/tables",function(req,res){
		res.sendFile(path.join(__dirname + '/app/tables.html'));
	});
	app.get("/reserve",function(req,res){
		res.sendFile(path.join(__dirname + '/app/reserve.html'));
	});
	app.use(function(req,res){
		res.sendFile(path.join(__dirname + '/app/home.html'));
	});
}