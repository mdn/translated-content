---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing ) after condition" は、 [`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文の条件の書き方にエラーがあった場合に発生します。 `if` キーワードの後には括弧が必要です。

## エラーメッセージ

```js
SyntaxError: Expected ')' (Edge)
SyntaxError: missing ) after condition (Firefox)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

[`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 条件の書き方にエラーがあります。どのプログラミング言語でも、コードは様々な入力に応じて決定を行い、アクションを実行する必要があります。if 文は指定した条件を満たす場合、処理を実行します。JavaScript では次のように、この条件は `if` キーワードの後に括弧を付ける必要があります。

```js
if (condition) {
  // do something if the condition is true
}
```

## 例

### 括弧の欠落

ちょっとした見落としかもしれないので、慎重にコード内のすべての括弧をチェックしてください。

```js example-bad
if (3 > Math.PI {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

このコードを修正するには、条件を閉じる括弧を追加する必要があります。

```js example-good
if (3 > Math.PI) {
  console.log("wait what?");
}
```

### `is` キーワードの誤用

他の言語から来た人ならば、 JavaScript で同じ意味を持たないキーワードや意味のないキーワードを追加してしまいがちです。

```js example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

代わりに、正しい[比較演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)を使うべきです。例を示します。

```js example-good
if (done === true) {
  console.log("we are done!");
}
```

## 関連項目

- [`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else)
- [比較演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [コードでの意思決定 — 条件文](/ja/docs/Learn/JavaScript/Building_blocks/conditionals)
