---
title: 207 Multi-Status
slug: Web/HTTP/Reference/Status/207
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP の **`207 Multi-Status`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、レスポンスが混在していることを示します。
このレスポンスは、ウェブ分散オーサリングおよびバージョン管理 ({{Glossary("WebDAV")}}) のコンテキストでのみ使用されています。

レスポンス本体は `text/xml` または `application/xml` の HTTP エンティティであり、 `multistatus` ルート要素に個々のレスポンスコードが列挙されています。

> [!NOTE]
> ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることはないでしょう。
> リソースのコレクションを返すことができる機能は {{Glossary("WebDAV")}} プロトコルの一部であり、 WebDAV サーバーにアクセスするウェブアプリケーションのみが受信する可能性があります。

## ステータス

```http
207 Multi-Status
```

## 例

### `207` レスポンスを WebDAV のコンテキストで受信

次のレスポンスは、 {{Glossary("WebDAV")}} サーバーがクライアントに送信する `207` レスポンスの例です。
`multistatus` ルート要素があり、個々の集合の詳細が含まれています。

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

- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
