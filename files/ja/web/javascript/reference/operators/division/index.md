---
title: 除算 (/)
slug: Web/JavaScript/Reference/Operators/Division
---

{{jsSidebar("Operators")}}

除算演算子 (`/`) は、左のオペランドを被除数とし、右のオペランドを除数としたオペランド同士の除算結果を生成します。

{{EmbedInteractiveExample("pages/js/expressions-division.html")}}

## 構文

```js
x / y;
```

## 例

### 基本的な除算

```js
1 / 2; // 0.5

Math.floor(3 / 2); // 1

1.0 / 2.0; // 0.5
```

### ゼロ除算

```js
2.0 / 0; // Infinity

2.0 / 0.0; // Infinity。 0.0 === 0 であるため

2.0 / -0.0; // -Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [乗算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
