---
title: "XMLHttpRequest: getAllResponseHeaders() メソッド"
short-title: getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("XMLHttpRequest API")}}

{{domxref("XMLHttpRequest")}} の **`getAllResponseHeaders()`** メソッドは、すべてのレスポンスヘッダーを {{Glossary('CRLF')}} で区切った文字列として返し、レスポンスを受信していない場合は `null` を返します。

ネットワークエラーが発生した場合は、空文字列が返されます。

> [!NOTE]
> マルチパートリクエストでは、これはリクエストの元のチャンネルではなく、*現在の*部分を返します。

## 構文

```js-nolint
getAllResponseHeaders()
```

### 引数

なし。

### 返値

{{Glossary('CRLF')}} で区切ったすべてのレスポンスヘッダー（フィールド名が `Set-Cookie` のものを除く）を表す文字列、またはレスポンスを受信していなければ `null` です。ネットワークエラーが発生した場合は、空文字列が返されます。

生のヘッダー文字列がどのように見えるかの例です。

```http
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
```

各行はキャリッジリターンとラインフィード文字 (`\r\n`) の両方で終わります。これらはそれぞれのヘッダーを区切る基本的なデリミターです。

> [!NOTE]
> 最近のブラウザーでは、ヘッダー名は最新の仕様書にあるように、すべて小文字で返されます。

## 例

この例では、リクエストの {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} イベントの中でヘッダーを調べます。このコードは生のヘッダー文字列を取得する方法、またそれを個別のヘッダーの配列に変換する方法、そして配列からヘッダー名とその値のマップを生成する方法を示しています。

```js
const request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = () => {
  if (request.readyState === this.HEADERS_RECEIVED) {
    // 生のヘッダー文字列を取得
    const headers = request.getAllResponseHeaders();

    // ヘッダー文字列を個別のヘッダーの
    // 配列に変換
    const arr = headers.trim().split(/[\r\n]+/);

    // ヘッダー名と値のマップを生成
    const headerMap = {};
    arr.forEach((line) => {
      const parts = line.split(": ");
      const header = parts.shift();
      const value = parts.join(": ");
      headerMap[header] = value;
    });
  }
};
```

いったんこれを行えば、次のようなことができます。

```js
const contentType = headerMap["content-type"];
```

これは {{httpheader("Content-Type")}} ヘッダーの値を変数 `contentType` の中に入れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- リクエストヘッダーの設定: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
