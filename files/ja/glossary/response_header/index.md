---
title: Response header (レスポンスヘッダー)
slug: Glossary/Response_header
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

**レスポンスヘッダー** (response header) は、HTTP レスポンスで使用できる {{glossary("header", "HTTP ヘッダー")}}で、メッセージの内容には関連しないものです。{{HTTPHeader("Age")}}, {{HTTPHeader("Location")}}, {{HTTPHeader("Server")}} のようなレスポンスヘッダーは、レスポンスのものより詳細なコンテキストを提供するために使用されます。

レスポンスに現れるすべてのヘッダーが、仕様書でレスポンスヘッダーに分類されている訳ではありません。例えば {{HTTPHeader("Content-Type")}} ヘッダーは{{glossary("representation header", "表現ヘッダー")}}であり、レスポンスメッセージの本文の元のデータ形式を表します（{{HTTPHeader("Content-Encoding")}} 表現ヘッダーが適用される前のエンコーディングです）。ただし、口語的には、レスポンスメッセージに含まれるヘッダーはすべて、レスポンスヘッダーと呼ばれることが一般的です。

以下は、{{HTTPMethod("GET")}} リクエストの後で返されるいくつかのレスポンスヘッダーと表現ヘッダーを示しています。

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
ETag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: my-key=my value; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## 関連情報

- [すべての HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Reference/Headers)
- 関連用語:
  - {{Glossary("Representation header", "表現ヘッダー")}}
  - {{Glossary("HTTP Header", "HTTP ヘッダー")}}
  - {{Glossary("Request header", "リクエストヘッダー")}}
