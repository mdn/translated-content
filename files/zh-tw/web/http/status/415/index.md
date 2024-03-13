---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
---

{{HTTPSidebar}}

HTTP **`415 Unsupported Media Type`** 用戶端的錯誤表示被請求資源的多媒體類型不被伺服器支援，因此該請求被拒絕。

該格式問體可能源自於請求中設置的 {{HTTPHeader("Content-Type")}} 或 {{HTTPHeader("Content-Encoding")}} 或對資料的直接訪問。

## 狀態

```plain
415 Unsupported Media Type
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
