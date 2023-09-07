---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
---

{{jsSidebar("Errors")}}

```js
SyntaxError: missing formal parameter (Firefox)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

"Formal parameter" とは「関数の引数」のことです。関数宣言で、有効な引数を忘れています。関数定義において、引数は[識別子](/ja/docs/Glossary/Identifier)でなければならず、数字や文字列、オブジェクトのような値であってはいけません。関数の宣言と関数の呼び出しは、異なる 2 つのステップです。宣言時には引数として識別子が求められ、関数を呼び出すときだけ、関数が使用する値を提供します。

[JavaScript](/ja/docs/Glossary/JavaScript) では、識別子はアルファベット文字 (または "$" か "\_") だけを含めることができ、数値から始められません。文字列はデータですが、識別子はコードの一部です。そのため、識別子と**文字列**は異なるものです。

## 例

### 関数の正しい引数を提供する

関数を定義するとき、関数の引数は識別子でなければなりません。引数として値を提供しているため、これらの関数宣言はすべて失敗します。

```js example-bad
function square(3) {
  return number * number;
};
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
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

log({ obj: "value" }); // Object { obj: "value" }
```

## 関連項目

- 形式的な引数に関係するその他のエラー:

  - [SyntaxError: Malformed formal parameter](/ja/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  - [SyntaxError: redeclaration of formal parameter "x"](/ja/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
