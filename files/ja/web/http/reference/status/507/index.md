---
title: 507 Insufficient Storage
slug: Web/HTTP/Reference/Status/507
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`507 Insufficient Storage`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)のステータスコードで、サーバーがリクエストを完全に完了するために十分な利用できるストレージ容量がないため、アクションが実行できなかったことを示します。

このステータスコードは、 {{Glossary("WebDAV")}} (Web Distributed Authoring and Versioning) のコンテキストで最初に使用されましたが、他にもサーバーリソースが枯渇している状況を説明する用途で使用されている例があります。
このエラーの一般的な原因としては、サーバーディレクトリーで利用できる容量が不足している、操作に必要な RAM が十分でない、内部制限に達している（例えば、アプリケーション固有のメモリー制限など）などが考えられます。
このエラーの原因となるリクエストには、必ずしもコンテンツを含める必要はありません。成功すればサーバー上にリソースを作成するリクエストである可能性があるからです。

この問題は一時的なものと見なされます。一方 {{HTTPStatus("413", "413 Content Too Large")}} は、サーバーリソースの制約に関係なく、クライアントのリクエストがサーバーで処理するには大きすぎることを示します。

## ステータス

```http
507 Insufficient Storage
```

## 例

### ストレージの問題を示す 507 レスポンス

次のリクエストは、利用できるストレージ容量が不足しているサーバーにファイルをアップロードしようとしています。
サーバーはリソースが枯渇していることを示すために `507` を返します。

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: image/jpeg
Content-Length: 123456

[JPG file data]
```

```http
HTTP/1.1 507 Insufficient Storage
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 230

<html>
<head>
  <title>507 Insufficient Storage</title>
</head>
<body>
  <h1>Insufficient Storage</h1>
  <p>The server is unable to store the included resource to complete the request.</p>
  <p>Please try again later.</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("413", "413 Content Too Large")}}
