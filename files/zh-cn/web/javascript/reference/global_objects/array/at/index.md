---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
  - at
  - Experimental
  - Polyfill
browser-compat: javascript.builtins.Array.at
---
{{JSRef}}

**`at()`** 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。

方括号符号没有问题。例如，`array[0]`将返回第一个项目。然而，对于后面的项目，不要使用{{jsxref('Array.prototype.length','array.length')}}，例如，对于最后一个项目，可以调用`array.at(-1)`。[(参见以下示例)](#examples)
{{EmbedInteractiveExample("pages/js/array-at.html")}}

## 语法

```js
at(index)
```

### 参数

- `index`
  - : 要返回的数组元素的索引（位置）。当传递负数时，支持从数组末端开始的相对索引；也就是说，如果使用负数，返回的元素将从数组的末端开始倒数。

### 返回值

匹配给定索引的数组中的元素。如果找不到指定的索引，则返回{{jsxref('undefined')}}。

## 示例

### 返回一个数组的最后一个值

下面的例子提供了一个函数，它返回在一个指定的数组中找到的最后一个元素。

```js
// 数组及数组元素
const cart = ['apple', 'banana', 'pear'];

// 一个函数，用于返回给定数组的最后一个项目
function returnLast(arr) {
  return arr.at(-1);
}

// 获取 'cart' 数组的最后一项
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// 在 'cart' 数组中添加一项 
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // 'orange'
```

### 比较不同的数组方法

这个例子比较了选择{{jsxref('Array')}}中倒数第二项的不同方法。虽然下面显示的所有方法都是可行的，但这个例子凸显了`at()`方法的简洁性和可读性。

```js
// 数组及数组元素。
const colors = ['red', 'green', 'blue'];

// 使用长度属性。
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // 'green'

// 使用 slice() 方法。注意会返回一个数组。
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// 使用 at() 方法。
const atWay = colors.at(-2);
console.log(atWay); // 'green'
```

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关链接

- A polyfill of `Array.prototype.at` is available in [`core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [A polyfill for the at() method](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("Array.prototype.find()")}} – 根据给定的测试返回一个值。
- {{jsxref("Array.prototype.includes()")}} – 测试数组中是否存在某个值。
- {{jsxref("Array.prototype.indexOf()")}} – 返回一个给定元素的索引。
