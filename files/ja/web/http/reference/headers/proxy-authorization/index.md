---
title: Proxy-Authorization ヘッダー
short-title: Proxy-Authorization
slug: Web/HTTP/Reference/Headers/Proxy-Authorization
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Proxy-Authorization`** {{Glossary("Request header","リクエストヘッダー")}}は、プロキシーサーバーに対してユーザーエージェントを認証するための認証情報を保持し、ふつうはサーバーが {{HTTPStatus("407", "407 Proxy Authentication Required")}} ステータスと {{HTTPHeader("Proxy-Authenticate")}} ヘッダーを返した後に使われます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header","リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Proxy-Authorization: <auth-scheme> <credentials>
```

## ディレクティブ

- `<auth-scheme>`
  - : 大文字小文字を区別しないトークンで、使用されている[認証方式](/ja/docs/Web/HTTP/Guides/Authentication#認証方式)を示します。
    [`Basic`](/ja/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` `AWS4-HMAC-SHA256` がよく使用されます。
    IANA は[認証方式の一覧](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)を管理していますが、ホストサービスによって提供されているそれ以外の方式も存在します。
- `<credentials>`
  - : 認証スキームで使用する資格情報。
    通常、その書式については関連する仕様書を調べる必要があります。

> [!NOTE]
> 詳しくは {{HTTPHeader("Authorization")}} を参照してください。

## 例

### ベーシック認証

`Basic` 認証方式を使用している場合、認証情報は `<ユーザー名>:<パスワード>` の形式（例えば `aladdin:opensesame`）で送信されます。
結果の文字列は、それを [base64](/ja/docs/Glossary/Base64) エンコードしたもの (`YWxhZGRpbjpvcGVuc2VzYW1l`) です。

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Base64 エンコード方式は復号可能であるため、暗号的なセキュリティにはなりません。
> この方式は、資格情報を平文で送信することと同等であると考えることができます。
> 認証を使用する場合は常に {{Glossary("HTTPS")}} の使用が推奨されますが、`Basic` 認証を使用する場合はなおさらです。

### Bearer 認証（認証トークン）

```http
Proxy-Authorization: Bearer kNTktNTA1My00YzLT1234
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
