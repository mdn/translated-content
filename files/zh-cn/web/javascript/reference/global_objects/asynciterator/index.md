---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`AsyncIterator`** 对象是符合[异步迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)的对象，其提供了 `next()` 方法用以返回一个兑现为迭代器结果对象的 promise。`AsyncIterator.prototype` 对象是一个隐藏的全局对象，所有内置的异步迭代器都继承自它。其提供了 [`[Symbol.asyncIterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator) 方法，该方法返回异步迭代器对象本身，使异步迭代器也[异步可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)。

注意，`AsyncIterator` *不是*全局对象，尽管将来会出现[异步迭代器辅助方法提案](https://github.com/tc39/proposal-async-iterator-helpers)。所有内置异步迭代器共享的 `AsyncIterator.prototype` 对象可以通过以下代码获得：

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## 描述

目前，唯一内置的 JavaScript 异步迭代器是由[异步生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)返回的 {{jsxref("AsyncGenerator")}} 对象。还有一些其他的内置异步迭代器存在于 web API 中，例如 {{domxref("ReadableStream")}} 的异步迭代器。

每个异步迭代器都有一个不同的原型对象，它定义了特定异步迭代器使用的 `next()` 方法。所有这些原型对象都继承自 `AsyncIterator.prototype`，它提供了一个 [`[Symbol.asyncIterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) 方法，该方法返回异步迭代器对象本身，使异步迭代器也[可异步迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)。

> **备注：** `AsyncIterator.prototype` 并未实现 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)，因此默认情况下，异步迭代器不是[同步可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)。

## 实例方法

- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : 返回异步迭代器对象本身。这使异步迭代器对象也可以异步迭代。

## 示例

### 使用异步迭代器作为异步可迭代对象

所有内置异步迭代器都可以异步迭代，因此你可以在 `for await...of` 循环中使用它们：

```js
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();
(async () => {
  for await (const value of asyncIterator) {
    console.log(value);
  }
})();
// 输出：1，2，3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/async_function*", "async function*")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
