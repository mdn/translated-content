---
title: queueMicrotask()
slug: Web/API/queueMicrotask
---

{{APIRef("HTML DOM")}}{{domxref("Window")}} 或 {{domxref("Worker")}} 接口的 **`queueMicrotask()`** 方法，queues a microtask to be executed at a safe time prior to control returning to the browser's event loop.microtask 是一个简短的函数，它将在当前任务（task）完成其工作之后运行，并且在执行上下文的控制返回到浏览器的事件循环之前，没有其他代码等待运行。The microtask is a short function which will run after the current task has completed its work and when there is no other code waiting to be run before control of the execution context is returned to the browser's event loop.

This lets your code run without interfering with any other, potentially higher priority, code that is pending, but before the browser regains control over the execution context, potentially depending on work you need to complete. You can learn more about how to use microtasks and why you might choose to do so in our [microtask guide](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide).

The importance of microtasks comes in its ability to perform tasks asynchronously but in a specific order. See [Using microtasks in JavaScript with queueMicrotask()](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide) for more details.

Microtasks are especially useful for libraries and frameworks that need to perform final cleanup or other just-before-rendering tasks.

`queueMicrotask()` 处于 `WindowOrWorkerGlobalScope` mixin 之下。

## 语法

```plain
scope.queueMicrotask(function);
```

### 参数

- `function`
  - : A {{jsxref("function")}} to be executed when the browser engine determines it is safe to call your code.微任务（microtask）的执行顺序在所有挂起的任务（pending tasks）完成之后，在对浏览器的事件循环产生控制（yielding control to the browser's event loop）之前。

### 返回值

`undefined`。

## 示例

```js
self.queueMicrotask(() => {
  // 函数的内容
})
```

来自 [`queueMicrotask` 的规范文档：](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing)

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

## polyfill

下面的代码是一份 `queueMicrotask()` 的 polyfill。它通过使用立即 resolve 的 promise 创建一个微任务（microtask），如果无法创建 promise，则回落（fallback）到使用`setTimeout()`。

```js
if (typeof window.queueMicrotask !== "function") {
  window.queueMicrotask = function (callback) {
    Promise.resolve()
      .then(callback)
      .catch(e => setTimeout(() => { throw e; }));
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using microtasks in JavaScript with queueMicrotask()](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchronous JavaScript](/zh-CN/docs/Learn/JavaScript/Asynchronous)
- [queueMicrotask explainer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) by Jake Archibald
