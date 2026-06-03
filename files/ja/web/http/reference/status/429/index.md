---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`429 Too Many Requests`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、クライアントが指定時間内にたくさんリクエストを送信しすぎたことを示します。
リクエストの速度を落とすようにクライアントに依頼するこの仕組みは、一般に「{{glossary("rate limit", "速度制限")}}」と呼ばれています。

新しいリクエストを行う前にどのくらい待つかを示す {{HTTPHeader("Retry-After")}} ヘッダーをこのレスポンスに含めることができます。

速度制限の実装は様々で、制限はサーバー全体かもしれませんし、リソース毎かもしれません。
通常、速度制限はクライアントの IP アドレスに基づいて行われますが、リクエストが認証されている場合や{{Glossary("cookie", "クッキー")}}が含まれている場合は、ユーザーや許可されたアプリケーションに特定して制限することもあります。

## ステータス

```http
429 Too Many Requests
```

## 例

### Retry-After ヘッダーを含んだレスポンス

以下のリクエストが、設定ミスのあるクライアントによって繰り返しループして送信されているとします。

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

この例では、クライアントが 1 分あたりのリクエスト数が設定したしきい値を超えたときに、サーバー全体の速度制限が有効になります。
リクエストは 60 分後にこのクライアントに再び許可されることを示す {{HTTPHeader("Retry-After")}} ヘッダーとともに 429 レスポンスを返します。

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600

<html>
  <head>
    <title>Too Many Requests</title>
  </head>
  <body>
    <h1>Too Many Requests</h1>
    <p>You're doing that too often! Try again later.</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Retry-After")}}
- Python での解決策: [How to avoid HTTP error 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
