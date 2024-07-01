---
title: PerformanceObserver.disconnect()
slug: Web/API/PerformanceObserver/disconnect
---

{{APIRef("Performance Timeline API")}}

{{domxref('PerformanceObserver')}} 接口的 **`disconnect()`** 方法用于阻止性能观察者接收任何 {{domxref("PerformanceEntry","性能条目", '', 'true')}} 事件。

## 语法

```js-nolint
disconnect()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
var observer = new PerformanceObserver(function (list, obj) {
  var entries = list.getEntries();
  for (var i = 0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({ entryTypes: ["mark", "frame"] });

function perf_observer(list, observer) {
  // Process the "measure" event
  // ...
  // Disable additional performance events
  observer.disconnect();
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
