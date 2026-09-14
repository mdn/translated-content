---
title: Math.log1p()
short-title: log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.log1p()`** は静的メソッドで、 `1 + x` の（[e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) を底とした）自然対数を返します。ここで `x` は引数です。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1,\;\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.log1p()")}}

```js interactive-example
console.log(Math.log1p(1));
// 予想される結果: 0.6931471805599453

console.log(Math.log1p(0));
// 予想される結果: 0

console.log(Math.log1p(-1));
// 予想される結果: -Infinity

console.log(Math.log1p(-2));
// 予想される結果: NaN
```

## 構文

```js-nolint
Math.log1p(x)
```

### 引数

- `x`
  - : -1 以上の数値です。

### 返値

`1 + x` の（[e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) を底とした）自然対数です。 `x` が -1 の場合は、 [`-Infinity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) を返します。 `x < -1` の場合は、 {{jsxref("NaN")}} が返されます。

## 解説

`x` の値が非常に小さかった場合、 1 を加えると有効精度が減少します。 JS で使用する倍精度浮動小数点型の精度は 15 桁です。 1 + 1e-15 = 1.000000000000001 ですが、 1 + 1e-16 = 1.000000000000000 となり、 15 桁を超えた桁は四捨五入されるため、正確に 1.0 となります。

<!-- prettier-ignore-start -->
log(1 + _x_) を計算すると、 _x_ が小さければ、 _x_ にとても近い答えになるはずです。 <math><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\log(1+x)}{x} = 1</annotation></semantics></math> だからです。 `Math.log(1 + 1.1111111111e-15)` を計算すると、 `1.1111111111e-15` に近い答えが得られるはずです。しかし、 `1.00000000000000111022` の対数を取ることになります (四捨五入は二進数なので、時に醜い結果になることがあります) ので、答えは 1.11022…e-15 となり、正しい数字は 3 桁だけです。もし、代わりに `Math.log1p(1.1111111111e-15)` を計算した場合は、もっとずっと正確な答えである `1.1111111110999995e-15` が得られ、 15 桁の正しい数字が得られます (この場合は実際には 16 桁です)。
<!-- prettier-ignore-end -->

`x` の値が -1 未満であった場合、返値は常に {{jsxref("NaN")}} です。

`log1p()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.log1p()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.log1p() の使用

```js
Math.log1p(-2); // NaN
Math.log1p(-1); // -Infinity
Math.log1p(-0); // -0
Math.log1p(0); // 0
Math.log1p(1); // 0.6931471805599453
Math.log1p(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.log1p` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims による `Math.log1p` のポリフィル](https://www.npmjs.com/package/math.log1p)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
