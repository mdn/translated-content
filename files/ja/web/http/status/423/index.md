---
title: 423 Locked
slug: Web/HTTP/Status/423
l10n:
  sourceCommit: bb25f8e4cb5819b439e370010b4f0c7bcc0fda8e
---

{{HTTPSidebar}}

> [!NOTE]
> リソースを _ロック_ する機能は、{{Glossary("WebDAV")}} サーバーの一部に固有のものです。ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることは無いはずです。これを受け取る間違った状況では、ブラウザーはこれを一般の `400` ステータスコードとして扱うでしょう。

HTTP **`423 Locked`** エラーレスポンスコードは、対象のリソースが _ロックされている_、すなわちアクセスできないことを示します。コンテンツは、WebDAV の XML 形式で情報を含むべきです。

## ステータス

```plain
423 Locked
```

### 例

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/webdav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## 仕様書

{{Specifications}}
