---
title: ビット排他的論理和代入 (^=)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
---
{{jsSidebar("Operators")}}

ビット排他的論理和代入演算子 (`^=`) は、両方のオペランドの二進表現を使用し、それらに対してビット単位の XOR 演算を実行し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor-assignment.html")}}

## 構文

```js
x ^= y // x = x ^ y
```

## 例

### ビット排他的論理和代入の使用

```js
let a = 5;      // 00000000000000000000000000000101
a ^= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// 6

let b = 5;      // 00000000000000000000000000000101
b ^= 0;         // 00000000000000000000000000000000

console.log(b); // 00000000000000000000000000000101
// 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [ビット排他的論理和演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)
