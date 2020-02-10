const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let data = {
        nombre: 'Edgar',
        email: 'edgarsaban@gmail.com',
        url: req.url
    }

    res.write(JSON.stringify(data));

    res.end();
}).listen(3000);

console.log('Escuchando puerto 3000');