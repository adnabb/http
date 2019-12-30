const http = require('http');
const fs = require('fs');

const port = 80;
const host = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.end(fs.readFileSync('test.html', 'utf8'));
    } else {
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
        });
        res.end(fs.readFileSync('dongni.jpg'))
    }
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});