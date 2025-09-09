---
title: WorkerGlobalScope：queueMicrotask() 方法
slug: Web/API/WorkerGlobalScope/queueMicrotask
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`queueMicrotask()`** 方法，将微任务加入队列以在控制返回浏览器的事件循环之前的安全时间执行。

微任务是一个简短的函数，它将在当前任务完成其工作后运行，并且在执行上下文的控制权返回到浏览器的事件循环之前没有其他代码等待运行时运行。

它让你的代码在运行时不会干扰任何可能具有更高优先级的代码的运行，但在浏览器重新获得对执行上下文的控制之前，这可能取决于你需要完成的工作。你可以在我们的[微任务指南](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)中了解更多关于如何使用微任务以及选择这样做的原因。

微任务的重要性在于它能够以特定顺序异步执行任务。参见[在 JavaScript 中通过 `queueMicrotask()` 使用微任务](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)以了解更多信息。

微任务对于需要执行最后阶段的任务或其他在渲染之前的任务的库和框架特别有用。

## 语法

```js-nolint
queueMicrotask(callback)
```

### 参数

- `function`
  - : 当浏览器引擎确定可以安全调用你的代码时执行的 {{jsxref("function")}}。微任务（microtask）的执行顺序在所有进行中的任务（pending task）完成之后，在对浏览器的事件循环产生控制之前。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
queueMicrotask(() => {
  // 函数的内容
});
```

来自 [queueMicrotask 的规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing)：

```js
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        this._cache[url] = data;
        this._setData(data);
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.queueMicrotask()")}}
- [`core-js` 中 `queueMicrotask()` 的 polyfill](https://github.com/zloirock/core-js#queuemicrotask)
- [在 JavaScript 中通过 queueMicrotask() 使用微任务](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS)
- [queueMicrotask 的解释](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [任务、微任务、队列和调度](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)（作者：Jake Archibald）
