---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
---

{{JSRef}}

**`fill()`** 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## 语法

```js
fill(value)
fill(value, start)
fill(value, start, end)
```

### 参数

- `value`
  - : 用来填充数组元素的值。
- `start` {{optional_inline}}
  - : 起始索引，默认值为 0。
- `end` {{optional_inline}}
  - : 终止索引，默认值为 `arr.length`。

### 返回值

修改后的数组。

## 描述

**`fill`** 方法接受三个参数 `value`、`start` 以及 `end`、`start` 和 `end` 参数是可选的，其默认值分别为 `0` 和 `this` 对象的 `length` 属性值。

如果 `start` 是个负数，则开始索引会被自动计算成为 `length + start`，其中 `length` 是 `this` 对象的 `length` 属性值。如果 `end` 是个负数，则结束索引会被自动计算成为 `length + end`。

**`fill`** 方法故意被设计成通用方法，该方法不要求 `this` 是数组对象。

**`fill`** 方法是个可变方法，它会改变调用它的 `this` 对象本身，然后返回它，而并不是返回一个副本。

当一个对象被传递给 **`fill`** 方法的时候，填充数组的是这个对象的引用。

## 示例

```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
const arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果 fill 的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为 true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.fill` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
