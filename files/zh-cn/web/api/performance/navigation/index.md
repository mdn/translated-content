---
title: Performance.navigation
slug: Web/API/Performance/navigation
---

{{APIRef("Navigation Timing")}}

## 概要

只读属性 **`Performance.navigation`** 会返回一个 {{domxref("PerformanceNavigation")}} 对象。这个对象表示出现在当前浏览上下文的 navigation 类型，比如获取某个资源所需要的重定向次数。

## 语法

```plain
navObject = performance.navigation;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 相关链接

- 这个功能属于接口 {{domxref("Performance")}} .
