---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
---

{{APIRef("Performance Timeline API")}}

**`PerformanceEntry`** 对象代表了 performance 时间列表中的单个 metric 数据。每一个 _performance entry 都可以在应用运行过程中通过手动构建_ _{{domxref("PerformanceMark","mark")}}_ 或者 _{{domxref("PerformanceMeasure","measure")}}_ (例如调用 {{domxref("Performance.mark","mark()")}} 方法) 生成。此外，Performance entries 在资源加载的时候，也会被动生成（例如图片、script、css 等资源加载）

Note: Performance 对象暴露给了 {{domxref("Window")}} 和 {{domxref("Worker")}}. 同时该对象扩展了几个其他对象的属性，包括 {{domxref("PerformanceMark")}}, {{domxref("PerformanceMeasure")}}, {{domxref("PerformanceFrameTiming")}}, {{domxref("PerformanceNavigationTiming")}} 以及 {{domxref("PerformanceResourceTiming")}}.

## Properties

- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} 该 performance entry 的名字
- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} 代表所上报的 performance metric 的 entryType 类型，例如 "mark". 可以通过 {{domxref("PerformanceEntry.entryType","entryType")}} 查阅完整的 entryType type 类型。
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} 此为 metric 上报时的时间
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} 该事件的耗时

## Methods

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : 返回 `PerformanceEntry` 对象的 JSON 格式数据

## Example

以下例子检查了当前浏览器所支持的所有 `PerformanceEntry` 属性，每个属性的检查结果都会通过 console 打印出来

```js
function print_PerformanceEntries() {
  // Use getEntries() to get a list of all performance entries
  var p = performance.getEntries();
  for (var i = 0; i < p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_PerformanceEntry(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
  var properties = ["name", "entryType", "startTime", "duration"];

  for (var i = 0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = NOT supported");
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
