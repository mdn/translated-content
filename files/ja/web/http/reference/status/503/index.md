---
title: 503 Service Unavailable
slug: Web/HTTP/Reference/Status/503
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`503 Service Unavailable`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)ステータスコードで、サーバーがリクエストを処理する準備ができていないことを示します。

よくある原因としては、サーバーがメンテナンスのために停止しているか、過負荷状態であることが挙げられます。
メンテナンス中は、サーバー管理者は一時的にすべてのトラフィックを `503` ページにリダイレクトすることがあります。また、ソフトウェアの更新中に自動的に発生することもあります。
過負荷の場合、メモリー、CPU、または接続プールの制限などのリソースのしきい値に達すると、サーバーサイドのアプリケーションの一部が `503` ステータスでリクエストを拒否します。
リクエストを拒否することで、サーバーのコンピューターリソースが枯渇するのを防ぐ背圧が生じ、より深刻な失敗を避けることができます。
{{Glossary("Rate_limit", "レート制限")}}により特定のクライアントからのリクエストが制限されている場合、適切なレスポンスは {{HTTPStatus("429", "429 Too Many Requests")}} です。

このレスポンスは一時的な状況に使用すべきであり、できれば HTTP ヘッダー {{HTTPHeader("Retry-After")}} に、サービスの復旧に要する予想時間を含めるべきです。

このレスポンスと共に、問題を分かりやすく説明するページを送信する必要があります。

> [!NOTE]
> このレスポンスとともに送信されるキャッシュ関連のヘッダーには特別な注意が求められます。`503` は一時的な課題を示し、レスポンスは通常キャッシュされるべきではありません。修正が展開された後にクライアントが古いエラーページを受け取る可能性があるからです。

## ステータス

```http
503 Service Unavailable
```

## 例

### 503 サーバーエラーレスポンス

以下のリクエストはウェブページを取得しようとしますが、`503` レスポンスを受け取ります。
レスポンス本体には、サーバーの状態を記述したページと、来訪者向けのサポートページへのリンクが含まれています。
サーバー管理者が問題の根本原因を絞り込むのに役立つ可能性があるメソッドの例として、レスポンス本体には識別子が含まれています。

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 503 Service Unavailable
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>503 Service Unavailable</title>
</head>
<body>
  <h1>503 Service Unavailable</h1>
  <p>The server was unable to complete your request. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
  <p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Retry-After")}}
