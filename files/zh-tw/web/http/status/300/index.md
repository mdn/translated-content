---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`300 Multiple Choices`** 重新導向回應碼表示該請求有多個可能的回應。用戶代理或用戶應該從中選擇一個。由於沒有標準化的選擇方式，因此這個回應碼很少被使用。

如果伺服器有一個偏好選項，它應該生成一個 {{HTTPHeader("Location")}} 標頭。

## 狀態

```http
300 Multiple Choices
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`，臨時重新導向
- {{HTTPStatus("308")}} `Permanent Redirect`
