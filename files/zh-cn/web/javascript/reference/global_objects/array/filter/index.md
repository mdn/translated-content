---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
---

{{JSRef}}

**`filter()`** 方法创建给定数组一部分的[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)，其包含通过所提供函数实现的测试的所有元素。

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

## 语法

```js
// 箭头函数
filter((element) => { /* … */ } )
filter((element, index) => { /* … */ } )
filter((element, index, array) => { /* … */ } )

// 回调函数
filter(callbackFn)
filter(callbackFn, thisArg)

// 内联回调函数
filter(function(element) { /* … */ })
filter(function(element, index) { /* … */ })
filter(function(element, index, array){ /* … */ })
filter(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callbackFn`

  - : 用来测试数组中每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：

    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `filter()` 的数组本身。

- `thisArg`{{optional_inline}}
  - : 执行 `callbackFn` 时，用于 `this` 的值。

### 返回值

一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

## 描述

`filter()` 为数组中的每个元素调用一次 `callbackFn` 函数，并利用所有使得 `callbackFn` 返回 true 或[等价于 true 的值](/zh-CN/docs/Glossary/Truthy)的元素创建一个新数组。`callbackFn` 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 `callbackFn` 测试的元素会被跳过，不会被包含在新数组中。

`callbackFn` 被调用时传入三个参数：

1. 元素的值
2. 元素的索引
3. 被遍历的数组本身

如果为 `filter()` 提供一个 `thisArg` 参数，则它会被作为 `callbackFn` 被调用时的 `this` 值。否则，`callbackFn` 的 `this` 值在非严格模式下将是全局对象，严格模式下为 `undefined`。`callbackFn` 函数最终观察到的 `this` 值是根据[通常函数所看到的 `this` 的规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)确定的。

`filter()` 不会改变原数组。

`filter()` 遍历的元素范围在第一次调用 `callbackFn` 之前就已经确定了。修改已经访问过的或在确定的范围之外创建的元素，将不会被 `callbackFn` 访问。如果以相同的方式删除数组中的现有元素，则不会访问它们。

> **警告：** 在上一段中描述的并发修改通常会导致难以理解的代码，通常应该避免 (特殊情况除外)。

## 示例

### 筛选排除所有较小的值

下例使用 `filter()` 创建了一个新数组，该数组的元素由原数组中值大于 `10` 的元素组成。

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### 找出数组中所有的素数

下面的例子返回数组中的所有质数：

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

### 过滤 JSON 中的无效条目

以下示例使用 `filter()` 创建具有非零 `id` 的元素的 json。

```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// 过滤后的数组
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5
```

### 在数组中搜索

下例使用 `filter()` 根据搜索条件来过滤数组内容。

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * 根据搜索条件（查询）筛选数组项
 */
function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
```

### 影响初始数组（修改、追加和删除）

下面的示例测试在修改数组时 `filter()` 方法的行为。

```js
// 修改每个单词
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += ' extra';
  return word.length < 6;
});

console.log(modifiedWords);
// 注意，在长度为6以下有三个单词，但是由于它们已经被修改，所以返回一个单词
// ["spray"]

// 添加新单词
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words.filter((word, index, arr) => {
  arr.push('new');
  return word.length < 6;
})

console.log(appendedWords);
// 只有三个符合条件，即使 `words`本身现在有更多字符长度小于 6 的单词
// ["spray" ,"limit" ,"elite"]

// 删除单词
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
})

console.log(deleteWords);
// 注意，'elite' 也没有获得，因为它在过滤器达到之前就已经从 'words' 弹出了
// ["spray" ,"limit"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.find()")}}
