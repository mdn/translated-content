---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
---

{{JSRef}}

**`Promise.allSettled()`** 方法以 promise 组成的可迭代对象作为输入，并且返回一个 {{jsxref("Promise")}} 实例。当输入的所有 promise 都已敲定时（包括传递空的可迭代类型），返回的 promise 将兑现，并带有描述每个 promsie 结果的对象数组。

{{EmbedInteractiveExample("pages/js/promise-allsettled.html")}}

## 语法

```js-nolint
Promise.allSettled(iterable)
```

### 参数

- `iterable`
  - : 一个以 promise 组成的[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代的协议)（例如 {{jsxref("Array")}}）对象。

### 返回值

一个 {{jsxref("Promise")}}，如下：

- **已经兑现**，如果传递的 `iterable` 是空的。
- **异步兑现**，当给定的 `iterable` 中所有 promise 已经敲定时（要么已兑现，要么已拒绝）。兑现的值是一个对象数组，其中的对象按照 `iterable` 中 promise 传递的顺序，描述每一个 promise 的结果，无论完成顺序如何。每个结果对象都有以下的属性：

  - `status`
    - : 一个字符串，要么是 `"fulfilled"`，要么是 `"rejected"`，表示 promise 的最终状态。
  - `value`
    - : 仅当 `status` 为 `"fulfilled"`，才存在。在 promise 兑现时才有 value。
  - `reason`
    - : 仅当 `status` 为 `"rejected"`，才存在，在 promsie 拒绝时才有 reason。

  如果 `iterable` 传递的不是空的，但包含未响应的 promise，则返回的 promise 仍然异步（而不是同步）兑现。

## 描述

`Promise.allSettled()` 方法是 [promise 并发性](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency)方法的其中之一。在你有多个不依赖于彼此成功完成的异步任务时，或者你总是想知道每个 promise 的结果时，使用 `Promise.allSettled()` 。

相比之下，如果任务相互依赖，或者如果你想立即拒绝其中任何任务，{{jsxref("Promise.all()")}} 返回的 Promise 可能更合适。

## 示例

### 使用 Promise.allSettled()

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中的 `Promise.allSettled` polyfill](https://github.com/zloirock/core-js#ecmascript-promise)
- [使用 promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
- [带有 promise 的优雅异步编程](/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
