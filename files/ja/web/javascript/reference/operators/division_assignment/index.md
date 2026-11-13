---
title: 除算代入演算子 (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**除算代入演算子 (`/=`)** は、2 つのオペランドで[除算](/ja/docs/Web/JavaScript/Reference/Operators/Division)を行い、結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 除算代入演算子 (/=)")}}

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// 予想される結果: 1.5

a /= 0;
console.log(a);
// 予想される結果: Infinity

a /= "hello";
console.log(a);
// 予想される結果: NaN
```

## 構文

```js-nolint
x /= y
```

## 解説

`x /= y` は `x = x / y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### 除算代入の使用

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

その他の長整数以外の値は数値に変換されます。

```js
let bar = 5;
bar /= "2"; // 2.5
bar /= "foo"; // NaN
```

### 長整数を使用した除算代入

```js
let foo = 3n;
foo /= 2n; // 1n
foo /= 2n; // 0n

foo /= 0n; // RangeError: BigInt division by zero
foo /= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
