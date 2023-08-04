---
title: PerformanceTiming.unloadEventStart
slug: Web/API/PerformanceTiming/unloadEventStart
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.unloadEventStart`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为 [`unload`](/zh-CN/docs/Web/API/Window/unload_event) 事件被触发之时的 Unix 毫秒时间戳。如果没有上一个文档，或者上一个文档或需要重定向的页面之一不同源，则该值返回 `0`。

## 语法

```js
time = performanceTiming.unloadEventStart;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
