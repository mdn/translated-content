---
title: "SyntaxError: string literal contains an unescaped line break"
slug: Web/JavaScript/Reference/Errors/String_literal_EOL
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript のエラー "string literal contains an unescaped line break" は、どこかに終了していない[文字列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)があった場合に発生します。文字列リテラルは単一引用符 (`'`) または二重引用符 (`"`) で囲む必要があります。

## エラーメッセージ

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: '' string literal contains an unescaped line break (Firefox)
SyntaxError: Unexpected EOF (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

どこかに終了していない[文字列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)があります。文字列リテラルは単一引用符 (`'`) または二重引用符 (`"`) で囲む必要があります。JavaScript は、単一引用符の文字列と二重引用符の文字列を区別しません。[エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)は単一引用符と二重引用符、どちらの文字列でも動作します。このエラーを修正するためには、次の点をチェックしてください。

- 文字列リテラルのために、単一引用符または二重引用符の開始と終了を行っている。
- 文字列リテラルを正しくエスケープしている。
- 文字列リテラルが複数行に分けられていない。

## 例

### 複数行

JavaScript では、次のように複数行にまたがる文字列を分割できません。

```js-nolint example-bad
const longString = "This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

代わりに、[+ 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition) かバックスラッシュ、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals) を使用します。`+` 演算子の場合、次のようになります。

```js example-good
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

または、文字列が次のように続くことを示すために、各行の終わりにバックスラッシュ文字（"\\"）を使用することもできます。バックスラッシュの後に、 (改行を除いて) スペースや文字、インデントを入れないようにしてください。そうしないと動作しません。バックスラッシュの場合、次のようになります。

```js example-good
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

ECMAScript 2015 環境でサポートされている[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)を使っても改行可能です。

```js example-good
const longString = `This is a very long string which needs 
to wrap across multiple lines because 
otherwise my code is unreadable.`;
```

## 関連情報

- [文字列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)
- [テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)
