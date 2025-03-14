---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
l10n:
  sourceCommit: e626fb706bfef0d496f0a209554f80a2d9313c0c
---

{{HTTPSidebar}}

HTTP の **`508 Loop Detected`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Status#サーバーエラーレスポンス)のステータスコードで、 `Depth: infinity`のリクエストを処理中に無限ループに遭遇したため、操作全体が失敗したことを示しています。

このステータスコードは、 Web Distributed Authoring and Versioning (WebDAV) のコンテキストで使用される可能性があります。
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

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPStatus("208", "208 Already Reported")}}
