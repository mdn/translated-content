---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing variable name" は、開発者がよく経験するエラーです。入力間違いや変数名を忘れた場合によく発生します。

## エラーメッセージ

```plain
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token '='. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

変数の名前がありません。原因は、タイプミスや変数名の忘れがほとんどです。変数名が `=` 記号の前に記載されていることを確認してください。

複数の変数を同時に宣言する場合は、前の行/宣言がセミコロンではなくカンマで終わっていないことを確認してください。

## 例

### 変数名を忘れている

```js-nolint example-bad
const = "foo";
```

変数に名前を代入するのを忘れてしまいがちです。

```js example-good
const description = "foo";
```

### 予約語は変数名にできない

いくつか[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)である変数名があります。使用できません。ごめんね:(

```js-nolint example-bad
const debugger = "whoop";
// SyntaxError: missing variable name
```

### 複数の変数宣言

複数の変数を宣言するときは、カンマに特別な注意を払ってください。余分なカンマがありませんか?誤ってセミコロンの代わりにカンマを加えていませんか?

```js-nolint example-bad
let x, y = "foo",
const z, = "foo"

const first = document.getElementById("one"),
const second = document.getElementById("two"),

// SyntaxError: missing variable name
```

修正版は次の通りです。

```js example-good
let x,
  y = "foo";
const z = "foo";

const first = document.getElementById("one");
const second = document.getElementById("two");
```

### 配列

JavaScript の {{jsxref("Array")}} リテラルは、値を角括弧で囲む必要があります。これは動作しません。

```js-nolint example-bad
const arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

正しくは次の通りです。

```js example-good
const arr = [1, 2, 3, 4, 5];
```

## 関連情報

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
- {{jsxref("Statements/var", "var")}}
- [文法と型](/ja/docs/Web/JavaScript/Guide/Grammar_and_types)ガイド
