---
title: PerformanceTiming.navigationStart
slug: Web/API/PerformanceTiming/navigationStart
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.navigationStart`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为紧接着在相同的浏览环境下卸载前一个文档结束之时的 Unix 毫秒时间戳。如果没有上一个文档，则它的值相当于 {{domxref("PerformanceTiming.fetchStart")}}。

## 语法

```plain
time = performanceTiming.navigationStart;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
