---
title: Array.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

{{JSRef}}

**`length`** 是 `Array` 的实例属性。返回或设置一个数组中的元素个数。该值是一个无符号 32-bit 整数，并且总是大于数组最高项的下标。

{{EmbedInteractiveExample("pages/js/array-length.html")}}

## 描述

`length` 属性的值是一个 0 到 2^32 - 1 的整数。

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 4294967296; // 2 的 32 次方 = 4294967296
// RangeError: Invalid array length

const listC = new Array(-100) // 负数
// RangeError: Invalid array length
```

你可以设置 `length` 属性的值来截断任何数组。当通过改变 `length` 属性值来扩展数组时，实际元素的数目将会增加。例如：将一个拥有 2 个元素的数组的 `length` 属性值设为 3 时，那么这个数组将会包含 3 个元素，并且，第三个元素是不可迭代的空槽。

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach(element => console.log(element));
// 1
// 2
```

但是，`length` 属性不一定表示数组中定义值的个数。了解更多：[长度与数值下标属性之间的关系](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties)。

{{js_property_attributes(1, 0, 0)}}

- `Writable`：如果设置为 `false`，该属性值将不能被修改。
- `Configurable`：如果设置为 `false`，删除或更改任何属性都将会失败。
- `Enumerable`：如果设置为 `true`，属性可以通过迭代器[for](zh-CN/docs/Web/JavaScript/Reference/Statements/for)或[for...in](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)进行迭代。

## 示例

### 遍历数组

下面的例子中，通过数组下标遍历数组元素，并把每个元素的值修改为原值的 2 倍。

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// 遍历后的结果 [2, 4, 6, 8, 10]
```

### 截断数组

下面的例子中，如果数组长度大于 3，则把该数组的长度截断为 3。

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array")}}
- [RangeError: invalid array length](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
