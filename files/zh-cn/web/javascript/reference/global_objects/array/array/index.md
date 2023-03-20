---
title: Array() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
---

{{JSRef}}

**`Array()`** 构造函数用于创建 {{jsxref("Array")}} 对象。

## 语法

```js
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)

Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)
```

> **备注：** 调用 `Array()` 时可以使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)。两者都会创建一个新的 `Array` 实例。

### 参数

- `elementN`
  - : `Array` 构造函数会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外（详见下面的 `arrayLength` 参数）。注意，后者仅适用于用 Array 构造函数创建数组，而不适用于用方括号创建的数组字面量。
- `arrayLength`
  - : 如果传递给 `Array` 构造函数的唯一参数是 0 到 2<sup>32</sup> - 1（包括）之间的整数，这将返回一个新的 JavaScript 数组，其 `length` 属性设置为该数字（注意：这意味着一个 `arrayLength` 空槽数组，而不是具有实际 `undefined` 值的槽——参见[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)）。

### 异常

- {{jsxref("RangeError")}}
  - : 如果只有一个参数（`arrayLength`）且其值不在 0 到 2<sup>32</sup> - 1（包括）之间，则会触发异常。

## 示例

### 数组字面量

可以通过使用[数组字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#数组字面量)创建数组：

```js
const fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

### 单个参数的 Array 构造函数

可以通过单个数字参数的构造函数创建数组，数组的长度为传入的参数，该数组不包含任何实际的元素。

```js
const fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

### 多个参数的 Array 构造函数

如果向构造函数传入多个参数，则会创建一个包含所有传入参数的新数组

```js
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array")}} 类
