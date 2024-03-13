---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
---

{{jsSidebar("Errors")}}

## メッセージ

```
SyntaxError:
"0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the \"0o\" prefix instead
```

## エラータイプ

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ {{jsxref("SyntaxError")}}。

## 何がうまくいかなかったのか？

8 進文字と 8 進エスケープシーケンスは非推奨で、strict モードでは {{jsxref("SyntaxError")}} をスローします。ECMAScript 2015 以降では、標準文法として 0 から始まり大文字、または小文字のラテン文字 "O" (`0o` or `0O)` が続く文法を使用します。

## 例

### "0" 接頭辞付きの 8 進文字

```js example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### 8 進エスケープシーケンス

```js example-bad
"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### 有効な 8 進数

0 に "o" か "O" が続くものを使用します:

```js example-good
0o3;
```

8 進エスケープシーケンスの代わりに、16 進エスケープシーケンスを使用できます:

```js example-good
"\xA9";
```

## 関連項目

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
- [Warning: 08/09 is not a legal ECMA-262 octal constant](/ja/docs/Web/JavaScript/Reference/Errors/Bad_octal)
