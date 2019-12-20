const http = require('http');

const port = 8088;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'http://localhost',
        'Access-Control-Allow-Headers': 'My-Custom-Header',
    })
    res.end('awesome');
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});