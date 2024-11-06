---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
---

{{JSRef}}

**`Array.of()`** 静态方法通过可变数量的参数创建一个新的 `Array` 实例，而不考虑参数的数量或类型。

{{EmbedInteractiveExample("pages/js/array-of.html", "shorter")}}

## 语法

```js-nolint
Array.of()
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* … ,*/ elementN)
```

### 参数

- `elementN`
  - : 用于创建数组的元素。

### 返回值

新的 {{jsxref("Array")}} 实例。

## 描述

`Array.of()` 和 [`Array()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) 构造函数之间的区别在于对单个参数的处理：`Array.of(7)` 创建一个具有单个元素 `7` 的数组，而 `Array(7)` 创建一个 `length` 为 `7` 的空数组（这意味着一个由 7 个空槽组成的数组，而不是由 7 个 {{jsxref("undefined")}} 组成的数组）。

```js
Array.of(7); // [7]
Array(7); // 由 7 个空槽组成的数组

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

`Array.of()` 方法是一个通用的工厂方法。例如，如果 `Array` 的子类继承了 `of()` 方法，继承的 `of()` 方法将返回子类的新实例而不是 `Array` 实例。事实上，`this` 值可以是任何接受单个参数表示新数组长度的构造函数，并且构造函数将与传递给 `of()` 的参数数量一起被调用。当所有元素都被分配时，最终的 `length` 将再次设置。如果 `this` 值不是构造函数，则改用普通的 `Array` 构造函数。

## 示例

### 使用 Array.of()

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### 非数组构造函数调用 of()

`of()` 方法可以在任何接受单个参数表示新数组长度的构造函数上调用。

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

当 `this` 值不是构造函数时，返回一个普通的 `Array` 对象。

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.map` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
