---
title: 乗算 (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.multiplication
translation_of: Web/JavaScript/Reference/Operators/Multiplication
---
{{jsSidebar("Operators")}}

乗算演算子 (`*`) はオペランドの積を生成します。

{{EmbedInteractiveExample("pages/js/expressions-multiplication.html")}}

## 構文

```js
x * y
```

## 例

### 数値を用いた乗算

```js
 2 * 2      // 4
-2 * 2     // -4
```

### 無限大との乗算

```js
Infinity * 0         // NaN
Infinity * Infinity  // Infinity
```

### 非数との乗算

```js
'foo' * 2 // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
