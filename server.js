const http = require('http');

const port = 80;
const host = '10.122.4.19';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});