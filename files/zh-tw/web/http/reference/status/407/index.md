---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Reference/Status/407
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`407 Proxy Authentication Required`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示請求不成功，因為網站缺少對於位於用戶端與可訪問所請求資源的伺服器之間的{{Glossary("proxy server", "代理伺服器")}}的有效認證憑證。

此回應隨著一個含有如何正確認證的 {{HTTPHeader("Proxy-Authenticate")}} 請求標頭一同發送。用戶端可以重新發送請求，並帶上一個新的或更換過的 {{HTTPHeader("Proxy-Authorization")}} 標頭欄位。

## 狀態

```http
407 Proxy Authentication Required
```

## 範例

### 代理驗證

向 `example.com/admin` 發出一個 GET 請求：

```http
GET /admin HTTP/1.1
Host: example.com
```

在傳輸過程中，一個中介者通知用戶端必須進行身份驗證，並提供有關驗證方案的資訊：

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 認證](/zh-TW/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}、{{HTTPStatus("403")}}
