---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
---

{{JSRef}}

**`String.raw()`** 静的メソッドは、[文字列リテラル](/ja/docs/Web/JavaScript/Reference/template_strings)のためのタグ関数です。この関数は Python の文字列リテラルの `r` 接頭辞や C# の文字列リテラルの `@` 接頭辞に似ています (それでも違いがあります。[この問題に関するスレッド](https://bugs.chromium.org/p/v8/issues/detail?id=5016)の説明を参照してください)。この関数は、テンプレート文字列の生の文字列形式を取得するために使用されます。つまり、置換 (例えば `${foo}`) は行われますが、エスケープ (例えば `\n`) は実行されません。

{{EmbedInteractiveExample("pages/js/string-raw.html")}}

## 構文

```
String.raw(callSite, ...substitutions)

String.raw`templateString`
```

### 引数

- `callSite`
  - : `{ raw: 'string' }` のような、よく形成されたテンプレート呼び出しサイトオブジェクトです。
- `...substitutions`
  - : 置換される値が含まれます。
- `templateString`
  - : {{jsxref("template_strings", "テンプレート文字列", "", 1)}}です。必要に応じて置換します (`${...}`)。

### 返値

与えられたテンプレート文字列の生の文字列形式です。

### 例外

- {{jsxref("TypeError")}}
  - : 第 1 引数が正常に形成されていないオブジェクトの場合、{{jsxref("TypeError")}} が発生します。

## 説明

ほとんどの場合、`String.raw()` はテンプレート文字列とともに使用されます。上記の最初の構文は、JavaScript エンジンが (他の[タグ関数](/ja/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings)のように) 適切な引数で呼び出すので、実際に使用されます。

`String.raw()` はテンプレート文字列の唯一の組込みタグ関数です。既定のテンプレート関数のように動作し、連結を行います。通常の JavaScript コードで再実装することができます。

## 例

### String.raw() の使用

```js
String.raw`Hi\n${2+3}!`;
// 'Hi\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// Notice the first argument is an object with a 'raw' property,
// whose value is an iterable representing the separated strings
// in the template literal.
// The rest of the arguments are the substitutions.

// The first argument’s 'raw' value can be any iterable, even a string!
// For example, 'test' is treated as ['t', 'e', 's', 't'].
// The following is equivalent to
// `t${0}e${1}s${2}t`:
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
```

## 仕様書

| 仕様書                                                                       |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.raw', 'String.raw')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.raw")}}

## 関連情報

- [テンプレート文字列](/ja/docs/Web/JavaScript/Reference/template_strings)
- {{jsxref("String")}}
- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
