---
title: 511 Network Authentication Required
slug: Web/HTTP/Reference/Status/511
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`511 Network Authentication Required`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)ステータスコードで、コードは、クライアントがネットワークにアクセスするには認証が必要であることを示します。
このステータスは元のサーバーによって生成されるのではなく、ネットワークへのアクセスを制御する{{Glossary("Proxy_server", "プロキシー")}}によって生成されます。

ネットワーク操作を行う際に、アクセスを許可する前に認証や利用規約への同意、他にもユーザー操作が要求されることがあります（例えば、インターネットカフェや空港など）。
これらはよく、MAC (Media Access Control) アドレスを使用していないクライアントを識別します。

## ステータス

```http
511 Network Authentication Required
```

## 例

### GET リクエストの 511 レスポンス

次の例では、クライアントがネットワーク上のリソースにアクセスしようとしています。
リクエストは認証されず、プロキシーが `511` ステータスコードを送信して来訪者にログインを促します。
`511` は、ブラウザー以外のクライアントがレスポンスを元のサーバーからのものとして解釈しないように、レスポンスを確実に保持します。
ブラウザーは {{HTMLelement("meta")}} タグにより 10 秒後に自動的にリダイレクトされるか、レスポンス本体の中のリンクをクリックすることによりリダイレクトされます。

```http
GET /document HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 511 Network Authentication Required
Content-Type: text/html

<html>
  <head>
    <title>Network Authentication Required</title>
    <meta http-equiv="refresh" content="10; url=https://login.example.net/">
  </head>
  <body>
      <p>You need to <a href="https://login.example.net/">authenticate with the local network</a> in order to gain access.</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{Glossary("Proxy server", "プロキシーサーバー")}}
