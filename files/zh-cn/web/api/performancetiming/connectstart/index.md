---
title: PerformanceTiming.connectStart
slug: Web/API/PerformanceTiming/connectStart
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.connectStart`** 是一个返回代表一个时刻的 `unsigned long long 型只读属性，`请求连接被发送到网络之时的 Unix 毫秒时间戳。如果传输层报告错误并且连接的建立重新开始，则把最后建立连接的开始时间作为该值。如果一个持久连接被使用，则该值与 {{domxref("PerformanceTiming.fetchStart")}} 相同。

## 语法

```plain
time = performanceTiming.connectStart;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
