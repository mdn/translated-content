---
title: XMLHttpRequest.getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
tags:
  - API
  - ヘッダーの読み取り
  - ヘッダーの取得
  - HTTP
  - HTTP ヘッダー
  - メソッド
  - リファレンス
  - レスポンスヘッダー
  - XHR
  - XMLHttpRequest
  - getAllResponseHeaders
browser-compat: api.XMLHttpRequest.getAllResponseHeaders
translation_of: Web/API/XMLHttpRequest/getAllResponseHeaders
---
{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} の **`getAllResponseHeaders()`** メソッドは、すべてのレスポンスヘッダーを {{Glossary('CRLF')}} で区切った文字列として返し、レスポンスを受信していない場合は `null` を返します。

ネットワークエラーが発生した場合は、空文字列が返されます。

> **Note:** マルチパートリクエストでは、これはリクエストの元のチャンネルではなく、*現在の*部分を返します。

## 構文

```js
var headers = XMLHttpRequest.getAllResponseHeaders();
```

### 引数

なし。

### 返値

{{Glossary('CRLF')}} で区切ったすべてのレスポンスヘッダー (フィールド名が `Set-Cookie` または `Set-Cookie2` のものを除く) を表す文字列、またはレスポンスを受信していなければ `null` です。ネットワークエラーが発生した場合は、空文字列が返されます。

生のヘッダー文字列がどのように見えるかの例です。

```
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

> **Note:** 最近のブラウザーでは、ヘッダー名は最新の仕様書にあるように、すべて小文字で返されます。

## 例

この例では、リクエストの {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} イベントハンドラーである {{domxref("XMLHttpRequest.onreadystatechange")}} の中でヘッダーを調べます。このコードは生のヘッダー文字列を取得する方法、またそれを個別のヘッダーの配列に変換する方法、そして配列からヘッダー名とその値のマップを生成する方法を示しています。

```html
var request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED) {

    // 生のヘッダー文字列を取得
    var headers = request.getAllResponseHeaders();

    // ヘッダー文字列を個別のヘッダーの
    // 配列に変換
    var arr = headers.trim().split(/[\r\n]+/);

    // ヘッダー名と値のマップを生成
    var headerMap = {};
    arr.forEach(function (line) {
      var parts = line.split(': ');
      var header = parts.shift();
      var value = parts.join(': ');
      headerMap[header] = value;
    });
  }
}
```

いったんこれを行えば、次のようなことができます。

```js
var contentType = headerMap["content-type"];
```

これは {{httpheader("Content-Type")}} ヘッダーの値を変数 `contentType` の中に入れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- リクエストヘッダーの設定: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
