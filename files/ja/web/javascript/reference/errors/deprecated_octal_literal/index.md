---
title: 'SyntaxError: "0"-prefixed octal literals are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_literal
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生する例外 "0-prefixed octal literals are deprecated; use the "0o" prefix instead" は、非推奨の 8 進リテラル（`0` の後に数字が続く形式）が使用されている場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Octal literals are not allowed in strict mode. (V8-based)
SyntaxError: Decimals with leading zeros are not allowed in strict mode. (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead (Firefox)
SyntaxError: Decimal integer literals with a leading zero are forbidden in strict mode (Safari)
```

## エラー型

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ {{jsxref("SyntaxError")}}。

## エラーの原因

8 進文字と 8 進エスケープシーケンスは非推奨で、厳格モードでは {{jsxref("SyntaxError")}} をスローします。ECMAScript 2015 以降では、標準文法として 0 から始まり大文字、または小文字のラテン文字 "O" (`0o` または `0O`) が続く文法を使用します。

先頭のゼロは、リテラルが有効な8進リテラルの構文を満たしていない場合（リテラルに数字の `8` や `9` が含まれている場合や、小数点がある場合など）であっても、常に禁止されています。数値リテラルは、その `0` が単位の桁である場合にのみ、`0` で始まることができます。

## 例

### "0" 接頭辞付きの 8 進文字

```js-nolint example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
```

### 有効な 8 進数

0 に "o" か "O" が続くものを使用します。

```js example-good
0o3;
```

## 関連情報

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#8_進数)
