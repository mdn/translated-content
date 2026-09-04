---
title: Iterator.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 `every()` 方法与 {{jsxref("Array.prototype.every()")}} 类似：它测试迭代器的所有生成的元素是否都能通过由提供的函数实现的测试。它返回一个布尔值。

## 语法

```js-nolint
every(callbackFn)
```

### 参数

- `callbackFn`
  - ：用于测试每个迭代器生成元素的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)来表示元素通过测试，否则返回[假值](/zh-CN/docs/Glossary/Falsy)。函数被调用时，会传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

如果 `callbackFn` 为所有元素都返回{{Glossary("truthy", "真")}}值，则为 `true`，否则为 `false`。

## 描述

`every()` 迭代该迭代器，并对每个元素调用一次 `callbackFn` 函数。如果 `callbackFn` 返回假值，则立即返回 `false`。否则，它会一直迭代到迭代器的结尾，并返回 `true`。如果 `every()` 返回 `false`，则会调用底层迭代器的 `return()` 方法。

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`every()` 会在第一次找到假值时立即返回 `false`。如果 `callbackFn` 始终返回真值，则该方法永远不会返回。

## 示例

### 使用 every()

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
console.log(fibonacci().every(isEven)); // false

const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).every(isPositive)); // true
console.log(fibonacci().every(isPositive)); // 永远不会完成
```

调用 `every()` 总是关闭底层迭代器，即使方法提前返回。迭代器永远不会处于中间状态。

```js
const seq = fibonacci();
console.log(seq.every(isEven)); // false
console.log(seq.next()); // { value: undefined, done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.every` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
