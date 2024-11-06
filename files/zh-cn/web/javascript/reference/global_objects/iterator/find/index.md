---
title: Iterator.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: cb6a4b1a19536df4c5bcaaf0e74605e3a14d49ec
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`find()`** 方法与 {{jsxref("Array.prototype.find()")}} 类似：它返回迭代器生成的第一个满足提供的测试函数的元素。如果没有值满足测试函数，则返回 {{jsxref("undefined")}}。

## 语法

```js-nolint
find(callbackFn)
```

### 参数

- `callbackFn`
  - : 为迭代器中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)来表示找到了一个匹配的元素，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

迭代器生成的第一个满足提供的测试函数的元素。如果没有值满足测试函数，则返回 {{jsxref("undefined")}}。

## 描述

`find()` 迭代该迭代器并对每个元素调用一次 `callbackFn` 函数。如果 `callbackFn` 函数返回一个真值，则立即返回该元素。否则，它会一直迭代到迭代器的末尾，并返回 `undefined`。如果 `find()` 返回了一个元素，则会调用底层迭代器的 `return()` 方法来关闭它。

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`find()` 会在找到第一个满足元素时立即返回。如果 `callbackFn` 始终返回假值，则该方法永远不会返回。

## 示例

### 使用 find()

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().find(isEven)); // 2

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).find(isNegative)); // undefined
console.log(fibonacci().find(isNegative)); // 永远不会完成
```

调用 `find()` 总是关闭底层迭代器，即使该方法提前返回。迭代器永远不会处于中间状态。

```js
const seq = fibonacci();
console.log(seq.find(isEven)); // 2
console.log(seq.next()); // { value: undefined, done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.find` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
