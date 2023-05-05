---
title: PerformanceTiming.domLoading
slug: Web/API/PerformanceTiming/domLoading
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.domLoading`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为解析器开始工作，即 {{domxref("Document.readyState")}} 改变为 `'loading'` 并且 [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event) 事件被触发之时的 Unix 毫秒时间戳。

## 语法

```plain
time = performanceTiming.domLoading;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
