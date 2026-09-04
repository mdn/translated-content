---
title: Request header (リクエストヘッダー)
slug: Glossary/Request_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**リクエストヘッダー**とは、HTTP リクエストで使用できる{{glossary("HTTP header", "HTTP ヘッダー")}}の一種であり、リクエストのコンテキストに関する情報を提供することで、サーバーがレスポンスを適切に調整できるようにするものです。例えば、{{HTTPHeader("Accept", "Accept-*")}} ヘッダーは、レスポンスで許可される形式や優先される形式を示します。それ以外にも、認証情報（例：{{HTTPHeader("Authorization")}}）の提供、キャッシュ制御、ユーザーエージェントやリファラーに関する情報の取得などに使用できます。

リクエストに含まれる可能性のあるヘッダーのすべてが、仕様書において「リクエストヘッダー」と呼ばれるわけではありません。例えば、{{HTTPHeader("Content-Type")}} ヘッダーは{{glossary("representation header", "表現ヘッダー")}}と呼ばれます。

加えて、{{Glossary("CORS")}} では、常に認証が考慮され、{{glossary("preflight request", "プリフライト")}}リクエストへのレスポンスで明確に列挙されないリクエストヘッダーの一部を{{glossary('simple header', '単純ヘッダー')}}として定義しています。

下記の HTTP メッセージは、{{HTTPMethod("GET")}} リクエスト後のいくつかのリクエストヘッダーを示しています。

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

## 関連情報

- [すべての HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Reference/Headers)
- [RFC 9110, section 6.3: Header Fields](https://httpwg.org/specs/rfc9110.html#header.fields)
