---
title: Performance API
slug: Web/API/Performance_API
---

{{DefaultAPISidebar("High Resolution Time")}}

[高时间采样率](https://www.w3.org/TR/hr-time/)标准定义了{{domxref("Performance")}}接口，该接口支持应用程序中客户端的延时测量。{{domxref("Performance")}}接口被认为是*高采样率*的，因为其精确度可达千分之一毫秒（受硬件或软件限制）。这些接口支持许多使用情形，包括计算帧速率（在动画中可能很重要）和基准测试（例如加载资源的时间）。

由于平台的系统时钟会受到各种时滞（例如 NTP 调整）的影响，该接口支持单调时钟，即一直增加的时钟。鉴于这个原因，Performance API 定义了{{domxref("DOMHighResTimeStamp")}}类型，而不是使用{{jsxref("Date.now","Date.now()")}}接口。

## DOMHighResTimeStamp

{{domxref("DOMHighResTimeStamp")}}类型，顾名思义，表示高采样率的时间戳。此类型是 `double` ，由性能接口使用。该值可以是离散时间戳，也可以是两个离散时间戳之间的时间间隔。

`DOMHighResTimeStamp` 的单位是毫秒，应精确到 5 µs（微秒）。但是，如果浏览器无法提供精确到 5 微秒的时间数值（例如由于硬件或软件限制），则浏览器可以将该值表示为精确到毫秒的时间（以毫秒为单位）。

## 方法

`{{domxref("Performance")}}` 接口具有两个方法。

{{domxref("Performance.now","now()")}} 方法返回一个{{domxref("DOMHighResTimeStamp")}}，其值取决于{{domxref("PerformanceTiming.navigationStart","navigation start")}}和作用域。如果作用域是 window，则值是创建浏览器上下文的时间；如果作用域是{{domxref("Worker","worker")}}，则值是创建 worker 的时间。

{{domxref("Performance.toJSON","toJSON()")}}方法返回{{domxref("Performance")}}对象的序列化结果，包含可以被序列化的属性。

## 属性

`{{domxref("Performance")}}`接口具有两个属性。

{{domxref("Performance.timing","timing")}}属性返回一个{{domxref("PerformanceTiming")}}对象，其中包含与延时相关的性能信息，例如导航开始的时间，重定向的开始时间和结束时间，响应的开始时间和结束时间等。

`{{domxref("Performance.navigation","navigation")}}` 属性返回一个{{domxref("PerformanceNavigation")}}对象，该对象表示在给定浏览上下文中发生的导航类型，例如从历史记录导航到的页面，通过跟随链接导航到的页面等。

## 接口

- {{domxref('Performance')}}
  - : 提供方法和属性，包含给定页面与计时相关的性能信息。
- {{domxref('PerformanceEntry')}}
  - : 提供方法和属性，将单个性能指标封装为性能时间轴的一部分。
- {{domxref('PerformanceFrameTiming')}}
  - : 提供方法和属性，包含有关浏览器事件循环的帧计时数据。
- {{domxref('PerformanceMark')}}
  - : 条目类型为"`mark`"的{{domxref('PerformanceEntry')}}抽象接口，该类型的条目通过调用{{domxref("Performance.mark","mark()")}}将命名的{{domxref("DOMHighResTimeStamp")}}（mark）添加到浏览器的性能时间轴来创建。
- {{domxref('PerformanceMeasure')}}
  - : 条目类型为"`measure`"的{{domxref('PerformanceEntry')}}抽象接口，该类型的条目通过调用{{domxref("Performance.measure","measure()")}}在浏览器的性能时间轴的两个标记之间添加一个命名的{{domxref("DOMHighResTimeStamp")}}（measure）来创建。
- {{domxref('PerformanceNavigationTiming')}}
  - : 提供方法和属性，用于存储和检索有关浏览器文档导航事件的[高采样率时间戳](/zh-CN/docs/Web/API/DOMHighResTimeStamp)或其他指标。
- {{domxref('PerformanceObserver')}}
  - : 提供方法和属性，用于观察性能测量事件，并在浏览器的性能时间轴中记录新的{{domxref('PerformanceEntry')}}时进行通知。
- {{domxref('PerformanceResourceTiming')}}
  - : 提供方法和属性，用于检索和分析有关应用程序资源加载的详细网络计时数据。

## 规范

{{Specifications}}

## 实施状态

As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/Web/API/Performance#Browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers.

如{{domxref("Performance")}}接口的“[浏览器兼容性](/Web/API/Performance#Browser_compatibility)”表所示，大部分接口由桌面浏览器广泛实现。

要测试你的浏览器对{{domxref("Performance")}}接口的支持，请运行 [`perf-api-support`](http://mdn.github.io/web-performance/perf-api-support.html) 应用。

## 另见

- [A Primer for Web Performance Timing APIs](http://w3c.github.io/perf-timing-primer/)
