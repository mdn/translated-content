---
title: 剰余 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Operators")}}

剰余演算子 (`%`) は、1 つ目のオペランドが 2 つ目のオペランドで除算されたときの余りである剰余を返します。これは常に被除数の符号を取ります。

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## 構文

```js-nolint
x % y
```

## 解説

`%` 演算子のオペランドは、数値型と[長整数型](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 つの型ででオーバーロードされています。 これは、まず[両方のオペランドを数値に変換し](/ja/docs/Web/JavaScript/Data_structures#数値変換)、それらの型を調べます。両方のオペランドが長整数型になった場合は長整数型の剰余を実行し、そうでない場合は数値型の剰余を実行します。一方のオペランドが長整数型になり、他方が数値型になった場合は {{jsxref("TypeError")}} が発生します。

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

- [加算 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [べき乗 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html) by Dr. Axel Rauschmayer (2019)
