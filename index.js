var http = require('http');
var sockjs = require('sockjs');

var clients = {};

function broadcast(message)
{
    for (var client in clients) {
        clients[client].write(JSON.stringify(message));
    }
}

var echo = sockjs.createServer();

echo.on('connection', function(conn) {
    clients[conn.id] = conn;

    conn.on('data', function (message) {
        console.log(message);
        broadcast(JSON.parse(message));
    });

    conn.on('close', function (conn) {
        if (typeof conn !== 'undefined') {
            delete clients[conn.id];
        }
    });
});

var server = http.createServer();

echo.installHandlers(server, { prefix: '/echo' });

server.listen(9999, '0.0.0.0');


