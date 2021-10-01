---
title: Array() 构造器
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
tags:
  - 数组
  - 构造器
  - JavaScript
  - 参考手册
browser-compat: javascript.builtins.Array.Array
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Array
---
{{JSRef}}

**`Array()`** 构造器用于创建 {{jsxref("Array")}} 对象。

## 语法

```js
// literal constructor
[element0, element1, ..., elementN]

// construct from elements
new Array(element0, element1, ..., elementN)

// construct from array length
new Array(arrayLength)
```

### 参数

- `elementN`
  - : `Array` 构造器会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外（详见下面的 `arrayLength` 参数）。注意，后者仅适用于用 Array 构造器创建数组，而不适用于用方括号创建的数组字面量。
- `arrayLength`
  - : 一个范围在 0 到 2^32 - 1 之间的整数，此时将返回一个 `length` 的值等于 `arrayLength` 的数组对象（言外之意就是该数组此时并没有包含任何实际的元素，不能理所当然地认为它包含 `arrayLength` 个值为 undefined 的元素）。如果传入的参数不是有效值，则会抛出 {{jsxref("RangeError")}} 异常

## 示例

### 数组字面量

可以通过使用 [数组字面量](/zn-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Array_literals) 创建数组

```js
let fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

### 单个参数的 Array 构造器

可以通过单个数字参数的构造器创建数组，数组的长度为传入的参数，该数组不包含任何实际的元素

```js
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

### 多个参数的 Array 构造器

如果向构造器传入多个参数，则会创建一个包含所有传入参数的新数组

```js
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Array")}} class
