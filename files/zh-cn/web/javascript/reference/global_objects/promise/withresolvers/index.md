---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{JSRef}}

**`Promise.withResolvers()`** 静态方法返回一个对象，其包含一个新的 {{jsxref("Promise")}} 对象和两个函数，用于解决或拒绝它，对应于传入给 {{jsxref("Promise/Promise", "Promise()")}} 构造函数执行器的两个参数。

## 语法

```js-nolint
Promise.withResolvers()
```

### 参数

无。

### 返回值

包含以下属性的普通对象：

- `promise`
  - : 一个 {{jsxref("Promise")}} 对象。
- `resolve`
  - : 一个函数，用于解决该 Promise。关于其语义，请参阅 {{jsxref("Promise/Promise", "Promise()")}} 构造函数。
- `reject`
  - : 一个函数，用于拒绝该 Promise。关于其语义，请参阅 {{jsxref("Promise/Promise", "Promise()")}} 构造函数。

## 描述

`Promise.withResolvers()` 完全等同于以下代码：

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

只是它更简洁，并且不需要使用 {{jsxref("Statements/let", "let")}}。

使用 `Promise.withResolvers()` 关键的区别在于解决和拒绝函数现在与 Promise 本身处于同一作用域，而不是在执行器中被创建和一次性使用。这可能使得一些更高级的用例成为可能，例如在重复事件中重用它们，特别是在处理流和队列时。这通常也意味着相比在执行器内包装大量逻辑，嵌套会更少。

`Promise.withResolvers()` 是通用的且支持子类化，这意味着它可以在 `Promise` 的子类上调用，结果将包含一个该子类类型的 promise。要做到这一点，子类的构造函数必须实现与 [`Promise()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 构造函数相同的签名——接受一个单独的 `executor` 函数，该函数可以用 `resolve` 和 `reject` 回调作为参数来调用。

## 示例

### 将流转换为异步可迭代对象

`Promise.withResolvers()` 的使用场景是，当你有一个 promise，需要通过无法包装在 promise 执行器内的某个事件监听器来解决或拒绝。以下示例将 Node.js 的[可读流](https://nodejs.org/api/stream.html#class-streamreadable)转换为[异步可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)。这里的每个 `promise` 代表一个可用的数据批次，每次读取当前批次时，就会为下一个批次创建一个新的 promise。请注意，事件监听器只附加了一次，但实际上每次都调用了不同版本的 `resolve` 和 `reject` 函数。

```js
async function* readableToAsyncIterable(stream) {
  let { promise, resolve, reject } = Promise.withResolvers();
  stream.on("error", (error) => reject(error));
  stream.on("end", () => resolve());
  stream.on("readable", () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### 在非 Promise 构造函数上调用 withResolvers()

`Promise.withResolvers()` 是一个通用方法。它可以在任何实现了与 `Promise()` 构造函数相同签名的构造函数上调用。例如，我们可以在一个将 `console.log` 作为 `resolve` 和 `reject` 函数传入给 `executor` 的构造函数上调用它：

```js
class NotPromise {
  constructor(executor) {
    // “resolve”和“reject”函数和原生的 promise 的行为完全不同
    // 但 Promise.withResolvers() 只是返回它们，就像是原生的 promise 一样
    executor(
      (value) => console.log("以", value, "解决"),
      (reason) => console.log("以", reason, "拒绝"),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("hello");
// 输出：以 hello 解决
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Promise.withResolvers` 的 polyfill](https://github.com/zloirock/core-js#promisewithresolvers)
- [使用 promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises) 指南
- {{jsxref("Promise")}}
- [`Promise()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
