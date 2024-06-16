---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`428 Precondition Required`** 回應狀態碼表示伺服器要求請求是[有條件的](/zh-TW/docs/Web/HTTP/Conditional_requests)。

通常這意味著必要的先決條件標頭（例如 {{HTTPHeader("If-Match")}}）的**缺失**。

當先決條件標頭與伺服器端狀態**不匹配**時，回應應為 {{HTTPStatus(412)}} `Precondition Failed`。

## 狀態

```http
428 Precondition Required
```

## 規範

{{Specifications}}

## 參見

- [HTTP 有條件的請求](/zh-TW/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus(412)}}
