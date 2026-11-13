---
title: Iterator.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`filter()`** 方法返回一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)，该迭代器辅助方法只生成迭代器中能令提供的回调函数返回 `true` 的元素。

## 语法

```js-nolint
filter(callbackFn)
```

### 参数

- `callbackFn`
  - : 为迭代器中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)来使迭代器辅助方法产生对应元素，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)。每当迭代器辅助方法的 `next()` 方法被调用时，它都会返回一个能令回调函数返回 `true` 的元素。当底层迭代器完成时，迭代器辅助方法也完成（`next()` 方法产生 `{ value: undefined, done: true }`）。

## 描述

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`filter()` 允许你只迭代满足给定条件的元素。

## 示例

### 使用 filter()

下面的示例创建了一个生成斐波那契数列中的项的迭代器，然后读取前几个偶数项：

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```

### 在 for...of 循环中使用 filter()

当你不想手动快进迭代器时，`filter()` 是最方便的。因为迭代器也是可迭代的，所以你可以用 {{jsxref("Statements/for...of", "for...of")}} 循环来迭代返回的辅助方法。

```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// 输出：
// 2
// 8
// 34
```

等价于：

```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.filter` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.forEach()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
