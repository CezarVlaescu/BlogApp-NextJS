const http = require('http'); // require is a function that loads and use modules, http module provides functionallity for creating HTTP server and making requests
const url = require('url'); // url module provides utility for URL resolution and parsing 

// Purpose in API:

// URL module parse the incoming request URL to extract information such as query parameters or pathnames (const path = parsedURL.pathname)
// HTTP module purpose to use funcitonallities to create an HTTP server, contains methods/prop need to create and managa server, handle http requests/response

import { books } from './data/datas';

const parseUrl = url.parse("http://localhost:8000", true);
console.log(parseUrl.protocol); //http
console.log(parseUrl.host); //http://localhost
console.log(parseUrl.port); //:8000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type ': 'text/plain' }); // set the response header with a status code and content type
    res.end("hello world") // send a response body
})

const port = 3000; // port to listen 

server.listen(port, () => log(`running on port ${port}`)); // start server

