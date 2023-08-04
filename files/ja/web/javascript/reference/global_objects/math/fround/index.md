---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
---

{{JSRef}}

**`Math.fround()`** 関数は、ある {{jsxref("Number")}} を表す最も近い[32ビット単精度](https://ja.wikipedia.org/wiki/単精度浮動小数点数)浮動小数点数を返します。

{{EmbedInteractiveExample("pages/js/math-fround.html")}}

## 構文

```
var singleFloat = Math.fround(doubleFloat);
```

### 引数

- `doubleFloat`
  - : {{jsxref("Number")}}。この引数が異なる方であった場合は、数値に変換されるか、変換できなければ {{jsxref("NaN")}} になります。

### 返値

与えられた値を表す最も近い [32 ビット単精度](https://ja.wikipedia.org/wiki/単精度浮動小数点数)浮動小数点数です。

## 解説

JavaScript は内部的に 64 ビットの倍精度浮動小数点数を使用しており、非常に高い精度を提供しています。しかし、例えば {{jsxref("Float32Array")}} から値を読み込む場合など 32 ビットの浮動小数点数を扱うことがあるかもしれません。これは混乱を招く可能性があります。 64 ビットの浮動小数点数と 32 ビットの浮動小数点数が等しいかどうかをチェックすると、一見同じように見える数値であっても失敗することがあります。

これを解決するには、 `Math.fround()` を使用して、 64 ビット浮動小数点数を 32 ビットの浮動小数点数にキャストすることができます。内部的には、 JavaScript は数値を 64 ビットの浮動小数点数として扱い続けますが、仮数の 23 番目のビットに「偶数への丸め」を実行し、それに続く仮数ビットをすべて 0 に設定します。数値が 32 ビットの浮動小数点数の範囲外の場合は、 {{jsxref("Infinity")}} または `-Infinity` が返されます。

`fround()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.fround()` として使用するようにしてください (`Math` はコンストラクターではありません)。

## 例

### Math.fround() の使用

1.5 という数値は二進数で正確に表すことができ、32 ビットと 64 ビットとで同じになります。

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

しかし、 1.337 という数値は二進数では正確に表すことができず、32 ビットと 64 ビットとで異なります。

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> は 32 ビット浮動小数点では大きすぎるため、 `Infinity` が返されます。

```js
2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

引数が数値に変換できない場合、または[非数](https://ja.wikipedia.org/wiki/NaN) (`NaN`) であった場合、 `Math.fround()` は `NaN` を返します。

```js
Math.fround("abc"); // NaN
Math.fround(NaN); // NaN
```

## ポリフィル

これは {{jsxref("Float32Array")}} に対応している場合、次の関数でエミュレートできます。

```js
Math.fround =
  Math.fround ||
  (function (array) {
    return function (x) {
      return (array[0] = x), array[0];
    };
  })(new Float32Array(1));
```

古いブラウザーに対応するには、より遅いですが、次のものも利用できます。

```js
if (!Math.fround)
  Math.fround = function (arg) {
    arg = Number(arg);
    // Return early for ±0 and NaN.
    if (!arg) return arg;
    var sign = arg < 0 ? -1 : 1;
    if (sign < 0) arg = -arg;
    // Compute the exponent (8 bits, signed).
    var exp = Math.floor(Math.log(arg) / Math.LN2);
    var powexp = Math.pow(2, Math.max(-126, Math.min(exp, 127)));
    // Handle subnormals: leading digit is zero if exponent bits are all zero.
    var leading = exp < -127 ? 0 : 1;
    // Compute 23 bits of mantissa, inverted to round toward zero.
    var mantissa = Math.round((leading - arg / powexp) * 0x800000);
    if (mantissa <= -0x800000) return sign * Infinity;
    return sign * powexp * (leading - mantissa / 0x800000);
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.fround")}}

## 関連情報

- {{jsxref("Math.round()")}}
