---
title: ビット排他的論理和代入演算子 (^=)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**ビット排他的論理和代入演算子 (`^=`)** は、 2 つのオペランドに対して[ビット単位のXOR](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR) を実行し、その結果を左側のオペランドに代入します。

{{InteractiveExample("JavaScript デモ: ビット排他的論理和代入演算子 (^=)")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// 予想される結果: 6
```

## 構文

```js-nolint
x ^= y
```

## 解説

`x ^= y` は `x = x ^ y` と同等ですが、式 `x` は一度だけ評価されます。

## 例

### ビット排他的論理和代入の使用

```js
let a = 5; // (00000000000000000000000000000101)
a ^= 3; // (00000000000000000000000000000011)

console.log(a); // 6 (00000000000000000000000000000110)

let b = 5; // (00000000000000000000000000000101)
b ^= 0; // (00000000000000000000000000000000)

console.log(b); // 5 (00000000000000000000000000000101)

let c = 5n;
c ^= 3n;
console.log(c); // 6n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [ビット排他的論理和演算子 (`^`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)
