---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
---

{{JSRef}}

**`Math.hypot()`** 関数は、各引数の二乗の合計値の平方根を返します。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v*1, v_2, \dots, v_n)} = \sqrt{\sum*{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## 構文

```
Math.hypot([value1[, value2[, ...]]])
```

### 引数

- `value1, value2, ...`
  - : 数値です。

### 返値

与えられた各引数の二乗の合計値の平方根を返します。1 つ上の引数が数値に変換できなかった場合は、 {{jsxref("NaN")}} が返されます。

## 解説

直角三角形の斜辺や、複素数の大きさを計算するには `Math.sqrt(v1*v1 + v2*v2)` という公式を用い、ここで v1 と v2 は三角形の辺の長さであったり、複素数の実数と複素数部分であったりします。二次元またはそれ以上の次元における対応する距離は、 `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)` のように平方根の下にさらに多くの平方を足すことで計算できます。

この関数はこの計算をより簡単に、より高速に行います。 `Math.hypot(v1, v2)` または `Math.hypot(v1, v2, v3, v4, ...)` を呼び出すだけです。

`Math.hypot` はまた、数値が非常に大きい場合のオーバーフロー/アンダーフローの問題を回避します。 JS で表現できる最大の数は `Number.MAX_VALUE` で、これは約 10308 です。数字の大きさが約 10154 よりも大きい場合、その 2 乗を取ると無限大になります。例えば、 `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. 代わりに `hypot()` を使うと、 `Math.hypot(1e200, 1e200) = 1.4142...e+200` となり、より良い答えが得られます。これは非常に小さな数の場合にも当てはまります。 `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0` ですが、 `Math.hypot(1e-200, 1e-200) = 1.4142...e-200` となります。

`hypot()` は `Math` の静的メソッドなので、常に `Math.hypot()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

引数が与えられなかった場合、結果は +0 になります。引数のいずれかが ±Infinity であった場合、結果は Infinity になります。引数のいずれかが NaN であった場合は (他に ±Infinity の引数がない限り)、結果は NaN になります。数値に変換できない引数があった場合は、結果は {{jsxref("NaN")}} になります。

引数が 1 つの場合、 `Math.hypot()` は `Math.abs()` と同等です。

## 例

### Math.hypot() の使用

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "foo"); // NaN, since +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, the same as Math.abs(-3)
```

## ポリフィル

オーバーフロー/アンダーフローの問題を処理しないナイーブなアプローチです。

```js
if (!Math.hypot)
  Math.hypot = function () {
    var y = 0,
      i = arguments.length,
      containsInfinity = false;
    while (i--) {
      var arg = arguments[i];
      if (arg === Infinity || arg === -Infinity) containsInfinity = true;
      y += arg * arg;
    }
    return containsInfinity ? Infinity : Math.sqrt(y);
  };
```

アンダーフローやオーバーフローを回避するポリフィルです。

```js
if (!Math.hypot)
  Math.hypot = function () {
    var max = 0;
    var s = 0;
    var containsInfinity = false;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = Math.abs(Number(arguments[i]));
      if (arg === Infinity) containsInfinity = true;
      if (arg > max) {
        s *= (max / arg) * (max / arg);
        max = arg;
      }
      s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
    }
    return containsInfinity
      ? Infinity
      : max === 1 / 0
      ? 1 / 0
      : max * Math.sqrt(s);
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.hypot")}}

## 関連情報

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
