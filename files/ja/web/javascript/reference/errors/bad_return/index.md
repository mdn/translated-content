---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
---

{{jsSidebar("Errors")}}

JavaScript の例外 "return (or yield) not in function" は、 [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文または [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) 文が[関数](/ja/docs/Web/JavaScript/Guide/Functions)の外側で呼び出されたときに発生します。

## エラーメッセージ

```js
SyntaxError: 'return' statement outside of function (Edge)
SyntaxError: return not in function (Firefox)
SyntaxError: yield not in function (Firefox)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

[`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文か [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) 文が [関数](/ja/docs/Web/JavaScript/Guide/Functions) の外側で呼び出されました。どこかで、中括弧を忘れたのかもしれません。 `return` 文と `yield` 文は、関数内で使用しなければなりません。これらの文は、関数の実行を終了 (または、停止や再開) し、関数の呼び出し元に返す値を指定するからです。

## 例

### 中括弧がない場合

```js example-bad
var cheer = function(score) {
  if (score === 147)
    return 'Maximum!';
  };
  if (score > 100) {
    return 'Century!';
  }
}

// SyntaxError: return not in function
```

一見すると、中括弧は正しく見えますが、このコードスニペットでは、最初の `if` 文の後の `{` を忘れています。正しくは以下のようにします。

```js example-good
var cheer = function (score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
};
```

## 関連情報

- [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return)
- [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield)
