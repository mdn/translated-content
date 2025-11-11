---
title: Performance
slug: Web/API/Performance
---

{{APIRef("Performance API")}}

**`Performance`** 接口可用于获取当前页面中与性能相关的信息。

性能条目特定于执行上下文。你可以通过 {{domxref("Window.performance")}} 访问窗口中运行的代码的性能信息，通过 {{domxref("WorkerGlobalScope.performance")}} 访问 worker 中运行的代码的性能信息。

{{InheritanceDiagram}}

## 实例属性

_`Performance` 接口没有继承任何属性。_

- {{deprecated_inline}}{{domxref("Performance.navigation")}} {{readonlyInline}}
  - : {{domxref("PerformanceNavigation")}} 对象提供了在指定的时间段里发生的操作相关信息，包括页面是加载还是刷新、发生了多少次重定向等等。Not available in workers.
- {{deprecated_inline}}{{domxref("Performance.timing")}} {{readonlyInline}}
  - : {{domxref("PerformanceTiming")}} 对象包含延迟相关的性能信息。Not available in workers.
- {{domxref("Performance.memory", "performance.memory")}} {{Non-standard_inline}}
  - : 其是 Chrome 添加的一个非标准扩展，这个属性提供了一个可以获取到基本内存使用情况的对象。**不应该**使用这个非标准的 API。
- {{domxref("Performance.timeOrigin")}} {{readonlyInline}} {{Non-standard_inline}}
  - : 返回性能测量开始时的时间的高精度时间戳。

## 实例方法

_`Performance` 接口没有继承任何方法。_

- {{domxref("Performance.clearMarks()")}}
  - : 将给定的 mark 从浏览器的性能输入缓冲区中移除。
- {{domxref("Performance.clearMeasures()")}}
  - : 将给定的 measure 从浏览器的性能输入缓冲区中移除。
- {{domxref("Performance.clearResourceTimings()")}}
  - : 从浏览器的性能数据缓冲区中移除所有 {{domxref("PerformanceEntry.entryType","entryType")}} 是 "`resource`" 的 {{domxref("PerformanceEntry","performance entries")}}。
- {{domxref("Performance.getEntries()")}}
  - : 基于给定的 _filter_ 返回一个 {{domxref("PerformanceEntry")}} 对象的列表。
- {{domxref("Performance.getEntriesByName()")}}
  - : 基于给定的 _name_ 和 _entry type_ 返回一个 {{domxref("PerformanceEntry")}} 对象的列表。
- {{domxref("Performance.getEntriesByType()")}}
  - : 基于给定的 _entry type_ 返回一个 {{domxref("PerformanceEntry")}} 对象的列表
- {{domxref("Performance.mark()")}}
  - : 根据给出 name 值，在浏览器的性能输入缓冲区中创建一个相关的{{domxref("DOMHighResTimeStamp","timestamp")}}
- {{domxref("Performance.measure()")}}
  - : 在浏览器的指定 _start mark 和 end mark_ 间的性能输入缓冲区中创建一个指定的 {{domxref("DOMHighResTimeStamp","timestamp")}}
- {{domxref("Performance.now()")}}
  - : 返回一个表示从性能测量时刻开始经过的毫秒数 {{domxref("DOMHighResTimeStamp")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : 将浏览器的资源 timing 缓冲区的大小设置为 "`resource`" {{domxref("PerformanceEntry.entryType","type")}} {{domxref("PerformanceEntry","performance entry")}} 对象的指定数量
- {{domxref("Performance.toJSON()")}}
  - : 其是一个 JSON 格式转化器，返回 `Performance` 对象的 JSON 对象

### 事件

使用 `addEventListener()` 或者将事件监听器赋给该接口的 `oneventname` 属性来监听这些事件。

- {{DOMxRef("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
  - : 在浏览器的[资源计时缓冲区](/zh-CN/docs/Web/API/Performance/setResourceTimingBufferSize)已满时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
