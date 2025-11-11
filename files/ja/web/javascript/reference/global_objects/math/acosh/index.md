---
title: Math.acosh()
short-title: acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.acosh()`** は静的メソッドで、数値の双曲線余弦（ハイパーボリックアークコサイン）を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \geq 1,\;\mathtt{\operatorname{Math.acosh}(x)} &= \operatorname{arcosh}(x) = \text{the unique } y \geq 0 \text{ such that } \cosh(y) = x\\&= \ln\left(x + \sqrt{x^2 - 1}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.acosh()")}}

```js interactive-example
console.log(Math.acosh(0.999999999999));
// 予想される結果: NaN

console.log(Math.acosh(1));
// 予想される結果: 0

console.log(Math.acosh(2));
// 予想される結果: 1.3169578969248166

console.log(Math.acosh(2.5));
// 予想される結果: 1.566799236972411
```

## 構文

```js-nolint
Math.acosh(x)
```

### 引数

- `x`
  - : 1 以上の数値です。

### 返値

与えられた数値の双曲線余弦 (ハイパーボリックアークコサイン) です。数値が 1 未満であれば、 {{jsxref("NaN")}} になります。

## 解説

`acosh()` は `Math` の静的メソッドであるため、作成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.acosh()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.acosh() の使用

```js
Math.acosh(0); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
Math.acosh(Infinity); // 無限大
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.acosh` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims による `Math.acosh` のポリフィル](https://www.npmjs.com/package/math.acosh)
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
