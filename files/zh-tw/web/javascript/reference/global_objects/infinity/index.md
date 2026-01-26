---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`Infinity`** 全域屬性是一個代表無限大的數值。

{{InteractiveExample("JavaScript Demo: Infinity")}}

```js interactive-example
const maxNumber = 10 ** 1000; // 最大正數

if (maxNumber === Infinity) {
  console.log("我們稱之為無限大！");
  // 預期輸出：「我們稱之為無限大！」
}

console.log(1 / maxNumber);
// 預期輸出：0
```

## 值

與 {{jsxref("Number.POSITIVE_INFINITY")}} 的數值相同。

{{js_property_attributes(0, 0, 0)}}

## 描述

`Infinity` 是*全域物件*的一個屬性。換句話說，它是一個在全域作用域中的變數。

`Infinity`（正無限大）這個值比任何其他數字都大。

這個值的行為與數學上的無限大略有不同；詳情請參見 {{jsxref("Number.POSITIVE_INFINITY")}}。

## 範例

### 使用 Infinity

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(10 ** 1000); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
