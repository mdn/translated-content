---
title: 201 Created
slug: Web/HTTP/Status/201
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`201 Created`** 成功回應碼表示請求已成功並導致資源的創建。新資源或對新資源的描述和連結在回應發送回來之前就已有效地被創建，新創建的項目會在消息主體中返回，位於請求的 URL 或 {{HTTPHeader("Location")}} 標頭值的 URL 中。

這個狀態碼的常見用法是作為 {{HTTPMethod("POST")}} 請求的結果。

## 狀態

```http
201 Created
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
