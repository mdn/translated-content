---
title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
---

{{APIRef("Performance Timeline API")}}

**`PerformanceObserver()`** 构造函数使用给定的观察者 `callback` 生成一个新的 {{domxref("PerformanceObserver")}} 对象。当通过 {{domxref("PerformanceObserver.observe","observe()")}} 方法注册的 {{domxref("PerformanceEntry.entryType","条目类型",'','true')}} 的 {{domxref("PerformanceEntry","性能条目事件", '', 'true')}} 被记录下来时，调用该观察者回调。

## 语法

```js
var observer = new PerformanceObserver(callback);
```

### 参数

- `callback`
  - : 观察的性能事件被记录时将调用 `PerformanceObserverCallback` 回调。调用回调时，其第一个参数是 {{domxref("PerformanceObserverEntryList","性能观察条目列表", '', 'true')}}，第二个参数是 {{domxref("PerformanceObserver","观察者")}} 对象。

### 返回值

一个在观察的性能事件发生时调用指定的 `callback` 的新 {{domxref("PerformanceObserver")}} 对象。

## 例子

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
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
