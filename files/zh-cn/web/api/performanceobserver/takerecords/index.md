---
title: PerformanceObserver.takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
---

{{APIRef("Performance Timeline API")}}

{{domxref('PerformanceObserver')}} 接口的 **`takeRecords()`** 方法返回当前存储在性能观察器中的{{domxref("PerformanceEntry","性能条目")}}列表，并将其清空。

## 语法

```js
var PerformanceEntry[] = performanceObserver.takeRecords();
```

### 参数

无。

### 返回值

{{domxref("PerformanceEntry")}} 对象列表。

## 例子

```js
var observer = new PerformanceObserver(function (list, obj) {
  var entries = list.getEntries();
  for (var i = 0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({ entryTypes: ["mark", "frame"] });
var records = observer.takeRecords();
console.log(records[0].name);
console.log(records[0].startTime);
console.log(records[0].duration);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
