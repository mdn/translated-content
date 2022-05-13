---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
tags:
  - HTTP
  - HTTPヘッダー
  - Reference
  - ヘッダー
  - リクエストヘッダー
  - 標準外
translation_of: Web/HTTP/Headers/X-Forwarded-Proto
---
{{HTTPSidebar}}

**X-Forwarded-Proto** (XFP) ヘッダーは、プロキシーまたはロードバランサーへ接続するのに使っていたクライアントのプロトコル (HTTP または HTTPS) を特定するために事実上の標準となっているヘッダーです。サーバーのアクセスログにはサーバーとロードバランサーの間で使われたプロトコルが含まれていますが、クライアントとロードバランサーの間で使用されたプロトコルは含まれていません。クライアントとロードバランサーの間で使用されたプロトコルを特定するには、 `X-Forwarded-Proto` リクエストヘッダーを使用することができます。

標準化されたヘッダーは HTTP {{HTTPHeader("Forwarded")}} ヘッダーです。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

## 構文

```
X-Forwarded-Proto: <protocol>
```

## ディレクティブ

- \<protocol>
  - : 転送されたプロトコル (http または https)

## 例

```
X-Forwarded-Proto: https
```

その他の標準外の形式:

```
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## 仕様書

現行のどの仕様書にも含まれていません。このヘッダーの標準化版は {{HTTPHeader("Forwarded")}} ヘッダーです。

## 関連情報

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
