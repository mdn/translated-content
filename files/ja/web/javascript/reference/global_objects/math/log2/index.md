---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
---

{{JSRef}}

**`Math.log2()`** 関数は、数値の 2 を底とした対数を返します。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## 構文

```
Math.log2(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

与えられた数値の 2 を底とした対数です。数値が負の数であった場合、 {{jsxref("NaN")}} が返されます。

## 解説

`x` の値が 0 未満であった場合、返値は常に {{jsxref("NaN")}} です。

`log2()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log2()` として使用するようにしてください (`Math` はコンストラクターではありません)。

この関数は Math.log(x) / Math.log(2) と同等です。 log2(e) には定数 {{jsxref("Math.LOG2E")}} を使用してください (これは 1 / {{jsxref("Math.LN2")}} です。)

## ポリフィル

このポリフィルは `Math.log2` 関数をエミュレートします。なお、これは入力値によっては不正確な値を返すので (1 << 29 など)、ビットマスクで使用するときは {{jsxref("Math.round()")}} で囲んでください。

```js
if (!Math.log2)
  Math.log2 = function (x) {
    return Math.log(x) * Math.LOG2E;
  };
```

## 例

### Math.log2() の使用

```js
Math.log2(3); // 1.584962500721156
Math.log2(2); // 1
Math.log2(1); // 0
Math.log2(0); // -Infinity
Math.log2(-2); // NaN
Math.log2(1024); // 10
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.log2")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
