$(document).ready(function() {
		var IP=prompt("Please enter server IP\nLeave blank to start local server");
		if (IP!=null)
  		{
        beginLocalServer();
        alert("connect to server");
  			console.log("connect to server");
  		} else {
        beginLocalServer();
        alert("`server");
  			console.log("server started");
  		}
	});


function beginLocalServer() {
  var http = require('http');
  var server = http.createServer();
  server.listen(1700);
  // http.createServer(function (req, res) {
  //     res.writeHead(200, {'Content-Type': 'text/plain'});
  //     res.end('Hello World\n');
  // }).listen(1600, '0.0.0.0');
  alert("Yes");
  console.log('Server running at http://0.0.0.0:1338/');
};