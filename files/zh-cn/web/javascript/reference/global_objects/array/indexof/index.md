---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef}}

**`indexOf()`** 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。

{{InteractiveExample("JavaScript Demo: Array.indexOf()")}}

```js interactive-example
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1
```

## 语法

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 数组中要查找的元素。
- `fromIndex` {{optional_inline}}
  - : 开始搜索的索引（从零开始），[会转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 负索引从数组末尾开始计数——如果 `frommindex < 0`，使用 `frommindex + array.length`。注意，在这种情况下，仍然从前到后搜索数组。
    - 如果 `fromIndex < -array.length` 或者省略了 `fromIndex` ，将使用 `0`，而导致整个数组被搜索。
    - 如果 `fromIndex >= array.length`，数组不会继续搜索并返回 `-1`。

### 返回值

首个被找到的元素在数组中的索引位置; 若没有找到则返回 **-1**。

## 描述

`indexOf()` 使用[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)（与 `===` 运算符使用的算法相同）将 `searchElement` 与数组中的元素进行比较。[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 值永远不会被比较为相等，因此当 `searchElement` 为 `NaN` 时 `indexOf()` 总是返回 `-1`。

`indexOf()` 方法会跳过[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽。

`indexOf()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 使用 indexOf()

以下例子使用 `indexOf()` 方法确定多个值在数组中的位置。

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

你没法使用 `indexOf()` 来搜索 `NaN`。

```js
const array = [NaN];
array.indexOf(NaN); // -1
```

### 找出指定元素出现的所有位置

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
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
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.
```

### 在稀疏数组中使用 indexOf()

不能使用 `indexOf()` 在稀疏数组中搜索空槽。

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### 在非数组对象上调用 indexOf()

`indexOf()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.indexOf` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
