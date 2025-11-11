---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
---

{{JSSidebar("Errors")}}

JavaScript の例外 "identifier starts immediately after numeric literal" は、識別子が数字で始まっているときに発生します。識別子の先頭は英字、アンダースコア (\_)、ドル記号 ($) しか使うことができません。

## エラーメッセージ

```js
SyntaxError: Unexpected identifier after numeric literal (Edge)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

変数の名前、いわゆる[識別子](/ja/docs/Glossary/Identifier)は特定のルールに従う必要があり、それに反しています。

JavaScript の識別子は文字かアンダースコア (\_)、ドル記号 ($) で始まる必要があります。数値からは始められません。 2 文字目以降でのみ、数値 (0-9) を使用することができます。

## 例

### 数字から始まる変数名

JavaScript は変数名を数字から始めることはできません。次の例は失敗します。

```js example-bad
var 1life = 'foo';
// SyntaxError: identifier starts immediately after numeric literal

var foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.foo);
// SyntaxError: identifier starts immediately after numeric literal
```

数値始まりにならないように、変数名を変更する必要があります。

```js example-good
var life1 = "foo";
var foo = life1;
```

## 関連項目

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)の[変数](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#variables)
