---
title: X-Forwarded-Proto ヘッダー
short-title: X-Forwarded-Proto
slug: Web/HTTP/Reference/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **X-Forwarded-Proto** (XFP) {{Glossary("request header", "リクエストヘッダー")}}は、{{Glossary("Proxy_server", "プロキシー")}}またはロードバランサーへ接続するのに使っていたクライアントのプロトコル (HTTP または HTTPS) を特定するために事実上の標準となっているヘッダーです。

サーバーのアクセスログにはサーバーとロードバランサーの間で使われたプロトコルが含まれていますが、クライアントとロードバランサーの間で使用されたプロトコルは含まれていません。クライアントとロードバランサーの間で使用されたプロトコルを特定するには、 `X-Forwarded-Proto` リクエストヘッダーを使用することができます。

このヘッダーの標準化されたバージョンとして、HTTP の {{HTTPHeader("Forwarded")}} ヘッダーがありますが、こちらはあまり使用されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
X-Forwarded-Proto: <protocol>
```

## ディレクティブ

- `<protocol>`
  - : 転送されたプロトコル (`http` または `https`)

## 例

### X-Forwarded-Proto クライアントプロトコル

次のヘッダーは、元のリクエストがプロキシーやロードバランサーによって転送される前に、HTTPS 経由で送信されたことを示しています。

```http
X-Forwarded-Proto: https
```

### 標準外の形

リクエストヘッダーには、次のような形のものが見られることがあります。

```http
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## 仕様書

現行のどの仕様書にも含まれていません。このヘッダーの標準化版は {{HTTPHeader("Forwarded")}} ヘッダーです。

## 関連情報

- {{HTTPHeader("X-Forwarded-Host")}} ヘッダーと {{HTTPHeader("X-Forwarded-For")}} ヘッダー
- {{HTTPHeader("Forwarded")}}
