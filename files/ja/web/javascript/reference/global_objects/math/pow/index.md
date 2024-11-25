---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.pow()`** は静的メソッドで、基数をべき乗した値を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚙𝚘𝚠</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo>,</mo><mi>𝚢</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>y</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.pow}(x, y)} = x^y</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## 構文

```js-nolint
Math.pow(base, exponent)
```

### 引数

- `base`
  - : 底となる数です。
- `exponent`
  - : `base` を累乗する指数です。

### 返値

`base` を表す数値を `exponent` 乗した値。以下のいずれかの場合は、 {{jsxref("NaN")}} を返します。

- `exponent` が `NaN` である。
- `base` が `NaN` で、`exponent` が `0` 以外である。
- `base` が ±1 で、 `exponent` が ±`Infinity` である。
- `base < 0` で、 `exponent` が整数ではない。

## 解説

`Math.pow()` は [`**`](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation) 演算子と同等ですが、 `Math.pow()` は数値のみを受け入れるという点が異なります。

`Math.pow(NaN, 0)`（および同等の `NaN ** 0`）は、 {{jsxref("NaN")}} が数学演算で伝播しない唯一のケースです。これは、オペランドが `NaN` であるにもかかわらず `1` を返します。さらに、 `base` が 1 で `exponent` が無限大（±Infinity または `NaN`）である場合の動作は、結果が 1 となることを規定している IEEE 754 とは異なり、 JavaScript では元の動作との後方互換性を維持するために `NaN` を返します。

`pow()` は `Math` の静的メソッドなので、常に `Math.pow()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

## 例

### Math.pow() の使用

```js
// 単純
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// 小数のべき乗
Math.pow(4, 0.5); // 2 (4 の平方根)
Math.pow(8, 1 / 3); // 2 (8 の立方根)
Math.pow(2, 0.5); // 1.4142135623730951 (2 の平方根)
Math.pow(2, 1 / 3); // 1.2599210498948732 (2 の立方根)

// 負の数のべき乗
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// 負の数の底
Math.pow(-7, 2); // 49 (2 乗は正の数)
Math.pow(-7, 3); // -343 (3 乗は負の数)
Math.pow(-7, 0.5); // NaN (負の数には実数の平方根がない)
// Due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN,
// even when the mathematical result is real
Math.pow(-7, 1 / 3); // NaN

// Zero and infinity
Math.pow(0, 0); // 1 (任意の数 ** ±0 is 1)
Math.pow(Infinity, 0.1); // Infinity (正の指数)
Math.pow(Infinity, -1); // 0 (負の指数)
Math.pow(-Infinity, 1); // -Infinity (正の奇数の整数の指数)
Math.pow(-Infinity, 1.5); // Infinity (正の指数)
Math.pow(-Infinity, -1); // -0 (負の奇数の整数の指数)
Math.pow(-Infinity, -1.5); // 0 (負の指数)
Math.pow(0, 1); // 0 (正の指数)
Math.pow(0, -1); // Infinity (負の指数)
Math.pow(-0, 1); // -0 (正の奇数の整数の指数)
Math.pow(-0, 1.5); // 0 (正の指数)
Math.pow(-0, -1); // -Infinity (負の奇数の整数の指数)
Math.pow(-0, -1.5); // Infinity (負の指数)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN: only Math.pow(NaN, 0) does not result in NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
