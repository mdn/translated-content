---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jsxref("AsyncIterator")}} 实例的 **`[Symbol.asyncIterator]()`** 方法实现了[异步可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)并允许内置的异步迭代器被大多数期望异步迭代器的语法所接受，如 [`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of) 循环。它返回 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的值，即异步迭代器对象本身。

{{InteractiveExample("JavaScript Demo: Map.prototype[Symbol.iterator]()")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]
```

## 语法

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### 参数

无。

### 返回值

[`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的值，即异步迭代器对象本身。

## 示例

### 使用 for await...of 循环进行迭代

请注意，你很少需要直接调用该方法。`[Symbol.asyncIterator]()` 方法的存在使得所有内置的异步迭代器都成为[异步可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)对象，而像 `for await...of` 循环这样的迭代语法会自动调用该方法来获取异步迭代器来进行循环。

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

- [`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of)
