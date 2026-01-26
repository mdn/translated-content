---
title: Math.hypot()
short-title: hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.hypot()`** は静的メソッドで、各引数の二乗の合計値の平方根を返します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript デモ: Math.hypot()")}}

```js interactive-example
console.log(Math.hypot(3, 4));
// 予想される結果: 5

console.log(Math.hypot(5, 12));
// 予想される結果: 13

console.log(Math.hypot(3, 4, 5));
// 予想される結果: 7.0710678118654755

console.log(Math.hypot(-5));
// 予想される結果: 5
```

## 構文

```js-nolint
Math.hypot()
Math.hypot(value1)
Math.hypot(value1, value2)
Math.hypot(value1, value2, /* …, */ valueN)
```

### 引数

- `value1`, …, `valueN`
  - : 数値です。

### 返値

与えられた引数の二乗和の平方根を返します。引数のいずれかが ±Infinity の場合、 {{jsxref("Infinity")}} を返します。 それ以外の場合、引数の少なくとも 1 つが {{jsxref("NaN")}} であるか、または {{jsxref("NaN")}} に変換された場合、{{jsxref("NaN")}} を返します。引数が指定されていない場合、またはすべての引数が ±0 の場合、`0` を返します。

## 解説

直角三角形の斜辺や、複素数の大きさを計算するには `Math.sqrt(v1*v1 + v2*v2)` という公式を用い、ここで v1 と v2 は三角形の辺の長さであったり、複素数の実数と複素数部分であったりします。二次元またはそれ以上の次元における対応する距離は、 `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)` のように平方根の下にさらに多くの平方を足すことで計算できます。

この関数はこの計算をより簡単に、より高速に行います。 `Math.hypot(v1, v2)` または `Math.hypot(v1, /* …, */, vN)` を呼び出すだけです。

`Math.hypot` はまた、数値が非常に大きい場合のオーバーフロー/アンダーフローの問題を回避します。 JS で表現できる最大の数は [`Number.MAX_VALUE`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) で、これは約 10<sup>308</sup> です。数字の大きさが約 10<sup>154</sup> よりも大きい場合、その 2 乗を取ると無限大になります。例えば、 `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity` です。代わりに `hypot()` を使うと、 `Math.hypot(1e200, 1e200) = 1.4142...e+200` となり、より良い答えが得られます。これは非常に小さな数の場合にも当てはまります。 `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0` ですが、 `Math.hypot(1e-200, 1e-200) = 1.4142...e-200` となります。

引数が 1 つの場合、 `Math.hypot()` は [`Math.abs()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) と同等です。 [`Math.hypot.length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) は 2 であり、これは少なくとも 2 つの引数で扱うことを示す弱いシグナルです。

`hypot()` は `Math` の静的メソッドなので、常に `Math.hypot()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

## 例

### Math.hypot() の使用

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "foo"); // NaN, +'foo' => NaN なので
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3、Math.abs(-3) と同じ
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.hypot` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
