---
title: 102 Processing
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}{{deprecated_header}}

HTTP **`102 Processing`** 情報ステータスレスポンスコードは、リクエスト全体が受信され、サーバーがそれを処理中であることをクライアントに示します。

このステータスコードは、リクエストの処理に長時間かかるとサーバーが判断した場合のみ送信されます。これは、クライアントにリクエストがまだ死んでいないことを伝えます。

> **メモ:** このステータスコードは非推奨になっており、もう送られるべきではありません。クライアントはまだ受け入れる可能性がありますが、単純に無視します。

## ステータス

```plain
102 Processing
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPHeader("Expect")}}
- {{HTTPStatus("100")}}
