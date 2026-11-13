---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "return not in function" は、 [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文が[関数](/ja/docs/Web/JavaScript/Guide/Functions)の外側で呼び出されたときに発生します。

## エラーメッセージ

```plain
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}.

## エラーの原因

[`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文が [関数](/ja/docs/Web/JavaScript/Guide/Functions) の外側で呼び出されました。どこかで、中括弧を忘れたのかもしれません。 `return` 文は、関数内で使用しなければなりません。これらの文は、関数の実行を終了（または、停止や再開）し、関数の呼び出し元に返す値を指定するからです。

## 例

### 中括弧がない場合

```js-nolint example-bad
function cheer(score) {
  if (score === 147)
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
```

一見すると、中括弧は正しく見えますが、このコードスニペットでは、最初の `if` 文の後の `{` を忘れています。正しくは以下のようにします。

```js example-good
function cheer(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}
```

## 関連情報

- [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return)
