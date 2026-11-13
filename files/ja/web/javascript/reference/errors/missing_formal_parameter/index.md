---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing formal parameter" は、関数宣言時に有効な引数が欠けている場合に発生します。

## エラーメッセージ

```plain
SyntaxError: missing formal parameter (Firefox)
SyntaxError: Unexpected number '3'. Expected a parameter pattern or a ')' in parameter list. (Safari)
SyntaxError: Unexpected string literal "x". Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

"Formal parameter" とは「関数の引数」のことです。関数宣言で、有効な引数を忘れています。関数定義において、引数は[識別子](/ja/docs/Glossary/Identifier)でなければならず、数字や文字列、オブジェクトのような値であってはいけません。関数の宣言と関数の呼び出しは、異なる 2 つのステップです。宣言時には引数として識別子が求められ、関数を呼び出すときだけ、関数が使用する値を提供します。

[JavaScript](/ja/docs/Glossary/JavaScript) では、識別子はアルファベット文字 (または "$" か "\_") だけを含めることができ、数値から始められません。文字列はデータですが、識別子はコードの一部です。そのため、識別子と**文字列**は異なるものです。

## 例

### 関数の正しい引数を提供する

関数を定義するとき、関数の引数は識別子でなければなりません。引数として値を提供しているため、これらの関数宣言はすべて失敗します。

```js-nolint example-bad
function square(3) {
  return number * number;
}
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
}
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
}
// SyntaxError: missing formal parameter
```

関数宣言では、識別子を使用しなければなりません。

```js example-good
function square(number) {
  return number * number;
}

function greet(greeting) {
  return greeting;
}

function log(arg) {
  console.log(arg);
}
```

次に、好きな引数を渡してこれらの関数を呼び出すことができます。

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // { obj: "value" }
```

## 関連情報

- [SyntaxError: redeclaration of formal parameter "x"](/ja/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
