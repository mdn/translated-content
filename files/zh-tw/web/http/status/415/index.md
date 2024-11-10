---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`415 Unsupported Media Type`** 用戶端錯誤回應碼表示伺服器拒絕接受請求，因為有效載荷格式是不支援的。

格式問題可能是由於請求中指定的 {{HTTPHeader("Content-Type")}} 或 {{HTTPHeader("Content-Encoding")}}，或者直接檢查資料導致的。

## 狀態

```http
415 Unsupported Media Type
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
