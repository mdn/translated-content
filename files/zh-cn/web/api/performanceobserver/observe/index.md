---
title: PerformanceObserver.observe()
slug: Web/API/PerformanceObserver/observe
---

{{APIRef("Performance Timeline API")}}

{{domxref("PerformanceObserver", "性能监测对象")}} 的 **`observe()`** 方法用于观察传入的参数中指定的性能条目类型的集合。当记录一个指定类型的性能条目时，性能监测对象的回调函数将会被调用。

## 语法

```js
observer.observe(options);
```

### 参数

- _options_
  - : 一个只装了单个键值对的对象，该键值对的键名规定为 `entryTypes`。`entryTypes` 的取值要求如下：
  - `entryTypes` 的值：一个放字符串的数组，字符串的有效值取值在{{domxref("PerformanceEntry.entryType", "性能条目类型")}} 中有详细列出。如果其中的某个字符串取的值无效，浏览器会自动忽略它。
  - 另：若未传入 `options` 实参，或传入的 `options` 实参为空数组，会抛出 {{jsxref("TypeError")}}。

## 示例

```js
/* 写法一 */

//直接往 PerformanceObserver() 入参匿名回调函数，成功 new 了一个 PerformanceObserver 类的，名为 observer 的对象
var observer = new PerformanceObserver(function (list, obj) {
  var entries = list.getEntries();
  for (var i = 0; i < entries.length; i++) {
    //处理“mark”和“frame”事件
  }
});
//调用 observer 对象的 observe() 方法
observer.observe({ entryTypes: ["mark", "frame"] });

/* 写法二 */

//预先声明回调函数 perf_observer
function perf_observer(list, observer) {
  //处理“measure”事件
}
//再将其传入 PerformanceObserver()，成功 new 了一个 PerformanceObserver 类的，名为 observer2 的对象
var observer2 = new PerformanceObserver(perf_observer);
//调用 observer2 对象的 observe() 方法
observer2.observe({ entryTypes: ["measure"] });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
