---
title: 414 URI Too Long
slug: Web/HTTP/Reference/Status/414
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP の **`414 URI Too Long`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、クライアントがリクエストした URI が、サーバーが解釈しようとするものよりも長いことを示します。

これが発生する可能性がある条件はわずかです。

- クライアントが、 {{HTTPMethod("POST")}} リクエストを長いクエリー文字列をもつ {{HTTPMethod("GET")}} リクエストに変換した場合。
- クライアントがリダイレクトのループに陥った場合（たとえば、リダイレクトされた URI 接頭辞が自分自身の接尾辞を指していた場合など）。
- 潜在的なセキュリティホールを利用しようとしているクライアントがサーバーを攻撃している場合などです。

システムによっては `414 URI Too Long` を `414 Request-URI Too Large` として実装しています。

## ステータス

```http
414 URI Too Long
```

## 例

### GET を使用してフォームを送信

次の例では、HTML の [`<form>` の method](/ja/docs/Web/HTML/Reference/Elements/form#method) が誤って `post` ではなく `get` を使用しています。
大量のフォームデータがフォームの `action` 属性で指定された URL に追加され、 GET リクエストとして送信されます。

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: example.com
```

このリクエストにより、サーバーの URI の長さ制限に達し、レスポンスとして 414 が送信されます。

```http
HTTP/1.1 414 URI Too Long
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Length: 1234

<!doctype html>
<head>
  <title>414 - URI Too Long</title>
</head>
  <body>
    <h1>414 - URI Too Long</h1>
    <p>The URI provided was too long for the server to process.</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{Glossary("URI")}}
