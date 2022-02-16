---
title: 代入 (=)
slug: Web/JavaScript/Reference/Operators/Assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.assignment
translation_of: Web/JavaScript/Reference/Operators/Assignment
---
{{jsSidebar("Operators")}}

単純代入演算子 (`=`) は、変数に値を代入するために使用されます。割り当て操作は、割り当てられた値として評価されます。代入演算子を使用して、単一の値を複数の変数に割り当てることができます。

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## 構文

```js
x = y
```

## 例

### 代入と連鎖

```ja
// 以下の変数を想定
//  x = 5
//  y = 10
//  z = 25

x = y     // x は 10
x = y = z // x, y そして z はすべて 25
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
