---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
---

{{JSRef}}

**`findLast()`** 方法返回数组中满足提供的测试函数条件的最后一个元素的值。如果没有找到对应元素，则返回 {{jsxref("undefined")}}。

{{EmbedInteractiveExample("pages/js/array-findlast.html","shorter")}}

如果你需要查找的方法：

- *第一个*匹配的元素，使用 {{jsxref("Array.findIndex", "find()")}}。
- 数组中最后一个匹配元素的*索引*，使用 {{jsxref("Array.findLastIndex", "findLastIndex()")}}。
- *值的索引*，使用 {{jsxref("Array.prototype.indexOf()")}}。（它类似于 {{jsxref("Array.findIndex", "findIndex()")}}，但是会检查每个元素是否和值相等，而不是使用一个测试函数。）
- 一个值是否*包含*在该数组中，使用 {{jsxref("Array.prototype.includes()")}}。同样地，它检查每个元素是否和值相等，而不是使用一个测试函数。
- 是否有任意一个元素满足提供的测试函数，使用 {{jsxref("Array.prototype.some()")}}。

## 语法

```js
// 箭头函数
findLast((element) => { /* … */ } )
findLast((element, index) => { /* … */ } )
findLast((element, index, array) => { /* … */ } )

// 回调函数
findLast(callbackFn)
findLast(callbackFn, thisArg)

// 内联回调函数
findLast(function(element) { /* … */ })
findLast(function(element, index) { /* … */ })
findLast(function(element, index, array){ /* … */ })
findLast(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callbackFn`

  - : 数组中测试元素的函数。

    函数在被调用时会传递以下参数：

    - `element`
      - : 当前遍历到的元素。
    - `index`
      - : 当前遍历到的元素的索引（位置）。
    - `array`
      - : 调用 `findLast()` 的数组本身。

    回调必须返回一个[真值](/zh-CN/docs/Glossary/Truthy)，表示发现一个适当的元素。该元素被 `findLast()` 返回。

- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时，用作 {{jsxref("Operators/this", "this")}} 的对象。

### 返回值

数组中满足提供的测试函数索引最高的元素；如果没有元素匹配，返回 {{jsxref("undefined")}}。

## 描述

`findLast()` 方法对数组每一个元素按降序（索引从大到小）执行 `callbackFn` 函数，直到 `callbackFn` 返回一个[真值](/zh-CN/docs/Glossary/Truthy)。然后 `findLast()` 返回该元素的值并停止遍历数组。如果 `callbackFn` 没有返回一个真值，则 `findLast()` 返回 {{jsxref("undefined")}}。

`callbackFn` 会为数组中的每个元素调用，而不仅仅是那些被赋值的元素，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

如果为 `findLast()` 提供了 `thisArg` 参数，它将在每次调用 `callbackFn` 时作为 `this` 值。如果没有被提供，则使用 {{jsxref("undefined")}}。

`findLast()` 方法不会改变调用它的数组，但是提供的 `callbackFn` 可以。`findLast()` 处理的元素是在第一次调用 `callbackFn` *之前*设置的。因此：

- `callbackFn` 不会访问在调用 `findLast()` 开始后才添加到数组中的任何元素。
- 给已访问过的索引重新赋值将不会被 `callbackFn` 重新访问。
- 给初始的范围外的索引赋值，其将不会被 `callbackFn` 访问。
- 如果 `callbackFn` 更改了数组中现有的、尚未访问的元素，则其传递给 `callbackFn` 的值将是 `findLast()` 访问该元素索引时的值。
- 仍然会访问已{{jsxref("Operators/delete", "删除")}}的元素。

>**警告：** 上一段描述的并发修改的情况经常导致难以理解的代码，通常应该避免（特殊情况除外）。

## 示例

### 查找与元素属性匹配的数组中的最后一个对象

此示例展示了如何根据数组元素的属性创建测试。

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'fish', quantity: 1},
  {name: 'cherries', quantity: 5}
];

// return true inventory stock is low
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

#### 使用箭头函数和解构

前面的示例可以使用箭头函数和[对象解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)来编写：

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'fish', quantity: 1},
  {name: 'cherries', quantity: 5}
];

const result = inventory.findLast( ({ quantity }) => quantity < 2 );

console.log(result) 
// { name: "fish", quantity: 1 }
```

### 查找数组中的最后一个素数

以下示例查找数组中的最后一个素数元素（如果没有素数，则返回 {{jsxref("undefined")}}）：

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### 访问不存在和删除的元素

以下示例显示访问了不存在和已删除的元素，并且传递给回调的值是访问它们时的值：

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.findLast(function(value, index) {
  console.log(`Visited index ${index} with value ${value}`);
});

// Shows all indexes, including deleted
array.findLast(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 6) {
    console.log(`Deleting array[5] with value ${array[5]}`);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log(`Visited index ${index} with value ${value}`);
});
// expected output:
// > "Visited index 6 with value 6"
// > "Visited index 5 with value 5"
// > "Visited index 4 with value undefined"
// > "Visited index 3 with value undefined"
// > "Visited index 2 with value undefined"
// > "Visited index 1 with value 1"
// > "Visited index 0 with value 0"
// > "Deleting array[5] with value 5"
// > "Visited index 6 with value 6"
// > "Visited index 5 with value undefined"
// > "Visited index 4 with value undefined"
// > "Visited index 3 with value undefined"
// > "Visited index 2 with value undefined"
// > "Visited index 1 with value 1"
// > "Visited index 0 with value 0"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.findLast` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findLastIndex()")}} – find last element and return its index
- {{jsxref("Array.prototype.includes()")}} – test whether a value exists in the array
- {{jsxref("Array.prototype.filter()")}} – remove all non-matching elements
- {{jsxref("Array.prototype.every()")}} – test all elements
- {{jsxref("Array.prototype.some()")}} – test until one element matches
