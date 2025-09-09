---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Reference/Status/451
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`451 Unavailable For Legal Reasons`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、法的理由により利用できないリソースをユーザーがリクエストしたことを示します。例えば、訴訟が提起されたウェブページなどです。

## ステータス

```http
451 Unavailable For Legal Reasons
```

## 例

### Link ヘッダー付きのレスポンス

このレスポンス例は IETF RFC 文書 (リンクは後述) にあるもので、モンティ・パイソンの[ライフ・オブ・ブライアン](https://ja.wikipedia.org/wiki/ライフ・オブ・ブライアン)からの引用を例に用いています。

> [!NOTE]
> {{HTTPHeader("Link")}} ヘッダーには、ブロックを実装したエンティティを特定する `rel="blocked-by"` 関係が含まれている可能性もあります。

リソースが利用できないことについて最終的な責任を負うエンティティを特定する試みは、`rel="blocked-by"` リンクではなく、レスポンス本体に記載すべきです。これには、コンテンツの除去につながる法的要請を行った人物または組織の名前が含まれます。

```http
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>This request may not be serviced in the Roman Province
            of Judea due to the Lex Julia Majestatis, which disallows
            access to resources hosted on servers deemed to be
            operated by the People's Front of Judea.</p>
      </body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [ウィキペディア: HTTP 451](https://ja.wikipedia.org/wiki/HTTP_451)
- [ウィキペディア: 華氏451度](https://ja.wikipedia.org/wiki/華氏451度)（このステータスコードの由来）
