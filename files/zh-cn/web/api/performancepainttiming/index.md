---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
---

{{SeeCompatTable}}{{APIRef("Performance Timeline API")}}

[Paint Timing API](/zh-CN/docs/Web/API/Paint_Timing_API) 提供的 **`PerformancePaintTiming`** 是一个提供页面在构建过程中的“绘制”（也称“渲染”）时间点信息的接口。“绘制”是指将渲染树转换为页面上像素的过程。

应用可以为名为“`paint`”的{{domxref("PerformanceEntry","performance entry 类型")}} 注册一个{{domxref("PerformanceObserver")}}，然后观察者可以获取绘制相关的事件发生的时间。以此来帮你找出那些花费太多时间去绘制的区域，而后提升用户体验。

{{InheritanceDiagram}}

## 属性

这个接口没有属性，但是（为了"`paint`" {{domxref ("PerformanceEntry.entryType","performance entry 类型")}}）通过一些限制和约束 扩展了以下{{domxref("PerformanceEntry")}}属性

- {{domxref("PerformanceEntry.entryType")}}
  - : 返回 "`paint`".
- {{domxref("PerformanceEntry.name")}}
  - : 返回 `"first-paint"` 或`"first-contentful-paint"`.
- {{domxref("PerformanceEntry.startTime")}}
  - : 当开始“绘制“时返回 {{domxref("DOMHighResTimeStamp","timestamp")}}.
- {{domxref("PerformanceEntry.duration")}}
  - : 返回 0.

## 方法

这个接口没有方法

## 例子

```js
function showPaintTimings() {
  if (window.performance) {
    let performance = window.performance;
    let performanceEntries = performance.getEntriesByType("paint");
    performanceEntries.forEach((performanceEntry, i, entries) => {
      console.log(
        "The time to " +
          performanceEntry.name +
          " was " +
          performanceEntry.startTime +
          " milliseconds.",
      );
    });
  } else {
    console.log("Performance timing isn't supported.");
  }
}
```

上面例子输出如下

```plain
The time to first-paint was 2785.915 milliseconds.
The time to first-contentful-paint was 2787.460 milliseconds.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
