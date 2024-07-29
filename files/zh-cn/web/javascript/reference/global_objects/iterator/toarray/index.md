---
title: Iterator.prototype.toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 `toArray()` 方法创建一个新的 {{jsxref("Array")}} 实例，并将迭代器生成的元素填充到该实例中。

## 语法

```js-nolint
toArray()
```

### 参数

无。

### 返回值

一个新的 {{jsxref("Array")}} 实例，其中包含迭代器生成的元素，按生成顺序排列。

## 示例

### 使用 toArray()

`iterator.toArray()` 等价于 `Array.from(iterator)` 和 `[...iterator]`，但当涉及多个迭代器辅助方法时，链式调用更容易。以下示例创建一个生成斐波那契数列的迭代器，取前 10 个元素，过滤掉奇数，并将结果转换为数组：

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const array = fibonacci()
  .take(10)
  .filter((x) => x % 2 === 0)
  .toArray();

console.log(array); // [2, 8, 34]
```

请注意，最好在处理的最后一步调用 `toArray()` 。例如，`fibonacci().take(10).toArray().filter(...)` 效率不高，因为迭代器辅助方法是惰性的，这能避免创建临时数组。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.toArray` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
