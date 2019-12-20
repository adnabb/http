const http = require('http');
const fs = require('fs');

const port = 80;
const host = 'localhost';

const htmlFile = fs.readFileSync('test.html', 'utf8');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(htmlFile);
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});