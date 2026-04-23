---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

**`Promise.try()`** 静态方法接受一个任意类型的回调函数（无论其是同步或异步，返回结果或抛出异常），并将其结果封装成一个 {{jsxref("Promise")}}。

## 语法

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### 参数

- `func`
  - ：使用提供的参数（`arg1`、`arg2`、...、`argN`）同步调用的函数。它可以做任何事情——要么返回一个值、抛出一个错误或者返回一个 promise。
- `arg1`、`arg2`、…、`argN`
  - : 传入给 `func` 的参数。

### 返回值

一个 {{jsxref("Promise")}}，其状态可以是：

- 已兑现的，如果 `func` 同步地返回一个值。
- 已拒绝的，如果 `func` 同步地抛出一个错误。
- 异步兑现或拒绝的，如果 `func` 返回一个 promise。

## 描述

你可能有一个接受回调函数的 API，这个回调函数可能是同步的，也可能是异步的。你希望将结果封装成一个 promise，统一处理。最直接的方法可能是 {{jsxref("Promise/resolve", "Promise.resolve(func())")}}。问题是，如果 `func()` 同步地抛出一个错误，这个错误不会被捕获，并变成一个被拒绝的 promise。

常见的做法（将函数调用结果提升为已履行或拒绝的 promise）通常看起来是这样的：

```js
new Promise((resolve) => resolve(func()));
```

但在这里，`Promise.try()` 更有用：

```js
Promise.try(func);
```

对于内置的 `Promise()` 构造函数，如果执行器函数抛出错误，它会自动捕获并将其转换为拒绝状态，因此这两种方法基本等同，只是 `Promise.try()` 更简洁易读。

请注意，`Promise.try()` 与下面代码并*不*完全等价，尽管它们非常相似：

```js
Promise.resolve().then(func);
```

它们的区别在于，传入给 {{jsxref("Promise/then", "then()")}} 的回调总是异步调用的，而 `Promise()` 构造函数的执行器函数总是同步调用的。`Promise.try()` 也会同步调用函数，并尽可能立即解决 promise。

`Promise.try()` 与 {{jsxref("Promise/catch", "catch()")}} 和 {{jsxref("Promise/finally", "finally()")}} 结合使用，可以用来在单个链中处理同步和异步错误，并使处理 promise 错误看起来像处理同步错误。

类似 {{domxref("Window/setTimeout", "setTimeout()")}}，`Promise.try()` 接受额外的参数，这些参数将传递给回调。这意味着，不要这样做：

```js
Promise.try(() => func(arg1, arg2));
```

而可以这样：

```js
Promise.try(func, arg1, arg2);
```

它们是等效的，但是后者避免创建额外的闭包并且效率更高。

## 示例

### 使用 Promise.try()

下面的示例接受一个回调函数，将其“提升”为一个 promise，处理结果，并进行一些错误处理：

```js
function doSomething(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("完成"));
}

doSomething(() => "同步的结果");

doSomething(() => {
  throw new Error("同步的错误");
});

doSomething(async () => "异步的结果");

doSomething(async () => {
  throw new Error("异步的错误");
});
```

使用 async/await 语法实现的相同效果的代码如下：

```js
async function doSomething(action) {
  try {
    const result = await action();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}
```

### 在非 Promise 对象的构造函数中调用 try()

`Promise.try()` 是一个通用的方法，它可以在任何实现与 `Promise()` 构造函数相同签名的构造函数中被调用。

以下的代码是 `Promise.try()` 的一个近似实现（尽管它仍然不能被用作 polyfill）：

```js
Promise.try = function (func) {
  return new this((resolve, reject) => {
    try {
      resolve(func());
    } catch (error) {
      reject(error);
    }
  });
};
```

由于 `Promise.try()` 的实现方式（即 `try...catch`），我们可以安全地将 `Promise.try()` 的 `this` 设置为任何自定义的构造函数，并且它永远不会同步地抛出错误。

```js
class NotPromise {
  constructor(executor) {
    // “resolve”函数和“reject”函数的行为与原生 promise 完全不同，
    // 但 Promise.try() 只是调用 resolve
    executor(
      (value) => console.log("已解决", value),
      (reason) => console.log("已拒绝", reason),
    );
  }
}

const p = Promise.try.call(NotPromise, () => "哈喽");
// 输出：已解决 哈喽

const p2 = Promise.try.call(NotPromise, () => {
  throw new Error("哦嚯");
});
// 输出：已拒绝 Error: 哦嚯
```

与 `Promise()` 不同，`NotPromise()` 构造函数在运行执行器期间*不会*优雅地处理异常。尽管 `throw` 语句存在，`Promise.try()` 仍然能捕获异常并将其传递给 `reject()` 以便记录。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Promise.try` 的 polyfill](https://github.com/zloirock/core-js#promisetry)
- [使用 promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises) 指南
- {{jsxref("Promise")}}
- [`Promise()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
