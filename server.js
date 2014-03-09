var DEBUG = false;
var PORT = 3100;
var QUEUE_SIZE = 8;

var http = require('http');

var server = http.createServer();
server.listen(PORT);

var io = require('socket.io').listen(server);
io.set ('transports', ['xhr-polling', 'jsonp-polling']);
var index = 1;

// This is listening on for every new connections
// with client.
io.sockets.on('connection', function(client) {
    
    // Listen action from each client and then
    // Broadcast to all keep the state same.
    client.on('action', function(action){
        if(DEBUG)
            console.log("Message: " + action);
        // actions.inject(action);
        client.broadcast.emit('action', action);
    });
})
