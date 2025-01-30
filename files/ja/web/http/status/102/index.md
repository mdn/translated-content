---
title: 102 Processing
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}{{deprecated_header}}

HTTP の **`102 Processing`** は[情報レスポンス](/ja/docs/Web/HTTP/Status#情報レスポンス)ステータスコードで、リクエスト全体が受信され、サーバーがそれを処理中であることをクライアントに示します。
このステータスコードは、リクエストの処理に長時間かかるとサーバーが判断した場合のみ送信されます。

> [!NOTE]
> 通常のウェブサーバーは、このレスポンスを返しません。
> このステータスコードが最初に導入されたのは Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) {{RFC("2518")}} でしたが、 WebDAV からも {{RFC("4918")}} で削除されました。

## ステータス

```plain
102 Processing
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

この機能は非推奨であり、ブラウザーは、このレスポンスヘッダーを無視します。

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPStatus("100")}}
- [rfc4918 '102 Processing' removal notes](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
