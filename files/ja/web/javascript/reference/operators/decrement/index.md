---
title: デクリメント (--)
slug: Web/JavaScript/Reference/Operators/Decrement
---

{{jsSidebar("Operators")}}

デクリメント演算子 (`--`) は、オペランドをデクリメント (1 を減算) して値を返します。

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## 構文

```js
x--;
--x;
```

## 解説

オペランドに後置で演算子を付けると (例えば `x--`)、デクリメント演算子はデクリメントしますが、デクリメント前の値を返します。

オペランドに前置で演算子を付けると (例えば `--x`)、デクリメント演算子はデクリメントし、デクリメント後の値を返します。

## 例

### 後置デクリメント

```js
let x = 3;
y = x--;

// y = 3
// x = 2
```

### 前置デクリメント

```js
let a = 2;
b = --a;

// a = 1
// b = 1
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
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
