---
title: PerformanceTiming.domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
---

{{APIRef("Navigation Timing")}}

**`PerformanceTiming.domContentLoadedEventStart`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为解析器发出 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 事件之前，即所有的需要被运行的脚本已经被解析之时的 Unix 毫秒时间戳。

## 值

一个 `unsigned long long` 值。

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
