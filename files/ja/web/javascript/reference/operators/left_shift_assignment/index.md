---
title: 左シフト代入 (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
---

{{jsSidebar("Operators")}}

左シフト代入演算子 (`<<=`) は、指定された数だけビットを左に移動し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html")}}

## 構文

```js
x <<= y; // x = x << y
```

## 例

### 左シフト代入の使用

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#代入演算子)
- [左シフト演算子](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)
