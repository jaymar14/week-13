
// variables for required packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 30001;
var reservations = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve.html", function (req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables.html", function (req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/new", function (req, res) {
	
	var newres = req.body;

	//newres.routeName = newres.name.replace(/\s+/g, "").toLowerCase();

	console.log(newres);

	reservations.push(newres);

});

app.get("/api/new", function (req, res) {
		
	//newres.routeName = newres.name.replace(/\s+/g, "").toLowerCase();

	console.log(reservations);
	res.json(reservations);

});

app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});