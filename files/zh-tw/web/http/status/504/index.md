---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`504 Gateway Timeout`** 伺服器錯誤回應代碼表示在充當閘道器或代理的伺服器未能及時從上游伺服器獲得所需的回應，以完成請求。

> **備註：** [閘道器](https://zh.wikipedia.org/wiki/网关)可能位於網路上的不同地方，504 錯誤通常不是開發者可以修復的，而是需要由嘗試訪問的網路伺服器或代理進行修復。

## 狀態

```http
504 Gateway Timeout
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.504)
- {{HTTPStatus(502)}}
