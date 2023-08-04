---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
---

{{JSRef}}

**`Math.pow()`** 関数は `base` を `exponent` 乗した値、つまり、`baseexponent` の値を返します。

{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## 構文

```
Math.pow(base, exponent)
```

### 引数

- `base`
  - : 底となる数です。
- `exponent`
  - : `base` を累乗する指数です。

### 返値

指定された低を指定された指数だけ累乗したものを表す数値です。

## 解説

**`Math.pow()`** 関数は `base` の `exponent` 乗、すなわち `baseexponent` を返します。 `base` と `exponent` は 10 進数の数値です。

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
Math.pow(-7, 2); // 49 (2乗は正の数)
Math.pow(-7, 3); // -343 (3乗は負の数)
Math.pow(-7, 0.5); // NaN (負の数には実数の平方根がない)
// due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN
Math.pow(-7, 1 / 3); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.pow")}}

## 関連情報

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
