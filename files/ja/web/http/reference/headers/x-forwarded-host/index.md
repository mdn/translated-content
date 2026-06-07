---
title: X-Forwarded-Host
slug: Web/HTTP/Reference/Headers/X-Forwarded-Host
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`X-Forwarded-Host`** (XFH) {{Glossary("request header", "リクエストヘッダー")}}は、HTTP の {{HTTPHeader("Host")}} リクエストヘッダー内でクライアントからリクエストされたオリジンホストを特定するための事実上の標準となっているヘッダーです。

このヘッダーはデバッグ、統計、位置に依存したコンテンツの生成などに使用され、クライアントの IP アドレスのようなプライバシーに敏感な情報を公開します。従って、このヘッダーを展開する時は、ユーザーのプライバシーに留意する必要があります。

標準化されたヘッダーは HTTP {{HTTPHeader("Forwarded")}} ヘッダーです。

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

```
X-Forwarded-Host: <host>
```

## ディレクティブ

- \<host>
  - : 転送されたサーバーのドメイン名

## 例

```
X-Forwarded-Host: id42.example-cdn.com
```

## 仕様書

現行のどの仕様書にも含まれていません。このヘッダーの標準化版は {{HTTPHeader("Forwarded")}} ヘッダーです。

## 関連情報

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
