---
title: Window.performance
slug: Web/API/performance_property
---

{{APIREf}}Web Performance API 允许网页访问某些函数来测量网页和 Web 应用程序的性能，包括 [Navigation Timing](/zh-CN/docs/Navigation_timing) API 和高分辨率时间数据。

## 方法

- {{domxref("Performance.mark()", "performance.mark()")}}
  - : 通过一个给定的名称，将该名称（作为键）和对应的{{domxref("DOMHighResTimeStamp")}}（作为值）保存在一个哈希结构里。该键值对表示了从某一时刻（译者注：某一时刻通常是 navigationStart 事件发生时刻）到记录时刻间隔的毫秒数。（译者注：该方法一般用来多次记录时间，用于求得各记录间的时间差）
- {{domxref("Performance.now()", "performance.now()")}}
  - : 该方法返回一个{{domxref("DOMHighResTimeStamp")}}对象，该对象表示从某一时刻（译者注：某一时刻通常是 navigationStart 事件发生时刻）到调用该方法时刻的毫秒数。

## 属性

- {{domxref("Performance.timing", "performance.timing")}}
  - : 是一个{{domxref("PerformanceTiming")}} 对象，包含延迟相关的性能信息。
- {{domxref("Performance.navigation", "performance.navigation")}}
  - : 是一个 {{domxref("PerformanceNavigation")}} 对象，该对象表示在当前给定浏览上下文中网页导航的类型（译者注：TYPE_BACK_FORWARD，TYPE_NAVIGATE，TYPE_RELOAD，TYPE_RESERVED）以及次数。
- [performance.memory](https://docs.webplatform.org/apis/timing/properties/memory)
  - : 在 Chrome 中添加的一个非标准扩展。
