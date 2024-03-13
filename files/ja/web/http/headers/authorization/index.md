---
title: Authorization
slug: Web/HTTP/Headers/Authorization
---

{{HTTPSidebar}}

HTTP の **`Authorization`** リクエストヘッダーは、ユーザーエージェントがサーバーから認証を受けるための証明書を保持し、ふつうは、必ずではありませんが、サーバーが {{HTTPStatus("401")}} `Unauthorized` ステータスと {{HTTPHeader("WWW-Authenticate")}} ヘッダーを返した後に使われます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Authorization: <type> <credentials>
```

## ディレクティブ

- \<type>

  - : [認証方式](/ja/docs/Web/HTTP/Authentication#認証方式)。一般的には ["Basic"](/ja/docs/Web/HTTP/Authentication#basic_認証方式) です。それ以外に以下のような種類があります。

    - [認証スキームの IANA レジストリ](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)
    - [AWS サーバーの認証 (`AWS4-HMAC-SHA256`)](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)

- \<credentials>

  - : "Basic" 認証方式を使用している場合、認証情報は次のように構築されます。

    - コロンで結合したユーザー名とパスワード (`aladdin:opensesame`)。
    - 結果の文字列は [base64](/ja/docs/Glossary/Base64) でエンコードされます (`YWxhZGRpbjpvcGVuc2VzYW1l`)。

    > **メモ:** Base64 エンコードは暗号化でもハッシュでもありません。この方法の安全性はクリアテキストで認証情報を送るのと同等です (Base64 は可逆エンコーディングです)。 Basic 認証は HTTPS との組み合わせで使用することをお勧めします。

## 例

```
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Apache や nginx サーバーで HTTP Basic 認証を使用してサイトを保護する方法の例については、 [HTTP authentication](/ja/docs/Web/HTTP/Authentication) を参照してください。

## 仕様書

| 仕様書                                  | 題名                                   |
| --------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Authorization", "4.2")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                         | The 'Basic' HTTP Authentication Scheme |

## 関連情報

- [HTTP 認証](/ja/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
