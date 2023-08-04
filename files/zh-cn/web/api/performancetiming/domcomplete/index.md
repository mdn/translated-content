---
title: PerformanceTiming.domComplete
slug: Web/API/PerformanceTiming/domComplete
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.domComplete`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为主文档的解析器结束工作，{{domxref("Document.readyState")}} 变为 `'complete'且相当于` [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event) 事件被触发时的 Unix 毫秒时间戳。

## 语法

```plain
time = performanceTiming.domComplete;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
