---
title: Iterator.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`reduce()`** 方法类似于 {{jsxref("Array.prototype.reduce")}}：它对迭代器生成的每个元素执行用户提供的“reducer”回调函数，并传入前一个元素的计算结果作为参数。对所有元素运行 reducer 回调函数的最终结果为单个值。

## 语法

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### 参数

- `callbackFn`
  - : 为迭代器生成的每个元素执行的函数。其返回值将作为下一次调用 `callbackFn` 时 `accumulator` 参数。对于最后一次调用，它的返回值成为 `reduce()` 的返回值。该函数被调用时将传入以下参数：
    - `accumulator`
      - : 上一次调用 `callbackFn` 的结果。在第一次调用时，如果指定了 `initialValue` 则为指定的值，否则为迭代器第一个元素的值。
    - `currentValue`
      - : 当前元素的值。在第一次调用时，如果指定了 `initialValue`，则为迭代器第一个元素的值，否则为迭代器第二个元素的值。
    - `currentIndex`
      - : `currentValue` 的索引位置。在第一次调用时，如果指定了 `initialValue` 则为 `0`，否则为 `1`。
- `initialValue` {{optional_inline}}
  - : 第一次调用回调时初始化 `accumulator` 的值。如果指定了 `initialValue`，则 `callbackFn` 从第一个元素作为 `currentValue` 开始执行。如果*没有*指定 `initialValue`，则 `accumulator` 初始化为第一个元素，并且 `callbackFn` 从第二个元素作为 `currentValue` 开始执行。在这种情况下，如果迭代器为空（没有第一个值可以作为 `accumulator` 返回），则会抛出错误。

### 返回值

在整个迭代器上运行“reducer”回调函数直至其完成所返回的结果。

### 异常

- {{jsxref("TypeError")}}
  - : 如果迭代器没有包含任何元素并且没有提供 `initialValue`，则抛出该异常。

## 描述

参见 {{jsxref("Array.prototype.reduce()")}} 以了解 `reduce()` 的工作原理。与大多数其他迭代器辅助方法不同，它不适用于无限迭代器，因为它不是惰性的。

## 示例

### 使用 reduce()

以下示例创建了一个生成斐波那契数列中的项的迭代器，然后求前十项的和：

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(
  fibonacci()
    .take(10)
    .reduce((a, b) => a + b),
); // 143
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.reduce` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
