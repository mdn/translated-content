---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
tags:
  - HTTP
  - HTTPS
  - Security
  - header
browser-compat: http.headers.Upgrade-Insecure-Requests
translation_of: Web/HTTP/Headers/Upgrade-Insecure-Requests
---
{{HTTPSidebar}}

HTTP の **`Upgrade-Insecure-Requests`** リクエストヘッダーは、暗号化および認証されたレスポンスに対するクライアントの設定を表す信号をサーバーに送信し、 [CSP](/ja/docs/Web/HTTP/CSP) の {{CSP("upgrade-insecure-requests")}} ディレクティブが正常に処理できることを示します。

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
Upgrade-Insecure-Requests: 1
```

## 例

クライアントは、次のように {{CSP("upgrade-insecure-requests")}} のアップグレードメカニズムをサポートしていることをサーバーに通知します。

```
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

これで、サーバーは安全なバージョンのサイトにリダイレクトできます。 {{HTTPHeader("Vary")}} ヘッダーを使用することで、アップグレードメカニズムに対応していないクライアントにキャッシュからサイトが提供されなくなります。

```
Location: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("upgrade-insecure-requests")}} ディレクティブ
