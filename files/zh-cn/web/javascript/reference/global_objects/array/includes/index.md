---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
---

{{JSRef}}

**`includes()`** 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

{{InteractiveExample("JavaScript Demo: Array.includes()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
```

## 语法

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 需要查找的值。
- `fromIndex` {{optional_inline}}
  - : 开始搜索的索引（从零开始），[会转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 负索引从数组末尾开始计数——如果 `fromIndex < 0`，那么实际使用的是 `fromIndex + array.length`。然而在这种情况下，数组仍然从前往后进行搜索。
    - 如果 `fromIndex < -array.length` 或者省略 `fromIndex`，则使用 `0`，这将导致整个数组被搜索。
    - 如果 `fromIndex >= array.length`，则不会搜索数组并返回 `false`。

### 返回值

一个布尔值，如果在数组中（或者在 `fromIndex` 所指示的数组部分中，如果指定 `fromIndex` 的话）找到 `searchElement` 值，则该值为 `true`。

## 描述

`includes()` 方法使用[零值相等](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#零值相等)算法将 `searchElement` 与数组中的元素进行比较。0 值都被认为是相等的，不管符号是什么。（即 `-0` 等于 `0`），但 `false` *不*被认为与 `0` 相同。[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 可以被正确搜索到。

当在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)上使用时，`includes()` 方法迭代空槽，就像它们的值是 `undefined` 一样。

`includes()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

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

### fromIndex 大于等于数组长度

如果 `fromIndex` 大于等于数组的长度，则将直接返回 `false`，且不搜索该数组。

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### 计算出的索引小于 0

如果 `fromIndex` 为负值，计算出的索引将作为开始搜索 `searchElement` 的位置。如果计算出的索引小于 `0`，则整个数组都会被搜索。

```js
// 数组长度为 3
// fromIndex 为 -100
// 计算出的索引为 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### 对稀疏数组使用 includes() 方法

你可以在稀疏数组中搜索 `undefined`，得到 `true` 。

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

- [`core-js` 中 `Array.prototype.includes` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
