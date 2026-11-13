---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "identifier starts immediately after numeric literal" は、識別子が数字で始まっているときに発生します。識別子の先頭は英字、アンダースコア (\_)、ドル記号 ($) しか使うことができません。

## エラーメッセージ

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: No identifiers allowed directly after numeric literal (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

変数の名前、いわゆる[識別子](/ja/docs/Glossary/Identifier)は特定のルールに従う必要があり、それに反しています。

JavaScript の識別子は文字かアンダースコア (\_)、ドル記号 ($) で始まる必要があります。数値からは始められません。 2 文字目以降でのみ、数値 (0-9) を使用することができます。

## 例

### 数字から始まる変数名

JavaScript は変数名を数字から始めることはできません。次の例は失敗します。

```js-nolint example-bad
const 1life = "foo";
// SyntaxError: identifier starts immediately after numeric literal

const foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal
```

先頭の数値を避けることができますので、変数の名前を変更する必要があります。

```js example-good
const life1 = "foo";
const foo = life1;
```

JavaScript で、数値に対してプロパティやメソッドを呼び出す際に、構文上の特異な点があります。整数に対してメソッドを呼び出そうとする場合、数値の後にドットを置くと、ドットが小数点の始まりと解釈され、パーサーがメソッド名を数値リテラルの直後に続く識別子として認識してしまうため、そのままドットを使用することはできません。これを避けるには、数値を括弧で囲むか、2 つのドットを使用する必要があります。この場合、最初のドットは数値リテラルの小数点を表し、2 つ目のドットがプロパティアクセサーとなります。

```js-nolint example-bad
alert(typeof 1.toString())
// SyntaxError: identifier starts immediately after numeric literal
```

数値に対してメソッドを呼び出す正しい方法は次の通りです。

```js-nolint example-good
// Wrap the number in parentheses
alert(typeof (1).toString());

// Add an extra dot for the number literal
alert(typeof 2..toString());

// Use square brackets
alert(typeof 3["toString"]());
```

## 関連情報

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
- [文法と型](/ja/docs/Web/JavaScript/Guide/Grammar_and_types)ガイド
