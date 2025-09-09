---
title: べき乗代入演算子 (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

<strong>べき乗代入演算子 (`**=`)</strong> は、[べき乗](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)を 2 つのオペランドで実行し、結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: べき乗代入演算子 (**=)")}}

```js interactive-example
let a = 3;

console.log((a **= 2));
// 予想される結果: 9

console.log((a **= 0));
// 予想される結果: 1

console.log((a **= "hello"));
// 予想される結果: NaN
```

## 構文

```js-nolint
x **= y
```

## 解説

`x **= y` は `x = x ** y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### べき乗代入の仕様

```js
let bar = 5;
bar **= 2; // 25
```

その他の長整数でない値は、数値に変換されます。

```js
let baz = 5;
baz **= "foo"; // NaN
```

### 長整数を使用したべき乗代入

```js
let foo = 3n;
foo **= 2n; // 9n
foo **= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
