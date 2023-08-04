---
title: PerformanceTiming.loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.loadEventStart`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件被现在的文档触发之时的 Unix 时间戳。如果这个事件没有被触发，则他返回 `0`。

## 语法

```plain
time = performanceTiming.loadEventStart;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
