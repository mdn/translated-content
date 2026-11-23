---
title: 加算代入演算子 (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**加算代入 (`+=`)** 演算子は、 2 つのオペランドの[加算](/ja/docs/Web/JavaScript/Reference/Operators/Addition)（数値の加算または文字列の結合のどちらか）を実行し、左オペランドへ結果を代入します。

{{InteractiveExample("JavaScript デモ: 加算代入演算子 (+=)")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // 加算
// 予想される結果: 5

console.log((b += " world")); // 結合
// 予想される結果: "hello world"
```

## 構文

```js-nolint
x += y
```

### 引数

- `x`
  - : 有効な代入対象です。例えば、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)などが該当します。現在の値は文字列、長整数、数値のいずれかに強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。その値は文字列、長整数、数値のいずれかに強制変換されます。

### 返値

`x` の元の値を使って [`x + y`](/ja/docs/Web/JavaScript/Reference/Operators/Addition) を計算した結果として得られる文字列、長整数、または数値です。

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
