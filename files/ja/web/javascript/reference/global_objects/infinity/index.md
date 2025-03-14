---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
---

{{jsSidebar("Objects")}}

グローバルプロパティ **`Infinity`** は無限大を表す数値です。

{{js_property_attributes(0,0,0)}}

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

## 解説

`Infinity` は*グローバルオブジェクト*のプロパティです。言い換えればグローバルスコープ内の変数です。

`Infinity` の初期値は {{jsxref("Number.POSITIVE_INFINITY")}} です。`Infinity` という値 (正の無限大) は他のあらゆる数より大きい数です。

この値は数学的に無限大のように振る舞います。詳しくは {{jsxref("Number.POSITIVE_INFINITY")}} を参照してください。

ECMAScript 5 の仕様では、`Infinity` は読み取り専用です (JavaScript 1.8.5 / Firefox 4 にて実装)。

## 例

### Infinity の使用

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
