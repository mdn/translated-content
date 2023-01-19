---
title: PerformanceTiming.domainLookupEnd
slug: Web/API/PerformanceTiming/domainLookupEnd
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.domainLookupEnd`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为解析域名结束时的 Unix 毫秒时间戳。如果一个持久连接被使用，或者该信息已经被本地资源或者缓存存储，则该值等同于 {{domxref("PerformanceTiming.fetchStart")}}。

## 语法

```plain
time = performanceTiming.domainLookupEnd;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参加

- 它属于 {{domxref("PerformanceTiming")}} 接口。
