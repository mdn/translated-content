---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
---

{{JSRef}}

**`find()`** 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 {{jsxref("undefined")}}。

- 如果需要在数组中找到对应元素的**索引**，请使用 {{jsxref("Array.findIndex", "findIndex()")}}。
- 如果需要查找**某个值的索引**，请使用 {{jsxref("Array.prototype.indexOf()")}}。（它类似于 {{jsxref("Array/findIndex", "findIndex()")}}，但只是检查每个元素是否与值相等，而不是使用测试函数。）
- 如果需要查找数组中是否**存在某个值**，请使用 {{jsxref("Array.prototype.includes()")}}。同样，它检查每个元素是否与值相等，而不是使用测试函数。
- 如果需要查找是否有元素满足所提供的测试函数，请使用 {{jsxref("Array.prototype.some()")}}。

{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}

## 语法

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)来表示已经找到了匹配的元素。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `find()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

数组中第一个满足所提供测试函数的元素的值，否则返回 {{jsxref("undefined")}}。

## 描述

`find()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它按索引升序顺序为数组中的每个元素调用提供的 `callbackFn` 函数，直到 `callbackFn` 返回一个[真值](/zh-CN/docs/Glossary/Truthy)。然后 `find()` 返回该元素并停止迭代数组。如果 `callbackFn` 从未返回真值，则 `find()` 返回 {{jsxref("undefined")}}。

`callbackFn` 被调用来处理数组的*每一个*索引，而不仅仅是那些有值的索引。在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中，未赋值的空槽与 `undefined` 表现相同。

`find()` 不会改变被调用的数组，但是提供给 `callbackFn` 的函数可能会改变它。但需要注意的是，在第一次调用 `callbackFn` _之前_，数组的长度会被保存。因此：

- 当调用 `find()` 时，`callbackFn` 不会访问超出数组初始长度的任何元素。
- 对已经访问过的索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果 `callbackFn` 改变了数组中已存在但尚未被访问的元素，则传递给 `callbackFn` 的该元素的值将是该元素在被访问时的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素被视为 `undefined`。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`find()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 在对象数组中通过对象属性进行查找

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

### 使用箭头函数和解构赋值

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### 寻找数组中的第一个素数

下面的例子展示了如何从数组中寻找素数（如果找不到素数则返回 {{jsxref("undefined")}}）：

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

console.log([4, 6, 8, 12].find(isPrime)); // undefined，未找到
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### 在稀疏数组上使用 find()

在稀疏数组中，空槽*会被*访问的，并被视为 `undefined`。

```js
// 声明一个在索引 2、3 和 4 处没有元素的数组
const array = [0, 1, , , , 5, 6];

// 将会打印所有索引，而不仅仅是那些有值的非空槽
array.find((value, index) => {
  console.log(`访问索引 ${index}，值为 ${value}`);
});
// 访问索引 0，值为 0
// 访问索引 1，值为 1
// 访问索引 2，值为 undefined
// 访问索引 3，值为 undefined
// 访问索引 4，值为 undefined
// 访问索引 5，值为 5
// 访问索引 6，值为 6

// 打印所有索引，包括已删除的
array.find((value, index) => {
  // 在第一次迭代时删除元素 5
  if (index === 0) {
    console.log(`删除 array[5] 的值 ${array[5]}`);
    delete array[5];
  }
  // 即使删除了，元素 5 仍然被访问
  console.log(`访问索引 ${index}，值为 ${value}`);
});
// 删除值为 5 的 array[5]
// 访问索引 0，值为 0
// 访问索引 1，值为 1
// 访问索引 2，值为 undefined
// 访问索引 3，值为 undefined
// 访问索引 4，值为 undefined
// 访问索引 5，值为 undefined
// 访问索引 6，值为 6
```

### 在非数组对象上调用 find()

`find()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.find` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
