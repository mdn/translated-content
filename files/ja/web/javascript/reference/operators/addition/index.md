---
title: 加算 (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

**加算 (`+`)** 演算子は、数値オペランドの合計または文字列の連結を生成します。

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## 構文

```js-nolint
x + y
```

## 解説

演算子 `+` は数値の加算と文字列の連結という 2 つの異なる操作のためにオーバーロードされています。評価するとき、まず[両方のオペランドをプリミティブに変換します](/ja/docs/Web/JavaScript/Data_structures#プリミティブ変換)。その後、 2 つのオペランドの型がテストされます。

- 一方が文字列の場合、もう一方のオペランドも[文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)され、連結されます。
- もし両方が[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)であれば、長整数同士の加算が行われます。一方が長整数で、もう一方が長整数でない場合、{{jsxref("TypeError")}} 例外が発生します。
- そうでない場合は、両辺が[数値へ変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)され、数値同士の加算が行われます。

文字列の連結は[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)や [`String.prototype.concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/concat) と等価だと思われがちですが、そうではありません。加算は [`valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) を優先的に呼び出して、式をプリミティブに変換します。一方、テンプレートリテラルと `concat()` は [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)を優先的に呼び出し、式を文字列に変換します。式が [`@@toPrimitive`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドを持っている場合、文字列連結は `"default"` をヒントとしてそれを呼び出しますが、テンプレートリテラルは `"string"` を使用します。これは、文字列表現とプリミティブ表現が異なるオブジェクト、例えば、 [Temporal](https://github.com/tc39/proposal-temporal) のように `valueOf()` メソッドが例外を発生するようなオブジェクトにとって重要です。

```js
const t = Temporal.Now.instant();
"" + t; // TypeError が発生
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

`"" + x` を使用して[文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)を行わないことをお勧めします。

## 例

### 数値の加算

```js
// 数値 + 数値 -> 加算
1 + 2; // 3

// 論理値 + 数値 -> 加算
true + 1; // 2

// 論理値 + 論理値 -> 加算
false + false; // 0
```

### 長整数の加算

```js
// 長整数 + 長整数 -> 加算
1n + 2n; // 3n

// 長整数 + 数値 -> TypeError が発生
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// 長整数を長整数以外に加算する場合は、どちらかのオペランドを変換する
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### 文字列の連結

```js
// 文字列 + 文字列 -> 連結
"foo" + "bar"; // "foobar"

// 数値 + 文字列 -> 連結
5 + "foo"; // "5foo"

// 文字列 + 論理値 -> 連結
"foo" + false; // "foofalse"

// 文字列 + 数値 -> 連結
"2" + 2; // "22"
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
