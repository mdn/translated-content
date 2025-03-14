---
title: 減算代入 (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
---

{{jsSidebar("Operators")}}

減算代入演算子 (`-=`) は、変数から右辺のオペランドの値を減算し、結果を変数に代入します。

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction assignment operator")}}

```js interactive-example
let a = 2;

console.log((a -= 3));
// Expected output: -1

console.log((a -= "Hello"));
// Expected output: NaN
```

## 構文

```js
x -= y; // x = x - y
```

## 例

### 減算代入の使用

```js
// 次の変数を想定
//  bar = 5

bar -= 2; // 3
bar -= "foo"; // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [減算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
