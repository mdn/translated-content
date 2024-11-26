---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.log2()`** は静的メソッドで、数値の 2 を底とした対数を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟸</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique } y \text{ such that } 2^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## 構文

```js-nolint
Math.log2(x)
```

### 引数

- `x`
  - : 0 以上の数値です。

### 返値

`x` の 2 を底とした対数です。 `x < 0` であった場合、 {{jsxref("NaN")}} が返されます。

## 解説

`log2()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log2()` として使用するようにしてください (`Math` はコンストラクターではありません)。

この関数は `Math.log(x) / Math.log(2)` と同等です。 `log2(e)` には定数 {{jsxref("Math.LOG2E")}} を使用してください（これは 1 / {{jsxref("Math.LN2")}} です）。

## 例

### Math.log2() の使用

```js
Math.log2(-2); // NaN
Math.log2(-0); // -Infinity
Math.log2(0); // -Infinity
Math.log2(1); // 0
Math.log2(2); // 1
Math.log2(3); // 1.584962500721156
Math.log2(1024); // 10
Math.log2(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.log2` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
