---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
---

{{JSRef}}**`finally()`** 方法返回一个 {{jsxref("Promise")}}。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在 `Promise` 是否成功完成后都需要执行的代码提供了一种方式。这避免了同样的语句需要在 {{jsxref("Promise.then", "then()")}} 和 {{jsxref("Promise.catch", "catch()")}} 中各写一次的情况。

## 语法

```plain
p.finally(onFinally);

p.finally(function() {
   // 返回状态为 (resolved 或 rejected)
});
```

### 参数

- `onFinally`
  - : `Promise` 结束后调用的 {{jsxref("Function")}}。

### 返回值

返回一个设置了 `finally` 回调函数的 {{jsxref("Promise")}} 对象。

## 描述

如果你想在 promise 执行完毕后无论其结果怎样都做一些处理或清理时，`finally()` 方法可能是有用的。

`finally()` 虽然与 `.then(onFinally, onFinally)` 类似，它们不同的是：

- 调用内联函数时，不需要多次声明该函数或为该函数创建一个变量保存它。
- 由于无法知道 `promise` 的最终状态，所以 `finally` 的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
- 与`Promise.resolve(2).then(() => {}, () => {})`（resolved 的结果为`undefined`）不同，`Promise.resolve(2).finally(() => {})` resolved 的结果为 `2`。
- 同样，`Promise.reject(3).then(() => {}, () => {})` (fulfilled 的结果为`undefined`), `Promise.reject(3).finally(() => {})` rejected 的结果为 `3`。

> **备注：** 在 `finally` 回调中 `throw`（或返回被拒绝的 promise）将以 `throw()` 指定的原因拒绝新的 promise.

## 示例

```js
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.log(error); })
  .finally(function() { isLoading = false; });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
