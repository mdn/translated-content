---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
---

{{jsSidebar("Objects")}}

全局属性 **`Infinity`** 是一个数值，表示无穷大。

{{InteractiveExample("JavaScript Demo: Standard built-in objects - infinity")}}

```js interactive-example
const maxNumber = Math.pow(10, 1000); // Max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // Expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// Expected output: 0
```

## 值

与 {{JSXref("Number.POSITIVE_INFINITY")}} 的数值相同。

{{js_property_attributes(0,0,0)}}

## 描述

`Infinity` 是*全局对象*（_global object_）的一个属性，即它是一个全局变量。

`Infinity` 的初始值是 {{jsxref("Number.POSITIVE_INFINITY")}}。`Infinity`（正无穷大）大于任何值。

该值的意义与数学无穷大略有不同。有关详细信息，请参见 {{jsxref("Number.POSITIVE_INFINITY")}}。

## 示例

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
