---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Math.round()`** 関数は、引数として与えた数を四捨五入して、もっとも近似の整数を返します。

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## 構文

```js-nolint
Math.round(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の値をもっとも近似の整数に四捨五入した値。

## 解説

引数の小数部分が 0.5 以上の場合、その引数は、次に大きい整数に切り上げられます。引数の小数部分が 0.5 未満の場合、その引数は、次に小さい整数に切り下げられます。小数部分が 0.5 である場合は、正の無限大の方向で次の整数に丸められます。**これは多くの言語の `round()` 関数と異なることに注意してください。この場合はたいてい、*0 から遠ざかる*次の整数に丸められます** (小数部分が 0.5 である負の値を四捨五入する場合に、結果が変わります)。

> [!NOTE]
> これは、多くの言語の `round()` 関数とは異なります。これらの関数は、半増分をゼロから離れた方向へ丸めることが多く、小数部分がちょうど 0.5 の負数の場合は異なる結果となります。

`Math.round(x)` は、 [`Math.floor(x + 0.5)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) とまったく同じではありません。 `x` が -0、または -0.5 ≤ x < 0 の場合、 `Math.round(x)` は -0 を返し、一方、 `Math.floor(x + 0.5)` は 0 を返します。しかし、この違いや潜在的な精度エラーを無視すれば、 `Math.round(x)` と `Math.floor(x + 0.5)` は一般的に同等です。

`round()` は `Math` オブジェクトの静的なメソッドなので、自ら生成した `Math` オブジェクトのメソッドとしてではなく、常に、`Math.round()` として使用するようにしてください (`Math` のコンストラクターはありません)。

## 例

### round の使用

```js
Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
