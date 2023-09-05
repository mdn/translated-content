---
title: ビット論理積代入 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
---

{{jsSidebar("Operators")}}

ビット論理積代入演算子 (`&=`) は、両方のオペランドの二進表現を使用し、それらに対してビット単位の AND 演算を実行して、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html")}}

## 構文

```js
x &= y; // x = x & y
```

## 例

### ビット論理積代入の使用

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#代入演算子)
- [ビット論理積演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
