---
title: Performance：timing 属性
short-title: timing
slug: Web/API/Performance/timing
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{deprecated_header}}

遗留的 **`Performance.timing`** 只读属性会返回一个与延迟相关的性能信息的 {{domxref("PerformanceTiming")}} 对象。

该属性在 worker 中不可用。

> [!WARNING]
> 此属性已在 [Navigation Timing 第 2 版规范](https://w3c.github.io/navigation-timing/#obsolete)中被弃用。请改用 {{domxref("PerformanceNavigationTiming")}} 接口。

## 值

{{domxref("PerformanceTiming")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Performance")}} 接口。
