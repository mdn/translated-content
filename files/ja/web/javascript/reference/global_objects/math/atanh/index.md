---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
---

{{JSRef}}

**`Math.atanh()`** 関数は、数値の双曲線逆正接 (ハイパーボリックアークタンジェント) を返します。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atanh.html")}}

## 構文

```
Math.atanh(x)
```

### 引数

- `x`
  - : 数値。

### 返値

与えられた数値の双曲線逆正接 (ハイパーボリックアークタンジェント) です。

## 解説

`atanh()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.atanh()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.atanh() の使用

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

１よりも大きな値もしくは -1 よりも小さな値に対しては、 {{jsxref("NaN")}} が返されます。

## ポリフィル

<math><semantics><mrow><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow><mo>&#x3C;</mo><mn>1</mn></mrow><annotation encoding="TeX">\left|x\right| &#x3C; 1</annotation></semantics></math>に対して、 <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right)</annotation></semantics></math> になり、次の関数でエミュレートできます。

```js
Math.atanh =
  Math.atanh ||
  function (x) {
    return Math.log((1 + x) / (1 - x)) / 2;
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.atanh")}}

## 関連情報

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
