---
title: HTTP header (HTTP ヘッダー)
slug: Glossary/HTTP_header
---

**HTTP ヘッダー**は、 HTTP リクエストおよび HTTP レスポンスのフィールドで、メッセージや本文のセマンティクスを変更したり、より詳細に説明したりするための追加情報を渡します。ヘッダーは大文字と小文字を区別せず、行の先頭から始まり、直後に `':'` とヘッダー自体に依存する値が続きます。値は、次の CRLF またはメッセージの最後で終了します。

従来より、ヘッダーはカテゴリ分けされてきましたが、この分類は仕様書では定義されていません。

- {{Glossary("General header", "一般ヘッダー")}}: リクエストとレスポンスの両方に適用され、最終的に本文の中で送信されるデータとは関係のないヘッダー。
- {{Glossary("Request header", "リクエストヘッダー")}}: 取得するリソース又はクライアント自体に関する詳細情報を含むヘッダー。
- {{Glossary("Response header", "レスポンスヘッダー")}}: レスポンスについての追加情報、例えば場所やサーバー自身についての情報 (名前、バージョン、など) を含むヘッダー。
- {{Glossary("Entity header", "エンティティヘッダー")}}: コンテンツの長さや MIME タイプなど、エンティティの本文に関する詳細情報を含むヘッダー。

一つのヘッダーを持つ基本的なリクエストの例です。

```
GET /example.http HTTP/1.1
Host: example.com
```

リダイレクトの場合は、必須のヘッダー ({{HTTPHeader("Location")}}) があります。

```
302 Found
Location: /NewPage.html
```

典型的な一連のヘッダーの例です。

```
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```

1. 仕様書

   1. HTTP 仕様書における[ヘッダー](https://tools.ietf.org/html/rfc7230#section-3.2)の構文。

2. 技術リファレンス

   1. [全ての HTTP ヘッダー一覧](/ja/docs/Web/HTTP/Headers)

3. [用語集](/ja/docs/Glossary)

   1. {{Glossary("HTTP header", "HTTP ヘッダー")}}
   2. {{Glossary("General header", "一般ヘッダー")}}
   3. {{Glossary("Request header", "リクエストヘッダー")}}
   4. {{Glossary("Response header", "レスポンスヘッダー")}}
   5. {{Glossary("Entity header", "エンティティヘッダー")}}
   6. {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
   7. {{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}
   8. {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
   9. {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
