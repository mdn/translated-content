---
title: 剰余代入演算子 (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**剰余代入演算子 (`%=`)** は、2 つのオペランドで[剰余](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)の計算を行い、結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 剰余代入演算子 (%=)")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// 予想される結果: 1

console.log((a %= 0));
// 予想される結果: NaN

console.log((a %= "hello"));
// 予想される結果: NaN
```

## 構文

```js-nolint
x %= y
```

## 解説

`x %= y` は `x = x % y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### 剰余代入の使用

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
