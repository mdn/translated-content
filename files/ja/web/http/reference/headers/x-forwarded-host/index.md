---
title: X-Forwarded-Host ヘッダー
short-title: X-Forwarded-Host
slug: Web/HTTP/Reference/Headers/X-Forwarded-Host
l10n:
  sourceCommit: 0e40ec22841891d42376ad8a6d29135953c5106c
---

HTTP の **X-Forwarded-Host** (XFH) {{Glossary("request header", "リクエストヘッダー")}}は、HTTP の {{HTTPHeader("Host")}} リクエストヘッダー内でクライアントからリクエストされたオリジンホストを特定するための事実上の標準となっているヘッダーです。

リバース{{Glossary("Proxy_server", "プロキシー")}}（ロードバランサー、CDN）のホスト名とポート番号は、リクエストを扱うオリジンサーバーとは異なってもよく、この場合はもともと使用されていたのがどのホストであるかを特定するのに `X-Forwarded-Host` ヘッダーが便利です。

標準化されたバージョンのヘッダーは HTTP の {{HTTPHeader("Forwarded")}} ヘッダーですが、使用されている頻度ははるかに低くなっています。

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
X-Forwarded-Host: <host>
```

## ディレクティブ

- `<host>`
  - : 転送されたサーバーのドメイン名

## 例

```http
X-Forwarded-Host: id42.example-cdn.com
```

## 仕様書

現行のどの仕様書にも含まれていません。

## 関連情報

- {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} ヘッダー
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
