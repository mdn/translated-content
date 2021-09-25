---
title: 除算代入 (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.division_assignment
translation_of: Web/JavaScript/Reference/Operators/Division_assignment
---
{{jsSidebar("Operators")}}

除算代入演算子 (`/=`) は変数を右オペランドの値で除算し、結果をその変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

<h2 id="Syntax" name="Syntax">構文</h2>

```js
x /= y // x = x / y
```

<h2 id="Examples" name="Examples">例</h2>

### 除算代入の使用

```js
// 以下の変数があり、すべての演算がこの順に実行されると想定する
//  bar = 5

bar /= 2     // 2.5
bar /= 2     // 1.25
bar /= 0     // Infinity
bar /= 'foo' // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [除算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Division)
