---
title: 符号なし右シフト代入 (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.unsigned_right_shift_assignment
translation_of: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
---
{{jsSidebar("Operators")}}

符号なし右シフト代入演算子 (_`>>>=`_) は、指定された数だけビットを右に移動し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## 構文

```js
x >>>= y // x = x >>> y
```

## 例

### 符号なし右シフト代入の使用

```js
let a = 5; //   (00000000000000000000000000000101)
a >>>= 2;  // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2;   // 1073741822 (00111111111111111111111111111110)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [符号なし右シフト演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
