---
title: Math.sinh()
short-title: sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.sinh()`** 静的メソッドは、数値の双曲線正弦 (ハイパーボリックサイン) を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚜𝚒𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh}(x)} = \sinh(x) = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.sinh()")}}

```js interactive-example
console.log(Math.sinh(0));
// 予想される結果: 0

console.log(Math.sinh(1));
// 予想される結果: 1.1752011936438014

console.log(Math.sinh(-1));
// 予想される結果: -1.1752011936438014

console.log(Math.sinh(2));
// 予想される結果: 3.626860407847019
```

## 構文

```js-nolint
Math.sinh(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の双曲線正弦 (ハイパーボリックサイン) です。

## 解説

`sinh()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.sinh()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Using Math.sinh() の使用

```js
Math.sinh(-Infinity); // -Infinity
Math.sinh(-0); // -0
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
Math.sinh(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.sinh` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
