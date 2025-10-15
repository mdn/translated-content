---
title: 208 Already Reported
slug: Web/HTTP/Reference/Status/208
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP の **`208 Already Reported`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、容量を節約し、競合を防ぐため、{{HTTPStatus("207", "207 Multi-Status")}} レスポンスで用いられます。
このレスポンスは、ウェブ分散オーサリングおよびバージョン管理 ({{Glossary("WebDAV")}}) のコンテキストでのみ使用されています。

同じリソースが（たとえばコレクションの一部として）異なるパスで複数回要求された場合、最初のもののみ {{HTTPStatus("200")}} で報告されます。
それ以外のすべてのバインディングへのレスポンスはこの `208` ステータスコードで報告されるので、競合を起こさず、レスポンスは短く保たれます。

> [!NOTE]
> いくつかのパスにリソースをバインドする機能は {{Glossary("WebDAV")}} プロトコルの拡張です（WebDAV サーバーにアクセスしているウェブアプリケーションが受信する可能性があります）。
> ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることは無いでしょう。

## ステータス

```http
208 Already Reported
```

## 例

### `208` を `207 Multi-Status` レスポンスの中で受信

次の例は、 WebDAV サーバーからの `207 Multi-Status` レスポンスで、これには `208` レスポンスが含まれます。
最後の `<D:status>` 要素の `208` に注目してください。これは、`Loop Demo` という名前のリソースが、以前の `207` レスポンスで報告されたことを示しています。

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
- {{HTTPStatus("508", "508 Loop Detected")}}
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
