---
title: フレームワークなしの Node.js サーバー
short-title: プレーンな Node.js サーバー
slug: Learn_web_development/Extensions/Server-side/Node_server_without_framework
l10n:
  sourceCommit: c5d8af227105b2a6d2ab50ff74295ead221fce64
---

この記事では、フレームワークを一切使用せずに [Node.js](https://nodejs.org/ja/) で構築した静的ファイルサーバーをご紹介します。
現在の Node.js では、静的ファイルサーバーに必要な機能のほとんどが、組み込みの API といくつかの手数料で実現できる状態になっています。

## 例

Node.js で構築された静的ファイルサーバーです。

```js
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";

const PORT = 8000;

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "text/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const STATIC_PATH = path.join(process.cwd(), "./static");

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const urlAsPath = decodeURI(url);
  const paths = [STATIC_PATH, urlAsPath];
  if (url.endsWith("/")) paths.push("index.html");
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : `${STATIC_PATH}/404.html`;
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { "Content-Type": mimeType });
    file.stream.pipe(res);
    console.log(`${req.method} ${req.url} ${statusCode}`);
  })
  .listen(PORT);

console.log(`サーバーが http://127.0.0.1:${PORT}/ で実行中`);
```

### 各部の説明

第 1 行から第 3 行までは、Node.js が提供するモジュールを組み込みます。おおむね「インポート」に似たような手続きです。

```js
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";
```

次にある関数で、サーバーを生成します。`https.createServer` は `Server` オブジェクトを返します。このオブジェクトを起動するには、`PORT` でリクエストを待ち受けさせる必要があります。

```js
http
  .createServer((req, res) => {
    /* http リクエストを処理 */
  })
  .listen(PORT);

console.log(`サーバーが http://127.0.0.1:${PORT}/ で実行中`);
```

非同期関数 `prepareFile` は、`{ found: boolean, ext: string, stream: ReadableStream }` という構造体を返します。
ファイルを提供できる場合（サーバープロセスがアクセス権を持ち、パストラバーサル脆弱性が検出されない場合）、成功を示す `statusCode` として HTTP ステータス `200` を返します（それ以外の場合は `HTTP 404` を返します）。
それ以外にもステータスコードが得られるので、`http.STATUS_CODES` をご参照ください。
ステータス `404` の場合、`'/404.html'` ファイルのコンテンツを返します。

リクエストされたファイルの拡張子は構文解析され、小文字に変換されます。その後、`MIME_TYPES` 集合から適切な [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)を検索します。一致するものがなければ、デフォルトのタイプとして `application/octet-stream` を使用します。

最後に、エラーがなければ、リクエストされたファイルを送信します。`file.stream` には `Readable` ストリームが含まれ、それが `res`（`Writable` ストリームのインスタンス）にパイプ接続されます。

```js
res.writeHead(statusCode, { "Content-Type": mimeType });
file.stream.pipe(res);
```
