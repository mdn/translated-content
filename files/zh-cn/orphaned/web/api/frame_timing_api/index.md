---
title: Frame Timing API
slug: orphaned/Web/API/Frame_Timing_API
original_slug: Web/API/Frame_Timing_API
---
{{DefaultAPISidebar("Frame Timing API")}} {{SeeCompatTable}}

该 **`PerformanceFrameTiming`** 界面提供有关浏览器事件循环的*帧*计时数据。一*帧*表示浏览器在[一个事件循环迭代](https://html.spec.whatwg.org/multipage/webappapis.html#processing-model-8)中所做的工作量，例如处理 DOM 事件，调整大小，滚动，渲染，CSS 动画等。60Hz 刷新速率的*帧率*为 60 fps（每秒帧），良好*响应*用户体验的共同目标。这意味着浏览器应在大约 16.7 毫秒内处理一个帧。

应用程序可以为“`frame`”{{domxref("PerformanceEntry","性能条目类型")}} 注册 {{domxref("PerformanceObserver")}}。当新的“`frame`”事件添加到浏览器的*性能时间轴*并且框架的{{domxref("PerformanceEntry.duration","持续时间")}}（时间长度）可用时，将通知*观察者*（回调）。此数据可用于帮助识别需要太长时间才能提供良好用户体验的区域。

本文档中描述的接口的示例代码包含在“*[使用帧定时 API”](/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)*中。

## 性能 `frames`

The {{domxref("PerformanceFrameTiming")}} interface extends the following {{domxref("PerformanceEntry")}} properties (for "`frame`" {{domxref("PerformanceEntry.entryType","performance entry types")}}) by qualifying and constrainting the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Set to "`frame`".
- {{domxref("PerformanceEntry.name")}}
  - : Set to the [document's address](https://dom.spec.whatwg.org/#concept-document-url).
- {{domxref("PerformanceEntry.startTime")}}
  - : Set to the {{domxref("DOMHighResTimeStamp")}} when the frame was started.
- {{domxref("PerformanceEntry.duration")}}
  - Set to a {{domxref("DOMHighResTimeStamp","timestamp")}} indicating the difference between the `startTime`s of two successive frames.</dd></dl>

This data, particularly the `duration` timestamp, can be used to help identify performance problems.

## Frame observers

{{experimental_inline}}The _performance observer_ interfaces allow an application to register an _observer_ for specific {{domxref("PerformanceEntry","performance event types")}}. When one of those event types is recorded in the browser's _performance timeline_, the application is notified of the event via the observer's callback function that was specified when the observer was created.

To observe "`frame`" performance entry types, the application first creates a {{domxref("PerformanceObserver")}} object with a specific frame observer callback (function). Next, {{domxref("PerformanceObserver.observe()")}} is used to specify the set of performance events to observe - in this case, just the "`frame`" event type. When the browser adds a new frame to the performance timeline, the specified observer callback will be invoked.

## Accessing frame data

调用框架{{domxref("PerformanceObserver","观察者")}}时，可以通过调用{{domxref("PerformanceObserverEntryList.getEntriesByType()")}}，参数为” `frame`“。此方法返回一个“ `frame`” {{domxref("PerformanceEntry")}}对象的列表。每个帧对象的{{domxref("PerformanceEntry.duration","duration")}}属性返回两个连续帧的时间戳。如果此值大于提供良好用户体验所需的时间，则可能需要进一步分析。

## 浏览器兼容性

{{experimental_inline}}如{{domxref("PerformanceFrameTiming")}}界面的“ [浏览器兼容性”](/Web/API/PerformanceFrameTiming#Browser_compatibility)表中所示，此界面没有任何实现。

## 也可以看看

- [帧速率（Firefox 性能工具）](/zh-CN/docs/Tools/Performance/Frame_rate)
- [使用帧计时 API](/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)
