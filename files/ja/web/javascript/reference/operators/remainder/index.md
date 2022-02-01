---
title: 剰余 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.remainder
translation_of: Web/JavaScript/Reference/Operators/Remainder
---
{{jsSidebar("Operators")}}

剰余演算子 (`%`) は、1 つ目のオペランドが 2 つ目のオペランドで除算されたときに残った剰余を返します。これは常に被除数の符号を取ります。

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

なお、多くの言語では ‘%’ はリマインダー演算子ですが、言語によっては (例えば [Python や Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages) では) モジュロ演算子になります。正の数同士の場合は、この 2 つの値は等価ですが、被除数と除数が異なる符号の場合は結果が異なります。 JavaScript でモジュロを得るには、 `a % n` の代わりに `((a % n ) + n ) % n` を使用してください。

## 構文

```js
x % y
```

## 例

### 正の値の剰余

```js
 12 % 5  //  2
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
```

### 負の値の剰余

```js
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0
```

### NaN の剰余

```js
NaN % 2 // NaN
```

### 無限大の剰余

```js
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
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
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html)
- [Mod and Remainder are not the Same](https://rob.conery.io/2018/08/21/mod-and-remainder-are-not-the-same/)
