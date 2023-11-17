---
title: 性能监测对象
slug: Web/API/PerformanceObserver
---

{{APIRef("Performance Timeline API")}}

**`PerformanceObserver`** 用于*监测*性能度量事件，在浏览器的性能时间轴记录新的 {{domxref("PerformanceEntry","performance entry", '', 'true')}} 的时候将会被通知。

{{AvailableInWorkers}}

## 构造函数

- {{domxref("PerformanceObserver.PerformanceObserver","PerformanceObserver()")}}
  - : 创建并返回一个新的 `PerformanceObserver` 对象。

## 方法

- {{domxref("PerformanceObserver.observe","PerformanceObserver.observe()")}}
  - : 指定监测的 {{domxref("PerformanceEntry.entryType","entry types")}} 的集合。当 {{domxref("PerformanceEntry","performance entry")}} 被记录并且是指定的 `entryTypes` 之一的时候，性能观察者对象的回调函数会被调用。
- {{domxref("PerformanceObserver.disconnect","PerformanceObserver.disconnect()")}}
  - : 性能监测回调停止接收 {{domxref("PerformanceEntry","性能条目", '', 'true')}}。
- {{domxref("PerformanceObserver.takeRecords","PerformanceObserver.takeRecords()")}}
  - : 返回当前存储在性能观察器的 {{domxref("PerformanceEntry","performance entry")}} 列表，并将其清空。

## 示例

```js
function perf_observer(list, observer) {
  // Process the "measure" event
  // 处理 "measure" 事件
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
