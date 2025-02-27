---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`405 Method Not Allowed`** 回應狀態碼表示伺服器了解請求方法，但目標資源不支援此方法。

伺服器**必須**在 405 狀態碼回應中產生一個 **`Allow`** 標頭欄位。該欄位必須包含目標資源目前支援的方法列表。

## 狀態

```http
405 Method Not Allowed
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Allow")}}
- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.405)
- [如何修復 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [排除 HTTP 405 錯誤](https://learn.microsoft.com/zh-tw/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
