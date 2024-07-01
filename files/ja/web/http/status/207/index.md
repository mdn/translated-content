---
title: 207 Multi-Status
slug: Web/HTTP/Status/207
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

> **メモ:** _リソースのコレクション_ を返す機能は {{Glossary("WebDAV")}} プロトコルの一部です。(WebDAV サーバーにアクセスしているウェブアプリケーションが受信する可能性があります) ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることは無いでしょう。

HTTP **`207 Multi-Status`** レスポンスコードは、レスポンスが混ざっている可能性があることを示します。

レスポンスボディは `multistatus` ルート要素を持つ `text/xml` または `application/xml` の HTTP エンティティです。XML ボディですべての個別のレスポンスコードが列挙されます。

## ステータス

```plain
207 Multi-Status
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

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)
- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
