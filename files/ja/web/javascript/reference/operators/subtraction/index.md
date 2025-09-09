---
title: 減算 (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
---

{{jsSidebar("Operators")}}

減算演算子 (`-`) は 2 つのオペランドの間で減算し、それらの差を生成します。

{{InteractiveExample("JavaScript デモ: Expressions - Subtraction operator")}}

```js interactive-example
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - "hello");
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
```

## 構文

```js
x - y;
```

## 例

### 数値の減算

```js
5 - 3; // 2
3 - 5; // -2
```

### 非数の減算

```js
"foo" - 3; // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [除算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
