---
title: Math.cosh()
short-title: cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`Math.cosh()`** は静的メソッドで、数値の双曲線余弦（ハイパーボリックコサイン）を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>+</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh}(x)} = \cosh(x) = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.cosh()")}}

```js interactive-example
console.log(Math.cosh(0));
// 予想される結果: 1

console.log(Math.cosh(1));
// 予想される結果: 1.543080634815244 （およそ）

console.log(Math.cosh(-1));
// 予想される結果: 1.543080634815244 （およそ）

console.log(Math.cosh(2));
// 予想される結果: 3.7621956910836314
```

## 構文

```js-nolint
Math.cosh(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の双曲線余弦（ハイパーボリックコサイン）です。

## 解説

`cosh()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.cosh()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.cosh() の使用

```js
Math.cosh(-Infinity); // Infinity
Math.cosh(-1); // 1.5430806348152437
Math.cosh(-0); // 1
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.cosh` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/math)
- [es-shims による `Math.cosh` のポリフィル](https://www.npmjs.com/package/math.cosh)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
