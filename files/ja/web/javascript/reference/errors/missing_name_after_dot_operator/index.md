---
title: "SyntaxError: missing name after . operator"
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing name after . operator" は、[プロパティアクセス](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)のためのドット演算子 (`.`) の使い方に問題があった場合に発生します。

## エラーメッセージ

```plain
SyntaxError: missing name after . operator (Firefox)
SyntaxError: Unexpected token '['. Expected a property name after '.'. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

[メンバー演算子](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)に対して、ドット演算子 (`.`) が使われました。アクセスしたいプロパティ名を指定しなければなりません。計算されたプロパティアクセスのためには、プロパティアクセスをドットを使用したものから角括弧を使用したものに変更する必要があります。それにより、式を計算できるようになります。そうではなく、連結しようとしましたか? その場合は、プラス演算子 (`+`) を代わりに使用してください。以下の例をご覧ください。

## 例

### プロパティアクセス

JavaScript の[メンバー演算子](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)は、ドット (.) か角括弧 (`[]`) を使用しますが、両方は使いません。角括弧で計算されたプロパティアクセスができます。

```js-nolint example-bad
const obj = { foo: { bar: "baz", bar2: "baz2" } };
const i = 2;

obj.[foo].[bar]
// SyntaxError: missing name after . operator

obj.foo."bar"+i;
// SyntaxError: missing name after . operator
```

このコードを修正するには、次のようにオブジェクトにアクセスする必要があります。

```js example-good
obj.foo.bar; // "baz"
// or alternatively
obj["foo"]["bar"]; // "baz"

// 計算プロパティは各括弧が必要
obj.foo["bar" + i]; // "baz2"
// or as template literal
obj.foo[`bar${i}`]; // "baz2"
```

### プロパティアクセスと連結

([PHP](/ja/docs/Glossary/PHP) のような) ほかの言語から来た人なら、ドット演算子 (`.`) と連結演算子 (`+`) を混同しがちです。

```js-nolint example-bad
console.log("Hello" . "world");

// SyntaxError: missing name after . operator
```

連結のためにはプラス記号を使用してください。

```js example-good
console.log("Hello" + "World");
```

## 関連情報

- [メンバー演算子](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
