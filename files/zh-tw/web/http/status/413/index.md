---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`413 Content Too Large`** 回應狀態碼表示請求實體大於伺服器定義的限制；伺服器可能會關閉連接或返回一個 {{HTTPHeader("Retry-After")}} 標頭欄位。

在 RFC 9110 之前，此狀態的回應詞為 **`Payload Too Large`**。這個名稱仍然被廣泛使用。

## 狀態

```http
413 Content Too Large
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
