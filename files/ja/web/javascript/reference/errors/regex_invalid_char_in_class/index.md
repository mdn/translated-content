---
title: "SyntaxError: invalid character in class in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_char_in_class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "invalid character in class in regular expression" は、[`v`モードの文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス)内に文字が現れるにもかかわらず、その文字をリテラルとして記述することができることが許可されていない場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Invalid regular expression: /[|]/v: Invalid character in character class (V8-based)
SyntaxError: invalid character in class in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid class set character (Safari)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

通常、文字クラスには、ほぼすべての文字がリテラルとして含まれています。しかし、`v` モードでは文字クラスの構文がより洗練されたものとなり、将来の構文拡張に備えるため、一部の構文文字が文字クラス内でリテラルとして現れることを禁止しています。これには、`(`、`)`、`[`、`]`、`{`、`}`、`/`、`-`、`|` が含まれます。これらのリテラル文字を照合したい場合は、エスケープしてください。例えば、`/[\|]/v` のようにします。

## 例

### 無効な場合

```js example-bad
/[(){}]/v;
```

### 有効な場合

<!-- メモ: {} は二重にエスケープする必要がある。1 つは Yari 用 -->

```js example-good
/[\(\)\\{\\}]/v;
```

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
