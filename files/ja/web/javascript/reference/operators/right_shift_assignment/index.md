---
title: 右シフト代入演算子 (>>=)
slug: Web/JavaScript/Reference/Operators/Right_shift_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**右シフト代入演算子 (`>>=`)** は、 2 つのオペランドで[右シフト](/ja/docs/Web/JavaScript/Reference/Operators/Right_shift)を実行し、その結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 右シフト代入演算子 (>>=)")}}

```js interactive-example
let a = 5; //  00000000000000000000000000000101

a >>= 2; //  00000000000000000000000000000001
console.log(a);
// 予想される結果: 1

let b = -5; //  11111111111111111111111111111011

b >>= 2; //  11111111111111111111111111111110
console.log(b);
// 予想される結果: -2
```

## 構文

```js-nolint
x >>= y
```

## 解説

`x >>= y` は `x = x >> y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### 右シフト代入の使用

```js
let a = 5; //   (00000000000000000000000000000101)
a >>= 2; //   1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b >>= 2; //  -2 (-00000000000000000000000000000010)

let c = 5n;
c >>= 2n; // 1n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [代入演算子（JavaScript ガイド）](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [右シフト演算子](/ja/docs/Web/JavaScript/Reference/Operators/Right_shift)
