---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
---

**`Promise.reject()`** 静态方法返回一个已拒绝（rejected）的 `Promise` 对象，拒绝原因为给定的参数。

{{InteractiveExample("JavaScript Demo: Promise.reject()")}}

```js interactive-example
function resolved(result) {
  console.log("Resolved");
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error("fail")).then(resolved, rejected);
// Expected output: Error: fail
```

## 语法

```js-nolint
Promise.reject(reason)
```

### 参数

- `reason`
  - : 该 `Promise` 对象被拒绝的原因。

### 返回值

返回一个已拒绝（rejected）的 {{jsxref("Promise")}}，拒绝原因为给定的参数。

## 描述

`Promise.reject` 静态方法返回一个被拒绝的 `Promise` 对象。通过使用 {{jsxref("Error")}} 的实例获取错误原因 `reason` 对调试和选择性错误捕捉很有帮助。

`Promise.reject()` 方法是一个通用方法，支持子类化，这意味着它可以在 `Promise` 的子类上调用，并且结果会是该子类类型的 Promise 对象。为此，子类的构造函数必须实现与 [`Promise()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 构造函数相同的签名，即接受一个 `executor` 函数，该函数可以用 `resolve` 和 `reject` 回调函数作为参数进行调用。`Promise.reject()` 实际上相当于 `new Promise((resolve, reject) => reject(reason))` 的简写形式。

与 {{jsxref("Promise.resolve()")}} 不同，即使 `reason` 已经是一个 Promise 对象，`Promise.reject()` 方法也始终会将其封装在一个新的 `Promise` 对象中。

## 示例

### 使用 `Promise.reject()` 静态方法

```js
Promise.reject(new Error("失败")).then(
  () => {
    // 不会被调用
  },
  (error) => {
    console.error(error); // Stacktrace
  },
);
```

### reject 一个 promise 对象

与 {{jsxref("Promise.resolve")}} 不同，`Promise.reject` 方法不会重用已存在的 `Promise` 实例。它始终返回一个新的 `Promise` 实例，该实例封装了拒绝的原因（`reason`）。

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### 在非 Promise 构造函数上调用 reject()

`Promise.reject()` 方法是一个通用方法。它可以在任何实现与 `Promise()` 构造函数相同签名的构造函数上调用。例如，我们可以在一个构造函数上调用它，并传入 `console.log` 作为 `reject` 参数：

```js
class NotPromise {
  constructor(executor) {
    // “resolve”和“reject”函数的行为与原生 Promise 完全不同，但 `Promise.reject()` 方法以相同的方式调用它们。
    executor(
      (value) => console.log("已解决", value),
      (reason) => console.log("已拒绝", reason),
    );
  }
}

Promise.reject.call(NotPromise, "foo"); // 输出 "已拒绝 foo"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
