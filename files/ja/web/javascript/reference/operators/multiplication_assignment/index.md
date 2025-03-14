---
title: 乗算代入 (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
---

{{jsSidebar("Operators")}}

乗算代入演算子 (`*=`) は、変数に右のオペランドの値を乗算し、結果を変数に代入します。

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication assignment operator")}}

```js interactive-example
let a = 2;

console.log((a *= 3));
// Expected output: 6

console.log((a *= "hello"));
// Expected output: NaN
```

## 構文

```js
x *= y; // x = x * y
```

## 例

### 乗算代入の使用

```js
// 次の変数を想定
//  bar = 5

bar *= 2; // 10
bar *= "foo"; // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [乗算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
