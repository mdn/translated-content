---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
---

{{JSRef}}

**`Math.asin()`** 関数は、引数として与えた数値の逆正弦 (アークサイン) をラジアン単位で返します。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arcsin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asin.html")}}

## 構文

```
Math.asin(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

与えられた数値が **-1** から **1** までの場合、その逆正弦 (アークサイン) をラジアン単位で返します。さもなければ、 {{jsxref("NaN")}} を返します。

## 解説

`Math.asin()` メソッドは、 `-1` から `1` までの _x_ に対して、 <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> から <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> までのラジアンの数値を返します。 _x_ の値がこの範囲を越えている場合、このメソッドは {{jsxref("NaN")}} を返します。

`asin()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.asin()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.asin() の使用

```js
Math.asin(-2); // NaN
Math.asin(-1); // -1.5707963267948966 (-pi/2)
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1); // 1.5707963267948966 (pi/2)
Math.asin(2); // NaN
```

値が -1 未満か 1 より大きい数値の場合、`Math.asin()` は {{jsxref("NaN")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.asin")}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
