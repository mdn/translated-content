---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
---

{{JSRef}}

{{jsxref("Promise")}} 实例的 **`catch()`** 方法用于注册一个在 promise 被拒绝时调用的函数。它会立即返回一个等效的 {{jsxref("Promise")}} 对象，这可以允许你[链式](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#链式调用)调用其他 promise 的方法。此方法是 {{jsxref("Promise/then", "Promise.prototype.then(undefined, onRejected)")}} 的一种简写形式。

{{EmbedInteractiveExample("pages/js/promise-catch.html")}}

## 语法

```js-nolint
catch(onRejected)
```

### 参数

- `onRejected`
  - : 一个在此 Promise 对象被拒绝时异步执行的函数。它的返回值将成为 `catch()` 返回的 Promise 对象的兑现值。此函数被调用时将传入以下参数：
    - `reason`
      - : Promise 对象的拒绝值。

### 返回值

返回一个新的 {{jsxref("Promise")}}，无论当前的 promise 状态如何，这个新的 promise 在返回时总是处于待定状态。如果 `onRejected` 方法抛出了一个错误或者返回了一个被拒绝的 promise，那么这个新的 promise 也会被拒绝；否则它最终会被兑现。

## 描述

`catch` 方法用于在 Promise 链进行错误处理，因为它总是会返回一个 {{jsxref("Promise")}}，所以它可以和 {{jsxref("Promise/then", "then()")}} 方法一样被[链式调用](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#catch_的后续链式操作)。

如果一个 promise 被拒绝并且没有可调用的拒绝处理器（处理器可以是 {{jsxref("Promise.prototype.then()")}}、{{jsxref("Promise.prototype.catch()")}} 或 {{jsxref("Promise.prototype.finally()")}}），则拒绝事件由宿主环境来提供。在浏览器中，这将触发 [`unhandledrejection`](/zh-CN/docs/Web/API/Window/unhandledrejection_event) 事件。如果将一个处理器附加到一个已被拒绝，且已导致未处理的拒绝事件的 promise，将会触发 [`rejectionhandled`](/zh-CN/docs/Web/API/Window/rejectionhandled_event) 事件。

`catch()` 方法内部会调用当前 promise 对象的 `then()` 方法，并将 `undefined` 和 `onRejected` 作为参数传递给 `then()`。该调用的返回值直接被返回。如果你对这些方法进行封装，这一点是可以观察到的。

```js
// 重写原本的 Promise.prototype.then/catch 方法，只是为了添加一些日志
((Promise) => {
  const originalThen = Promise.prototype.then;
  const originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("在 %o 上调用 .then 方法，参数为：%o", this, args);
    return originalThen.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("在 %o 上调用 .catch 方法，参数为：%o", this, args);
    return originalCatch.apply(this, args);
  };
})(Promise);

// 对已经解决的 Promise 调用 catch
Promise.resolve().catch(function XXX() {});

// 输出：
// 在 Promise{} 上调用 .catch，参数为：Arguments{1} [0: function XXX()]
// 在 Promise{} 上调用 .then，参数为：Arguments{2} [0: undefined, 1: function XXX()]
```

这意味着传入 `undefined` 仍然会导致返回的 promise 被拒绝，你必须传入一个函数来防止最终的 promise 被拒绝。

因为 `catch()` 只是单纯的调用了 `then()`，它支持子类化。

> **备注：** 下面的示例抛出了 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 的实例。与同步的 [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw) 语句一样，这被认为是一种良好的实践；否则，执行捕获的部分将不得不对参数进行检查，以查看它是字符串还是错误，并且你可能会丢失有用的信息，例如堆栈跟踪。

## 示例

### 在链式调用中使用 catch() 方法

```js
const p1 = new Promise((resolve, reject) => {
  resolve("成功！");
});

p1.then((value) => {
  console.log(value); // "成功！"
  throw new Error("噢，不！");
})
  .catch((e) => {
    console.error(e.message); // "噢，不！"
  })
  .then(
    () => console.log("在 catch 后，调用链恢复了"),
    () => console.log("因为有了 catch 而不会被触发"),
  );

// 下面的行为与上面相同
p1.then((value) => {
  console.log(value); // "成功！"
  return Promise.reject("噢，不！");
})
  .catch((e) => {
    console.error(e); // "噢，不！"
  })
  .then(
    () => console.log("在 catch 后，调用链恢复了"),
    () => console.log("因为有了 catch 而不会被触发"),
  );
```

### 抛出错误时的陷阱

大多数情况下，抛出错误会调用 `catch()` 方法：

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("哦吼！");
});

p1.catch((e) => {
  console.error(e); // "哦吼！"
});
```

在异步函数内部抛出的错误会像未捕获的错误一样：

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("未捕获的异常！");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // 永远不会被调用
});
```

在调用 `resolve` 之后抛出的错误会被忽略：

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // 这里永远不会执行
});
```

### 如果 Promise 已兑现，catch() 不会被调用

```js
// 创建一个不会调用 onReject 的 Promise
const p1 = Promise.resolve("调用下一个");

const p2 = p1.catch((reason) => {
  // 这里永远不会执行
  console.error("p1 的 catch 函数被调用了！");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("下一个 Promise 的 onFulfilled 函数被调用了");
    console.log(value); // 调用下一个
  },
  (reason) => {
    console.log("下一个 Promise 的 onRejected 函数被调用了");
    console.log(reason);
  },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.finally()")}}
