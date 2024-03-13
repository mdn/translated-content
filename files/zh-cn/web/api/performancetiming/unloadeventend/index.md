---
title: PerformanceTiming.unloadEventEnd
slug: Web/API/PerformanceTiming/unloadEventEnd
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.unloadEventEnd`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为[`unload`](/zh-CN/docs/Web/API/Window/unload_event) 事件处理程序结束之时的 Unix 毫秒时间戳。如果没有上一个的文档，或者上一个文档或需要被跳转的页面的其中之一不同源，则该值返回 `0`。

## 语法

```plain
time = performanceTiming.unloadEventEnd;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
