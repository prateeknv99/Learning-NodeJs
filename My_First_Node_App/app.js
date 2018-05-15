const http = require('http'); //requiring http in variable http-http is a module of node.js
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

  //creating server-and it requires a function as parameter request.
  //const server = http.createServer(function(re){});
  const server = http.createServer((req, res) => {
    res.statusCode = 200; //200 is code that says everything is ok.
    res.setHeader('Content-type', 'text/html');//text/plain -for writing text on web
    res.write(html);
    //res.end('Hello World!');
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port '+port);
    console.log('Server running at http://127.0.0.1:'+port);
  });

});
