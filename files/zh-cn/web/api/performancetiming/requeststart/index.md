---
title: PerformanceTiming.requestStart
slug: Web/API/PerformanceTiming/requestStart
---

{{ APIRef("PerformanceTiming") }}

## 概要

**`PerformanceTiming.requestStart`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为浏览器发送从服务器或者缓存获取实际文档的请求之时的 Unix 毫秒时间戳。如果传输层在请求开始之后发生错误并且连接被重新打开，则该属性将会被设定为新的请求的相应的值。

## 语法

```plain
time = performanceTiming.requestStart;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
