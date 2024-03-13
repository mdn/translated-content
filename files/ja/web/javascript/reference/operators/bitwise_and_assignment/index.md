---
title: ビット論理積代入 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

**ビット論理積代入 (`&=`)** 演算子は、 2 つのオペランドで[論理積](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)を取り、その結果を左オペランドへ代入します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html", "shorter")}}

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
