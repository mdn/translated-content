---
title: 右シフト代入 (>>=)
slug: Web/JavaScript/Reference/Operators/Right_shift_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.right_shift_assignment
translation_of: Web/JavaScript/Reference/Operators/Right_shift_assignment
---
{{jsSidebar("Operators")}}

右シフト代入演算子 (`>>=`) は、指定された数だけビットを右に移動し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-right-shift-assignment.html")}}

## 構文

```js
x >>= y // x = x >> y
```

## 例

### 右シフト代入の使用

```js
let a = 5; //   (00000000000000000000000000000101)
a >>= 2;   // 1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b >>= 2;  // -2 (-00000000000000000000000000000010)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [右シフト演算子](/ja/docs/Web/JavaScript/Reference/Operators/Right_shift)
