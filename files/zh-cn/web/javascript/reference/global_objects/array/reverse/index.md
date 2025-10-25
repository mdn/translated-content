---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
---

**`reverse()`** 方法[_就地_](https://zh.wikipedia.org/wiki/原地算法)反转数组中的元素，并返回同一数组的引用。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。换句话说，数组中的元素顺序将被翻转，变为与之前相反的方向。

要在不改变原始数组的情况下反转数组中的元素，使用 {{jsxref("Array/toReversed", "toReversed()")}}。

{{InteractiveExample("JavaScript Demo: Array.reverse()")}}

```js interactive-example
const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]
```

## 语法

```js-nolint
reverse()
```

### 返回值

原始数组反转后的引用。注意，数组是[_就地_](https://zh.wikipedia.org/wiki/原地算法)反转的，并且没有复制。

## 描述

`reverse` 方法反转数组中元素的位置，改变了数组，并返回该数组的引用。

`reverse()` 方法会保留空槽。如果源数组是[稀疏的](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，则空槽对应的新索引将被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)，并且也成为空槽。

`reverse()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。虽然字符串也是类似于数组的，但这个方法不适用于它们，因为字符串是不可变的。

## 示例

### 反转数组中的元素

下面的示例创建一个数组 `items`，其中包含三个元素，然后反转数组。调用 `reverse()` 会返回反转后的数组 `items` 的引用。

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### reverse() 方法返回对同一数组的引用

`reverse()` 方法返回对原始数组的引用，因此改变返回的数组也会改变原始数组。

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers 和 reversed 的顺序都是颠倒的 [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

如果你希望 `reverse()` 不改变原始数组，但返回一个[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)数组，就像其他数组方法（例如 [`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)）一样，使用 {{jsxref("Array/toReversed", "toReversed()")}} 方法。或者，你可以在调用 `reverse()` 之前做一个浅拷贝，使用[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)或 [`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)。

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] 创建一个浅拷贝，因此 reverse() 不会改变原始数据
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### 对稀疏数组使用 reverse()

调用 `reverse()` 后，稀疏数组保持稀疏状态。空槽将以空槽的形式被复制到它们各自的新索引中。

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

### 对非数组对象调用 reverse()

`reverse()` 方法读取 `this` 的 `length` 属性。然后，它访问 `0` 和 `length / 2` 之间的每个索引，并交换两端对应的两个索引，并在必要时，[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)某些属性。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.reverse.call(arrayLike));
// { '0': 4, length: 3, unrelated: 'foo' }
// 索引“2”被删除了，因为原本的数据中索引“0”不存在了
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.reverse` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
