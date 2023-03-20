---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
---

{{JSRef}}

**`splice()`** 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## 语法

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

### 参数

- `start`
  - : 指定修改的开始位置（从 0 计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从 -1 计数，这意味着 -n 是倒数第 n 个元素并且等价于 `array.length-n`）；如果负数的绝对值大于数组的长度，则表示开始位置为第 0 位。
- `deleteCount` {{optional_inline}}
  - : 整数，表示要移除的数组元素的个数。如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。如果 `deleteCount` 被省略了，或者它的值大于等于`array.length - start`(也就是说，如果它大于或者等于`start`之后的所有元素的数量)，那么`start`之后数组的所有元素都会被删除。如果 `deleteCount` 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
- `item1, item2, ...` {{optional_inline}}
  - : 要添加进数组的元素，从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

### 返回值

由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

## 描述

如果添加进数组的元素个数不等于被删除的元素个数，数组的长度会发生相应的改变。

## 示例

### 从索引 2 的位置开始删除 0 个元素，插入“drum”

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "sturgeon"]
// 被删除的元素：[], 没有元素被删除
```

### 从索引 2 的位置开始删除 0 个元素，插入“drum”和 "guitar"

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');

// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素：[], 没有元素被删除
```

### 从索引 3 的位置开始删除 1 个元素

```js
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素：["mandarin"]
```

### 从索引 2 的位置开始删除 1 个元素，插入“trumpet”

```js
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素：["drum"]
```

### 从索引 0 的位置开始删除 2 个元素，插入"parrot"、"anemone"和"blue"

```js
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// 运算后的 myFish: ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// 被删除的元素：["angel", "clown"]
```

### 从索引 2 的位置开始删除 2 个元素

```js
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// 运算后的 myFish: ["parrot", "anemone", "sturgeon"]
// 被删除的元素：["blue", "trumpet"]
```

### 从索引 -2 的位置开始删除 1 个元素

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素：["mandarin"]
```

### 从索引 2 的位置开始删除所有元素

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素：["mandarin", "sturgeon"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()", "pop()")}} - 在数组末尾增/删元素；
- {{jsxref("Array.prototype.unshift()", "unshift()")}} / {{jsxref("Array.prototype.shift()", "shift()")}} - 在数组首部增/删元素；
- {{jsxref("Array.prototype.concat()", "concat()")}} - 把一个（或多个）数组和（或）值与原数组拼接，返回拼接后的数组。
