---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

**`splice()`** 方法[就地](https://zh.wikipedia.org/wiki/原地算法)移除或者替换已存在的元素和/或添加新的元素。

要创建一个删除和/或替换部分内容而不改变原数组的新数组，请使用 {{jsxref("Array/toSpliced", "toSpliced()")}}。要访问数组的一部分而不修改它，参见 {{jsxref("Array.prototype.slice()", "slice()")}}。

{{InteractiveExample("JavaScript Demo: Array.splice()")}}

```js interactive-example
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

## 语法

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

### 参数

- `start`
  - : 从 0 开始计算的索引，表示要开始改变数组的位置，它会被[转换成整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 负索引从数组末尾开始计算——如果 `-buffer.length <= start < 0`，使用 `start + array.length`。
    - 如果 `start < -array.length`，使用 `0`。
    - 如果 `start >= array.length`，则不会删除任何元素，但是该方法会表现为添加元素的函数，添加所提供的那些元素。
    - 如果 `start` 被省略了（即调用 `splice()` 时不传递参数），则不会删除任何元素。这与传递 `undefined` 不同，后者会被转换为 `0`。

- `deleteCount` {{optional_inline}}
  - : 一个整数，表示数组中要从 `start` 开始删除的元素数量。

    如果省略了 `deleteCount`，或者其值大于或等于由 `start` 指定的位置到数组末尾的元素数量，那么从 `start` 到数组末尾的所有元素将被删除。但是，如果你想要传递任何 `itemN` 参数，则应向 `deleteCount` 传递 `Infinity` 值，以删除 `start` 之后的所有元素，因为显式的 `undefined` 会[转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)为 `0`。

    如果 `deleteCount` 是 `0` 或者负数，则不会移除任何元素。在这种情况下，你应该至少指定一个新元素（请参见下文）。

- `item1`、…、`itemN` {{optional_inline}}
  - : 从 `start` 开始要加入到数组中的元素。

    如果不指定任何元素，`splice()` 将只从数组中删除元素。

### 返回值

一个包含了删除的元素的数组。

如果只移除一个元素，则返回一个元素的数组。

如果没有删除任何元素，则返回一个空数组。

## 描述

`splice()` 方法是一个[修改方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它可能会更改 `this` 的内容。如果指定的要插入的元素数量与要删除的元素数量不同，数组的 `length` 也将会更改。同时，它会使用 [`[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) 来创建一个新数组实例并返回。

如果删除的部分是[稀疏的](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，则 `splice()` 返回的数组也是稀疏的，对应的索引为空槽。

`splice()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。尽管字符串也类似于数组，但这种方法不适用于它，因为字符串是不可变的。

## 示例

### 在索引 2 处移除 0 个元素，并插入“drum”

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 是 []，没有移除的元素
```

### 在索引 2 处移除 0 个元素，并插入“drum”和“guitar”

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// myFish 是 ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed 是 []，没有移除的元素
```

### 在索引 0 处移除 0 个元素，并插入“angel”

`splice(0, 0, ...elements)` 像 {{jsxref("Array/unshift", "unshift()")}} 一样在数组的开头插入元素。

```js
const myFish = ["clown", "mandarin", "sturgeon"];
const removed = myFish.splice(0, 0, "angel");

// myFish 是 ["angel", "clown", "mandarin", "sturgeon"]
// 没有移除的元素
```

### 在最后一个索引处移除 0 个元素，并插入“sturgeon”

`splice(array.length, 0, ...elements)` 像 {{jsxref("Array/push", "push()")}} 一样在数组的末尾插入元素。

```js
const myFish = ["angel", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "sturgeon");

// myFish 是 ["angel", "clown", "mandarin", "sturgeon"]
// 没有移除的元素
```

### 在索引 3 处移除 1 个元素

```js
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// myFish 是 ["angel", "clown", "drum", "sturgeon"]
// removed 是 ["mandarin"]
```

### 在索引 2 处移除 1 个元素，并插入“trumpet”

```js
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// myFish 是 ["angel", "clown", "trumpet", "sturgeon"]
// removed 是 ["drum"]
```

### 从索引 0 处移除 2 个元素，并插入“parrot”、“anemone”和“blue”

```js
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish 是 ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed 是 ["angel", "clown"]
```

### 从索引 2 处开始移除 2 个元素

```js
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// myFish 是 ["parrot", "anemone", "sturgeon"]
// removed 是 ["blue", "trumpet"]
```

### 在索引 -2 处移除 1 个元素

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1);

// myFish 是 ["angel", "clown", "sturgeon"]
// removed 是 ["mandarin"]
```

### 删除从索引 2 开始的所有元素

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);

// myFish 是 ["angel", "clown"]
// removed 是 ["mandarin", "sturgeon"]
```

### 在稀疏数组中使用 splice()

`splice()` 方法保留了数组的稀疏性。

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]
```

### 在非数组对象中使用 splice()

`splice()` 方法读取 `this` 的 `length` 属性。然后，它根据需要更新整数键属性和 `length` 属性。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)指南
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.unshift()")}}
