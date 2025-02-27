---
title: 502 Bad Gateway
slug: Web/HTTP/Status/502
l10n:
  sourceCommit: 8ec1d24d4f935e73f39df9a7d69e58c098ebb003
---

{{HTTPSidebar}}

HTTP の **`502 Bad Gateway`** [サーバーエラーレスポンス](/ja/docs/Web/HTTP/Status#サーバーエラーレスポンス)ステータスコードは、ゲートウェイまたは{{Glossary("Proxy_server", "プロキシー")}}として機能しているサーバーが上流のサーバーから不正なレスポンスを受け取ったことを示しています。

このレスポンスは、サーバーエラーの一般的な「例外処理」という意味では、{{HTTPStatus("500", "500 Internal Server Error")}} レスポンスと似ています。
違いは、エラーが発生したリクエストチェーンのポイントが特定されている点です。
元のサーバーがゲートウェイに有効な HTTP エラーレスポンスを送信した場合、`502` をクライアントに渡すのではなく、レスポンスを渡すべきです。
これにより、失敗の理由が明確になります。プロキシーまたはゲートウェイが元のサーバーから HTTP レスポンスを受信していない場合、代わりに {{HTTPStatus("504", "504 Gateway Timeout")}} をクライアントに送信します。

`502` エラーには多くの原因があり、このような問題を修正するには、サーバーの所有者または管理者の確認が必要になるでしょう。
例外は、クライアントのネットワークエラーであり、特に、このサービスが他の来訪者に対して動作する場合、および、クライアントが VPN などの独自のネットワーク設定を使用している場合です。
このような場合、クライアントはネットワーク設定、ファイアウォール設定、プロキシー設定、DNS 構成などを確認する必要があります。

## ステータス

```http
502 Bad Gateway
```

## 例

### 502 ゲートウェイエラーレスポンス

次のリクエストはウェブページを取得しようとしますが、`502` レスポンスが返されます。
レスポンス本体には、サーバーの状態を記述したページと、来訪者向けのサポートページへのリンクが含まれています。

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 502 Bad Gateway
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>502 Bad Gateway</title>
</head>
<body>
  <h1>Bad Gateway</h1>
  <p>The server was unable to complete your request. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus(504)}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
