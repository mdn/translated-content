---
title: Authorization
slug: Web/HTTP/Headers/Authorization
---

{{HTTPSidebar}}

HTTP 請求中的 **`Authorization`** 是 user agent 用來向伺服器做身份認證（authentication）的憑證（credentials），
通常是在伺服器回應 {{HTTPStatus("401")}}
`Unauthorized` 狀態及 {{HTTPHeader("WWW-Authenticate")}} 標頭後才會在後續請求使用這個標頭。

| Header type                                      | {{Glossary("Request header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## 語法

```html
Authorization: <type> <credentials>
```

## 指令

- \<type>
  - : [認證方式](/zh-TW/docs/Web/HTTP/Authentication#authentication_schemes)，通常是 ["Basic"](/zh-TW/docs/Web/HTTP/Authentication#basic_authentication_scheme)。其他方式可以參考：

    - [IANA registry of Authentication schemes](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)
    - [Authentification](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html) for AWS servers (`AWS4-HMAC-SHA256`)
- \<credentials>
  - : 如果使用「Basic」方式，則憑證的格式會長的像這樣：

    - 帳號、密碼會用冒號（:）串起來（`aladdin:opensesame`）。
    - 然後在以 [base64](/zh-TW/docs/Glossary/Base64) 編碼 (`YWxhZGRpbjpvcGVuc2VzYW1l`)。

    > **備註：** Base64 編碼不是加密也不是雜湊（Hash）！就算用明文直接傳，安全性也跟用 base64 編碼過一樣（base64 是可以解碼的）。最好用 HTTPS 搭配這種驗證方式。

## 範例

```plain
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

可以看看 [HTTP authentication](/zh-TW/docs/Web/HTTP/Authentication) 中的範例
教你如何在 Apache 或 nginx 上啟用 HTTP basic authentication 來保護你的網站。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- [HTTP authentication](/zh-TW/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
