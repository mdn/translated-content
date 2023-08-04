---
title: Performance.measure()
slug: Web/API/Performance/measure
---

{{APIRef("User Timing API")}}

**`measure()`** 方法在浏览器性能记录缓存中创建了一个名为{{domxref("DOMHighResTimeStamp","时间戳")}}的记录来记录两个特殊标志位（通常称为开始标志和结束标志）。被命名的{{domxref("DOMHighResTimeStamp","时间戳")}}称为一次测量（measure）。

{{AvailableInWorkers}}

`measure` 可以被 {{domxref("Performance")}} 接口 `getEntries*()` 中的方法检查到 ({{domxref("Performance.getEntries","getEntries()")}}, {{domxref("Performance.getEntriesByName","getEntriesByName()")}} 或者 {{domxref("Performance.getEntriesByType","getEntriesByType()")}}).

The `measure's` {{domxref("PerformanceEntry","performance entry")}} will have the following property values:

- {{domxref("PerformanceEntry.entryType","entryType")}} - set to "`measure`".
- {{domxref("PerformanceEntry.name","name")}} - set to the "`name`" given when the measure was created.
- {{domxref("PerformanceEntry.startTime","startTime")}} - set to the start mark {{domxref("DOMHighResTimeStamp","timestamp")}}.
- {{domxref("PerformanceEntry.duration","duration")}} - set to a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the end mark timestamp minus the start mark timestamp).

## 语法

```
performance.measure(name, startMark, endMark);
```

### 参数

- name
  - : 一个 {{domxref("DOMString")}}，代表测量的名字。
- startMark {{optional_inline}}
  - : 一个 {{domxref("DOMString")}}，代表测量的开始标志名字。May also be the name of a {{domxref("PerformanceTiming")}} property.
- endMark {{optional_inline}}
  - : 一个{{domxref("DOMString")}}，代表测量的结束标志名字。May also be the name of a {{domxref("PerformanceTiming")}} property.

### 返回值

无

## 例子

以下例子展示如何在浏览器性能记录缓存中使用 `measure()`创建一个新的测量记录{{domxref("PerformanceEntry","performance entry")}} 。

```js
// 以一个标志开始。
performance.mark("mySetTimeout-start");

// 等待一些时间。
setTimeout(function () {
  // 标志时间的结束。
  performance.mark("mySetTimeout-end");

  // 测量两个不同的标志。
  performance.measure("mySetTimeout", "mySetTimeout-start", "mySetTimeout-end");

  // 获取所有的测量输出。
  // 在这个例子中只有一个。
  var measures = performance.getEntriesByName("mySetTimeout");
  var measure = measures[0];
  console.log("setTimeout milliseconds:", measure.duration);

  // 清除存储的标志位
  performance.clearMarks();
  performance.clearMeasures();
}, 1000);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
