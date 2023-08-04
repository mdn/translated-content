---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
---

{{JSRef}}

**`Math.sinh()`** 関数は、引数として与えた数の双曲線正弦 (ハイパーボリックサイン) を返します。これは{{jsxref("Math.E", "定数 e", "", 1)}} を使用して次のように表すことができます。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x - e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sinh.html")}}

## 構文

```
Math.sinh(x)
```

### 引数

- `x`
  - : 数値。

### 返値

指定された数値の双曲線正弦 (ハイパーボリックサイン) です。

## 解説

`sinh()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.sinh()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## ポリフィル

これは {{jsxref("Math.exp()")}} 関数を使用して次のようにエミュレートできます。

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
  };
```

または {{jsxref("Math.exp()")}} 関数を一度だけ呼び出すようにすると、次のようになります。

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    var y = Math.exp(x);
    return (y - 1 / y) / 2;
  };
```

## 例

### Using Math.sinh() の使用

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.sinh")}}

## 関連情報

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
