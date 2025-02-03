---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.exp()`** は静的メソッドで、 [e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) のある数値のべき乗を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.exp}(x)} = \mathrm{e}^x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample}}

```js interactive-example
console.log(Math.exp(0));
// Expected output: 1

console.log(Math.exp(1));
// Expected output: 2.718281828459 (approximately)

console.log(Math.exp(-1));
// Expected output: 0.36787944117144233

console.log(Math.exp(2));
// Expected output: 7.38905609893065

```

## 構文

```js-nolint
Math.exp(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

e<sup>x</sup> を表す非負の数で、 e は[自然対数の底](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E)です。

## 解説

`exp()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.exp()` として使用するようにしてください (`Math` はコンストラクターではありません)。

`e` のべき乗が 0 に非常に近い値の場合、 1 に非常に近くなり、精度が失われることに注意してください。この場合、代わりに {{jsxref("Math.expm1")}} を使用すると、より高精度な小数部分を求めることができます。

## 例

### Math.exp() の使用

```js
Math.exp(-Infinity); // 0
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
Math.exp(Infinity); // 無限大
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
