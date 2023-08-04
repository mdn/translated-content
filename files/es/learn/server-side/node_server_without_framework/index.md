---
title: Servidor Node sin framework
slug: Learn/Server-side/Node_server_without_framework
---

{{LearnSidebar}}

Este artículo proporciona un servidor de ficheros estático simple construido con Node.js puro, para aquellos de vosotros que no quieran usar un framework.

[NodeJS](https://nodejs.org/es/) tiene muchos `frameworks` para ayudarte a poner en marcha tu servidor, siendo los más populares:

- [Express](http://expressjs.com/): El framework más utilizado.
- [Total](https://www.totaljs.com/): El framework Node.js todo en uno que lo tiene todo y no depende de ningún otro framework o módulo.

Sin embargo, no existe una solución que se adapte a todas las situaciones. Un desarrollador puede necesitar construir su propio servidor, sin ninguna otra dependencia.

## Ejemplo

A continuación se muestra un servidor de archivos estático simple creado con NodeJS:

```js
var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (request, response) {
    console.log("request ", request.url);

    var filePath = "." + request.url;
    if (filePath == "./") {
      filePath = "./index.html";
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
    };

    var contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile("./404.html", function (error, content) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n",
          );
        }
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(8125);
console.log("Server running at http://127.0.0.1:8125/");
```

## Que Hacer

Sería bueno extender este artículo para explicar cómo funciona el código anterior, y quizás también mostrar una versión extendida que sirve archivos estáticos y también maneja algún tipo de solicitudes dinámicas.
