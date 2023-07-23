---
title: フレームワークなしの Node.js サーバ
slug: Learn/Server-side/Node_server_without_framework
---

{{LearnSidebar}}

この記事では、フレームワークを使用せずに、Node.js だけで構築された単純な静的ファイルサーバを紹介します。

[Node.js](https://nodejs.org/en/)用に、サーバを稼働させるのに役立つ多くのフレームワークがあります。

最も人気があるのは、次のようなものです：

- [Express](http://expressjs.com/): 広く使われているフレームワーク
- [Hapi.js](https://hapijs.com/): アプリケーションとサービスを構築するための豊富なフレームワーク
- [Total](https://www.totaljs.com/): 他のフレームワークやモジュールに依存しない、オールインワンの Node.js フレームワーク。

これらは、どんな状況にも適しているというわけではありません。開発者は既存のフレームワークに依存することなく、独自のサーバを構築する必要があることもあるでしょう。

## 静的ファイルサーバーの例

Node.js で構築された、簡単な静的ファイルサーバの例を以下に示します。

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

### 各部の説明

第 1 行から第 3 行までは、Node.js が提供するモジュールを組み込みます。おおむね「インポート」に似たような手続きです。

```js
var http = require("http");
var fs = require("fs");
var path = require("path");
```

次にある関数で、サーバーを生成します。 `https.createServer`は、サーバーオブジェクトを返しますが、下の例ではポート 8125 で要求の受付を開始します。

```js
http.createServer(function (request, response) {
    ...
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
```

次の 4 行では、要求があった URL から、ファイルへのパスを決定します。ファイル名が明示されていないときは、デフォルト名を使うようにします。

```js
console.log("request ", request.url);
var filePath = "." + request.url;
if (filePath == "./") {
  filePath = "./index.html";
}
```

例えば、`example.org`という URL を要求されたときは、`example.org/index.html`.のことだと解釈します。

次に、要求されたファイルの拡張子を調べ、以下に定義する[MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)のどれかと一致したら、そのタイプを使います。一致しない場合には、デフォルトのタイプ`application/octet-stream`を使うようにします。.

```js
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
```

最後に、ファイルの情報をクライアントに返送します。この関数では、あらかじめ用意してあった`filePath`変数を使ってファイルを読み込みます。

```js
fs.readFile(filePath, function(error, content) {
    ...
});
```

関数のなかで最初にやることは、起こりうるエラーへの対応です。

```js
if (error) {
  ..
} else {
  ..
}
```

一番多いのは、存在しないファイルを要求された場合（`ENOENT`）で、エラーコード 404 に対応するページを返してやります。

```js
if (error.code == "ENOENT") {
  fs.readFile("./404.html", function (error, content) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(content, "utf-8");
  });
} else {
  response.writeHead(500);
  response.end(
    "Sorry, check with the site admin for error: " + error.code + " ..\n",
  );
}
```

何もエラーが検出されなかったら、MIME 型をヘッダーに付けて、要求されたファイルを返してやります。

```js
response.writeHead(200, { "Content-Type": contentType });
response.end(content, "utf-8");
```

## 拡張の検討

静的なファイルの返送機能だけでなく、要求の度にページを動的に生成する機能を付け加えることを考えてみてください。
