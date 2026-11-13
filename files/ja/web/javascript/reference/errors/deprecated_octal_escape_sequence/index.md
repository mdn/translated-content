---
title: "SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code"
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 例外 "octal escape sequences can't be used in untagged template literals or in strict mode code" は、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の文字列リテラルやタグなしテンプレートリテラル内で 8 進エスケープシーケンスが使用された場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Octal escape sequences are not allowed in strict mode. (V8-based)
SyntaxError: \8 and \9 are not allowed in strict mode. (V8-based)
SyntaxError: Octal escape sequences are not allowed in template strings. (V8-based)
SyntaxError: \8 and \9 are not allowed in template strings. (V8-based)
SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code (Firefox)
SyntaxError: the escapes \8 and \9 can't be used in untagged template literals or in strict mode code (Firefox)
SyntaxError: The only valid numeric escape in strict mode is '\0' (Safari)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

`\` に続いて、単一の `0` 以外の任意の数値が続く形式の [文字列エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) は、非推奨となっています。文字をコードポイント値で表したい場合は、代わりに `\x` または `\u` エスケープシーケンスを使用しましょう。例えば、`\1` の代わりに `\x01` や `\u0001` を使用します。

[タグなしのテンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)には、厳格モードであるかどうかにかかわらず、8 進数のエスケープシーケンスを含めることはできません。一方、タグ付きのテンプレートリテラルには、どの形のエスケープシーケンスでも含めることができ、その場合、タグ関数が受け取るテンプレート配列には `undefined` が格納されます。

## 例

### 8 進エスケープシーケンス

```js-nolint example-bad
"use strict";

"\251";

// SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code
```

### 有効な 8 進数の数値

8進数のエスケープシーケンスについては、代わりに16進数のエスケープシーケンスを使用することができます。

```js example-good
"\xA9";
```

エスケープシーケンスを解釈せずにソーステキストをそのまま表したい場合は、{{jsxref("String.raw")}} を使用してください。

```js example-good
String.raw`\251`; // 4 文字から成る文字列
```

## 関連情報

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)
