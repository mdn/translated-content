---
title: べき乗演算子 (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

<strong>べき乗演算子 (`**`)<strong> は、1 つ目のオペランドを 2 つ目のオペランドで累乗した結果を返します。これは {{jsxref("Math.pow()")}} と同等ですが、オペランドとして[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)も受け入れます。

{{InteractiveExample("JavaScript デモ: べき乗演算子 (**)")}}

```js interactive-example
console.log(3 ** 4);
// 予想される結果: 81

console.log(10 ** -2);
// 予想される結果: 0.01

console.log(2 ** (3 ** 2));
// 予想される結果: 512

console.log((2 ** 3) ** 2);
// 予想される結果: 64
```

## 構文

```js-nolint
x ** y
```

## 解説

`**` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。まず[両オペランドを数値型に変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への変換)し、それらの型を検査します。両オペランドが長整数になった場合、長整数のべき乗を実行します。そうでない場合は数値除算を実行します。一方のオペランドが長整数になり、もう一方が数値になった場合は、{{jsxref("TypeError")}} が発生します。

数値と長整数の両方において、 `0` の正の累乗は `0` を返し、 `0` の `0` 乗は `1` を返します。数値の場合、 `0` の負の累乗は `Infinity` を返し、 `-0` の負の累乗は `-Infinity` を返します。

`NaN ** 0`（および同等の `Math.pow(NaN, 0)`）は、数学操作において {{jsxref("NaN")}} が伝播しない唯一のケースです。オペランドが `NaN` であるにもかかわらず、結果は `1` を返します。さらに、 `base` が 1 で `exponent` が非有限数（±Infinity または `NaN`）の場合の挙動は IEEE 754 規格と異なります。規格では結果が 1 であるべきと指定しているのに対し、 JavaScript は後方互換性を維持するため `NaN` を返します。

長整数のべき乗では、指数 `y` が負の場合は {{jsxref("RangeError")}} が発生します。これらは、負の指数は（底が `1`、`-1`、または `0` である場合を除き） 0 から 1 の間の値となる可能性が高く、丸め処理で 0 に変換されるため、開発者のミスである可能性が高いからです。

べき乗演算子は[右結合](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)です。 `a ** b ** c` は `a ** (b ** c)` と等しくなります。

PHP や Python など、べき乗演算子 (`**`) を持つほとんどの言語では、べき乗演算子は単項演算子（単項 `+` や単項 `-` など）よりも優先順位が高いと定義されていますが、いくつかの例外があります。例えば、Bash では `**` 演算子は単項演算子よりも優先順位が低いと定義されています。

JavaScript では、あいまいなべき乗式を記述することはできません。 つまり、基数の直前に単項演算子（[優先順位 14](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)、`+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`）を置くことはできません。 [これを行うと、SyntaxError が発生します](/ja/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation)。

例えば、`-2 ** 2` は Bash では 4 ですが、それ以外の言語（Python など）では -4 です。これは JavaScript では演算子が曖昧であるため、無効な操作です。意図を明確にするには、いずれかの辺を括弧で囲む必要があります。例えば `-(2 ** 2)` のようにします。

なお、一部のプログラミング言語ではべき乗計算にキャレット記号 `^` を使用していますが、JavaScript ではこの記号を[ビット排他的論理和](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)に使用しています。

## 例

### 基本的なべき乗

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
2 ** 1024; // Infinity
NaN ** 2; // NaN
NaN ** 0; // 1
1 ** Infinity; // NaN
```

その他の長整数以外の値は、数値に変換されます。

```js
2 ** "3"; // 8
2 ** "hello"; // NaN
```

### 長整数を使用したべき乗

```js
2n ** 3n; // 8n
2n ** 1024n; // 巨大な数値であるが、 Infinity ではない
```

べき乗計算では、長整数とと数値のオペランドを混在させることはできません。

```js example-bad
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

べき乗を長整数と長整数以外の組み合わせで実行するには、どちらかのオペランドを変換してください。

```js
2n ** BigInt(2); // 4n
Number(2n) ** 2; // 4
```

### 結合性

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### 単項演算子との使用

べき乗式の結果の符号を反転させる例です。

```js
-(2 ** 2); // -4
```

べき乗式の基底を強制的に負の数にする例です。

```js
(-2) ** 2; // 4
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
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
