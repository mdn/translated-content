---
title: 423 Locked
slug: Web/HTTP/Reference/Status/423
original_slug: Web/HTTP/Status/423
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

HTTP の **`423 Locked`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、対象のリソースがロックされている、すなわちアクセスできないことを示します。コンテンツは、 {{glossary("WebDAV")}} の XML 形式で情報を含むべきです。

> [!NOTE]
> リソースをロックする機能は、{{Glossary("WebDAV")}} サーバーの一部に固有のものです。ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることは無いはずです。これを受け取る間違った状況では、ブラウザーはこれを一般の {{HTTPStatus(400)}} ステータスコードとして扱うでしょう。

## ステータス

```http
423 Locked
```

## 例

### WebDAV 423 Locked レスポンス

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/web-dav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
