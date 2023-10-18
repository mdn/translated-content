---
title: べき乗代入 (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
---

{{jsSidebar("Operators")}}

べき乗代入演算子 (`**=`) は、変数の値を右オペランドでべき乗します。

{{EmbedInteractiveExample("pages/js/expressions-exponentiation-assignment.html")}}

## 構文

```js
x **= y; // x = x ** y
```

## 例

### べき乗代入の仕様

```js
// 次の変数を想定
//  bar = 5

bar **= 2; // 25
bar **= "foo"; // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#代入演算子)
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
