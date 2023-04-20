---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.includes
---

{{JSRef}}

**`includes()`** 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## 语法

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 需要查找的值。
- `fromIndex` {{optional_inline}}
  - ：从零开始搜索的索引，[转换为整数](/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Number#转换为整数)。
    - 负索引从数组末尾开始计数 —— 假如 `fromIndex < 0` ， `fromIndex + array.length` 被调用。然而，在这种情况下，仍然从前到后搜索数组。
    - 如果 `fromIndex < -array.length` 或者省略 `fromIndex` ，则使用 `0` ，导致搜索整个数组。
    - 如果 `fromIndex >= array.length` ，则不会搜索数组并返回 `false` 。

### 返回值

一个布尔值，如果在数组中找到 `searchElement` 值，则该值为 `true` （或者在指定的索引 `fromIndex` 所指示的数组部分中找到 `searchElement` 值）。

## 描述

`includes()` 方法使用[SameValueZero](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)算法将 `searchElement` 与数组中的元素进行比较。0的值都被认为是相等的，不管符号是什么。（即 `-0` 等于 `0` ），但 `false` 不被认为与 `0` 相同。[`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)可以被正确搜索。

当使用[稀疏数组](/zh-cn/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)时， `includes()` 方法迭代空槽，就像它们的值 `undefined` 一样。

`includes()` 方法是[通用的](/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Array#通用的数组方法)。它只期望 `this` 值具有 `length` 属性和整型键属性。

## 示例

### 使用 includes() 方法

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### fromIndex 大于或等于数组长度

如果 `fromIndex` 大于或者等于数组的长度，则将直接返回 `false`，且不搜索该数组。

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### 计算出的索引小于 0

如果 `fromIndex` 为负值，计算出的索引将作为开始搜索 `searchElement` 的位置。如果计算出的索引小于 `0` ，则整个数组都会被搜索。

```js
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### 对稀疏数组使用 includes() 方法

你可以在稀疏数组中搜索 `undefined` ，得到 `true` 。

```js
console.log([1, , 3].includes(undefined)); // true
```

### 在非数组对象上调用 includes() 方法

`includes()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
