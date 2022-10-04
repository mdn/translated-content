---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
---

{{JSRef}}

**`Array.of()`** 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

**`Array.of()`** 和 **`Array`** 构造函数之间的区别在于处理整数参数：**`Array.of(7)`** 创建一个具有单个元素 **7** 的数组，而 **`Array(7)`** 创建一个长度为 7 的空数组（**注意**：这是指一个有 7 个空位 (empty) 的数组，而不是由 7 个`undefined`组成的数组）。

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
```

## 语法

```plain
Array.of(element0[, element1[, ...[, elementN]]])
```

### 参数

- element*N*
  - : 任意个参数，将按顺序成为返回数组中的元素。

### 返回值

新的 {{jsxref("Array")}} 实例。

## 描述

此函数是 ECMAScript 2015 标准的一部分。详见 [`Array.of` 和 `Array.from` proposal](https://gist.github.com/rwaldron/1074126) 和 [`Array.of` polyfill](https://gist.github.com/rwaldron/3186576)。

## 示例

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## 兼容旧环境

如果原生不支持的话，在其他代码之前执行以下代码会创建 `Array.of()` 。

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
- [`Array.of()` & `Array.from()` proposal](https://gist.github.com/rwaldron/1074126)
- [`Array.of()` polyfill](https://gist.github.com/rwaldron/3186576)
