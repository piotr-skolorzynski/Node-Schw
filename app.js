const http = require('http');

const routes = require('./routes');

// użycie importu dla alternatywnego ekspory
const server = http.createServer(routes.handler);

// const server = http.createServer(routes);

server.listen(3000);
