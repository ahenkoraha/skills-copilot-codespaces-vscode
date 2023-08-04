// Create web server
var server = http.createServer(function (req, res) {
//     // Normalize URL by removing querystring, optional 
//     // trailing slash, and making lowercase 
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }
});
// 
server.listen(3000);
// 
// console.log('Server started on localhost:3000; press Ctrl-C to terminate...