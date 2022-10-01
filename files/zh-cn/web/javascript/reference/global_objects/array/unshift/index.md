---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
---

{{JSRef}}

**`unshift()`** 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**。

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## 语法

```js
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* … ,*/ elementN)
```

### 参数列表

- `elementN`
  - : 要添加到数组开头的元素。

### 返回值

返回调用方法对象的新 {{jsxref("Array.length", "length")}} 属性值。

## 描述

`unshift()` 方法会在调用它的类数组对象的开始位置插入给定的值。

{{jsxref("Array.prototype.push()")}} 与 `unshift()` 具有相似的行为，但其会在数组的末尾插入元素。

`unshift()` 特意被设计成具有通用性；这个方法能够通过 {{jsxref("Function.call", "call")}} 或 {{jsxref("Function.apply", "apply")}} 方法作用于类数组对象上。不过对于没有 `length` 属性（代表从 0 开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。

注意，如果传入多个参数，它们会被以块的形式插入到对象的开始位置，它们的顺序和被作为参数传入时的顺序一致。于是，传入多个参数调用一次 `unshift()`，和传入一个参数调用多次 `unshift()`（例如，循环调用），它们将得到不同的结果。例如：

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

## 示例

### 使用 unshift()

```js
const arr = [1, 2];

arr.unshift(0);               // 调用的结果是 3，这是新的数组长度
// arr is [0, 1, 2]

arr.unshift(-2, -1);          // 新的数组长度为 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]);        // 新的数组长度为 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]);  // 新的数组长度为 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.unshift` in `core-js` with fixes of this method](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
