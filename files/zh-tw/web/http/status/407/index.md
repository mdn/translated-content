---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`407 Proxy Authentication Required`** 用戶端錯誤狀態回應碼表示請求未被應用，因為它缺少對於位於瀏覽器與可訪問所請求資源的伺服器之間的{{Glossary("proxy server", "代理伺服器")}}的有效認證憑證。

此狀態隨著一個含有如何正確授權的 {{HTTPHeader("Proxy-Authenticate")}} 標頭一同發送。

## 狀態

```http
407 Proxy Authentication Required
```

## 範例

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 認證](/zh-TW/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}、{{HTTPStatus("403")}}
