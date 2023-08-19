---
title: "SyntaxError: function statement requires a name"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
---

{{jsSidebar("Errors")}}

JavaScript の例外 "function statement requires a name" は、名前が必要な[関数文](/ja/docs/Web/JavaScript/Reference/Statements/function)がコードの中にあった場合に発生します。

## エラーメッセージ

```js
Syntax Error: Expected identifier (Edge)
SyntaxError: function statement requires a name [Firefox]
SyntaxError: Unexpected token ( [Chrome]
```

## エラーの種類

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

コードに名前が必要な[関数文](/ja/docs/Web/JavaScript/Reference/Statements/function)があります。関数がどのように定義されているか、関数の名前を指定する必要があるかどうか、または問題の関数が関数式、[IIFE](/ja/docs/Glossary/IIFE) である必要があるかどうか、 コードがこのコンテクストに正しく置かれているかどうかを確認する必要があります。

## 例

### 文と式

_[function 文](/ja/docs/Web/JavaScript/Reference/Statements/function)_ (または _function 宣言_) では名前が必要であり、次のものは動作しません。

```js example-bad
function () {
  return 'Hello world';
}
// SyntaxError: function statement requires a name
```

代わりに、[function 式](/ja/docs/Web/JavaScript/Reference/Operators/function) (代入) を使用することができます。

```js example-good
var greet = function () {
  return "Hello world";
};
```

または、定義するとすぐに実行される [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (即時実行関数式) を定義しようとしているのかもしれません。その場合は、もう少々括弧が必要です。

```js example-good
(function () {})();
```

### ラベル付けされた関数

関数 [label](/ja/docs/Web/JavaScript/Reference/Statements/label) を使用している場合、`function` キーワードの後に関数名を指定する必要があります。これは動作しません:

```js example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

たとえば、これは動作します。

```js example-good
function Greeter() {
  german: function g() {
    return "Moin";
  }
}
```

### オブジェクトのメソッド

オブジェクトのメソッドを作るならば、オブジェクトを作る必要があります。その場合、`function` キーワードの後に名前がない次の構文は有効です。

```js example-good
var greeter = {
  german: function () {
    return "Moin";
  },
};
```

### コールバック構文

コールバックを使用するときの構文もチェックします。大括弧とカンマが混同しやすいです。

```js example-bad
promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

正しくは、次の通りです。

```json example-good
promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
```

## 関連項目

- [関数 (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Functions)
- [関数文](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [label](/ja/docs/Web/JavaScript/Reference/Statements/label)
