---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing variable name" は、開発者がよく経験するエラーです。入力間違いや変数名を忘れた場合によく発生します。

## エラーメッセージ

```js
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

変数の名前がありません。原因は、タイプミスや変数名の忘れがほとんどです。変数名が `=` 記号の前に記載されていることを確認してください。

複数の変数を同時に宣言する場合は、前の行/宣言がセミコロンではなくカンマで終わっていないことを確認してください。

## 例

### 変数名を忘れている

```js example-bad
var = "foo";
```

分かりやすい変数名を考えることは、ほとんどの開発者にとって難しいことです。しかし、時間が経てば簡単になります。

```js example-good
var description = "foo";
```

### 予約語は変数名にできない

いくつか[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)である変数名があります。使用できません。ごめんね:(

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### 複数の変数宣言

複数の変数を宣言するときは、カンマに特別な注意を払ってください。余分なカンマがありませんか?誤ってセミコロンの代わりにカンマを加えていませんか?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
```

修正版は次の通りです。

```js example-good
var x,
  y = "foo";
var x = "foo";

var first = document.getElementById("one");
var second = document.getElementById("two");
```

### 配列

JavaScript の {{jsxref("Array")}} リテラルは、値を角括弧で囲む必要があります。これは動作しません。

```js example-bad
var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

正しくは次の通りです。

```js example-good
var arr = [1, 2, 3, 4, 5];
```

## 関連情報

- [良い変数名](https://wiki.c2.com/?GoodVariableNames)
- {{jsxref("Statements/var", "var")}}
- [JavaScript ガイドの変数の宣言](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
