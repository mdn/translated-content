---
title: 500 Internal Server Error
slug: Web/HTTP/Reference/Status/500
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`500 Internal Server Error`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)のステータスコードで、サーバーが予期せぬ状況に遭遇し、リクエストの履行が妨害されたことを示します。
このエラーは、サーバーの課題に対する一般的な「すべてをカバーする」レスポンスであり、サーバーがレスポンスとして返すのにより適切な [5XX エラー](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)を見つけられなかったことを示します。

訪問者がウェブページで `500` エラーを目にしたら、サーバーの所有者または管理者が調査を行うこと必要があります。
`500` エラーの原因となり得るものは数多くあり、不適切なサーバー設定、メモリー不足 (OOM) の問題、未処理の例外、不適切なファイル権限、他にも複合的な要因が考えられます。
サーバー管理者は、将来的にサービスの安定性を向上させるために、`500` ステータスコードのようなサーバーエラーレスポンスの発生を、リクエストされた内容の詳細とともに積極的に記録しておくことがあります。

## ステータス

```http
500 Internal Server Error
```

## 例

### 500 サーバーエラーレスポンス

以下のリクエストはウェブページを取得しようとしますが、500 レスポンスが返されます。
レスポンス本体には、サーバーの状態を記述したページと、来訪者向けのサポートページへのリンクが含まれています。
サーバー管理者が問題の根本原因を特定するのに役立つ可能性がある方法を示すために、レスポンス本体には識別子が含まれています。

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 500 Internal Server Error
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>500 Internal Server Error</title>
</head>
<body>
  <h1>Internal Server Error</h1>
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
