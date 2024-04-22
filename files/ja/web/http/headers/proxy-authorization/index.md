---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
---

{{HTTPSidebar}}

HTTP **`Proxy-Authorization`** リクエストヘッダーは、プロキシサーバーに対してユーザーエージェントを認証するための認証情報を保持し、ふつうはサーバーが {{HTTPStatus("407")}} `Proxy Authentication Required` ステータスと {{HTTPHeader("Proxy-Authenticate")}} ヘッダーを返した後に使われます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header","リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name","禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Proxy-Authorization: <type> <credentials>
```

## ディレクティブ

- \<type>
  - : [認証方式](/ja/docs/Web/HTTP/Authentication#認証方式)。一般的には ["Basic"](/ja/docs/Web/HTTP/Authentication#basic_認証方式) です。[認証方式の IANA レジストリ](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)も参照してください。
- \<credentials>

  - : "Basic" 認証方式を使用している場合、認証情報は次のように構築されます。

    - コロンで結合したユーザー名とパスワード (`aladdin:opensesame`)。
    - 結果の文字列は [Base64](/ja/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) でエンコードされます (`YWxhZGRpbjpvcGVuc2VzYW1l`)。

    > **メモ:** Base64 エンコードは暗号化でもハッシュでもありません。この方法の安全性はクリアテキストで認証情報を送るのと同等です (Base64 は可逆エンコーディングです)。 Basic 認証は HTTPS との組み合わせで使用することをお勧めします。

## 例

```
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

## 仕様書

| 仕様書                                        | 題名                                   |
| --------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Proxy-Authorization", "4.4")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                               | The 'Basic' HTTP Authentication Scheme |

## 関連情報

- [HTTP 認証](/ja/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
