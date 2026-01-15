---
title: Promise() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 3918b803fda416a26fc2b7a62976d2cd87187460
---

**`Promise()`** 构造函数创建 {{jsxref("Promise")}} 对象。它主要用于封装尚未支持 Promise 的基于回调的 API。

{{InteractiveExample("JavaScript Demo: Promise Constructor", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "foo"
});

console.log(promise1);
// Expected output: [object Promise]
```

## 语法

```js-nolint
new Promise(executor)
```

> [!NOTE]
> `Promise()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符来构造。如果尝试在没有使用 `new` 的情况下调用它，会抛出 {{jsxref("TypeError")}} 异常。

### 参数

- `executor`
  - : 在构造函数中执行的 {{jsxref("function")}}。它接收两个函数作为参数：`resolveFunc` 和 `rejectFunc`。`executor` 中抛出的任何错误都会导致 Promise 被拒绝，并且返回值将被忽略。`executor` 的语义将在下文详细介绍。

### 返回值

当通过 `new` 关键字调用 `Promise` 构造函数时，它会返回一个 Promise 对象。当 `resolveFunc` 或者 `rejectFunc` 被调用时，该 Promise 对象就会变为*已解决*（resolved）。请注意，如果你调用 `resolveFunc` 或 `rejectFunc` 并传入另一个 Promise 对象作为参数，可以说该 Promise 对象“已解决”，但仍未“敲定（settled）”。有关更多解释，请参阅 [Promise 描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#描述)。

## 描述

传统上（在 Promise 出现之前），设计上异步任务基于回调函数实现。

```js
readFile("./data.txt", (error, result) => {
  // 这个回调函数将在任务完成后被调用，返回最终的 `error` 或 `result`。
  // 任何依赖于返回结果的操作都必须在这个回调函数内定义。
});
// `readFile` 请求被发出后，此处的代码会立即执行。
// 它不会等待回调函数被调用，因此使 `readFile` 成为了“异步”的。
```

为了利用 Promise 提供的更好的可读性和语言特性，`Promise()` 构造函数允许将基于回调的 API 转换为基于 Promise 的 API。

> [!NOTE]
> 如果你的任务已经基于 Promise 实现，你大概率不需要使用 `Promise()` 构造函数。

`executor` 是将回调函数的结果与 Promise 关联在一起的自定义代码。编写 `executor` 的工作由程序员完成。它的函数签名应该是：

```js
function executor(resolveFunc, rejectFunc) {
  // 通常，`executor` 函数用于封装某些接受回调函数作为参数的异步操作，比如上面的 `readFile` 函数
}
```

`resolveFunc` 和 `rejectFunc` 也是函数，你可以给它们任何实际的名称。它们的函数签名很简单：它们接受一个任意类型的参数。

```js
resolveFunc(value); // 解决时调用
rejectFunc(reason); // 拒绝时调用
```

传入 `resolveFunc` 的 `value` 参数可以是另一个 Promise 对象，在这种情况下，新构造的 Promise 对象的状态将“锁定”到传入的 Promise 对象（作为 [resolution](#resolver_函数) Promise 的一部分）。`rejectFunc` 的语义类似于 [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw) 语句，因此 `reason` 通常是一个 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 实例。如果 `value` 或 `reason` 中有任意一个被省略，Promise 将会被兑现（fulfilled）或拒绝（rejected）为 `undefined`。

`executor` 的完成状态对 Promise 的状态影响有限：

- `executor` 函数的返回值会被忽略。`executor` 函数中的 `return` 语句仅影响控制流程，调整函数某个部分是否执行，但不会影响 Promise 的兑现值。如果 `executor` 函数退出，且未来不可能调用 `resolveFunc` 或 `rejectFunc`（例如，没有安排异步任务），那么 Promise 将永远保持待定状态。
- 如果在 `executor` 函数中抛出错误，则 Promise 将被拒绝，除非 `resolveFunc` 或 `rejectFunc` 已经被调用。

> [!NOTE]
> 待定的 Promise 的存在并不会阻止程序退出。如果事件循环为空，则程序会退出，尽管存在待定的 Promise（因为它们必然永远处于待定状态）。

以下是典型的 Promise 流程概述：

1. 在构造函数生成新的 `Promise` 对象时，它还会生成一对相应的 `resolveFunc` 和 `rejectFunc` 函数；它们与 `Promise` 对象“绑定”在一起。
2. `executor` 通常会封装某些提供基于回调的 API 的异步操作。回调函数（传给原始回调 API 的函数）在 `executor` 代码中定义，因此它可以访问 `resolveFunc` 和 `rejectFunc`。
3. `executor` 是同步调用的（在构造 `Promise` 时立即调用），并将 `resolveFunc` 和 `rejectFunc` 函数作为传入参数。
4. `executor` 中的代码有机会执行某些操作。异步任务的最终完成通过 `resolveFunc` 或 `rejectFunc` 引起的副作用与 Promise 实例进行通信。这个副作用让 `Promise` 对象变为“已解决”状态。
   - 如果先调用 `resolveFunc`，则传入的值将[解决](#resolver_函数)。Promise 可能会保持待定状态（如果传入了另一个 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) 对象），变为已兑现状态（在传入非 thenable 值的大多数情况下），或者变为已拒绝状态（在解析值无效的情况下）。
   - 如果先调用 `rejectFunc`，则 Promise 立即变为已拒绝状态。
   - 一旦 `resolveFunc` 或 `rejectFunc` 中的一个被调用，Promise 将保持解决状态。只有第一次调用 `resolveFunc` 或 `rejectFunc` 会影响 Promise 的最终状态，随后对任一函数的调用都不能更改兑现值或拒绝原因，也不能将其最终状态从“已兑现”转换为“已拒绝”或相反。
   - 如果 `executor` 抛出错误，则 Promise 被拒绝。但是，如果 resolveFunc 或 rejectFunc 中的一个已经被调用（因此 Promise 已经被解决），则忽略该错误。
   - 解决 Promise 不一定会导致 Promise 变为已兑现或已拒绝（即已敲定）。Promise 可能仍处于待定状态，因为它可能是用另一个 thenable 对象解决的，但它的最终状态将与已解决的 thenable 对象一致。
5. 一旦 Promise 敲定，它会（异步地）调用任何通过 {{jsxref("Promise/then", "then()")}}、{{jsxref("Promise/catch", "catch()")}} 或 {{jsxref("Promise/finally", "finally()")}} 关联的进一步处理程序。最终的兑现值或拒绝原因在调用时作为输入参数传给兑现和拒绝处理程序（请参阅 [promise 的链式调用](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_的链式调用)）。

例如，上面的基于回调的 `readFile` API 可以转换为基于 Promise 的 API。

```js
const readFilePromise = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

readFilePromise("./data.txt")
  .then((result) => console.log(result))
  .catch((error) => console.error("读取文件失败"));
```

`resolve` 和 `reject` 回调仅在 `executor` 函数的作用域内可用，这意味着在构造 promise 之后无法访问它们。如果你想在决定如何解决之前先构造 promise，可以使用 {{jsxref("Promise.withResolvers()")}} 方法，该方法暴露了 `resolve` and `reject` 函数。

### resolve 函数

`resolve` 函数有以下行为：

- 如果它被调用时传入了新建的 `Promise` 对象本身（即它所“绑定”的 Promise 对象），则 `Promise` 对象会被拒绝并抛出一个 {{jsxref("TypeError")}} 错误。
- 如果它使用一个非 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) 的值（基本类型，或一个没有 `then` 属性或 `then` 属性不可调用的对象），则该 Promise 对象会被立即以该值兑现。
- 如果它被调用时传入了一个 thenable 对象（包括另一个 `Promise` 实例），则该 thenable 对象的 `then` 方法将被保存并在未来被调用（它总是异步调用）。`then` 方法将被调用并传入两个回调函数，这两个函数的行为与传递给 `executor` 函数的 `resolveFunc` 和 `rejectFunc` 函数完全相同。如果调用 `then` 方法时出现错误，则当前的 `Promise` 对象会被拒绝并抛出这个错误。

在最后一种情况下，这意味着像下面这样的代码：

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

大致相当于：

```js
new Promise((resolve, reject) => {
  try {
    thenable.then(
      (value) => resolve(value),
      (reason) => reject(reason),
    );
  } catch (e) {
    reject(e);
  }
});
```

但是在 `resolve(thenable)` 的情况中，有如下区别：

1. `resolve` 函数是同步调用的，因此再次调用 `resolve` 或 `reject` 函数没有任何影响，即使通过 `anotherPromise.then()` 绑定的处理程序尚未被调用。
2. `then` 方法是异步调用的，因此如果传入 thenable 对象，则该 `Promise` 对象不会被立即解决。

因为 `resolve` 函数再次调用时使用 `thenable.then()` 传递给它的任何值作为 `value` 参数，所以解决函数能够展开嵌套的 thenable 对象，其中一个 thenable 对象调用其 `onFulfilled` 处理程序并返回另一个 thenable 对象。这样做的效果是，真实的 `Promise` 对象的兑现处理器永远不会接收到 thenable 对象作为其兑现值。

## 示例

### 将基于回调的 API 转换为基于 Promise 的 API

为了让一个函数具有 Promise 功能，可以在适当的时候调用 `resolve` 和 `reject` 函数，并返回一个 Promise 对象。

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

### 调用 resolveFunc 的效果

调用 `resolveFunc` 函数会使 Promise 对象变为已解决状态，因此再次调用 `resolveFunc` 或 `rejectFunc` 函数没有任何效果。然而，Promise 对象可能处于以下任何状态之一：待定、已兑现或已拒绝。

在下面这个例子中，`pendingResolved` Promise 对象在创建时就已经被解决，因为它已经“锁定”以匹配内部 Promise 对象的最终状态，后续在 executor 函数中调用 `resolveOuter` 或 `rejectOuter` 或抛出错误对其最终状态没有影响。然而，内部 Promise 对象仍然处于待定状态，直到 100 毫秒后才被解决，因此外部 Promise 对象也处于待定状态：

```js
const pendingResolved = new Promise((resolveOuter, rejectOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(() => {
        resolveInner("内部");
      }, 100);
    }),
  );
});
```

`fulfilledResolved` Promise 对象在被解决时立即变为已兑现状态，因为它以非 thenable 值解决。然而，在它被创建时，它是未解决的，因为 `resolve` 或 `reject` 函数还没有被调用。未解决的 Promise 对象必然是待定状态：

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("外部");
  }, 100);
});
```

显然，调用 `rejectFunc` 函数会导致 Promise 对象被拒绝。然而，即使在调用 `resolveFunc` 回调函数时，也有两种方法可以使 Promise 对象立即被拒绝。

```js
// 1. 传入 Promise 本身
const rejectedResolved1 = new Promise((resolve) => {
  // 注意：resolve 必须异步调用，以便初始化 rejectedResolved1 变量
  setTimeout(() => resolve(rejectedResolved1)); // TypeError: Chaining cycle detected for promise #<Promise>
});

// 2. 传入一个在访问 `then` 属性时抛出异常的对象
const rejectedResolved2 = new Promise((resolve) => {
  resolve({
    get then() {
      throw new Error("无法访问 then 属性");
    },
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Promise` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-promise)
- [使用 Promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises) 指南
- {{jsxref("Promise.withResolvers()")}}
