---
title: 102 Processing
slug: Web/HTTP/Status/102
l10n:
  sourceCommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{HTTPSidebar}}{{deprecated_header}}

HTTP **`102 Processing`** 資訊回應碼是一個訊息性的狀態碼，表示伺服器已經接收到完整的請求並正在處理它。

只有當伺服器預計請求需要花費大量時間時，才會發送此狀態碼。它告訴用戶端請求尚未失效。

> [!NOTE]
> 此狀態碼已被棄用，不應再發送。用戶端可能仍然接受它，但會簡單地忽略它。

## 狀態

```http
102 Processing
```

## 規範

{{Specifications}}

## 瀏覽器相容性

此功能已被棄用，瀏覽器將忽略此回應標頭。

## 參見

- {{HTTPHeader("Expect")}}
- {{HTTPStatus("100")}}
