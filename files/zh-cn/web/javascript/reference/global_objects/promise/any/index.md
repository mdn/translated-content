---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
---

{{JSRef}}

**`Promise.any()`** 静态方法将一个 Promise 可迭代对象作为输入，并返回一个 {{jsxref("Promise")}}。当输入的任何一个 Promise 兑现时，这个返回的 Promise 将会兑现，并返回第一个兑现的值。当所有输入 Promise 都被拒绝（包括传递了空的可迭代对象）时，它会以一个包含拒绝原因数组的 {{jsxref("AggregateError")}} 拒绝。

{{EmbedInteractiveExample("pages/js/promise-any.html")}}

## 语法

```js-nolint
Promise.any(iterable)
```

### 参数

- `iterable`
  - : 一个 promise 的[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)（例如一个{{jsxref("Array", "数组", "", 1)}}）。

### 返回值

一个 {{jsxref("Promise")}}，其状态为：

- **已拒绝（already rejected）**，如果传入的 `iterable` 为空的话。
- **异步兑现（asynchronously filfilled）**，当给定的 `iterable` 中的任何一个 Promise 被兑现时，返回的 Promise 就会被兑现。其兑现值是第一个兑现的 Promise 的兑现值。
- **异步拒绝（asynchronously rejected）**，当给定的 `iterable` 中的所有 Promise 都被拒绝时。拒绝原因是一个 {{jsxref("AggregateError")}}，其 `errors` 属性包含一个拒绝原因数组。无论完成顺序如何，这些错误都是按照传入的 Promise 的顺序排序。如果传递的 `iterable` 是非空的，但不包含待定的 Promise，则返回的 Promise 仍然是异步拒绝的（而不是同步拒绝的）。

## 描述

`Promise.any()` 方法是 [Promise 并发](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_并发)方法之一。该方法对于返回第一个兑现的 Promise 非常有用。一旦有一个 Promise 兑现，它就会立即返回，因此不会等待其他 Promise 完成。

与 {{JSxRef("Promise.all()")}} 返回一个兑现值*数组*不同的是，我们只会得到一个兑现值（假设至少有一个 Promise 被兑现）。此方法对于那些如果我们只需要一个 Promise 被兑现，但不在意哪一个被兑现的情况更有益。请注意另一个区别：该方法在接收到*空的可迭代对象*时会拒绝，因为实际上，该可迭代对象不包含任何兑现的项。你可以将 `Promise.any()` 和 `Promise.all()` 与 {{jsxref("Array.prototype.some()")}} 和 {{jsxref("Array.prototype.every()")}} 进行比较。

同时，与 {{JSxRef("Promise.race()")}} 返回第一个*敲定*（无论是兑现还是拒绝）的值不同的是，该方法返回第一个*兑现*的值。该方法忽略所有被拒绝的 Promise，直到第一个被兑现的 Promise。

## 示例

### 使用 Promise.any()

`Promise.any()` 会以第一个兑现的 Promise 来兑现，即使有 Promise 先被拒绝。这与 {{jsxref("Promise.race()")}} 不同，后者会使用第一个敲定的 Promise 来兑现或拒绝。

```js
const pErr = new Promise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "很快完成");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast 第一个兑现
});
// 打印：
// 很快完成
```

### 拒绝并返回 AggregateError

如果没有 Promise 被兑现，`Promise.any()` 将使用 {{jsxref("AggregateError")}} 进行拒绝。

```js
const failure = new Promise((resolve, reject) => {
  reject("总是失败");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### 显示第一张已加载的图片

在这个例子，我们有一个获取图片并返回 blob 的函数，我们使用 `Promise.any()` 来获取一些图片并显示第一张可用的图片（即最先解决的那个 promise）。

```js
async function fetchAndDecode(url, description) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP 错误！状态码：${res.status}`);
  }
  const data = await res.blob();
  return [data, description];
}

const coffee = fetchAndDecode("coffee.jpg", "Coffee");
const tea = fetchAndDecode("tea.jpg", "Tea");

Promise.any([coffee, tea])
  .then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.error(e);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Promise.any` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Promise")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.allSettled()")}}
- {{JSxRef("Promise.race()")}}
