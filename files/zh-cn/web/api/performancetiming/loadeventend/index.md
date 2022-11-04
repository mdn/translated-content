---
title: PerformanceTiming.loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.loadEventEnd`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件处理程序被终止，加载事件已经完成之时的 Unix 毫秒时间戳。如果这个事件没有被触发，或者没能完成，则该值将会返回 `0`。

## 语法

```plain
time = performanceTiming.loadEventEnd;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
