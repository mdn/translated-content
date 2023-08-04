---
title: Long Tasks API
slug: Web/API/PerformanceLongTaskTiming
---

{{DefaultAPISidebar("Long Tasks")}}

## 目的

*Long Tasks，*这是一个实验性 API，它可以直观地告诉我们哪些任务执行耗费了 50 毫秒或更多时间。50 毫秒这个阈值标准来源于《[RAIL Model](https://developers.google.com/web/fundamentals/performance/rail)》中 ["Response: process events in under 50ms"](https://developers.google.com/web/fundamentals/performance/rail#response) 章节。

阻塞主线程达 50 毫秒或以上的任务会导致以下问题：

- [{{domxref("可交互时间")}} 延迟](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/#intro)
- 严重不稳定的交互行为 (轻击、单击、滚动、滚轮等) 延迟（[High/variable input latency](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/#intro)）
- 严重不稳定的事件回调延迟（[High/variable event handling latency](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/#intro)）
- 紊乱的动画和滚动（[Janky animations and scrolling](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/#intro)）

## 概念

长任务（Long task）API 使用的一些关键术语或思想。

### 长任务（Long task）

任何连续不间断的且主 UI 线程繁忙 50 毫秒及以上的时间区间。比如以下常规场景：

- 长耗时的事件回调（long running event handlers）
- 代价高昂的回流和其他重绘（expensive reflows and other re-renders）
- 浏览器在超过 50 毫秒的事件循环的相邻循环之间所做的工作（work the browser does between different turns of the event loop that exceeds 50 ms）

### 浏览上下文的罪魁容器

浏览上下文的罪魁容器，简称“容器”，指任务发生在其中的顶层页面（the top level page）、iframe、嵌入插槽（embed）或对象（object）。

### 清单（Attributions）

即执行任务的容器清单。针对没有在顶层页面容器内执行的任务，`containerId`、`containerName`和`containerSrc`字段可以用来提供任务源信息。

## 用法

```js
var observer = new PerformanceObserver(function (list) {
  var perfEntries = list.getEntries();
  for (var i = 0; i < perfEntries.length; i++) {
    // Process long task notifications:
    // report back for analytics and monitoring
    // ...
  }
});
// register observer for long task notifications
observer.observe({ entryTypes: ["longtask"] });
// Long script execution after this will result in queueing
// and receiving "longtask" entries in the observer.
```

## 接口

- {{domxref('PerformanceLongTaskTiming')}}
  - : 返回长任务实例。
- {{domxref("TaskAttributionTiming")}}
  - : 返回长任务中涉及的工作及其关联的框架上下文信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关推荐

- [GitHub repository](https://github.com/w3c/longtasks) 包含文档和代码范例。
- [PerfPlanet article](https://calendar.perfplanet.com/2017/tracking-cpu-with-long-tasks-api/) on Long Tasks API from 20th December 2017.
