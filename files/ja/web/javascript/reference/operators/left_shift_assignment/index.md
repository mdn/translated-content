---
title: 左シフト代入演算子 (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**左シフト代入演算子 (`<<=`)** は、 2 つのオペランドで[左シフト](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)を実行し、その結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 左シフト代入演算子 (<<=)", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// 予想される結果: 20
```

## 構文

```js-nolint
x <<= y
```

## 解説

`x <<= y` は `x = x << y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### 左シフト代入演算子の使用

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [代入演算子（JavaScript ガイド）](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [左シフト演算子 (`<<`)](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)
