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
        let fileLastMofifiedDate = null;

        fs.stat('script.js', (err, data) => {
            if (err) throw err;

            fileLastMofifiedDate = data.ctime;

            if (req.headers['if-modified-since'] === `${fileLastMofifiedDate}`) {
                res.writeHead(304, {
                    'Content-Type': 'text/javascript',
                    'Cache-Control': 'no-cache',
                    'Last-Modified': fileLastMofifiedDate,
                })
                res.end('code 304');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/javascript',
                    'Cache-Control': 'no-cache',
                    'Last-Modified': fileLastMofifiedDate,
                })
                res.end(file);
            }
        });
    }
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});