---
title: 504 Gateway Timeout
slug: Web/HTTP/Reference/Status/504
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`504 Gateway Timeout`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)ステータスコードで、サーバーがゲートウェイまたは{{Glossary("Proxy_server", "プロキシー")}}として動作している際に、リクエストを完了するために上流のサーバーからタイムリーにレスポンスを受け取れなかったことを示します。
これは {{HTTPStatus("502", "502 Bad Gateway")}} と似ていますが、`504` ステータスの場合、プロキシーまたはゲートウェイが一定時間内に元のサーバーから HTTP レスポンスを受け取れなかったという点が異なります。

`504` エラーの原因は数多くあり、このような問題を修正するには、サーバー管理者の調査と修正が要求される可能性が高いです。または、サイトが後日再び機能するようになるかもしれません。
例外は、クライアントのネットワークエラーです。特に、サービスが他の来訪者に対してはうまく動作しており、クライアントが VPN やその他の独自のネットワーク設定を使用している場合です。
このような場合、クライアントはネットワーク設定、ファイアウォール設定、プロキシー設定、DNS 構成などを確認する必要があります。

## ステータス

```http
504 Gateway Timeout
```

## 例

### 504 ゲートウェイタイムアウトレスポンス

以下のリクエストはウェブページを取得しようとしますが、`504` レスポンスが返されます。
レスポンス本体には、サーバーの状態が記述されたページと来訪者向けのサポートページへのリンクが含まれています。

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 504 Gateway Timeout
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>504 Gateway Timeout</title>
</head>
<body>
  <h1>Gateway timeout</h1>
  <p>The server did not respond in time. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("502", "502 Bad Gateway")}}
