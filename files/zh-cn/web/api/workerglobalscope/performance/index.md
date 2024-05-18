---
title: WorkerGlobalScope：performance 属性
slug: Web/API/WorkerGlobalScope/performance
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{APIRef("Performance API")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`performance`** 属性返回一个 {{domxref("Performance")}} 对象，该对象可用于收集有关在 worker 的作用域内运行的代码的性能信息。

性能条目是特定于上下文的。如果在 worker 线程上创建一个标记，那么你无法在主线程或任何其他 worker 中看到它。

注意，只有以下性能接口在 worker 上下文中可用：

- {{domxref("Performance")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceObserver")}}
- {{domxref("PerformanceObserverEntryList")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceServerTiming")}}

## 值

一个 {{domxref("Performance")}} 对象，用于获取其被调用的上下文的性能以及与计时相关信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.performance")}}
