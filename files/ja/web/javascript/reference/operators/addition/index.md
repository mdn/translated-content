---
title: 加算 (+)
slug: Web/JavaScript/Reference/Operators/Addition
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.addition
translation_of: Web/JavaScript/Reference/Operators/Addition
---
{{jsSidebar("Operators")}}

加算演算子 (`+`) は、数値オペランドの合計または文字列の連結を生成します。

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## 構文

```js
x + y
```

## 例

### 数値の加算

```js
// 数値 + 数値 -> 加算
1 + 2 // 3

// 論理値 + 数値 -> 加算
true + 1 // 2

// 論理値 + 論理値 -> 加算
false + false // 0
```

### 文字列の連結

```js
// 文字列 + 文字列 -> 連結
'foo' + 'bar' // "foobar"

// 数値 + 文字列 -> 連結
5 + 'foo' // "5foo"

// 文字列 + 論理値 -> 連結
'foo' + false // "foofalse"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [減算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
