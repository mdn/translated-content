---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
---

{{JSRef}}

{{jsxref("Promise")}} 对象的 **`catch()`** 方法用于注册一个在 promise 被拒绝时调用的函数。它会立即返回一个等价的 {{jsxref("Promise")}} 对象，这可以允许你[链式](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#链式调用)调用其他 promise 的方法。此方法是 {{jsxref("Promise/then", "Promise.prototype.then(undefined, onRejected)")}} 的一种简写形式。

{{EmbedInteractiveExample("pages/js/promise-catch.html")}}

## 语法

```plain
p.catch(onRejected);

p.catch(function(reason) {
   // 拒绝
});
```

### 参数

- **onRejected**
  - : 当 Promise 被 rejected 时，被调用的一个 {{jsxref("Function")}}。该函数拥有一个参数：`reason` rejection 的原因。如果 `onRejected` 抛出一个错误或返回一个本身失败的 Promise，通过 `catch()` 返回的 Promise 被 rejected；否则，它将显示为成功（resolved）。

### 返回值

返回一个新的 {{jsxref("Promise")}}，无论当前的 promise 状态如何，这个新的 promise 在返回时总是处于待定（pending）状态。如果 `onRejected` 方法抛出了一个错误或者返回了一个被拒绝（rejected）的 promise， 那么这个新的 promise 也会被拒绝（rejected）；否则它最终会被兑现（fulfilled）。

## 描述

`catch` 方法用于在 Promise 链进行错误处理，因为它总是会返回一个 {{jsxref("Promise")}}，所以它可以和 {{jsxref("Promise/then", "then()")}} 方法一样被[链式调用](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#链式调用)。

如果一个 promise 被拒绝（rejected）并且没有可调用的拒绝处理器（处理器可以是 {{jsxref("Promise.prototype.then()")}}、{{jsxref("Promise.prototype.catch()")}} 或 {{jsxref("Promise.prototype.finally()")}}），则拒绝事件由宿主环境来提供。在浏览器中，这将导致未处理的拒绝（[`unhandledrejection`](/zh-CN/docs/Web/API/Window/unhandledrejection_event)）事件。如果将一个处理器附加到一个已被拒绝，且已导致未处理的拒绝事件的 promise，将会触发 [`rejectionhandled`](/zh-CN/docs/Web/API/Window/rejectionhandled_event) 事件。

`catch()` 方法内部会调用当前 promise 对象的 `then()` 方法，并将 `undefined` 和 `onRejected`作为参数传递给 `then()`。调用后的值直接返回，你可以查看以下的示例便于观察。

```js
// overriding original Promise.prototype.then/catch just to add some logs
((Promise) => {
  const originalThen = Promise.prototype.then;
  const originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("Called .then on %o with arguments: %o", this, args);
    return originalThen.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("Called .catch on %o with arguments: %o", this, args);
    return originalCatch.apply(this, args);
  };
})(Promise);

// calling catch on an already resolved promise
Promise.resolve().catch(function XXX() {});

// Logs:
// Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

这意味着传递 `undefined` 仍然会导致返回的 promise 被拒绝，你必须传递一个函数来防止最终的 promise 被拒绝。

因为 `catch()` 只是单纯的调用了 `then()`，它支持子类化。

## 示例

### 使用链式语句的 `catch` 方法

```js
var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw 'oh, no!';
}).catch(function(e) {
  console.log(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});

// 以下行为与上述相同
p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
}).catch(function(e) {
  console.log(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
```

### 捕获抛出的错误

```js
// 抛出一个错误，大多数时候将调用 catch 方法
var p1 = new Promise(function(resolve, reject) {
  throw 'Uh-oh!';
});

p1.catch(function(e) {
  console.log(e); // "Uh-oh!"
});

// 在异步函数中抛出的错误不会被 catch 捕获到
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw 'Uncaught Exception!';
  }, 1000);
});

p2.catch(function(e) {
  console.log(e); // 不会执行
});

// 在 resolve() 后面抛出的错误会被忽略
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw 'Silenced Exception!';
});

p3.catch(function(e) {
   console.log(e); // 不会执行
});
```

### 如果已决议

```js
//创建一个新的 Promise，且已决议
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
    //这个方法永远不会调用
    console.log("catch p1!");
    console.log(reason);
});

p2.then(function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
