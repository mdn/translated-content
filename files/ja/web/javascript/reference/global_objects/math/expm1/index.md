---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.expm1()`** は静的メソッドで、 [e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) のある数値のべき乗から 1 を引いた値を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙𝚖𝟷</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.expm1}(x)} = \mathrm{e}^x - 1</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## 構文

```js-nolint
Math.expm1(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

e<sup>x</sup> - 1 を表す数値で、 e は[自然対数の底](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E)です。

## 解説

_x_ の値が非常に小さい場合、1 を加えることで精度が縮小したり、なくなったりすることがあります。 JS で使用する倍精度浮動小数点数では、約 15 桁の精度が得られます。 1 + 1e-15 = 1.000000000000001ですが、1 + 1e-16 = 1.000000000000000となり、 15 桁以降の数字は丸められるため、この演算ではちょうど 1.0 となります。

<!-- prettier-ignore-start -->
<math><semantics><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><annotation encoding="TeX">\mathrm{e}^x</annotation></semantics></math> を計算する場合、ここで x が 0 にとても近い場合、 1 + x にとても近い答えが得られるはずです。それは、 <math><semantics><mrow><munder><mo lspace="0em" rspace="0em">lim</mo><mrow><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\mathrm{e}^x - 1}{x} = 1</annotation></semantics></math> だからです。 `Math.exp(1.1111111111e-15) - 1` を計算すると、 `1.1111111111e-15` に近い答えが得られます。代わりに、 `Math.exp` の結果の有効数字が最も大きい数字であるため、単位桁は `1` となり、最終的な値は `1.1102230246251565e-15` となり、正しい数字は 3 桁だけとなります。 `Math.exp1m(1.1111111111e-15)` の代わりに計算すると、より正確な答え `1.1111111111000007e-15` が得られます。これは 11 桁の有効数字になります。
<!-- prettier-ignore-end -->

`expm1()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.expm1()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.expm1() の使用

```js
Math.expm1(-Infinity); // -1
Math.expm1(-1); // -0.6321205588285577
Math.expm1(-0); // -0
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
Math.expm1(Infinity); // 無限大
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.expm1` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
