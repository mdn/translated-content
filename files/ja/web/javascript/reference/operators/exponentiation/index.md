---
title: べき乗 (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.exponentiation
translation_of: Web/JavaScript/Reference/Operators/Exponentiation
---
{{jsSidebar("Operators")}}

べき乗演算子 (`**`) は、1 つ目のオペランドを2 つ目オペランドの累乗にした結果を返します。これは `Math.pow` と同等ですが、オペランドとして BigInt も受け入れます。

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## 構文

```js
x ** y
```

## 解説

べき乗演算子は右結合です。 `a ** b ** c` は `a ** (b ** c)` と等しくなります。

PHP や Python など、べき乗演算子 (`**`) を持つほとんどの言語では、べき乗演算子は単項演算子 (単項 `+` や単項 `-` など) よりも優先順位が高いと定義されていますが、いくつかの例外があります。例えば、Bash では `**` 演算子は単項演算子よりも優先順位が低いと定義されています。

JavaScript では、あいまいなべき乗式を記述することはできません。 つまり、基数の直前に単項演算子 (`+/-/~/!/delete/void/typeof`) を置くことはできません。 これを行うと、SyntaxError が発生します。

```js
-2 ** 2;
// Bashでは 4 他の言語では -4
// JavaScript では演算があいまいなため無効


-(2 ** 2);
// JavaScript では意図が明白なため -4
```

注意: 一部のプログラミング言語ではべき乗計算にキャレット記号 <kbd>^</kbd> を使用していますが、JavaScript では[ビット排他的論理和](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)にこの記号を使用しています。

## 例

### 基本的なべき乗

```js
2 ** 3   // 8
3 ** 2   // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN
```

### 結合性

```js
2 ** 3 ** 2   // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```

### 単項演算子との使用

べき乗式の結果の符号を反転させる例です。

```js
-(2 ** 2) // -4
```

べき乗式の基底を強制的に負の数にする例です。

```js
(-2) ** 2 // 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
