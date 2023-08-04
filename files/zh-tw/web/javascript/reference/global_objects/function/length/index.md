---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
---

{{JSRef}}

**`length`** property 表示該 function 預期被傳入的參數數量

{{js_property_attributes(0,0,1)}}

## 描述

`length` 是 function 物件的一個 property，表示該 function 預期被傳入的參數數量，這個數量並不包含 {{jsxref("rest_parameters", "rest parameter", "", 1)}} 且只包涵第一個預設參數(Default Parameters)前的參數。相較之下 {{jsxref("Functions_and_function_scope/arguments/length", "arguments.length")}} 是 function 內部的物件，會提供真正傳進 function 中的參數數量。

### `Function` 建構子的 data property

{{jsxref("Function")}} 建構子本身就是一個 {{jsxref("Function")}} 物件。其 `length` data property 的值為 1。此 property 的 attributes 包含: Writable: `false`, Enumerable: `false`, Configurable: `true`.

### `Function` prototype 物件的 property

{{jsxref("Function")}} prototype 物件的 length property 其值為 0。

## 範例

```js
console.log(Function.length); /* 1 */

console.log(function () {}.length); /* 0 */
console.log(function (a) {}.length); /* 1 */
console.log(function (a, b) {}.length); /* 2 以此類推. */

console.log(function (...args) {}.length); /* 0, rest parameter 不包含在內 */

console.log(function (a, b = 1, c) {}.length); /* 1 */
// 只有在預設參數前的參數會被算到，也就是只有 a 會被視為必須傳入的參數
// 而 c 將被預設為 undefined
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Function")}}
