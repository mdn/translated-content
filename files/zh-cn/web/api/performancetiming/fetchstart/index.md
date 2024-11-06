---
title: PerformanceTiming.fetchStart
slug: Web/API/PerformanceTiming/fetchStart
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.fetchStart`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为浏览器已经准备好去使用 HTTP 请求抓取文档之时的 Unix 毫秒时间戳。这一时刻在检查应用的缓存之前。

## 语法

```plain
time = performanceTiming.fetchStart;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
