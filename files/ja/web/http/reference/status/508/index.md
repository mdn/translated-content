---
title: 508 Loop Detected
slug: Web/HTTP/Reference/Status/508
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`508 Loop Detected`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)のステータスコードで、 `Depth: infinity`のリクエストを処理中に無限ループに遭遇したため、操作全体が失敗したことを示しています。

このステータスコードは、 {{Glossary("WebDAV")}} (Web Distributed Authoring and Versioning) のコンテキストで使用される可能性があります。
これは、 WebDAV クライアントが {{HTTPStatus("208", "208 Already Reported")}} レスポンスに対応していない場合（リクエストに明示的に `DAV` ヘッダーが記載されていない場合）の代替策として導入されました。

## ステータス

```http
508 Loop Detected
```

## 例

### WebDAV 検索における無限ループ

```http
PROPFIND /Coll/ HTTP/1.1
Host: example.com
Depth: infinity
Content-Type: application/xml; charset="utf-8"
Content-Length: 125

<?xml version="1.0" encoding="utf-8" ?>
<D:propfind xmlns:D="DAV:">
  <D:prop> <D:displayname/> </D:prop>
</D:propfind>
```

```http
HTTP/1.1 508 Loop Detected
Content-Type: application/json; charset=utf-8
Server: Microsoft-IIS/8.0
Date: Wed, 15 May 2013 02:38:57 GMT
Content-Length: 72

{
  "Message": "Please check the resources for cyclic references and try again."
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("208", "208 Already Reported")}}
