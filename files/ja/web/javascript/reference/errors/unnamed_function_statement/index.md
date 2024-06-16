---
title: "SyntaxError: function statement requires a name"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

JavaScript の例外 "function statement requires a name" は、名前が必要な[関数文](/ja/docs/Web/JavaScript/Reference/Statements/function)がコードの中にあった場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Function statements require a function name (V8-based)
SyntaxError: function statement requires a name (Firefox)
SyntaxError: Function statements must have a name. (Safari)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

コードに名前が必要な[関数文](/ja/docs/Web/JavaScript/Reference/Statements/function)があります。
関数がどのように定義されているか、関数の名前を指定する必要があるかどうか、または問題の関数が関数式、[IIFE](/ja/docs/Glossary/IIFE) である必要があるかどうか、 コードがこのコンテキストに正しく置かれているかどうかを確認する必要があります。

## 例

### 文と式

_[function 文](/ja/docs/Web/JavaScript/Reference/Statements/function)_ （または _function 宣言_）では名前が必要であり、次のものは動作しません。

```js-nolint example-bad
function () {
  return "Hello world";
}
// SyntaxError: function statement requires a name
```

代わりに、[function 式](/ja/docs/Web/JavaScript/Reference/Operators/function) （代入）を使用することができます。

```js example-good
const greet = function () {
  return "Hello world";
};
```

または、定義するとすぐに実行される [IIFE](https://ja.wikipedia.org/wiki/即時実行関数式) （即時実行関数式）を定義しようとしているのかもしれません。その場合は、もう少々括弧が必要です。

```js example-good
(function () {
  // …
})();
```

### ラベル付けされた関数

[ラベル](/ja/docs/Web/JavaScript/Reference/Statements/label)は関数名とは全く異なる機能です。ラベルを関数名として使用することはできません。

```js-nolint example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

また、ラベル付け関数宣言そのものは非推奨です。代わりに通常の関数宣言を使用してください。

```js example-good
function Greeter() {
  function german() {
    return "Moin";
  }
}
```

### オブジェクトのメソッド

オブジェクトのメソッドを作るならば、オブジェクトを作る必要があります。その場合、`function` キーワードの後に名前がない次の構文は有効です。

```js example-good
const greeter = {
  german: function () {
    return "Moin";
  },
};
```

[メソッド構文](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を使用することもできます。

```js
const greeter = {
  german() {
    return "Moin";
  },
};
```

### コールバック構文

コールバックを使用するときの構文もチェックします。
大括弧とカンマが混同しやすいです。

```js-nolint example-bad
promise.then(
  function () {
    console.log("success");
  });
  function () {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

正しくは、次の通りです。

```js example-good
promise.then(
  function () {
    console.log("success");
  },
  function () {
    console.log("error");
  },
);
```

## 関連項目

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- {{Glossary("IIFE")}}
- [ラベル付き文](/ja/docs/Web/JavaScript/Reference/Statements/label)
