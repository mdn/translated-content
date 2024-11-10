---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`506 Variant Also Negotiates`** 回應狀態碼可能在透明內容協商的情況下給出（請參見 [RFC 2295](https://datatracker.ietf.org/doc/html/rfc2295)）。該協定使用戶端能夠檢索給定資源的最佳變異，其中伺服器支援多個變異。

**`Variant Also Negotiates`** 狀態碼表示內部伺服器配置錯誤，所選的變異本身配置為參與內容協商，因此不是正確的協商端點。

## 狀態

```http
506 Variant Also Negotiates
```

## 規範

{{Specifications}}
