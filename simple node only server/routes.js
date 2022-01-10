const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first nodejs page</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></input></form></body>');
        res.write('</html>');
        
    } 
    
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first nodejs page</title></head>');
        res.write('<body><ul><li>User 1</li></ul>/body>');
        res.write('</html>')
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1]; // take value
            console.log(username);
            res.setHeader('Location', '/');
            return res.end();
        });

    } 
}

module.exports = requestHandler;