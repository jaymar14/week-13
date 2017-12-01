// Require dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {
    case "/food":
    case "/movies":
    case "/frameworks":
      return renderHTML(path, res);

    // default to rendering index.html, if none of above cases are hit
    default:
      return renderHTML('/index.html', res);
  }
}

function renderHTML(filePath, res){
 return fs.readFile(__dirname + filePath, function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
}
// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
