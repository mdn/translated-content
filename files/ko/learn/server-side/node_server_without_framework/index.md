---
title: Node server without framework
slug: Learn/Server-side/Node_server_without_framework
---

## 소개

물론 [Node](https://nodejs.org/en/) 는 서버를 만들고 실행하는데 도움을 주는 많은 프레임워크가 있습니다, 예를 들면:

- [Express](http://expressjs.com/): 가장 많이 사용하는 프레임워크
- [Total](https://www.totaljs.com/): 올인원 통합 프레임워크로, 다른 프레임워크나 모듈에 의존성이 없습니다.

하지만, 모든 것에 꼭 맞는 사이즈가 없듯이, 개발자들은 어떤 다른 의존성 없이 스스로 서버를 만들어야 할 때가 있습니다.

## 예제

다음은 짧고 간단한 정적 파일 nodejs 서버입니다.

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
