---
title: 代入 (=)
slug: Web/JavaScript/Reference/Operators/Assignment
---

{{jsSidebar("Operators")}}

単純代入演算子 (`=`) は、変数に値を代入するために使用されます。割り当て操作は、割り当てられた値として評価されます。代入演算子を使用して、単一の値を複数の変数に割り当てることができます。

{{InteractiveExample("JavaScript Demo: Expressions - Assignment")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log((x = y + 1)); // 3 + 1
// Expected output: 4

console.log((x = x * y)); // 4 * 3
// Expected output: 12
```

## 構文

```js
x = y;
```

## 例

### 代入と連鎖

```js
// 以下の変数を想定
//  x = 5
//  y = 10
//  z = 25

x = y; // x は 10
x = y = z; // x, y そして z はすべて 25
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
