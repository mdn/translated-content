---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
---

{{jsSidebar("Errors")}}

JavaScript の例外 "malformed formal parameter" は、 [`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) 呼び出しの引数リストが何らか無効である場合に発生します。

## エラーメッセージ

```js
SyntaxError: Expected {x} (Edge)
SyntaxError: malformed formal parameter (Firefox)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

[`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) を使用して、 2 つ以上の引数を渡すとします。最後の引数は、作成する新しい関数のソースコードです。 残りの引数は、新しく生成する関数の引数リストを構成します。

引数リストの何かが無効です。引数名として `if` や `var` のようなキーワードを選んでしまったかもしれませんし、引数リストに誤った区切りがあるかもしれません。または、数値やオブジェクトのような無効な値を渡しているかもしれません。

### 解決したが、なぜ最初からそう言ってくれないのか

確かに、エラーメッセージの文言は少々奇妙です。 "Formal parameter" は、 "関数の引数" を表現するにはファンシーな言い方です。 さらに、"malformed" という言葉を使っていますが、それは Firefox エンジニアが 19 世紀のゴッシックホラー小説の大ファンだからです。

## 例

### 無効な場合

```js example-bad
var f = Function('x y', 'return x + y;');
// SyntaxError (missing a comma)

var f = Function('x,', 'return x;');
// SyntaxError (extraneous comma)

var f = Function(37, "alert('OK')");
// SyntaxError (numbers can't be argument names)
```

### 妥当な場合

```js example-good
var f = Function('x, y', 'return x + y;');  // correctly punctuated

var f = Function('x', 'return x;');

// if you can, avoid using Function - this is much faster
var f = function(x) { return x; };
```

## 関連情報

- [`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [関数について](/ja/docs/Web/JavaScript/Guide/Functions)
- [_フランケンシュタイン_ (メアリー・シェリー)](https://www.gutenberg.org/ebooks/84) より ("Cursed (although I curse myself) be the hands that formed you! You have made me wretched beyond expression. You have left me no power to consider whether I am just to you or not. Begone! Relieve me from the sight of your detested form.")
