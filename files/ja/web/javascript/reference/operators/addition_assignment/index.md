---
title: 加算代入 (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
---

{{jsSidebar("Operators")}}

加算代入演算子 (`+=`) は、右オペランドの値を変数に加算し、結果を変数に代入します。2 つのオペランドの型が加算代入演算子の動作を決定します。加算もしくは連結が可能です。

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## 構文

```js
x += y; // x = x + y
```

## 例

### 加算代入の使用

```js
// 以下の変数を想定
//  foo = 'foo'
//  bar = 5
//  baz = true

// 数値 + 数値 -> 加算
bar += 2; // 7

// 論理値 + 数値 -> 加算
baz += 1; // 2

// 論理値 + 論理値 -> 加算
baz += false; // 1

// 数値 + 文字列 -> 連結
bar += "foo"; // "5foo"

// 文字列 + 論理値 -> 連結
foo += false; // "foofalse"

// 文字列 + 文字列 -> 連結
foo += "bar"; // "foobar"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#代入演算子)
- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
