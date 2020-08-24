const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Eu sou Full Cycle');
  res.end();
});

server.listen(8080);
