---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
---

{{jsSidebar("Objects")}}

全域 **`Infinity`** 屬性是一個表示無窮大的數值。

{{js_property_attributes(0,0,0)}}

## 語法

```js-nolint
Infinity
```

## 描述

`Infinity` 是全域物件屬性，即它是全域範圍內的變數。

`Infinity` 的初始值是 {{jsxref("Number.POSITIVE_INFINITY")}} `Infinity` 值（正無窮大）值大於其他任何數值。該值在數學上表現為無窮大。例如，任何乘以 `Infinity` 的正整數都是 `Infinity`，除以 `Infinity` 的任何數都是 0。

按照 ECMAScript 5 規範，在 JavaScript 1.8.5 / Firefox 4 實作的 `Infinity` 乃唯讀屬性。

## 範例

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
