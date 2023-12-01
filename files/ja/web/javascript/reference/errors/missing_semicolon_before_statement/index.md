---
title: "SyntaxError: missing ; before statement"
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing ; before statement" は、どこかでセミコロンが欠けており、 [自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) によって追加できない場合に発生します。 JavaScript がソースコードを正しく解釈するためには、セミコロンを置く必要があります。

## メッセージ

```js
SyntaxError: Expected ';' (Edge)
SyntaxError: missing ; before statement (Firefox)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

どこかでセミコロン (`;`) を忘れています。[JavaScript の文](/ja/docs/Web/JavaScript/Reference/Statements)はセミコロンで終えなければなりません。一部は、[自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) の影響を受けますが、この場合に JavaScript がソースコードを正確に解釈するためには、セミコロンを置く必要があります。

しかし、多くの場合、このエラーは、文字列の不適切なエスケープや `var` の誤った使用など、その他のエラーの結果として発生します。また、どこかで括弧が多すぎるかもしれません。このエラーが発生した場合は、注意深く構文をチェックしてください。

## 例

### エスケープされていない文字列

このエラーは、次のように、適切に文字列をエスケープしておらず、文字列がすでに終了していると JavaScript エンジンが予測したときによく発生します。

```js example-bad
var foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

二重引用符を使用するか、アポストロフィをエスケープするかしてください。

```js-nolint example-good
var foo = "Tom's bar";
var foo = 'Tom\'s bar';
```

### var を使用したプロパティ宣言

オブジェクトや配列のプロパティを `var` を使って宣言することは**できません**。

```js example-bad
var obj = {};
var obj.foo = 'hi'; // SyntaxError missing ; before statement

var array = [];
var array[0] = 'there'; // SyntaxError missing ; before statement
```

`var` キーワードを省略してください。

```js example-good
var obj = {};
obj.foo = "hi";

var array = [];
array[0] = "there";
```

### 誤ったキーワード

他のプログラミング言語から来た人は、 JavaScript では同じ意味を持たない、あるいはまったく意味を持たないキーワードを使ってしまうこともよくあります。

```js example-bad
def print(info){
  console.log(info);
}; // SyntaxError missing ; before statement
```

`function` を `def` の代わりに使用してください。

```js example-good
function print(info) {
  console.log(info);
}
```

## 関連情報

- [自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
- [JavaScript 文](/ja/docs/Web/JavaScript/Reference/Statements)
