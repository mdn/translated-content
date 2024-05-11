---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`431 Request Header Fields Too Large`** 回應狀態碼表示伺服器拒絕處理請求，因為請求的 [HTTP 標頭](/zh-TW/docs/Web/HTTP/Headers)過長。在減小請求標頭的大小後，可以重新提交請求。

431 可以在請求標頭的**總大小**過大時使用，或者**單個**標頭字段過大時使用。為了幫助遇到此錯誤的用戶，請在回應主體中指示是哪一種問題——最好還包括哪些標頭過大。這讓用戶可以嘗試解決問題，例如清除他們的 cookie。

伺服器通常會生成此狀態：

- {{ httpheader("Referer") }} URL 過長
- 請求中發送了太多 [Cookie](/zh-TW/docs/Web/HTTP/Cookies)

## 狀態

```http
431 Request Header Fields Too Large
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus(414, "414 URI Too Long")}}
- {{Glossary("Request header", "請求標頭")}}
