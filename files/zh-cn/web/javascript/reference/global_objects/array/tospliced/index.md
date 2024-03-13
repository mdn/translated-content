---
title: Array.prototype.toSpliced()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSpliced
---

{{JSRef}}

{{jsxref("Array")}} 实例的 **`toSpliced()`** 方法是 {{jsxref("Array/splice", "splice()")}} 方法的[复制](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)版本。它返回一个新数组，并在给定的索引处删除和/或替换了一些元素。

## 语法

```js-nolint
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2, itemN)
```

### 参数

- `start`

  - : 从 0 开始计算的索引，表示要开始改变数组的位置，它会被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 如果 `start < 0`，则从数组末尾开始计数，使用 `start + array.length`。
    - 如果 `start < -array.length` 或者省略了 `start`，则使用 `0`。
    - 如果 `start >= array.length`，不会删除任何元素，但该方法将表现为添加元素的函数，添加提供的所有元素。

- `deleteCount` {{optional_inline}}

  - : 一个整数，指示数组中要从 `start` 删除的元素数量。

    如果 `deleteCount` 被省略了，或者如果它的值大于或等于由 `start` 指定的位置到数组末尾的元素数量，将会删除从 `start` 到数组末尾的所有元素。但是，如果你想要传递任何 `itemN` 参数，则应向 `deleteCount` 传递 `Infinity` 值，以删除 `start` 之后的所有元素，因为显式的 `undefined` 会[转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)为 `0`。

    如果 `deleteCount` 是 `0` 或者负数，则不会删除元素。在这种情况下，你应该指定至少一个新元素（见下文）。

- `item1`, …, `itemN` {{optional_inline}}

  - : 元素将从 `start` 开始添加到数组当中。

    如果你没有指定任何元素，`toSpliced()` 只会从数组中删除元素。

### 返回值

一个新数组，由 `start` 之前的所有元素、`item1`、`item2`、...、`itemN`，以及 `start + deleteCount` 之后的所有元素组成。

## 描述

`toSpliced()` 方法与 `splice()` 类似，可以同时完成多个操作：在数组中给定的索引开始移除指定数量的元素，然后在相同的索引处插入给定的元素。但是，它返回一个新数组，而不是修改原始数组。因此，此方法不会返回已删除的元素。

`toSpliced()` 方法不会产生[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)。如果原始数组是稀疏的，在新数组中空槽将会被替换成 `undefined`。

`toSpliced()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 删除、添加和替换元素

你可以通过使用 `toSpliced()` 来删除、添加和替换数组中的元素，并生成一个新的数组，这比使用 `slice()` 和 `concat()` 更高效。

```js
const months = ["Jan", "Mar", "Apr", "May"];

// 在索引 1 处添加一个元素
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 从第 2 个索引开始删除两个元素
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// 在索引 1 处用两个新元素替换一个元素
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// 原数组不会被修改
console.log(months); // ["Jan", "Mar", "Apr", "May"]
```

### 在稀疏数组上使用 toSpliced()

`toSpliced()` 方法总是会生成一个密集的数组。

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### 对非数组对象调用 toSpliced()

`toSpliced()` 方法将会读取 `this` 的 `length` 属性。然后，它读取所需的整数键属性并将其写入新数组。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.toSpliced` 的 polyfill](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.with()")}}
