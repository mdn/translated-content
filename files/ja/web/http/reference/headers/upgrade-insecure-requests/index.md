---
title: Upgrade-Insecure-Requests ヘッダー
short-title: Upgrade-Insecure-Requests
slug: Web/HTTP/Reference/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Upgrade-Insecure-Requests`** {{Glossary("Request header", "リクエストヘッダー")}}は、暗号化および認証されたレスポンスに対するクライアントの設定を表す信号をサーバーに送信し、 [CSP](/ja/docs/Web/HTTP/Guides/CSP) の {{CSP("upgrade-insecure-requests")}} ディレクティブが正常に処理できることを示します。

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
Upgrade-Insecure-Requests: <boolean>
```

## ディレクティブ

- `<boolean>`
  - : `1` は 'true' を表し、このフィールドで唯一の有効な値です。

## 例

### Upgrade-Insecure-Requests の使用

クライアントは、次のように {{CSP("upgrade-insecure-requests")}} のアップグレードメカニズムに対応していることをサーバーに通知します。

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

これで、サーバーは安全なバージョンのサイトにリダイレクトできます。 {{HTTPHeader("Vary")}} ヘッダーを使用することで、アップグレードメカニズムに対応していないクライアントにキャッシュからサイトが提供されなくなります。

```http
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
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
