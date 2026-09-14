---
title: 剰余演算子 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**剰余演算子 (`%`)** は、1 つ目のオペランドが 2 つ目のオペランドで除算されたときの余りである剰余を返します。これは常に被除数の符号を取ります。

{{InteractiveExample("JavaScript デモ: 剰余演算子 (%)")}}

```js interactive-example
console.log(13 % 5);
// 予想される結果: 3

console.log(-13 % 5);
// 予想される結果: -3

console.log(4 % 2);
// 予想される結果: 0

console.log(-4 % 2);
// 予想される結果: -0
```

## 構文

```js-nolint
x % y
```

## 解説

`%` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。まず[両オペランドを数値型に変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への変換)し、それらの型を検査します。両オペランドが長整数になった場合、長整数の剰余を実行します。そうでない場合は数値の剰余を実行します。一方のオペランドが長整数になり、もう一方が数値になった場合は、{{jsxref("TypeError")}} が発生します。

`n % d` の演算では、`n` を被除数、`d` を除数と呼びます。この演算処理は、オペランドのいずれかが `NaN` であるか、 `n` が ±無限大であるか、または `d` が ±0 である場合に `NaN` を返します。

両方のオペランドが 0 ではなく有限であるとき、剰余 `r` は `r := n - d * q` として計算されます。ここで `q` は、 `r` ができるだけ 0 に近く、被除数 `n` と同じ符号を持つ整数です。

なお、多くの言語では '%' はリマインダー演算子ですが、言語によっては（例えば [Python や Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages) では）モジュロ演算子になります。モジュロは `k := n - d * q` と定義されます。ここで `q` は `k` が除数 `d` と同じ符号を持ち、かつ使用可能な限り 0 に近い整数です。 2 つのオペランドの符号が同じであれば、両者は等価になりますが、オペランドの符号が異なる場合、オペランドの符号が異なる場合、モジュロの結果は符号が常に _除数_ と同じになり、リマインダーは被除数と同じになります。 JavaScript でモジュロを得るには、 `n % d` の代わりに `((n % d) + d) % d` を使用してください。 JavaScript では、ビット単位のシフト演算子（[`<<`](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)、[`>>`](/ja/docs/Web/JavaScript/Reference/Operators/Right_shift) など）の 2 つ目のオペランドを正規化するために、（専用の演算子のない）モジュロ演算が使用され、オフセットが常に正の値になります。

長整数型の除算では、被除数 `y` が `0n` の場合に {{jsxref("RangeError")}} が発生します。これはゼロによる剰余は `NaN` を返しますが、長整数には `NaN` の概念がないからです。

## 例

### 正の値の剰余

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### 負の値の剰余

```js
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0

-3n % 2n; // -1n
```

### NaN の剰余

```js
NaN % 2; // NaN
```

### 無限大の剰余

```js
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
2 % Infinity; // 2
0 % Infinity; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html) by Dr. Axel Rauschmayer (2019)
