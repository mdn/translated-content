---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
---

{{JSRef}}

**`unshift()`** 方法将指定元素添加到数组的开头，并返回数组的新长度。

{{InteractiveExample("JavaScript Demo: Array.unshift()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

## 语法

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

### 参数

- `element1`、…、`elementN`
  - : 添加到 `arr` 开头的元素。

### 返回值

返回调用方法对象的新 {{jsxref("Array/length", "length")}} 属性。

## 描述

`unshift()` 方法将给定的值插入到类数组对象的开头。

{{jsxref("Array.prototype.push()")}} 有着和 `unshift()` 相似的行为，但是其将元素插入到数组的末尾。

请注意，如果多个元素作为参数传递，它们将被插入到对象开头的块中，与它们作为参数传递的顺序完全相同。因此，调用**一次** `unshift()` 方法并传递 `n` 个参数，与调用 `n` 次并传递 **1** 个参数（例如使用循环），不会产生相同的结果。

请看示例：

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // 重置数组

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

`unshift()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。虽然字符串也是类似于数组的，但这个方法不适用于它们，因为字符串是不可变的。

## 示例

### 使用 unshift()

```js
const arr = [1, 2];

arr.unshift(0); // 调用的结果是 3，这是新的数组长度。
// 数组是 [0, 1, 2]

arr.unshift(-2, -1); // 新的数组长度是 5
// 数组是 [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // 新的数组长度是 6
// 数组是 [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // 新的数组长度是 8
// 数组是 [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### 在非数组对象中使用 unshift()

`unshift` 方法会读取 `this` 的 `length` 属性。然后，它将 `0` 到 `length - 1` 范围内的所有属性按参数数量右移，并将每个索引从 `0` 开始，并将参数传递给 `unshift()`。最后，它将 `length` 设置为之前的长度加上前置元素的数量。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.unshift.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// 这里没有长度属性，所以这里的长的为 0
Array.prototype.unshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.unshift` 的 Polyfill，并对此方法进行了修复](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
