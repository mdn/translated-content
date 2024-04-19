---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`414 URI Too Long`** 回應狀態碼表示用戶端請求的 URI 長度超過伺服器願意解釋的長度。

有幾種罕見的情況可能會發生：

- 當用戶端將一個帶有長查詢資訊的 {{HTTPMethod("POST")}} 請求不正確地轉換為 {{HTTPMethod("GET")}} 請求時。
- 當用戶端陷入重定向迴圈時（例如，一個重定向的 URI 前綴指向其自身的後綴）。
- 或者當伺服器受到用戶端試圖利用潛在安全漏洞的攻擊時。

## 狀態

```http
414 URI Too Long
```

## 規範

{{Specifications}}

## 參見

- {{Glossary("URI")}}
