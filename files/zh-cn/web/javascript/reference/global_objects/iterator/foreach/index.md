---
title: Iterator.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`forEach()`** 方法与 {{jsxref("Array.prototype.forEach()")}} 类似：它对迭代器生成的每个元素执行一次提供的函数。

## 语法

```js-nolint
forEach(callbackFn)
```

### 参数

- `callbackFn`
  - : 为迭代器生成的每个元素执行的函数。它的返回值会被丢弃。该函数被调用时将传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

{{jsxref("undefined")}}。

## 描述

`forEach()` 迭代该迭代器，并对每个元素调用一次 `callbackFn` 函数。与大多数其他迭代器帮助方法不同，`forEach()` 不能很好地处理无限迭代器，因为它不是惰性的。

## 示例

### 使用 forEach()

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// 输出：
// 1
// 2
// 3
```

等价于：

```js
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.forEach` 的 polyfiil](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.filter()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
