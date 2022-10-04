---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
---

{{jsSidebar("Objects")}}

全局属性 **`Infinity`** 是一个数值，表示无穷大。

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## 描述

`Infinity` 是*全局对象*（_global object_）的一个属性，即它是一个全局变量。

`Infinity` 的初始值是 {{jsxref("Number.POSITIVE_INFINITY")}}。`Infinity`（正无穷大）大于任何值。

该值的意义与数学无穷大略有不同。有关详细信息，请参见{{jsxref("Number.POSITIVE_INFINITY")}}。

在 ECMAScript 5 的规范中， `Infinity` 是只读的（实现于 JavaScript 1.8.5 / Firefox 4）。

## 示例

```js
console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
