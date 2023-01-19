---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef}}

**`indexOf()`** 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## 语法

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 要查找的元素。
- `fromIndex` {{optional_inline}}
  - : 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找，-2 表示从倒数第二个元素开始查找，以此类推。注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0。

### 返回值

首个被找到的元素在数组中的索引位置; 若没有找到则返回 **-1**。

## 描述

`indexOf` 使用[全等运算](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)（与 `===`，或称为三等号运算符的方法相同）判断 `searchElement` 与数组中包含的元素之间的关系。

## 示例

### 使用 indexOf()

以下例子使用 `indexOf()` 方法确定多个值在数组中的位置。

```js
const array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### 找出指定元素出现的所有位置

```js
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 判断一个元素是否在数组里，不在则更新数组

```js
function updateVegetablesCollection (veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.indexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
