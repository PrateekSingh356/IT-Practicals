// 10.Create an HTTP server using Node.js which handles requests on port 10000 or a free port beyond 10000. Modify the
// server in such a way that opening localhost:10000 will display "Hello World, This is my MOde.js server" on browser.
var http = require('http');
// var dt = require('./myfirstnode');

const hostname = "localhost";
const port = "10000";
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World");
  res.end();
});
server.listen(port,hostname ,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
