---
title: 剰余代入 (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
---

{{jsSidebar("Operators")}}

剰余代入演算子 (`%=`) は、変数を右辺のオペランドの値で除算し、剰余を変数に代入します。

{{InteractiveExample("JavaScript Demo: Expressions - Remainder assignment operator")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## 構文

```js
x %= y; // x = x % y
```

## 例

### 剰余代入の使用

```js
// 以下の変数を想定
//  bar = 5

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
