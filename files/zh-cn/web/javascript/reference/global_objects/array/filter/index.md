---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
---

{{JSRef}}

**`filter()`** 方法创建给定数组一部分的[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)，其包含通过所提供函数实现的测试的所有元素。

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

## 语法

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)以将元素保留在结果数组中，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `filter()` 的数组本身。
- `thisArg`{{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

返回给定数组的一部分的[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)，其中只包括通过提供的函数实现的测试的元素。如果没有元素通过测试，则返回一个空数组。

## 描述

`filter()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的每个元素调用提供的 `callbackFn` 函数一次，并构造一个由所有返回[真值](/zh-CN/docs/Glossary/Truthy)的元素值组成的新数组。未通过 `callbackFn` 测试的数组元素不会包含在新数组中。

`callbackFn` 仅对已分配值的数组索引调用。它不会对[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽调用。

`filter()` 方法是一个[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它不会改变 `this`，而是返回一个包含与原始数组相同的元素（其中某些元素已被过滤掉）的[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)。但是，作为 `callbackFn` 的函数可以更改数组。请注意，在第一次调用 `callbackFn` _之前_，数组的长度已经被保存。因此：

- 当开始调用 `filter()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素则不会被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`filter()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 筛选排除所有较小的值

以下示例使用 `filter()` 创建一个过滤数组，该数组删除了所有值小于 `10` 的元素。

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### 找出数组中所有的素数

下面的例子返回数组中的所有素数：

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
  { id: "undefined" },
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

console.log("过滤后的数组\n", arrByID);
// 过滤后的数组
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("无效条目数量 =", invalidEntries);
// 无效条目数量 = 5
```

### 在数组中搜索

下例使用 `filter()` 根据搜索条件来过滤数组内容。

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 根据搜索条件（查询）筛选数组项
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

### 在稀疏数组上使用 filter()

`filter()` 将跳过空槽。

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### 在非数组对象上调用 filter()

`filter()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
// [ 'a', 'b' ]
```

### 影响初始数组（修改、追加和删除）

下面的示例测试在修改数组时 `filter()` 方法的行为。

```js
// 修改每个单词
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// 注意，在长度为 6 以下有三个单词，但是由于它们已经被修改，所以返回一个单词
// ["spray"]

// 添加新单词
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// 只有三个符合条件，即使 `words` 本身现在有更多字符长度小于 6 的单词
// ["spray" ,"limit" ,"elite"]

// 删除单词
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// 注意我们没有得到 'elite'，因为它在过滤器访问到它之前就已经从 'words' 弹出了
// ["spray" ,"limit"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.filter` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
