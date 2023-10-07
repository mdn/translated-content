---
title: 単項マイナス (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
---

{{jsSidebar("Operators")}}

単項マイナス演算子 (`-`) はオペランドの前に置かれ、符号を反転します。

{{EmbedInteractiveExample("pages/js/expressions-unary-negation.html")}}

## 構文

```js
-x;
```

## 例

### 数値の符号を反転

```js
const x = 3;
const y = -x;

// y = -3
// x = 3
```

### 数値以外の符号を反転

単項マイナス演算子は、数値でないものを数値に変換することができます。

```js
const x = "4";
const y = -x;

// y = -4
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
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
