---
title: Function：length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
---

{{JSRef}}

{{jsxref("Function")}} 实例的 **`length`** 数据属性表示函数期望的参数数量。

{{InteractiveExample("JavaScript Demo: Function.length")}}

```js interactive-example
function func1() {}

function func2(a, b) {}

console.log(func1.length);
// Expected output: 0

console.log(func2.length);
// Expected output: 2
```

## 值

一个数字。

{{js_property_attributes(0, 0, 1)}}

## 描述

一个 {{jsxref("Function")}} 对象的 `length` 属性表示函数期望的参数个数，即形参的个数。这个数字不包括{{jsxref("Functions/rest_parameters", "剩余参数", "", 1)}}，只包括在第一个具有默认值的参数之前的参数。相比之下，{{jsxref("Functions/arguments/length", "arguments.length")}} 是局限于函数内部的，它提供了实际传递给函数的参数个数。

{{jsxref("Function")}} 构造函数本身就是一个 `Function` 对象。它的 `length` 数据属性的值为 `1`。

由于历史原因，`Function.prototype` 本身是可调用的。`Function.prototype` 的 `length` 属性的值为 `0`。

## 示例

### 使用 function length

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2，依此类推

console.log(((...args) => {}).length);
// 0，剩余参数不计算在内

console.log(((a, b = 1, c) => {}).length);
// 1，只计算第一个具有默认值的参数之前的参数
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Function")}}
