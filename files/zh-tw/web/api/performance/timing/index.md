---
title: Performance.timing
slug: Web/API/Performance/timing
---

{{APIRef("Performance")}}{{deprecated_header}}

## 摘要

**`Performance.timing`** 是唯讀的屬性，傳回的 {{domxref("PerformanceTiming")}} 物件當中包含了效能與時間延遲相關的資訊。

該屬性在 worker 中不可用。

> [!WARNING]
> 這個屬性在 [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) 中被棄用。請改用 {{domxref("PerformanceNavigationTiming")}} 介面。

## 語法

```js
timingInfo = performance.timing;
```

## 值

一個 {{domxref("PerformanceTiming")}} 介面

## 規格

{{Specifications}}

## 瀏覽器支援狀況

{{Compat}}

## 參照

- 屬於 {{domxref("Performance")}} 介面的一部份
