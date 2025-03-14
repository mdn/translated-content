---
title: "Warning: unreachable code after return statement"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
---

{{jsSidebar("Errors")}}

JavaScript の警告 "unreachable code after return statement" は、 {{jsxref("Statements/return", "return")}} 文の後で式を使用したり、セミコロンのない return 文を使用して、その直後に式を置いたりした場合に発生します。

## エラーメッセージ

```js
Warning: unreachable code after return statement (Firefox)
```

## エラーの種類

警告

## エラーの原因

unreachable code after a return statement は、以下のような場合に発生することがあります。

- {{jsxref("Statements/return", "return")}} 文の後で式を使用している場合
- セミコロンがない return 文の直後に式を置いている場合

有効な `return` 文の後に式がある場合、警告は `return` 文の後のコードには到達しない、つまり決して実行されないことを表します。

`return` 文の後にセミコロンをつけるべきなのはなぜでしょうか。セミコロンがない `return` 文の場合、開発者が次の行にある文を返そうとしているのか、処理を停止して戻ろうとしているのかが不明確になってしまいます。この警告は、 `return` 文の書かれ方にあいまいさがあることを示しています。

以下の文の場合、セミコロンがない場合の return の警告は表示されません。

- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/function", "function")}}

## 例

### 無効な場合

```js-nolint example-bad
function f() {
  var x = 3;
  x += 4;
  return x; // return は直ちに関数を終了します。
  x -= 3; // そのため、この行は実行されません。到達不可能です。
}

function f() {
  return // これは `return;` のように扱われます。
    3 + 4; // そのため、関数を抜け出し、この行には決して到達しません。
}
```

### 妥当な場合

```js example-good
function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x; // OK: すべての式の後に return があります。
}

function f() {
  return 3 + 4; // OK: 同じ行に式があるセミコロンなしの return です。
}
```

## 関連情報

- {{jsxref("Statements/return", "自動セミコロン挿入", "#Automatic_Semicolon_Insertion", 1)}}
