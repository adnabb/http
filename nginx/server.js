const http = require('http');
const fs = require('fs');

const port = 8080;
const host = 'localhost';

const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
};

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.end(fs.readFileSync('test.html', 'utf8'));
    }
    
    if(req.url === '/data') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control': 's-maxage=10',
        });

        wait(2).then(() => {
            res.end('succeed!');
        });
    }
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});