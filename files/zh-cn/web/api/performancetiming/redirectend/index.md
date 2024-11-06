---
title: PerformanceTiming.redirectEnd
slug: Web/API/PerformanceTiming/redirectEnd
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.redirectEnd`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为最后一次的 HTTP 重定向被完成且 HTTP 响应的最后一个字节被接收之时的 Unix 毫秒时间戳。如果没有发生重定向，或者其中一个重定向不同源，则该值返回 `0`。

## 语法

```plain
time = performanceTiming.redirectEnd;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("Performance")}} 接口。
