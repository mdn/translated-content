---
title: ビット論理積代入演算子 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**ビット論理積代入 (`&=`)** 演算子は、 2 つのオペランドで[論理積](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)を取り、その結果を左オペランドへ代入します。

{{InteractiveExample("JavaScript デモ: ビット論理積代入演算子 (&=)", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// 予想される結果: 1
```

## 構文

```js-nolint
x &= y
```

## 解説

`x &= y` は `x = x & y` と同等ですが、 `x` は一度しか評価されません。

## 例

### ビット論理積代入の使用

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [ビット論理積 (`&`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
