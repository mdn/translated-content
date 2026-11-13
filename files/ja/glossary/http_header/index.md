---
title: HTTP header (HTTP ヘッダー)
slug: Glossary/HTTP_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**HTTP ヘッダー** は、 HTTP リクエストやレスポンスのフィールドで、そのリクエストやレスポンスに関する追加のコンテキストやメタデータを渡します。例えば、リクエストメッセージはヘッダーを使用して推奨するメディア形式を示すことができ、レスポンスはヘッダーを使用して返す本体のメディア形式を示すことができます。ヘッダーは大文字小文字を区別せず、行の始めには `':'` が続き、その直後にヘッダー依存の値が続きます。値は次の CRLF かメッセージの終わりで完了します。

HTTP 仕様書やフェッチ仕様書では、次のような複数のヘッダーカテゴリーを使用しています。

- {{Glossary("Request header", "リクエストヘッダー")}}: 取得するリソースまたはクライアント自体に関する詳細情報を含むヘッダー。
- {{Glossary("Response header", "レスポンスヘッダー")}}: レスポンスについての追加情報、例えば場所やサーバー自身についての情報 (名前、バージョン、など) を含むヘッダー。
- {{Glossary("Representation header", "表現ヘッダー")}}: メッセージ本体のリソースに関するメタデータ（エンコード方式、メディア種別、など）。
- {{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}: メッセージ本体のリソースに関するメタデータ（エンコード方式、メディア種別、など）のヘッダー。

一つのヘッダーを持つ基本的なリクエストの例です。

```http
GET /example.html HTTP/1.1
Host: example.com
```

リダイレクトの場合は、必須のヘッダー ({{HTTPHeader("Location")}}) があります。

```http
302 Found
Location: /NewPage.html
```

典型的な一連のヘッダーの例です。

```http
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

> [!NOTE]
> 仕様書の古いバージョンでは次のようになっていました。
>
> - {{Glossary("General header", "一般ヘッダー")}}: リクエストとレスポンスの両方に適用されるヘッダーですが、最終的に本体で送信されるデータとは関係がありません。
> - {{Glossary("Entity header", "エンティティヘッダー")}}: コンテンツの長さや MIME タイプなど、エンティティの本体に関する詳細情報を含むヘッダー（これは、これで表現メタデータヘッダーと呼ばれるもののスーパーセットです）。

## 関連情報

- [全ての HTTP ヘッダー一覧](/ja/docs/Web/HTTP/Reference/Headers)
- [ヘッダー](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) の構文（HTTP 仕様書、英語）
- 関連用語:
  - {{Glossary("HTTP header", "HTTP ヘッダー")}}
  - {{Glossary("Request header", "リクエストヘッダー")}}
  - {{Glossary("Response header", "レスポンスヘッダー")}}
  - {{Glossary("Representation header", "表現ヘッダー")}}
  - {{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}
  - {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
  - {{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}
  - {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
  - {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
