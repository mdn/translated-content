---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
---

{{APIRef("Performance API")}}

**`PerformanceNavigationTiming`** 提供了用于存储和检索有关浏览器文档事件的指标的方法和属性。例如，此接口可用于确定加载或卸载文档需要多少时间。

性能时间线中只包含当前文档，因此性能时间线中只有一个 `PerformanceNavigationTiming` 对象。它继承了 {{domxref("PerformanceResourceTiming")}} 和 {{domxref("PerformanceEntry")}} 的所有属性和方法。

{{InheritanceDiagram}}

下图显示了 `PerformanceNavigationTiming` 中定义的所有时间戳属性。

![按获取文档时记录的时间戳顺序排列的时间戳图](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

## 实例属性

该接口扩展了 {{domxref('PerformanceEntry')}} 属性，修订和约束以下性能条目：

- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : 返回 `"navigation"`。
- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : 返回[文档的 URL](/zh-CN/docs/Web/API/Document/URL)。
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : 返回值为 0 的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : 返回 {{domxref("DOMHighResTimeStamp","timestamp")}} 值，即 {{domxref("PerformanceNavigationTiming.loadEventEnd")}} 和 {{domxref("PerformanceEntry.startTime")}} 属性之间的差值。

该接口还扩展 {{domxref('PerformanceResourceTiming')}} 属性，修订和约束以下性能条目：

- {{domxref('PerformanceResourceTiming.initiatorType')}}{{readonlyInline}}
  - : 返回 `"navigation"`。

该接口还支持以下属性：

- {{domxref('PerformanceNavigationTiming.domComplete')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示用户代理将文档的 [`readyState`](/zh-CN/docs/Web/API/Document/readyState) 设置为 `"complete"` 的时间。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示当前文档的 [`DOMContentLoaded`](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event) 事件处理器结束的时间。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示当前文档的 [`DOMContentLoaded`](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event) 事件处理器开始的时间。
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示用户代理将文档的 [`readyState`](/zh-CN/docs/Web/API/Document/readyState) 设置为 `"interactive"` 的时间。
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示当前文档的 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件处理器结束的时间。
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示当前文档的 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件处理器开始的时间。
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{readonlyInline}}
  - : 表示在当前浏览上下文中上次非重定向导航以来的重定向次数的数字。
- {{domxref('PerformanceNavigationTiming.type')}} {{readonlyInline}}
  - : 一个表示导航类型的字符串，取值为：`"navigate"`、`"reload"`、`"back_forward"` 或 `"prerender"`。
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示当前文档的 [`unload`](/zh-CN/docs/Web/API/Window/unload_event) 事件处理程序结束的时间。
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 表示当前文档的 [`unload`](/zh-CN/docs/Web/API/Window/unload_event) 事件处理程序开始的时间。

## 实例方法

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : 返回一个表示 `PerformanceNavigationTiming` 对象的 JSON。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
