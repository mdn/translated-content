---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
---

{{JSRef}}

**`find()`** 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 {{jsxref("undefined")}}。

{{EmbedInteractiveExample("pages/js/array-find.html")}}

- 如果需要在数组中找到对应元素的索引，请使用 {{jsxref("Array.findIndex", "findIndex()")}}。
- 如果需要查找某个值的索引，请使用 {{jsxref("Array.prototype.indexOf()")}}。（它类似于 {{jsxref("Array/findIndex", "findIndex()")}}，但只是检查每个元素是否与值相等，而不是使用测试函数。）
- 如果需要查找数组中是否存在值，请使用 {{jsxref("Array.prototype.includes()")}}。同样，它检查每个元素是否与值相等，而不是使用测试函数。
- 如果需要查找是否有元素满足所提供的测试函数，请使用 {{jsxref("Array.prototype.some()")}}。

## 语法

```js
// 箭头函数
find((element) => { /* … */ } )
find((element, index) => { /* … */ } )
find((element, index, array) => { /* … */ } )

// 回调函数
find(callbackFn)
find(callbackFn, thisArg)

// 内联回调函数
find(function(element) { /* … */ })
find(function(element, index) { /* … */ })
find(function(element, index, array){ /* … */ })
find(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callbackFn`

  - : 在数组每一项上执行的函数，接收 3 个参数：

    - `element`
      - : 当前遍历到的元素。
    - `index`
      - : 当前遍历到的索引。
    - `array`
      - : 数组本身。

    回调函数必须返回一个[真值](/zh-CN/docs/Glossary/Truthy)来表示找到了匹配的元素。

- `thisArg` {{Optional_inline}}
  - : 执行回调时用作 `this` 的对象。

### 返回值

数组中第一个满足所提供测试函数的元素的值，否则返回 {{jsxref("undefined")}}。

## 描述

`find` 方法对数组中的每一项元素执行一次 `callbackFn` 函数，直至有一个 callbackFn 返回 `true`。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 {{jsxref("undefined")}}。注意 `callbackFn` 函数会为数组中的每个索引调用即从 `0` 到 `length - 1`，而不仅仅是那些被赋值的索引，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

`callbackFn` 函数带有 3 个参数：当前元素的值、当前元素的索引，以及数组本身。

如果提供了 `thisArg` 参数，那么它将作为每次 `callbackFn` 函数执行时的 `this`，如果未提供，则使用 {{jsxref("undefined")}}。

`find` 方法不会改变数组。

在第一次调用 `callbackFn` 函数时会确定元素的索引范围，因此在 `find` 方法开始执行之后添加到数组的新元素将不会被 `callbackFn` 函数访问到。如果数组中一个尚未被 `callbackFn` 函数访问到的元素的值被 `callbackFn` 函数所改变，那么当 `callbackFn` 函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍旧会被访问到，但是其值已经是 undefined 了。

## 示例

### 用对象的属性查找数组里的对象

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

### 使用箭头函数和解构赋值

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find(({ name }) => name === 'cherries');

console.log(result) // { name: 'cherries', quantity: 5 }
```

### 寻找数组中的第一个质数

下面的例子展示了如何从数组中寻找质数（如果找不到质数则返回 {{jsxref("undefined")}}）：

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

下面的例子表明，不存在和被删除的元素被访问时，传递给回调函数的值是访问它们时的值：

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
// expected output:
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findIndex()")}} – find and return an index
- {{jsxref("Array.prototype.includes()")}} – test whether a value exists in the array
- {{jsxref("Array.prototype.filter()")}} – remove all non-matching elements
- {{jsxref("Array.prototype.every()")}} – test all elements
- {{jsxref("Array.prototype.some()")}} – test until one element matches
