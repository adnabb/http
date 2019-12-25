const http = require('http');
const fs = require('fs');

const port = 80;
const host = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.end(fs.readFileSync('test.html'));
    }

    if (req.url === '/script.js') {
        const file = fs.readFileSync('script.js');
        res.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'max-age=60',
        })
        res.end(file);
    }
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});