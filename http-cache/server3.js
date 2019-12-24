const http = require('http');
const fs = require('fs');
const crypto = require('crypto');

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
        const stream = fs.createReadStream('script.js');
        const hash = crypto.createHash('sha256');

        stream.on('data', (data) => {
            hash.update(data);
        });

        stream.on('end', () => {
            const fileHash = hash.digest('hex');

            if (req.headers['if-none-match'] === fileHash) {
                res.writeHead(304, {
                    'Content-Type': 'text/javascript',
                    'Cache-Control': 'no-cache',
                    'etag': fileHash,
                })
                res.end('code 304');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/javascript',
                    'Cache-Control': 'no-cache',
                    'etag': fileHash,
                })
                res.end(fs.readFileSync('script.js'));
            }
        });
    }
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});