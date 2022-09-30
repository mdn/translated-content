---
title: PerformanceTiming.responseEnd
slug: Web/API/PerformanceTiming/responseEnd
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.responseEnd`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为浏览器从服务器、缓存或者本地资源接收响应的最后一个字节或者连接被关闭之时的 Unix 毫秒时间戳。

## 语法

```plain
time = performanceTiming.responseEnd;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
