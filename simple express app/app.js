const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Hello middleware!');
    next();
})

app.use('/users', (req, res, next) => {
    res.send('<h1>Welcome users middleware </h1>');
})

const server = http.createServer(app);

server.listen(3000);