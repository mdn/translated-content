---
title: Iterator.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: ec01fee8dfda3fe7dfa8fec41ce278b907c5abd2
---

{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`some()`** 方法与 {{jsxref("Array.prototype.some()")}} 类似：它测试迭代器中是否至少有一个生成的元素通过提供的函数实现的测试。它返回一个布尔值。

## 语法

```js-nolint
some(callbackFn)
```

### 参数

- `callbackFn`
  - : 为迭代器中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)来表示元素通过了测试，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

如果回调函数对至少一个元素返回了{{Glossary("truthy", "真值")}}，则返回 `true`。否则，返回 `false`。

## 描述

`some()` 迭代该迭代器，并对每个元素调用一次 `callbackFn` 函数。如果 `callbackFn` 返回真值，则立即返回 `true`。否则，它会一直迭代到迭代器的末尾，并返回 `false`。如果 `some()` 返回 `true`，则会调用底层迭代器的 `return()` 方法以关闭它。

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`some()` 会在第一次找到真值时立即返回 `true`。如果 `callbackFn` 始终返回假值，则该方法永远不会返回。

## 示例

### 使用 some()

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
console.log(fibonacci().some(isEven)); // true

const isNegative = (x) => x < 0;
const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).some(isPositive)); // false
console.log(fibonacci().some(isNegative)); // 永远不会结束
```

调用 `some()` 总是关闭底层迭代器，即使方法提前返回。迭代器永远不会处于中间状态。

```js
const seq = fibonacci();
console.log(seq.some(isEven)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.some` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Array.prototype.some()")}}
