---
title: Node.js server without a framework
slug: Learn/Server-side/Node_server_without_framework
---

{{LearnSidebar}}

Здесь вы найдёте описание простого статического сервера, который построен сугубо на Node.js без использования какого-либо фреймворка .

[Node.js](https://nodejs.org/en/) может использовать множество фреймворков, которые могут помочь создать сервер

Наиболее популярные:

- [Express](http://expressjs.com/): Один из наиболее популярных фреймворков.
- [Hapi.js](https://hapijs.com/): Набирающий популярность фреймворк для построения приложений и сервисов
- [Total](https://www.totaljs.com/): Этот фреймворк имеет богатую функциональность и не требует каких-либо дополнительных фреймворков или библиотек.

Конечно-же эти фреймворки могут и не подойти для каждого конкретного случая. Именно поэтому нужно знать как все работает изнутри, чтобы быть готовым сделать свой собственный сервер без каких-либо дополнительных зависимостей.

## Пример

Вот так выглядит статический сервер на Node.js:

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

## Задание

Попробуйте добавить в этот код описание как работает этот код. Как вариант ещё можно добавить функциональность динамических запросов.
