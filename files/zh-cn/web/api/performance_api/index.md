---
title: Performance API
slug: Web/API/Performance_API
---

{{DefaultAPISidebar("Performance API")}}

Performance API 是一组用于衡量 web 应用性能的标准。

## 概念和用法

衡量和分析各种性能指标对于确保 web 应用的速度非常重要。Performance API 提供了重要的内置指标，并能够将你自己的测量结果添加到浏览器的性能时间线（performance timeline）中。性能时间线使用高精度的时间戳，且可以在开发者工具中显示。你还可以将相关数据发送到用于分析的端点，以根据时间记录性能指标。

每一个性能指标都使用一个性能条目（{{domxref("PerformanceEntry")}}）表示。性能条目有名称（`name`）、持续时间（`duration`）、开始时间（`startTime`）和类型（`type`）。每一个性能指标都继承了 `PerformanceEntry` 接口，并对其进行限定。

大部分性能条目都在不需要任何额外操作的情况下进行记录，并可以通过 {{domxref("Performance.getEntries()")}} 或（最好）通过 {{domxref("PerformanceObserver")}} 访问。例如，{{domxref("PerformanceEventTiming")}} 条目用于记录花费的时间超过设定阈值的事件。而 Performance API 也允许你使用 {{domxref("PerformanceMark")}} 和 {{domxref("PerformanceMeasure")}} 接口定义和记录自定义事件。

{{domxref("Performance")}} 主接口在 {{domxref("Window.performance", "Window")}} 和 {{domxref("WorkerGlobalScope.performance", "Worker")}} 全局作用域下都可用，并允许你增加自定义性能条目、清除性能条目，以及查询性能条目。

{{domxref("PerformanceObserver")}} 接口允许你监听记录的不同类型的性能条目。

![Performance API 的 UML 图](diagram.svg)

## 接口

- {{domxref("EventCounts")}}
  - : 由 {{domxref("performance.eventCounts")}} 返回的只读映射，其中包含每个事件类型被分派的事件数量。
- {{domxref("LargestContentfulPaint")}}
  - : 测量视口范围内可见的图像和文本块的最大渲染时间，从页面开始加载时开始记录。
- {{domxref("Performance")}}
  - : 用于性能测量的主接口。可在 window 和 worker 上下文中通过 {{domxref("Window.performance")}} 或 {{domxref("WorkerGlobalScope.performance")}} 来访问。
- {{domxref("PerformanceElementTiming")}}
  - : 测量特定元素的渲染时间戳。
- {{domxref("PerformanceEntry")}}
  - : 封装了单个性能指标的性能时间线条目。所有性能指标都继承自该接口。
- {{domxref("PerformanceEventTiming")}}
  - : 测量事件的延迟和首次输入延迟（FID）。
- {{domxref("PerformanceLongTaskTiming")}}
  - : 检测占用渲染并阻止其他任务执行的长任务。
- {{domxref("PerformanceMark")}}
  - : 在性能时间线上标记自定义条目。
- {{domxref("PerformanceMeasure")}}
  - : 自定义使用两个性能条目表示的时间测量。
- {{domxref("PerformanceNavigationTiming")}}
  - : 测量文档导航事件，例如加载文档所需的时间。
- {{domxref("PerformanceObserver")}}
  - : 监听记录到性能时间线中的新的性能条目。
- {{domxref("PerformanceObserverEntryList")}}
  - : 性能观察器（PerformanceObserver）中监测的条目的列表。
- {{domxref("PerformancePaintTiming")}}
  - : 测量网页构建期间的渲染操作。
- {{domxref("PerformanceResourceTiming")}}
  - : 测量网络负载指标，例如重定向开始和结束时间、（fetch）请求开始、DNS 查询开始和结束时间，以及图像、脚本、fetch 调用，等资源的响应开始和结束时间。
- {{domxref("PerformanceServerTiming")}}
  - : 表示服务器的相关指标，在响应请求时与 {{HTTPHeader("Server-Timing")}} HTTP 标头一起发送。
- {{domxref("TaskAttributionTiming")}}
  - : 标识任务类型，及用于长任务测量的容器。

## 教程和指南

- [使用 Performance API](/zh-CN/docs/Web/API/Performance_API/Using_the_Performance_API)
- [User Timing（概览）](/zh-CN/docs/Web/API/Performance_API/User_timing)
- [Navigation Timing（概览）](/zh-CN/docs/Web/API/Performance_API/Navigation_timing)
- [Resource Timing（概览）](/zh-CN/docs/Web/API/Performance_API/Resource_timing)

## 规范

{{Specifications}}

## 参见

- [Web 性能](/zh-CN/docs/Web/Performance)
- [学习：Web 性能](/zh-CN/docs/Learn_web_development/Extensions/Performance)
