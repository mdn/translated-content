---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
---

{{HTTPSidebar}}

超文本傳輸協定(英文：HyperText Transfer Protocol (HTTP) ) **`503 Service Unavailable`** 表示目前伺服器暫時不能處理連線的請求。

起因通常是伺服器正在進行維護或是當下流量過載。這種錯誤回傳應該是暫時性的，並且{{HTTPHeader("Retry-After")}} HTTP header 中要盡可能描述到系統大概恢復正常的時間。.

> **備註：** 回傳這種錯誤的同時，也要同時顯示一張對使用者友善的網頁，來簡單描述問題。

回傳此錯誤時，務必注意和快取存取相關的標頭（Caching-related headers），因為 503 狀態通常要是暫時性的，而這種回應不應該被暫存至快取。

## 狀態

```plain
503 Service Unavailable
```

## 規範

{{Specifications}}

## 瀏覽器相容性

以下資訊是從 MDN 的 GitHub 取得 (<https://github.com/mdn/browser-compat-data>).

{{Compat}}

## 請參閱

- {{HTTPHeader("Retry-After")}}

## 了解更多

### 一般知識

- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [HTTP Error 503](https://kinsta.com/blog/http-error-503/)
- [503 Service Unvailaible WordPress](https://secure.wphackedhelp.com/blog/503-service-unavailable-error-wordpress/)
- [如何修復在 WordPress 當中「503 Service Unavailable Error」的問題？](https://techmoon.xyz/503-service-unavailable-error/)
