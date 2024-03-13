---
title: 102 Processing
slug: Web/HTTP/Status/102
---

{{HTTPSidebar}}{{deprecated_header}}

HTTP **`102 Processing`** 狀態資訊回應碼表示伺服器已經收到完整要求，並且正在處理中。

此狀態碼告訴客戶端請求尚未廢棄，僅在伺服器預期要求需要花費大量時間時才會傳送。

> **備註：** 此狀態碼已淘汰，不應再傳送。客戶端可能還是會接受，但直接忽略。

## 狀態

```plain
102 Processing
```

## 規格

{{Specifications}}

## 參見

- {{HTTPHeader("Expect")}}
- {{HTTPStatus("100")}}
