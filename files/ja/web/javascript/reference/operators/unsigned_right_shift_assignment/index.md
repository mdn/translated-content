---
title: 符号なし右シフト代入 (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
---

{{jsSidebar("Operators")}}

**符号なし右シフト代入演算子** (`>>>=`) は、指定された数だけビットを右に移動し、結果を変数に代入します。

{{InteractiveExample("JavaScript Demo: Expressions - Unsigned right shift assignment operator")}}

```js interactive-example
let a = 5; //  00000000000000000000000000000101

a >>>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
console.log(b);
// Expected output: 1073741822
```

## 構文

```js
x >>>= y; // x = x >>> y
```

## 例

### 符号なし右シフト代入の使用

```js
let a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [符号なし右シフト演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
