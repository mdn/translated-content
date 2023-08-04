---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
---

{{JSRef}}

**`Math.log()`** 関数は、 ({{jsxref("Math.E", "e")}} を底とした) 数値の自然対数を返します。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

JavaScript の **`Math.log()`** 関数は、数学の _ln(x)_ と同等です。

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## 構文

```
Math.log(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

({{jsxref("Math.E", "e")}} を底とした) 与えられた数値の自然対数です。数値が負の数であった場合、 {{jsxref("NaN")}} が返されます。

## 解説

`x` の値が 0 であった場合、返値は常に {{jsxref("Number.NEGATIVE_INFINITY", "-Infinity")}} です。

`x` の値が 0 未満であった場合、返値は常に {{jsxref("NaN")}} です。

`log()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log()` として使用するようにしてください (`Math` はコンストラクターではありません)。

2 または 10 の自然対数が必要な場合は、定数の {{jsxref("Math.LN2")}} または {{jsxref("Math.LN10")}} を使用してください。 2 や 10 を底とした対数が必要な場合は、 {{jsxref("Math.log2()")}} または {{jsxref("Math.log10()")}} を使用してください。他の数を底とした対数が必要な場合は、下記の例にあるように Math.log(x) / Math.log(otherBase) を使用してください。事前に 1 / Math.log(otherBase) を計算しておいた方がいいかもしれません。

## 例

### Math.log() の使用

```js
Math.log(-1); // NaN, out of range
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

### 様々な底による Math.log() の使用

以下の関数は、 `x` を底とした `y` の対数を返します (すなわち <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>)。

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

`getBaseLog(10, 1000)` を実行すると、実際の答えが 3 であるのに対し、浮動小数点の丸め処理により近似値の `2.9999999999999996` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.log")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
