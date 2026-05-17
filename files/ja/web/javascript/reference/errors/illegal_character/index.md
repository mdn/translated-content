---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "illegal character" は、[解析器](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)が文字列の要素ではない文字を読み込み、その文字が当該言語において有効なトークンを構成できない場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: illegal character U+201C (Firefox)
SyntaxError: Invalid character '\u201c' (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

コードのこの位置に属していない、無効なトークンまたは予期しないトークンがあります。
構文強調機能のあるエディターを使用して、マイナス記号 (`-`) とダッシュ (`–`) や、単純な引用符 (`"`) と標準外の引用符 (`“`) のようなミスがないか、コードを注意深くチェックしてください。

## 例

### 合わない文字

似たような文字でも、パーサーがコードの解釈に失敗するものがあります。
有名な例としては、引用符、マイナス、セミコロンなどがあります ([ギリシャ文字の疑問符 (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) も同様です)。

```js-nolint example-bad
“これは実際には文字列です”; // SyntaxError: illegal character
// “ と ” は " ではありませんが、見た目が似ています

42 – 13; // SyntaxError: illegal character
// – は - ではありませんが、見た目が似ています

const foo = "bar"; // SyntaxError: illegal character
// <37e> は ; ではありませんが、見た目が似ています
```

次のものは動作します。

```js example-good
"これは実際には文字列です";
42 - 13;
const foo = "bar";
```

エディターや IDE の中には、その旨を通知してくれたり、少なくとも若干異なる強調表示をしてくれるものもありますが、すべてではありません。自分のコードにこのようなことが起こり、問題の原因がわからない場合は、問題のある行を削除して再入力するのが最善の方法です。

### 文字の入れ忘れ

あちこちで文字を入れ忘れることがあります。

```js-nolint example-bad
const operators = ["+", "-", ×", "÷"];
// SyntaxError: illegal character U+00D7
```

`"×"` の抜けている引用符を追加してください。

```js example-good
const operators = ["+", "-", "×", "÷"];
```

### 隠れた文字

外部のソースをコピー＆ペーストすると、不正な文字が含まれていることがあります。気を付けて!

```js-nolint example-bad
const foo = "bar";​
// SyntaxError: illegal character
```

VIM のようなエディターでこのコードを調査すると、実際には [zero-width space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) 文字があることが分かります。

```js-nolint
const foo = "bar";<200b>
```

## 関連情報

- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
