---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "_variable_ is a reserved identifier" は、[予約キーワード](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)が識別子として使用されている場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Unexpected reserved word (V8-based)
SyntaxError: implements is a reserved identifier (Firefox)
SyntaxError: Cannot use the reserved word 'implements' as a variable name. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)を識別子として使用した場合、エラーをスローします。これらは厳格モードと通常モードの双方で予約されています:

- `enum`

次のものは厳格モードのコードでのみ予約されています。

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## 例

### 厳格モードと 非厳格モードで予約されているキーワード

`enum` 識別子は全般的に予約されています。

```js-nolint example-bad
const enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

厳格モードのコードでは、より多くの識別子が予約されています。

```js-nolint example-bad
"use strict";
const package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

これらの変数名を変更する必要があります。

```js example-good
const colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
const list = ["potatoes", "rice", "fries"];
```

### 古いブラウザーを更新する

たとえば、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) や [`class`](/ja/docs/Web/JavaScript/Reference/Statements/class) をまだ実装していない古いブラウザーを使用している場合、それらの新しい言語機能に対応しているより新しいブラウザーにアップデートすべきです。

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (Firefox 44 以前など、古いブラウザーではエラーが発生します)
```

## 関連情報

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
