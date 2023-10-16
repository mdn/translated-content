---
title: 加算代入 (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

**加算代入 (`+=`)** 演算子は、 2 つのオペランドの[加算](/ja/docs/Web/JavaScript/Reference/Operators/Addition)（数値の加算または文字列の結合のどちらか）を実行し、左オペランドへ結果を代入します。

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## 構文

```js-nolint
x += y
```

## 解説

`x += y` は `x = x + y` と同等ですが、式 `x` は一度しか評価されません。

## 例

### 加算代入の使用

```js
let baz = true;

// 論理値 + 数値 -> 加算
baz += 1; // 2

// 論理値 + 論理値 -> 加算
baz += false; // 2
```

```js
let foo = "foo";

// 文字列 + 論理値 -> 連結
foo += false; // "foofalse"

// 文字列 + 文字列 -> 連結
foo += "bar"; // "foofalsebar"
```

```js
let bar = 5;

// 数値 + 数値 -> 加算
bar += 2; // 7

// 数値 + 文字列 -> 連結
bar += "foo"; // "7foo"
```

```js
let x = 1n;

// 長整数 + 長整数 -> 加算
x += 2n; // 3n

// 長整数 + 数値 -> TypeError が発生
x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
