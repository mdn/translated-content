---
title: Array：length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

{{JSRef}}

**`length`** 是 {{jsxref("Array")}} 的实例属性，表示该数组中元素的个数。该值是一个无符号 32 位整数，并且其数值总是大于数组最大索引。

{{EmbedInteractiveExample("pages/js/array-length.html","shorter")}}

## 值

一个小于 2<sup>32</sup> 的非负整数。

{{js_property_attributes(1, 0, 0)}}

## 描述

`length` 属性的值是一个小于 2<sup>32</sup> 的非负整数

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // 负数是不允许的
// RangeError: Invalid array length
```

数组对象会观察 `length` 属性，并自动将 `length` 值与数组的内容同步。这意味着：

- 设置 `length` 小于当前长度的值将会截断数组——超过新 `length` 的元素将被删除。
- 设置超过当前 `length` 的任何数组索引（小于 2<sup>32</sup> 的非负整数）将会扩展数组——`length` 属性增加以反映新的最高索引。
- 将 `length` 设置为无效值（例如负数或非整数）会引发 `RangeError` 异常。

当 `length` 被设置为比当前长度更大的值时，数组通过添加[空槽](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)来扩展，而不是实际的 `undefined` 值。空槽与数组方法有一些特殊的交互作用；详见[数组方法和空槽](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#数组方法和空槽)。

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // 将数组长度设置为 5，而当前为 2。
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

另请参阅：[`length` 与数值属性的关系](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#长度与数值属性的关系)。

## 示例

### 遍历数组

在下面的示例中，通过查看 `length` 属性来遍历数组 `numbers`。然后将每个元素中的值加倍。

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// 遍历后的结果 [2, 4, 6, 8, 10]
```

### 截断数组

在下面的示例中，如果当前长度大于 3，数组 `numbers` 将会缩短为 3。

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined；多余的元素会被删除
```

### 创建固定长度的空数组

将 `length` 设置为大于当前长度的值将会创建一个[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)。

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

### 长度不可写的数组

当添加的元素超过当前长度时，数组会自动更新 `length` 属性。如果 `length` 属性设置为不可写，则数组将无法更新它。在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中这会导致错误。

```js
"use strict";

const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- [`TypedArray`：`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
- [`String`: `length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [RangeError: invalid array length](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
