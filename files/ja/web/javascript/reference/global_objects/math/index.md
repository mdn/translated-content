---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math`** は名前空間オブジェクトで、数学的な定数と関数を提供する静的プロパティおよびメソッドがあります。

`Math` は {{jsxref("Number")}} 型で動作します。 {{jsxref("BigInt")}} 型では動作しません。

## 解説

他のグローバルオブジェクトと異なり、`Math` はコンストラクターではありません。 [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)と共に使用したり、 `Math` オブジェクトを関数として呼び出したりすることはできません。 `Math` のプロパティとメソッドはすべて静的です。

> [!NOTE]
> 多くの `Math` 関数の精度は*実装に依存します*。
>
> これは、ブラウザーごとに結果が異なる場合があることを意味し、同じ JavaScript エンジン上であっても、 OS やアーキテクチャが異なれば結果が異なる場合があります。

## 静的プロパティ

- {{jsxref("Math.E")}}
  - : ネイピア数 (オイラー数)。これは自然対数の底として用いられる数学定数で、約 `2.718` です。
- {{jsxref("Math.LN10")}}
  - : `10` の自然対数。約 `2.303` です。
- {{jsxref("Math.LN2")}}
  - : `2` の自然対数。約 `0.693` です。
- {{jsxref("Math.LOG10E")}}
  - : 10 を底とした `E` の対数。約 `0.434` です。
- {{jsxref("Math.LOG2E")}}
  - : 2 を底とした `E` の対数。約 `1.443` です。
- {{jsxref("Math.PI")}}
  - : 円周率。約 `3.14159` です。
- {{jsxref("Math.SQRT1_2")}}
  - : ½ の平方根 (または 1/√2 と等しい数)。約 `0.707` です。
- {{jsxref("Math.SQRT2")}}
  - : `2` の平方根。約 `1.414` です。
- `Math[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Math"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## 静的メソッド

- {{jsxref("Math.abs()")}}
  - : 入力値の絶対値を返します。
- {{jsxref("Math.acos()")}}
  - : 入力値のアークコサイン (逆余弦) を返します。
- {{jsxref("Math.acosh()")}}
  - : 入力値のハイパーボリックアークコサイン (双曲線逆余弦) を返します。
- {{jsxref("Math.asin()")}}
  - : 入力値のアークサイン (逆正弦) を返します。
- {{jsxref("Math.asinh()")}}
  - : 入力値のハイパーボリックアークサイン (双曲線逆正弦) を返します。
- {{jsxref("Math.atan()")}}
  - : 入力値のアークタンジェント (逆正接) を返します。
- {{jsxref("Math.atan2()")}}
  - : 引数で指定された比率のアークタンジェント (逆正接) を返します。
- {{jsxref("Math.atanh()")}}
  - : 入力値のハイパーボリックアークタンジェント (双曲線逆正接) を返します。
- {{jsxref("Math.cbrt()")}}
  - : 入力値の立方根を返します。
- {{jsxref("Math.ceil()")}}
  - : `x` 以上の最小の整数を返します。
- {{jsxref("Math.clz32()")}}
  - : `x` を 2 進数 32 ビット整数値で表した数の先頭の 0 の個数を返します。
- {{jsxref("Math.cos()")}}
  - : 入力値のコサイン (余弦) を返します。
- {{jsxref("Math.cosh()")}}
  - : 入力値のハイパーボリックコサイン (双曲線余弦) を返します。
- {{jsxref("Math.exp()")}}
  - : e<sup>x</sup> を返します。ここで x は引数であり、e はオイラー定数（`2.718`…, 自然対数の底）です。
- {{jsxref("Math.expm1()")}}
  - : `exp(x)` から `1` を引いた値を返します。
- {{jsxref("Math.floor()")}}
  - : 入力値以下の最大の整数を返します。
- {{jsxref("Math.f16round()")}}
  - : 入力値に最も近い[半精度](https://ja.wikipedia.org/wiki/半精度浮動小数点数)浮動小数点表現を返します。
- {{jsxref("Math.fround()")}}
  - : 入力値に最も近い[単精度](https://ja.wikipedia.org/wiki/単精度浮動小数点数)浮動小数点表現を返します。
- {{jsxref("Math.hypot()")}}
  - : 引数の二乗和の平方根を返します。
- {{jsxref("Math.imul()")}}
  - : 入力値の 32 ビット乗算の結果を返します。
- {{jsxref("Math.log()")}}
  - : 入力値の自然対数（㏒<sub>e</sub>）を返します。
- {{jsxref("Math.log10()")}}
  - : 入力値の 10 を底とした対数 (log10) を返します。
- {{jsxref("Math.log1p()")}}
  - : 入力値の `1 + x` の自然対数（㏒<sub>e</sub>）を返します。
- {{jsxref("Math.log2()")}}
  - : 入力値の 2 を底とした対数 (log2) を返します。
- {{jsxref("Math.max()")}}
  - : 引数として与えた複数の値の中で最大の値を返します。
- {{jsxref("Math.min()")}}
  - : 引数として与えた複数の値の中で最小の値を返します。
- {{jsxref("Math.pow()")}}
  - : `x` を `y` で累乗した値、すなわち `x`<sup><code>y</code></sup> を返します。
- {{jsxref("Math.random()")}}
  - : `0` 以上 `1` 未満の擬似乱数を返します。
- {{jsxref("Math.round()")}}
  - : `x` を四捨五入して、近似の整数を返します。
- {{jsxref("Math.sign()")}}
  - : 入力値の符号を返します。`x` が正、負、 0 のいずれであるかを返します。
- {{jsxref("Math.sin()")}}
  - : 入力値のサイン (正弦) を返します。
- {{jsxref("Math.sinh()")}}
  - : 入力値のハイパーボリックサイン (双曲線正弦) を返します。
- {{jsxref("Math.sqrt()")}}
  - : 入力値の平方根を返します。
- {{jsxref("Math.sumPrecise()")}}
  - : 渡された反復可能オブジェクトの数値の合計を返します。中間結果における浮動小数点精度の損失を回避します。
- {{jsxref("Math.tan()")}}
  - : 入力値のタンジェント (正接) を返します。
- {{jsxref("Math.tanh()")}}
  - : 入力値のハイパーボリックサイン (双曲線正接) を返します。
- {{jsxref("Math.trunc()")}}
  - : 入力値の小数点以下を削除し、整数の部分を返します。

## 例

### 角度とラジアンの間の変換

三角関数 (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`) は、角度に*ラジアン*を要求したり、返したりします。

人間は角度で考える傾向があり、（CSS 座標変換など）一部の関数角度を受け付けますので、手軽に両者の間を変換する関数を用意しておくといいでしょう。

```js
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
```

### 正三角形の高さの計算

正三角形の高さを計算したい場合、側辺の長さが 100 であるとわかっている場合は、*隣の角に正接を乗じた長さは、反対側と等しくなる*という数式を使用することができます。

![正三角形の 1 つの辺の反対側の頂点から垂線を引くと、3つの辺が「隣り合わせ」、「向かい合わせ」、「斜辺」としてマークされた正しい三角形が形成されます。「隣り合わせ」の辺と「斜辺」の間の角度は 60 度です。](trigonometry.png)

JavaScript では、次のようにして実現することができます。

```js
50 * Math.tan(degToRad(60));
```

`degToRad()` 関数を使用して 60 度をラジアンに変換しています。これは {{jsxref("Math.tan()")}} がラジアンの入力値を要求するからです。

### 2 つの値の間にある整数の乱数を返す

これは {{jsxref("Math.random()")}} と {{jsxref("Math.floor()")}} の組み合わせで実現できます。

```js
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number")}}
