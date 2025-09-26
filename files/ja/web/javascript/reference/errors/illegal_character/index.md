---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
---

{{jsSidebar("Errors")}}

JavaScript の例外 "illegal character" は、コード内のこの位置に属していない、無効または予期しないトークンがあった場合に発生します。

## メッセージ

```js
SyntaxError: Invalid character (Edge)
SyntaxError: illegal character (Firefox)
SyntaxError: Invalid or unexpected token (Chrome)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

コードのこの位置に属していない、無効なトークンまたは予期しないトークンがあります。構文強調機能のあるエディターを使用して、マイナス記号 (`-`) とダッシュ (`–`) や、単純な引用符 (`"`) と標準外の引用符 (`“`) のようなミスがないか、コードを注意深くチェックしてください。

## 例

### 合わない文字

似たような文字でも、パーサーがコードの解釈に失敗するものがあります。有名な例としては、引用符、マイナス、セミコロンなどがあります ([ギリシャ文字の疑問符 (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) も同様です)。

```js example-bad
“This looks like a string”;  // SyntaxError: illegal character
                             // “ と ” は " ではありませんが、見た目が似ています

42 – 13;                     // SyntaxError: illegal character
                             // – は - ではありませんが、見た目が似ています

var foo = 'bar';             // SyntaxError: illegal character
                             // <37e> は ; ではありませんが、見た目が似ています
```

次のものは動作します。

```js example-good
"This is actually a string";
42 - 13;
var foo = "bar";
```

エディターや IDE の中には、その旨を通知してくれたり、少なくとも若干異なる強調表示をしてくれるものもありますが、すべてではありません。自分のコードにこのようなことが起こり、問題の原因がわからない場合は、問題のある行を削除して再入力するのが最善の方法です。

### 文字の入れ忘れ

あちこちで文字を入れ忘れることがあります。

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

`'#333'` に付け忘れている引用符を追加してください。

```js example-good
var colors = ["#000", "#333", "#666"];
```

### 隠れた文字

外部のソースをコピー＆ペーストすると、不正な文字が含まれていることがあります。気を付けて!

```js example-bad
var foo = "bar";
// SyntaxError: illegal character
```

Vim のようなエディターでこのコードを調査すると、実際には [zero-width space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) 文字があることが分かります。

```js
var foo = 'bar';<200b>
```

## 関連項目

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
