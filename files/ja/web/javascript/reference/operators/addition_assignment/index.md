---
title: 加算代入演算子 (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

**加算代入 (`+=`)** 演算子は、 2 つのオペランドの[加算](/ja/docs/Web/JavaScript/Reference/Operators/Addition)（数値の加算または文字列の結合のどちらか）を実行し、左オペランドへ結果を代入します。

{{InteractiveExample("JavaScript デモ: 式 - 加算代入演算子")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // 加算
// 予想される出力: 5

console.log((b += " world")); // 結合
// 予想される出力: "hello world"
```

## 構文

```js-nolint
x += y
```

## 解説

`x += y` は `x = x + y` と同等ですが、式 `x` は一度しか評価されません。

## 例

### 数値を使用した加算代入

```js
let bar = 5;
bar += 2; // 7
```

それ以外の文字列でも長整数でもない値は、数値に変換されます。

```js
let baz = true;
baz += 1; // 2
baz += false; // 2
```

### 長整数を使用した加算代入

```js
let x = 1n;
x += 2n; // 3n

x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

### 文字列を使用した加算代入

```js
let foo = "foo";
foo += false; // "foofalse"
foo += "bar"; // "foofalsebar"

let bar = 5;
bar += "foo"; // "5foo"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
