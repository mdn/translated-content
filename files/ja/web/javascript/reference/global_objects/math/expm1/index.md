---
title: Math.expm1()
short-title: expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`Math.expm1()`** は静的メソッドで、[e](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) をある数値のべき乗にした値から 1 を引いた値を返します。つまり、次のようになります。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙𝚖𝟷</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.expm1}(x)} = \mathrm{e}^x - 1</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.expm1()")}}

```js interactive-example
console.log(Math.expm1(0));
// 予想される結果: 0

console.log(Math.expm1(1));
// 予想される結果: 1.718281828459045

console.log(Math.expm1(-1));
// 予想される結果: -0.6321205588285577

console.log(Math.expm1(2));
// 予想される結果: 6.38905609893065
```

## 構文

```js-nolint
Math.expm1(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

e<sup>x</sup> - 1 を表す数値で、 e は[自然対数の底](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E)です。

## 解説

_x_ が非常に小さい場合、1 を加えると精度が低下したり、完全に失われたりすることがあります。JS で使われる倍精度浮動小数点数の精度は約 15 桁です。1 + 1e-15 = 1.000000000000001 ですが、1 + 1e-16 = 1.000000000000000 となります。15 桁より後の数字は丸められるため、この演算では結果がちょうど 1.0 になります。

<!-- prettier-ignore-start -->
<math><semantics><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><annotation encoding="TeX">\mathrm{e}^x</annotation></semantics></math> を計算するとき、_x_ が 0 に非常に近ければ、1 + _x_ に非常に近い結果になるはずです。これは、<math><semantics><mrow><munder><mo lspace="0em" rspace="0em">lim</mo><mrow><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\mathrm{e}^x - 1}{x} = 1</annotation></semantics></math> だからです。`Math.exp(1.1111111111e-15) - 1` を計算すると、`1.1111111111e-15` に近い結果が得られるはずです。しかし、`Math.exp` の結果では最上位の有効数字が 1 の位の `1` になるため、最終的な値は `1.1102230246251565e-15` となり、正しい桁は 3 桁だけになります。代わりに `Math.expm1(1.1111111111e-15)` を計算すると、11 桁の正しい有効数字を持つ、より正確な結果 `1.1111111111000007e-15` が得られます。
<!-- prettier-ignore-end -->

`expm1()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.expm1()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.expm1() の使用

```js
Math.expm1(-Infinity); // -1
Math.expm1(-1); // -0.6321205588285577
Math.expm1(-0); // -0
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
Math.expm1(Infinity); // Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.expm1` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/math)
- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
