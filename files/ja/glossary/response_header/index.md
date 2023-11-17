---
title: Response header (レスポンスヘッダー)
slug: Glossary/Response_header
---

**レスポンスヘッダー**は、 HTTP レスポンスで使用できる {{glossary("header", "HTTP ヘッダー")}}で、メッセージの内容には関連しないものです。 {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}}, {{HTTPHeader("Server")}} のようなレスポンスヘッダーは、レスポンスのものより詳細な文脈を提供するために使用されます。

レスポンスに現れるすべてのヘッダーが仕様書で*レスポンスヘッダー*に分類されている訳ではありません。例えば {{HTTPHeader("Content-Length")}} ヘッダーは*表現メタデータヘッダー*であり、レスポンスメッセージの本文の長さを表します (そして、古いバージョンの仕様書では{{glossary("entity header", "エンティティヘッダー")}}でした)。しかし、これらのエンティティヘッダーもそのような場面ではレスポンスヘッダーと呼ばれることがよくあります。

以下に、 {{HTTPMethod("GET")}} リクエストの後のレスポンスヘッダーをいくつか示します。なお、正確に言えば、 {{HTTPHeader("Content-Encoding")}} 及び {{HTTPHeader("Content-Type")}} ヘッダーは{{glossary("entity header", "エンティティヘッダー")}}です。

```
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

1. Learn more

   1. [すべての HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Headers)

2. [用語集](/ja/docs/Glossary)

   1. {{Glossary("Entity header", "エンティティヘッダー")}}
   2. {{Glossary("Header", "ヘッダー")}}
   3. {{Glossary("Response header", "レスポンスヘッダー")}}

      1. {{Glossary("Fetch metadata response header", "フェッチメタデータレスポンスヘッダー")}}

   4. {{Glossary("Request header", "リクエストヘッダー")}}
