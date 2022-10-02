---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
---

{{JSRef}}

该 **`Promise.allSettled()`** 方法返回一个在所有给定的 promise 都已经`fulfilled`或`rejected`后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。

当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个`promise`的结果时，通常使用它。

相比之下，[`Promise.all()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 更适合彼此相互依赖或者在其中任何一个`reject`时立即结束。

{{EmbedInteractiveExample("pages/js/promise-allsettled.html")}}

## 句法

```plain
Promise.allSettled(iterable);
```

### 参数

- `iterable`
  - : 一个[可迭代的](/zh-CN/docs/Web/JavaScript/Guide/iterable)对象，例如{{jsxref("Array")}}，其中每个成员都是`Promise`。

### 返回值

一旦所指定的 promises 集合中每一个 promise 已经完成，无论是成功的达成或被拒绝，**未决议的** {{jsxref("Promise")}}将被**异步**完成。那时，所返回的 promise 的处理器将传入一个数组作为输入，该数组包含原始 promises 集中每个 promise 的结果。

对于每个结果对象，都有一个 `status` 字符串。如果它的值为 `fulfilled`，则结果对象上存在一个 `value` 。如果值为 `rejected`，则存在一个 `reason` 。value（或 reason）反映了每个 promise 决议（或拒绝）的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Promises](/zh-CN/docs/Archive/Add-ons/Techniques/Promises)
- [Using promises](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
- [Graceful asynchronous programming with promises](/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
