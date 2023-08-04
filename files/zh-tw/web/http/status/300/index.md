---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
---

{{HTTPSidebar}}

HTTP **`300 Multiple Choices`** 重定向回應碼代表該請求具有超過一種可能的回應。用戶代理或使用者應該從中挑選一個。由於不存在標準化的選擇回應方式，此回應碼非常少被使用。

若是伺服端有偏好的選擇，則應該產生 {{HTTPHeader("Location")}} 標頭。

## 狀態

```plain
300 Multiple Choices
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, the temporary redirect
- {{HTTPStatus("308")}} `Permanent Redirect`
