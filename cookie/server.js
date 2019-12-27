const http = require('http');
const fs = require('fs');

const port = 80;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html',
        'set-cookie': 'my-cookie',
    })
    res.end(fs.readFileSync('test.html'));
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});