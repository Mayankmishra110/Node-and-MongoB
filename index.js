const http = require('http');

http.createServer((req,resp) => {
    resp.write("hello this is maya");
    resp.end();
}).listen(4500);