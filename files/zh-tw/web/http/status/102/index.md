---
title: 102 Processing
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}{{deprecated_header}}

HTTP **`102 Processing`** 資訊回應碼是一個訊息性的狀態碼，表示伺服器已經接收到完整的請求並正在處理它。

只有當伺服器預計請求需要花費大量時間時，才會發送此狀態碼。它告訴用戶端請求尚未失效。

> **備註：** 此狀態碼已被棄用，不應再發送。用戶端可能仍然接受它，但會簡單地忽略它。

## 狀態

```http
102 Processing
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Expect")}}
- {{HTTPStatus("100")}}
