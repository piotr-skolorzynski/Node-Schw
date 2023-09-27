const http = require('http');

// const routes = require('./routes');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greeting!</title><head>');
        res.write(
            `<body>
                <h1>Greetings from my first server!</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
                    <button type="submit">Send</button>
                </form>
            </body>`);
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Greeting!</title><head>');
        res.write(
            `<body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </body>`
        );
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => body.push(chunk));

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
});

server.listen(3000);