---
title: 'Warning: 08/09 is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Bad_octal
---

{{jsSidebar("Errors")}}

JavaScript の警告 "08 (or 09) is not a legal ECMA-262 octal constant" は、数値リテラルの
`08` または `09` が使用されたときに発生します。これらは 8 進数として解釈することができません。

## エラーメッセージ

```js
Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
```

## エラーの種類

警告です。 JavaScript の実行は停止しません。

## エラーの原因

10 進数リテラルは、ゼロ (`0`) から始まり、その他の 10 進数の数字を続けることができますが、先頭の `0` の後の数字がすべて 8 より小さい場合、その数値は 8 進数として解釈されます。そのため、 `08` や `09` はあり得ないため、 JavaScript はこれを警告します。

8 進数リテラルと 8 進エスケープシーケンスは非推奨であり、追加の非推奨警告が発生することに注意してください。 ECMAScript 6 以降では、ゼロで始まり小文字または大文字のラテン文字 "O" (`0o` または `0O`) が続く構文が使用されます。詳細は、[字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#octal)のページを見てください。

## 例

### 無効な 8 進数

```js example-bad
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### 有効な 8 進数

先頭のゼロに続き "o" の文字を使用します。

```js example-good
0O755;
0o644;
```

## 関連情報

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#octal)
- [SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated](/ja/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)
