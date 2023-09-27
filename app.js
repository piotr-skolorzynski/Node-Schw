const http = require('http');
const express = require('express');

//utworzenie aplikacji express
//czyli pakiet express emituje funkcję, którą możemy
//przekazać do funkcji crateServer
const app = express();

const server = http.createServer(app);

server.listen(3000);
