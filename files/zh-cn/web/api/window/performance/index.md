---
title: Window：performance 属性
slug: Web/API/Window/performance
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{APIRef("Performance API")}}

{{domxref("Window")}} 接口的 **`performance`** 属性返回一个 {{domxref("Performance")}} 对象，该对象可用于收集有关在窗口的作用域内运行的代码的性能信息。

性能条目是特定于上下文的。如果在主线程（或其他 worker）上创建一个标记，那么你无法在 worker 线程中看到它，反之亦然。

## 值

一个 {{domxref("Performance")}} 对象，用于获取在窗口的作用域内运行的代码的性能以及与计时相关的信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WorkerGlobalScope.performance")}}
