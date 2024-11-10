---
title: 208 Already Reported
slug: Web/HTTP/Status/208
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

> [!NOTE]
> いくつかのパスにリソースを _バインド_ する機能は {{Glossary("WebDAV")}} プロトコルの拡張です。(WebDAV サーバーにアクセスしているウェブアプリケーションが受信する可能性があります) ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることは無いでしょう。

HTTP **`208 Already Reported`** レスポンスコードは、容量を節約し、競合を防ぐため、{{HTTPStatus("207")}} (`207 Multi-Status`) レスポンスで用いられます。
同じリソースが (たとえばコレクションの一部として) 異なるパスで複数回要求された場合、最初のもののみ {{HTTPStatus("200")}} で報告されます。
それ以外のすべてのバインディングへのレスポンスはこの `208` ステータスコードで報告されるので、競合を起こさず、レスポンスは短く保たれます。

## ステータス

```plain
208 Already Reported
```

## 例

```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"
Content-Length: 1241

<?xml version="1.0" encoding="utf-8" ?>
<D:multistatus xmlns:D="DAV:">
  <D:response>
    <D:href>http://www.example.com/Coll/</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.example.com/Coll/Foo</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Bird Inventory</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf9</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.example.com/Coll/Bar</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 208 Already Reported</D:status>
    </D:propstat>
  </D:response>
</D:multistatus>
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus("200")}}
