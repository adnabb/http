const http = require('http');
const fs = require('fs');

const port = 8088;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    res.end(fs.readFileSync('jsonp.js'));
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});