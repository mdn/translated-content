---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
---

{{JSRef}}

**`Math.acos()`** 関数は、引数として与えた数値の逆余弦 (アークコサイン) をラジアン単位で返します。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acos.html")}}

## 構文

```
Math.acos(x)
```

### 引数

- `x`
  - : コサインを表す数値で、 `x` は `-1` と `1` の間です。

### 返値

与えられた数値が `-1` から `1` までの場合、その逆余弦 (アークコサイン) をラジアン単位で返します。それ以外の場合は {{jsxref("NaN")}} を返します。

## 解説

`Math.acos()` メソッドは、-1 から 1 までの `x` に対して、0 から π までのラジアンの数値を返します。`x` の値がこの範囲を越えている場合、このメソッドは {{jsxref("NaN")}} を返します。

`acos()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.acos()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.acos() の使用

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793
Math.acos(0); // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1); // 0
Math.acos(2); // NaN
```

値が -1 未満か 1 より大きい数値の場合、`Math.acos()` は {{jsxref("NaN")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.acos")}}

## 関連情報

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
