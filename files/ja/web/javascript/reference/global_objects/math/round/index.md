---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
---

{{JSRef}}

**`Math.round()`** 関数は、引数として与えた数を四捨五入して、もっとも近似の整数を返します。

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## 構文

```
Math.round(x)
```

### 引数

- `x`
  - : 数値

### 返値

与えられた値をもっとも近似の整数に四捨五入した値。

## 解説

引数の小数部分が 0.5 以上の場合、その引数は、次に大きい整数に切り上げられます。引数の小数部分が 0.5 未満の場合、その引数は、次に小さい整数に切り下げられます。小数部分が 0.5 である場合は、正の無限大の方向で次の整数に丸められます。**これは多くの言語の `round()` 関数と異なることに注意してください。この場合はたいてい、*0 から遠ざかる*次の整数に丸められます** (小数部分が 0.5 である負の値を四捨五入する場合に、結果が変わります)。

`round()` は `Math` オブジェクトの静的なメソッドなので、自ら生成した `Math` オブジェクトのメソッドとしてではなく、常に、`Math.round()` として使用するようにしてください (`Math` のコンストラクターはありません)。

## 例

### round の使用

```js
Math.round(20.49); //  20
Math.round(20.5); //  21
Math.round(42); //  42
Math.round(-20.5); // -20
Math.round(-20.51); // -21
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.round")}}

## 関連情報

- {{jsxref("Number.toPrecision()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
