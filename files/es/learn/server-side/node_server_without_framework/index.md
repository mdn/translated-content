---
title: Servidor Node sin framework
slug: Learn/Server-side/Node_server_without_framework
translation_of: Learn/Server-side/Node_server_without_framework
---
{{LearnSidebar}}

Este artículo proporciona un servidor de ficheros estático simple construido con Node.js puro, para aquellos de vosotros que no quieran usar un framework.

[NodeJS](https://nodejs.org/en/) has many frameworks to help you get your server up and running, the most popular being:

- [Express](http://expressjs.com/): The most used framework.
- [Total](https://www.totaljs.com/): The all-in-one Node.js framework that has everything and does not depend on any other framework or module.

There is however not a solution that will suit every situation. A developer may need to build his/her own server, without any other dependency.

## Example

Below is a simple static file server built with NodeJS:

```js
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
```

## To do

It would be nice to extend this article to explain how the above code works, and perhaps also show an extended version that serves static files and also handles some kind of dynamic requests too.
