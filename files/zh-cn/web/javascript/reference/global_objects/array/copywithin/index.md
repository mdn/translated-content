---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef}}

**`copyWithin()`** 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

{{InteractiveExample("JavaScript Demo: Array.copyWithin()")}}

```js interactive-example
const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
```

## 语法

```js-nolint
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

### 参数

- `target`
  - : 序列开始替换的目标位置，以 0 为起始的下标表示，且将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)
    - 负索引将从数组末尾开始计数——如果 `target < 0`，则实际是 `target + array.length`。
    - 如果 `target < -array.length`，则使用 `0`。
    - 如果 `target >= array.length`，则不会拷贝任何内容。
    - 如果 `target` 位于 `start` 之后，则复制只会持续到 `array.length` 结束（换句话说，`copyWithin()` 永远不会扩展数组）。
- `start` {{optional_inline}}
  - : 要复制的元素序列的起始位置，以 0 为起始的下标表示，且将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)
    - 负索引将从数组末尾开始计数——如果 `start < 0`，则实际是 `start + array.length`。
    - 如果省略 `start` 或 `start < -array.length`，则默认为 `0`。
    - 如果 `start >= array.length`，则不会拷贝任何内容。
- `end` {{optional_inline}}
  - : 要复制的元素序列的结束位置，以 0 为起始的下标表示，且将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。`copyWithin` 将会拷贝到该位置，但不包括 `end` 这个位置的元素。
    - 负索引将从数组末尾开始计数——如果 `end < 0`，则实际是 `end + array.length`。
    - 如果 `end < -array.length`，则使用`0`。
    - 如果省略 `end` 或 `end >= array.length`，则默认为 `array.length`，这将导致直到数组末尾的所有元素都被复制。
    - 如果 `end` 位于 `start` 之前，则不会拷贝任何内容。

### 返回值

改变后的数组。

## 描述

`copyWithin()` 方法的工作原理类似于 C 和 C++ 的 `memmove`，是一种移动[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)数据的高性能方法，与 {{jsxref("TypedArray/copyWithin", "TypedArray")}} 的同名方法类似。序列在一次中操作被复制和粘贴；即使复制和粘贴区域重叠，粘贴的序列也将具有复制值。

`copyWithin()` 是[修改方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它不会改变 `this` 指向的对象（数组或类数组）的长度，但会更改其的内容，并在必要时创建新属性或删除现有属性。

`copyWithin()` 方法保留空槽。如果要复制的区域是[稀疏的](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，则原来的空槽会被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)并被替换为拷贝的空槽。

`copyWithin()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。虽然字符串也是类似数组的，但这种方法不适用于它们，因为字符串是不可变的。

## 示例

### 使用 copyWithin()

```js
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### 在稀疏数组上使用 copyWithin()

`copyWithin()` 将保留空插槽。

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### 在非数组对象上调用 copyWithin()

`copyWithin()` 方法读取 `this` 的 `length` 属性，然后操作所涉及的整数索引。

```js
const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// '3' 属性被删除，因为在复制的源中是一个空槽
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.copyWithin` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
