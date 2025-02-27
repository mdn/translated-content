---
title: 402 Payment Required
slug: Web/HTTP/Status/402
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP **`402 Payment Required`** 是一個非標準的回應狀態碼，保留以供將來使用。此狀態碼旨在支援數字貨幣或（微型）支付系統，表示在用戶端進行支付之前，所請求的內容不可用。

有時，此狀態碼表示在用戶端進行支付之前無法處理請求。然而，並不存在標準使用慣例，不同的實體在不同的上下文中使用它。

## 狀態

```http
402 Payment Required
```

## 範例

```http
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 規範

{{Specifications}}

## 瀏覽器相容性

此狀態碼是*保留的*但未定義。沒有瀏覽器實際支援它，錯誤將顯示為一個通用的 `4xx` 狀態碼。

## 參見

- [HTTP 認證](/zh-TW/docs/Web/HTTP/Authentication)
