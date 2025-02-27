---
title: 200 OK
slug: Web/HTTP/Status/200
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`200 OK`** 成功回應碼表示請求已成功。默認情況下，200 回應是可緩存的。

成功的含義取決於 HTTP 請求方法：

- {{HTTPMethod("GET")}}：已檢索到資源並在消息主體中傳輸。
- {{HTTPMethod("HEAD")}}：回應中包含表示標頭，但沒有消息主體。
- {{HTTPMethod("POST")}}：傳輸了描述動作結果的資源。
- {{HTTPMethod("TRACE")}}：消息主體包含伺服器接收到的請求消息。

{{HTTPMethod("PUT")}} 或 {{HTTPMethod("DELETE")}} 的成功結果通常不是 `200 OK`，而是 {{HTTPStatus("204")}} `No Content`（或在首次上傳資源時是 {{HTTPStatus("201")}} `Created`）。

## 狀態

```http
200 OK
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
