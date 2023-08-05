const http = require('http');
const data = require('./api');
http.createServer((req,resp) =>{

    resp.writeHead(200,{'Content-Type':'application\json}'});
    resp.write(JSON.stringify({name:'Anil Sidhu',email:'mayank@mishra.com'}));
    resp.write(JSON.stringify(data));
    resp.end();
    // console.log("mayank")
  }).listen(5000);
