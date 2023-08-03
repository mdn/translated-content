---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
---

{{JSRef}}

**`Math.cosh()`** 関数は、引数として与えた数の双曲線余弦 (ハイパーボリックコサイン) を返します。これは{{jsxref("Math.E", "定数 e", "", 1)}} を使用して次のように表すことができます。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cosh.html")}}

## 構文

```
Math.cosh(x)
```

### 引数

- `x`
  - : 数値。

### 返値

指定された数値の双曲線余弦 (ハイパーボリックコサイン) です。

## 解説

`cosh()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.cosh()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.cosh() の使用

```js
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```

## ポリフィル

これは {{jsxref("Math.exp()")}} 関数を使用して次のようにエミュレートできます。

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  };
```

または {{jsxref("Math.exp()")}} 関数を一度だけ呼び出すようにすると、次のようになります。

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    var y = Math.exp(x);
    return (y + 1 / y) / 2;
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.cosh")}}

## 関連情報

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
