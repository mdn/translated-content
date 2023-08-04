---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

{{JSRef}}

**`Math.cbrt()`** 関数は、引数として与えた数の立方根を返します。すなわち、

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique} \; y \; \text{such that} \; y^3 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}

## 構文

```
Math.cbrt(x)
```

### 引数

- _x_
  - : 数値。

### 返値

与えられた数値の立方根です。

## 解説

`cbrt()` は `Math` の静的なメソッドであるため、自ら生成した `Math` オブジェクトのメソッドとしてではなく、常に、 `Math.cbrt()` として使用してください (`Math` はコンストラクターではありません)。

## ポリフィル

すべての <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding="TeX">x \geq 0</annotation></semantics></math> に対して、 <math><semantics><mrow><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup></mrow><annotation encoding="TeX">\sqrt[3]{x} = x^{1/3}</annotation></semantics></math> が存在し、次の関数でエミュレートできます:

```js
if (!Math.cbrt) {
  Math.cbrt = (function (pow) {
    return function cbrt(x) {
      // ensure negative numbers remain negative:
      return x < 0 ? -pow(-x, 1 / 3) : pow(x, 1 / 3);
    };
  })(Math.pow); // localize Math.pow to increase efficiency
}
```

## 例

### Math.cbrt() の使用

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2); // 1.2599210498948732
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.cbrt")}}

## 関連情報

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
