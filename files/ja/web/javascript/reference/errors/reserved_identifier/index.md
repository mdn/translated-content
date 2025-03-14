---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
---

{{jsSidebar("Errors")}}

## メッセージ

```
SyntaxError: "x" is a reserved identifier (Firefox)
SyntaxError: Unexpected reserved word (Chrome)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)を識別子として使用した場合、エラーをスローします。これらは strict モードと通常モードの双方で予約されています:

- `enum`

次のものは strict モードのコードでのみ予約されています:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## 例

### Strict モードと 非 Strict モードで予約されているキーワード

`enum` 識別子は全般的に予約されています。

```js example-bad
var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

strict モードのコードでは、より多くの識別子が予約されています。

```js example-bad
"use strict";
var package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

これらの変数名を変更する必要があります。

```js example-good
var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
var list = ["potatoes", "rice", "fries"];
```

### 古いブラウザーを更新する

たとえば、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) や [`class`](/ja/docs/Web/JavaScript/Reference/Statements/class) をまだ実装していない古いブラウザーを使用している場合、それらの新しい言語機能をサポートしているより新しいブラウザーにアップデートすべきです。

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (たとえば、Firefox 44 以前の古いブラウザーはエラーをスローします)
```

## 関連項目

- [Good variable names](https://wiki.c2.com/?GoodVariableNames)
