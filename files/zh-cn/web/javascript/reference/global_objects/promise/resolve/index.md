---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Promise.resolve()`** 静态方法以给定值“解决（resolve）”一个 {{jsxref("Promise")}}。如果该值本身就是一个 Promise，那么该 Promise 将被返回；如果该值是一个 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) 对象，`Promise.resolve()` 将调用其 `then()` 方法及其两个回调函数；否则，返回的 Promise 将会以该值兑现。

该函数将嵌套的类 Promise 对象（例如，一个将被兑现为另一个 Promise 对象的 Promise 对象）展平，转化为单个 Promise 对象，其兑现值为一个非 thenable 值。

{{InteractiveExample("JavaScript Demo: Promise.resolve()")}}

```js interactive-example
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // Expected output: 123
});
```

## 语法

```js-nolint
Promise.resolve(value)
```

### 参数

- `value`
  - : 要被该 `Promise` 对象解决的参数。也可以是一个 `Promise` 对象或一个 thenable 对象。

### 返回值

一个由给定值解决的 {{jsxref("Promise")}}，或者如果该值为一个 Promise 对象，则返回该对象。用于解决的 Promise 可以处于已兑现、已拒绝或待定状态中的任何一种。例如，对一个已拒绝的 Promise 进行调用仍将返回一个已拒绝的 Promise。

## 描述

`Promise.resolve()` 方法用于*解决*一个 Promise，但这与“兑现”（fulfill）或“拒绝”（reject）Promise 对象并不相同。有关术语的定义，请参见 [Promise 描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#描述)。简而言之，`Promise.resolve()` 返回一个 Promise 对象，其最终状态取决于另一个 Promise 对象、thenable 对象或其他值。

> [!NOTE]
> 如果对 `value` 表达式进行求值时同步抛出了错误，则该错误不会被 `Promise.resolve()` 捕获并包装在已拒绝的 Promise 中。对于这种情况，请考虑使用 {{jsxref("Promise/try", "Promise.try(() => value)")}}。

`Promise.resolve()` 方法是一个通用方法，支持子类化，这意味着它可以在 `Promise` 的子类上调用，并且结果会是该子类类型的 Promise 对象。为此，子类的构造函数必须实现与 [`Promise()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 构造函数相同的签名，即接受一个 `executor` 函数，该函数可以用 `resolve` 和 `reject` 回调函数作为参数进行调用。

`Promise.resolve()` 方法特殊处理了原生 `Promise` 实例。如果 `value` 属于 `Promise` 或其子类，并且 `value.constructor === Promise`，那么 `Promise.resolve()` 直接返回 `value`，而不会创建一个新的 `Promise` 实例。否则，`Promise.resolve()` 实际上相当于 `new Promise((resolve) => resolve(value))` 的简写形式。

实际上，大部分解决逻辑是由 `Promise()` 构造函数传递的 [`resolve` 函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#resolve_函数)实现的，简单概括如下：

- 如果传入的是一个非 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) 对象的值，则返回的 Promise 对象将以该值兑现。
- 如果传入的是一个 thenable 对象，则通过传入一对解决函数作为参数调用该 thenable 对象的 `then` 方法后得到的状态将作为返回的 Promise 对象的状态。（但是因为原生的 Promise 直接通过 `Promise.resolve()` 调用，而不创建封装对象，所以不会在原生 Promise 上调用 `then` 方法。）如果 `resolve` 函数接收到另一个 thenable 对象，则会再次进行解决，以确保 Promise 对象的最终兑现值永远不会是 thenable 对象。

## 示例

### 使用 Promise.resolve 静态方法

```js
Promise.resolve("成功").then(
  (value) => {
    console.log(value); // "成功"
  },
  (reason) => {
    // 不会被调用
  },
);
```

### resolve 一个数组

```js
const p = Promise.resolve([1, 2, 3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### resolve 另一个 promise

`Promise.resolve()` 方法会重用已存在的 `Promise` 实例。如果它正在解决一个原生的 Promise，它将返回同一 Promise 实例，而不会创建一个封装对象。

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`值：${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// 按顺序打印：
// original === cast ? true
// 值：33
```

日志输出顺序颠倒其实是由于异步地调用 `then` 处理器。请参见 {{jsxref("Promise/then", "then()")}} 参考文档获取更多信息。

### resolve thenable 对象并抛出错误

```js
// Resolve 一个 thenable 对象
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill("已兑现！");
  },
});
console.log(p1 instanceof Promise); // true，thenable 对象被转换为一个 Promise 对象

p1.then(
  (v) => {
    console.log(v); // "已兑现！"
  },
  (e) => {
    // 不会被调用
  },
);

// Thenable 在回调之前抛出异常
// Promise 被拒绝
const thenable = {
  then(onFulfilled) {
    throw new TypeError("抛出异常");
    onFulfilled("Resolving");
  },
};

const p2 = Promise.resolve(thenable);
p2.then(
  (v) => {
    // 不会被调用
  },
  (e) => {
    console.error(e); // TypeError: 抛出异常
  },
);

// Thenable 在回调 Promise 被解决之后抛出异常
const thenable = {
  then(onFulfilled) {
    onFulfilled("解决");
    throw new TypeError("Throwing");
  },
};

const p3 = Promise.resolve(thenable);
p3.then(
  (v) => {
    console.log(v); // "解决"
  },
  (e) => {
    // 不会被调用
  },
);
```

嵌套的 thenable 对象将被“深度展平”为单个 Promise 对象。

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // 该 thenable 对象将兑现为另一个 thenable 对象
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable).then((v) => {
  console.log(v); // 42
});
```

> [!WARNING]
> 不要在一个解决为自身的 thenable 对象上调用 `Promise.resolve()`。这将导致无限递归，因为它试图展平一个无限嵌套的 Promise。

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // 将会导致无限递归。
```

### 在非 Promise 构造函数上调用 resolve()

`Promise.resolve()` 是一个通用方法。它可以在任何实现与 `Promise()` 构造函数相同签名的构造函数上调用。例如，我们可以在一个构造函数上调用它，并将 `console.log` 作为 `resolve` 参数传递：

```js
class NotPromise {
  constructor(executor) {
    // “resolve”和“reject”函数的行为与原生 Promise 完全不同，但 `Promise.resolve()` 方法以相同的方式调用它们。
    executor(
      (value) => console.log("已解决", value),
      (reason) => console.log("已拒绝", reason),
    );
  }
}

Promise.resolve.call(NotPromise, "foo"); // 输出 "已解决 foo"
```

展平嵌套的 thenable 对象的能力是由 `Promise()` 构造函数的 `resolve` 函数实现的，因此如果你在另一个构造函数上调用它，嵌套的 thenable 对象可能不会被展平，这取决于该构造函数如何实现其 `resolve` 函数。

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // 该 thenable 对象将兑现为另一个 thenable 对象
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve.call(NotPromise, thenable); // 输出 "已兑现 { then: [Function: then] }"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
