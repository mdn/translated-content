---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Math.log10()`** 静的メソッドは、数値の 10 を底とした対数を返します。すなわち次の値です。

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x &gt; 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log\_{10}(x) = \text{the unique } y \text{ such that } 10^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## 構文

```js-nolint
Math.log10(x)
```

### 引数

- `x`
  - : 0 以上の数値です。

### 返値

`x` の 10 を底とした対数です。 `x < 0` であった場合、 {{jsxref("NaN")}} を返します。

## 解説

`log10()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log10()` として使用するようにしてください（`Math` はコンストラクターではありません）。

この関数は `Math.log(x) / Math.log(10)` と同等です。 `log10(e)` には定数 {{jsxref("Math.LOG10E")}} を使用してください (これは 1 / {{jsxref("Math.LN10")}} です。)

## 例

### Math.log10() の使用

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.log10` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
