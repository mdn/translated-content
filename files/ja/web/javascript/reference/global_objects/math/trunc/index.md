---
title: Math.trunc()
short-title: trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.trunc()`** 関数は、引数として与えた数の小数部の桁を取り除くことによって整数部を返します。

{{InteractiveExample("JavaScript デモ: Math.trunc()")}}

```js interactive-example
console.log(Math.trunc(13.37));
// 予想される結果: 13

console.log(Math.trunc(42.84));
// 予想される結果: 42

console.log(Math.trunc(0.123));
// 予想される結果: 0

console.log(Math.trunc(-0.123));
// 予想される結果: -0
```

## 構文

```js-nolint
Math.trunc(x)
```

### 引数

- `x`
  - : 数値。

### 返値

`x` の整数部です。

## 解説

`Math.trunc()` の処理は、他の 3 つの `Math` メソッド、{{jsxref("Math.floor()")}}、{{jsxref("Math.ceil()")}}、{{jsxref("Math.round()")}} よりも直感的です。引数が正の数か負の数かに関わらず、小数点とその右側の桁を切り詰め（切り捨て）ます。

`trunc()` は `Math` オブジェクトの静的なメソッドなので、自ら生成した `Math` オブジェクトのメソッドとしてではなく、常に、`Math.trunc()` として使用してください (`Math` オブジェクトにはコンストラクタがありません)。

## 例

### Math.trunc() の使用

```js
Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity
```

### ビット単位の no-op を使った数値の切り捨て

> [!WARNING]
> 無視できないエッジケースがあるため、これは `Math.trunc()` のポリフィルにはなりません。

ビット演算はオペランドを32ビット整数に変換するため、従来は浮動小数点数を切り捨てるために利用されてきました。一般的なテクニックは以下の通りです。

```js
const original = 3.14;
const truncated1 = ~~original; // 二重否定
const truncated2 = original & -1; // Bitwise AND with -1
const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0
```

これは本質的に `toInt32` であり、 `Math.trunc` とは異なることに注意してください。値が -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value` < 2147483648) を満たさない場合、変換がオーバーフローしてしまいます。

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

`Math.trunc()` の代用として `~~` を使うのは、入力の範囲が 32 ビット整数の範囲に収まっていると確信できる場合だけにしてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.trunc` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
