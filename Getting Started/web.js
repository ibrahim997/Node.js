/* web.js: */

/* The 'http' modeule allows the program to act as a web server.*/
/* the 'requrie' function includes this module and you can have the varibale 
'http' to refer to it.*/
var http = require("http");

/* 'process_request' function is called with two parameters:
   - an object representing the incoming request ('a ServerRequest object'),
   - an object representing the pending response ('a ServerResponse object').
*/
function process_request(req, res) {
    var body = 'Thanks for calling!\n';
    var content_length = body.length;
    /* The '200 OK' response passed to the 'ServerResponse #writeHead function is returned
    in the HTTP response headers, and you see the content-length and types are both shown.
    */
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

/* The 'createServer' function takes one argument that is a function that will be called
each and every time somebody makes a connection to the server.*/
var s = http.createServer(process_request);
/* When a server is created you tell it to start lisenting for incoming request on a 
particular port - here we used 8080.
*/
s.listen(8080);