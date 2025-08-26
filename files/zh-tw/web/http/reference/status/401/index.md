---
title: 401 Unauthorized
slug: Web/HTTP/Reference/Status/401
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`401 Unauthorized`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示請求未成功，因為缺乏有效的驗證憑證來訪問請求的資源。此狀態碼會與 HTTP {{HTTPHeader("WWW-Authenticate")}} 回應標頭一起發送，該標頭包含有關伺服器期望用戶端提供的[驗證方案](/zh-TW/docs/Web/HTTP/Guides/Authentication#驗證方案)的資訊，以便成功執行請求。

`401 Unauthorized` 類似於 {{HTTPStatus("403", "403 Forbidden")}} 回應，不過當請求包含有效憑證但用戶端沒有執行特定操作的權限時，會返回 403。

## 狀態

```http
401 Unauthorized
```

## 範例

### 向受保護的 API 發送未驗證的請求

以下是對 URL `www.example.com/admin` 發出的 GET 請求，該 URL 預期在 {{HTTPHeader("Authorization")}} 標頭中包含憑證：

```http
GET /admin HTTP/1.1
Host: example.com
```

伺服器回應 401 訊息並帶有 {{HTTPHeader("WWW-Authenticate")}} 標頭，表示該請求必須經過驗證，且 `Bearer` 認證（即存取權杖）是允許使用的[驗證方案](/zh-TW/docs/Web/HTTP/Guides/Authentication#驗證方案)：

```http
HTTP/1.1 401 Unauthorized
Date: Tue, 02 Jul 2024 12:18:47 GMT
WWW-Authenticate: Bearer
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 驗證](/zh-TW/docs/Web/HTTP/Guides/Authentication)
- {{Glossary("Challenge")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}、{{HTTPStatus("407")}}
