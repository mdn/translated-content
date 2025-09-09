---
title: 加算演算子 (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**加算 (`+`)** 演算子は、数値オペランドの合計または文字列の連結を生成します。

{{InteractiveExample("JavaScript デモ: 加算演算子 (+)")}}

```js interactive-example
console.log(2 + 2);
// 予想される結果: 4

console.log(2 + true);
// 予想される結果: 3

console.log("hello " + "everyone");
// 予想される結果: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// 予想される結果: "2001: A Space Odyssey"
```

## 構文

```js-nolint
x + y
```

## 解説

演算子 `+` は数値の加算と文字列の連結という 2 つの異なる操作のためにオーバーロードされています。評価するとき、まず[両方のオペランドをプリミティブに変換します](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)。その後、 2 つのオペランドの型がテストされます。

- 一方が文字列の場合、もう一方のオペランドも[文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)され、連結されます。
- もし両方が[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)であれば、長整数同士の加算が行われます。一方が長整数で、もう一方が長整数でない場合、{{jsxref("TypeError")}} 例外が発生します。
- そうでない場合は、両辺が[数値へ変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)され、数値同士の加算が行われます。

文字列の連結は[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)や [`String.prototype.concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/concat) と等価だと思われがちですが、そうではありません。加算は [`valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) を優先的に呼び出して、式をプリミティブに変換します。一方、テンプレートリテラルと `concat()` は [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)を優先的に呼び出し、式を文字列に変換します。式が [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドを持っている場合、文字列連結は `"default"` をヒントとしてそれを呼び出しますが、テンプレートリテラルは `"string"` を使用します。これは、文字列表現とプリミティブ表現が異なるオブジェクト、例えば、 {{jsxref("Temporal")}} のように `valueOf()` メソッドがすべて例外を発生するようなオブジェクトにとって重要です。

```js
const t = Temporal.Now.instant();
"" + t; // TypeError が発生
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

`"" + x` を使用して[文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)を行わないことをお勧めします。

## 例

### 数値を使用した加算

```js
1 + 2; // 3
```

それ以外の文字列ではなく、長整数ではない値は数値に変換されます。

```js
true + 1; // 2
false + false; // 0
```

### 長整数を使用した加算

```js
1n + 2n; // 3n
```

長整数と数値のオペランドを混在させることはできません。

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
"1" + 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

長整数と長整数以外で加算を行うには、どちらかのオペランドを変換してください。

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### 文字列を使用した加算

オペランドの一方が文字列の場合、もう一方が文字列に変換され、それらが連結されます。

```js
"foo" + "bar"; // "foobar"
5 + "foo"; // "5foo"
"foo" + false; // "foofalse"
"2" + 2; // "22"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [減算演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
