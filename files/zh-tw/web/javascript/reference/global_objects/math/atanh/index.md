---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Math.atanh()`** 靜態方法回傳一個數字的反雙曲正切值，也就是說，

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">)</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width="0.16666666666666666em"></mspace><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \in ({-1}, 1),\;\mathtt{\operatorname{Math.atanh}(x)} &= \operatorname{artanh}(x) = \text{the unique } y \text{ such that } \tanh(y) = x \\&= \frac{1}{2}\,\ln\left(\frac{1+x}{1-x}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.atanh()")}}

```js interactive-example
console.log(Math.atanh(-1));
// Expected output: -Infinity

console.log(Math.atanh(0));
// Expected output: 0

console.log(Math.atanh(0.5));
// Expected output: 0.549306144334055 (approximately)

console.log(Math.atanh(1));
// Expected output: Infinity
```

## 語法

```js-nolint
Math.atanh(x)
```

### 參數

- `x`
  - : 一個介於 -1 和 1 之間的數字（包含邊界）。

### 回傳值

`x` 的反雙曲正切值。如果 `x` 為 1，返回 {{jsxref("Infinity")}}。如果 `x` 為 -1，返回 `-Infinity`。如果 `x` 小於 -1 或大於 1，返回 {{jsxref("NaN")}}。

## 描述

由於 `atanh()` 是 `Math` 的靜態方法，你必須使用 `Math.atanh()` 來呼叫它，而非呼叫你所建立的 `Math` 物件的方法（`Math` 並非建構子）。

## 範例

### 使用 Math.atanh()

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(-0); // -0
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Math.atanh` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
