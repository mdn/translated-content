---
title: ビット論理和代入演算子 (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

ビット論理和代入演算子 (`|=`) は、両方のオペランドの二進表現を使用し、それらに対してビット単位の OR 演算を実行して、結果を変数に代入します。

{{InteractiveExample("JavaScript デモ: ビット論理和代入演算子 (|=)")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
// 予想される結果: 7
```

## 構文

```js-nolint
x |= y
```

## 解説

`x |= y` は `x = x | y` と同等である（ただし、式 `x` は一度だけ評価されます）。

## 例

### ビット論理和代入の使用

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [ビット論理和演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [論理 OR 代入 (`||=`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
