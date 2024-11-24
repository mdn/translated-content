---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.log()`** は静的メソッドで、数値の（[e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) を底とした）自然対数を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique } y \text{ such that } e^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## 構文

```js-nolint
Math.log(x)
```

### 引数

- `x`
  - : 0 以上の数値です。

### 返値

`x` の（[e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) を底とした）自然対数です。 `x` が ±0 の場合は、 [`-Infinity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) を返します。 `x < 0` の場合は、 {{jsxref("NaN")}} が返されます。

## 解説

`log()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log()` として使用するようにしてください (`Math` はコンストラクターではありません)。

2 または 10 の自然対数が必要な場合は、定数の {{jsxref("Math.LN2")}} または {{jsxref("Math.LN10")}} を使用してください。 2 や 10 を底とした対数が必要な場合は、 {{jsxref("Math.log2()")}} または {{jsxref("Math.log10()")}} を使用してください。他の数を底とした対数が必要な場合は、下記の例にあるように `Math.log(x) / Math.log(otherBase)` を使用してください。事前に `1 / Math.log(otherBase)` を計算しておいた方がいいかもしれません。 `Math.log(x) * constant` の乗算の方がはるかに高速だからです。

1 にとても近い正の数値は、精度が損なわれ、自然対数が不正確になる可能性がありますのでご注意ください。この場合、 {{jsxref("Math.log1p")}} を使用することをお勧めします。

## 例

### Math.log() の使用

```js
Math.log(-1); // NaN
Math.log(-0); // -Infinity
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
Math.log(Infinity); // Infinity
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

{{Compat}}

## 関連情報

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
