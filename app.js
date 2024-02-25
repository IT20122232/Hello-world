// Importing the built-in 'http' module
const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Setting the response HTTP header with 'Content-Type' to 'text/plain'
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Writing 'Hello, World!' to the response
  res.end('Hello, World!\n');
});

// Listening on port 3000 for connections
server.listen(3000, '127.0.0.1');

// Logging a message to the console
console.log('Server running at http://127.0.0.1:3000/');
