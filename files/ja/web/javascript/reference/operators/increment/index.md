---
title: インクリメント (++)
slug: Web/JavaScript/Reference/Operators/Increment
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.increment
translation_of: Web/JavaScript/Reference/Operators/Increment
---
{{jsSidebar("Operators")}}

インクリメント演算子 (`++`) は、オペランドをインクリメント (1 を加算) して値を返します。

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## 構文

```js
x++
++x
```

## 解説

オペランドに後置で演算子を付けると (例えば、 `x++`) 、インクリメント演算子はインクリメントしますが、インクリメント前の値を返します。

オペランドに前置で演算子を付けると (例えば、 `++x`) 、インクリメント演算子はインクリメントし、インクリメント後の値を返します。

## 例

### 後置インクリメント

```js
let x = 3;
y = x++;

// y = 3
// x = 4
```

### 前置インクリメント

```js
let a = 2;
b = ++a;

// a = 3
// b = 3
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
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
