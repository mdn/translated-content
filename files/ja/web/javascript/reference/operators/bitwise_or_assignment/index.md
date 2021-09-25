---
title: ビット論理和代入 (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.bitwise_or_assignment
translation_of: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
---
{{jsSidebar("Operators")}}

ビット論理和代入演算子 (`|=`) は、両方のオペランドの二進表現を使用し、それらに対してビット単位の OR 演算を実行して、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html")}}

## 構文

```js
x |= y // x = x | y
```

## 例

### ビット論理和代入の使用

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [ビット論理和演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [論理 OR 代入 (`||=`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
