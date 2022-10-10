---
title: Performance
slug: Web/API/Performance
---

{{APIRef("High Resolution Time")}}

**`Performance`** 接口可以获取到当前页面中与性能相关的信息。它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、[Navigation Timing API](/zh-CN/docs/Web/API/Navigation_timing_API)、 [User Timing API](/zh-CN/docs/Web/API/User_Timing_API) 和 [Resource Timing API](/zh-CN/docs/Web/API/Resource_Timing_API)。

该类型的对象可以通过调用只读属性 {{domxref("Window.performance")}} 来获得。

> **备注：** 除了以下指出的情况外，该接口及其成员在 {{domxref("Web Worker")}} 中可用。此外，还需注意，performance 的创建和衡量都是同一环境下的。即，如果你在主线程（或者其他 worker）中创建了一个 performance，那么它在另外的 worker 线程中是不可用的；反之亦然。

## 属性

_`Performance` 接口没有继承任何属性。_

- {{deprecated_inline}}{{domxref("Performance.navigation")}} {{readonlyInline}}
  - : {{domxref("PerformanceNavigation")}} 对象提供了在指定的时间段里发生的操作相关信息，包括页面是加载还是刷新、发生了多少次重定向等等。Not available in workers.
- {{deprecated_inline}}{{domxref("Performance.timing")}} {{readonlyInline}}
  - : {{domxref("PerformanceTiming")}} 对象包含延迟相关的性能信息。Not available in workers.
- {{domxref("Performance.memory", "performance.memory")}} {{Non-standard_inline}}
  - : 其是 Chrome 添加的一个非标准扩展，这个属性提供了一个可以获取到基本内存使用情况的对象。**不应该**使用这个非标准的 API。
- {{domxref("Performance.timeOrigin")}} {{readonlyInline}} {{Non-standard_inline}}
  - : 返回性能测量开始时的时间的高精度时间戳。

### 事件处理程序

- {{domxref("Performance.onresourcetimingbufferfull")}}
  - : 一个回调的 {{domxref("EventTarget")}}，当触发 {{event("resourcetimingbufferfull")}} 事件的时候会被调用。

## 方法

**`Performance` 接口没有继承任何方法。**

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
