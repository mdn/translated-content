---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`Infinity`** はグローバルプロパティで、無限大を表す数値です。

{{InteractiveExample("JavaScript デモ: Infinity")}}

```js interactive-example
const maxNumber = 10 ** 1000; // 正の最大値

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // 予想される結果: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// 予想される結果: 0
```

## 値

{{jsxref("Number.POSITIVE_INFINITY")}} と同じ数値です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`Infinity` はグローバルオブジェクトのプロパティです。言い換えればグローバルスコープ内の変数です。

`Infinity` の値（正の無限大）は他のあらゆる数値よりも大きな値です。

この値は数学的に無限大のように振る舞います。詳しくは {{jsxref("Number.POSITIVE_INFINITY")}} を参照してください。

## 例

### Infinity の使用

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(10 ** 1000); /* Infinity */
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
