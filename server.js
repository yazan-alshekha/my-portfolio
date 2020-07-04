'use strict';

const express = require('express');

const server = express();


const PORT = process.env.Port || 3100;

server.listen(PORT, () => {
    console.log('i am listening on port', PORT);
});

// to kill process
// killall -s KILL node

server.use(express.static('./public'));


server.get('/test', (request, response) => {
    response.send('response');
    console.log('response');
});

server.get('/', (request, response) => {
    response.send('hello');
});