---
title: queueMicrotask()
slug: Web/API/queueMicrotask
tags:
  - API
  - HTML DOM
  - Intervals
  - JavaScript
  - Method
  - Microtask
  - Performance
  - Reference
  - Scheduling
  - ServiceWorker
  - SharedWorker
  - Tasks
  - Timers
  - Window
  - Worker
  - asynchronous
  - queueMicrotask
  - setTimeout
  - Polyfill
browser-compat: api.queueMicrotask
translation_of: Web/API/WindowOrWorkerGlobalScope/queueMicrotask
original_slug: Web/API/WindowOrWorkerGlobalScope/queueMicrotask
---
{{APIRef("HTML DOM")}}

{{domxref("Window")}} or {{domxref("Worker")}} 接口暴露的 **`queueMicrotask()`** 方法，
会在控制权返回给浏览器的事件循环之前，将一个微任务排在一个安全的时间去执行。

微任务是一个简短的函数，它将在当前的任务都已经完成，同时没有其他代码在等待运行，且执行上下文的控制权还没有返回给浏览器的事件循环之前执行。

这让你的代码在运行时不会干扰任何其他可能是更高优先级，处于等待状态的代码，同时也是运行在浏览器重新获得对执行上下文的控制之前，
这可能取决于你的代码需要完成的工作。你可以在我们的 [微任务 指南](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)
了解更多关于如何使用微任务以及为什么你可能会需要使用到它。

微任务最重要的特性在于其能够按照特定的顺序执行异步任务。更详细的说明请参见
[在 JavaScript 中通过 queueMicrotask() 使用微任务](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)。

微任务对于一些需要进行最后的清理任务或是执行其他渲染前任务的库和框架特别有用。

## 语法

```js
queueMicrotask(function);
```

### 参数

- `function`
  - : 一个在浏览器引擎认为执行你的代码是安全时执行的回调函数 {{jsxref("function")}}。已经入队的微任务的执行顺序是在所有挂起的任务完成之后，
    将控制权交还给浏览器的事件循环之前。

### 返回值

`undefined`.

## 示例

```js
queueMicrotask(() => {
  // 函数的内容
})
```

来自 [queueMicrotask
的规范文档](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing):

```js
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url).then(res => res.arrayBuffer()).then(data => {
      this._cache[url] = data;
      this._setData(data);
      this.dispatchEvent(new Event("load"));
    });
  }
};
```

## Polyfill

下面的代码是一份 queueMicrotask() 的 polyfill。它通过使用会立即 resolve 的 promise 来创建一个微任务，
如果无法创建 promise，则会回落到使用 `setTimeout()`.

```js
if (typeof self.queueMicrotask !== "function") {
  self.queueMicrotask = function (callback) {
    Promise.resolve()
      .then(callback)
      .catch(e => setTimeout(() => { throw e; })); // report exceptions
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- A polyfill of `queueMicrotask` is available in [`core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Using microtasks in
  JavaScript with queueMicrotask()](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
- [queueMicrotask
  explainer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks,
  microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) by Jake Archibald