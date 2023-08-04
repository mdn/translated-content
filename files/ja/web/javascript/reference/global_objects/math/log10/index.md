---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
---

{{JSRef}}

**`Math.log10()`** 関数は、数値の 10 を底とした対数を返します。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## 構文

```
Math.log10(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

与えられた数値の 10 を底とした対数です。数値が負の数であった場合、 {{jsxref("NaN")}} が返されます。

## 解説

`x` の値が 0 未満であった場合、返値は常に {{jsxref("NaN")}} です。

`log10()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log10()` として使用するようにしてください (`Math` はコンストラクターではありません)。

この関数は Math.log(x) / Math.log(10) と同等です。 log10(e) には定数 {{jsxref("Math.LOG10E")}} を使用してください (これは 1 / {{jsxref("Math.LN10")}} です。)

## 例

### Math.log10() の使用

```js
Math.log10(2); // 0.3010299956639812
Math.log10(1); // 0
Math.log10(0); // -Infinity
Math.log10(-2); // NaN
Math.log10(100000); // 5
```

## ポリフィル

これは以下の関数でエミュレートできます。

```js
Math.log10 =
  Math.log10 ||
  function (x) {
    return Math.log(x) * Math.LOG10E;
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.log10")}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
