---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---

{{JSRef}}

## 概述

**`lastIndexOf()`** 方法返回数组中给定元素最后一次出现的索引，如果不存在则返回 -1。该方法从 `fromIndex` 开始向前搜索数组。

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## 语法

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 被查找的元素。
- `fromIndex` {{optional_inline}}
  - : 以 0 起始的索引，表明反向搜索的起始位置，[会被转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 如果 `fromIndex < 0`，则从数组末尾开始倒数计数——即使用 `fromIndex + array.length` 的值。
    - 如果 `fromIndex < -array.length`，则不搜索数组并返回 `-1`。从概念上讲，你可以把它想象成从数组开始之前不存在的位置开始反向搜索，这条路径上没有任何数组元素，因此 `searchElement` 永远不会被找到。
    - 如果 `fromIndex >= array.length` 或者省略了 `fromIndex`，则使用 `array.length - 1`，这会导致搜索整个数组。可以将其理解为从数组尾部之后不存在的位置开始向前搜索。最终会访问到数组最后一个元素，并继续向前开始实际搜索数组元素。

### 返回值

数组中该元素最后一次出现的索引，如未找到返回 **-1**。

## 描述

`lastIndexOf` 使用[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)（与 `===` 运算符使用的算法相同）比较 `searchElement` 和数组中的元素。[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 值永远不会被比较为相等，因此当 `searchElement` 为 `NaN` 时 `lastIndexOf()` 总是返回 `-1`。

`lastIndexOf()` 方法会跳过[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽。

`lastIndexOf()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 使用 lastIndexOf()

下例使用 `lastIndexOf()` 定位数组中的值。

```js
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

你不能用 `lastIndexOf()` 来搜索 `NaN`。

```js
const array = [NaN];
array.lastIndexOf(NaN); // -1
```

### 查找元素出现的所有索引

下例使用 `lastIndexOf` 查找到一个元素在数组中所有的索引（下标），并在找到它们时用 {{jsxref("Array.push", "push")}} 将它们添加到另一个数组中。

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

需要注意的是，这里必须单独处理 `idx === 0` 的情况，因为如果该元素是数组的第一个元素，则无论 `fromIndex` 参数的值为何，它总是会被找到。这与 {{jsxref("Array.prototype.indexOf", "indexOf")}} 方法不同。

### 在稀疏数组上使用 lastIndexOf()

你不能使用 `lastIndexOf()` 来搜索稀疏数组中的空槽。

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### 在非数组对象上调用 lastIndexOf()

`lastIndexOf()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
};
console.log(Array.prototype.lastIndexOf.call(arrayLike, 2));
// 2
console.log(Array.prototype.lastIndexOf.call(arrayLike, 5));
// -1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.lastIndexOf` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
