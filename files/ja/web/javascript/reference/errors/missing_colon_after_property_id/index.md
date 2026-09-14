---
title: "SyntaxError: missing : after property id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing : after property id" は、オブジェクトが[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の構文を使用して生成されたときに発生します。コロン (`:`) はオブジェクトのプロパティのキーと値を区切ります。おそらく、このコロンがないか場所が間違っているかです。

## エラーメッセージ

```plain
SyntaxError: Invalid shorthand property initializer (V8-based)
SyntaxError: missing : after property id (Firefox)
SyntaxError: Unexpected token '='. Expected a ':' following the property name 'x'. (Safari)
SyntaxError: Unexpected token '+'. Expected an identifier as property name. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)構文でオブジェクトを生成する場合、オブジェクトのプロパティのキーと値をコロン (`:`) で区切ります。

```js
const obj = { propertyKey: "value" };
```

## 例

### コロンと代入記号

この方法で代入記号をオブジェクト初期化子構文として使用できないため、このコードは失敗します。

```js-nolint example-bad
const obj = { propertyKey = "value" };
// SyntaxError: missing : after property id
```

正しくはコロンを使用するか、オブジェクトを生成した後に角括弧を使用して新しいプロパティを割り当てます。

```js example-good
const obj = { propertyKey: "value" };
```

あるいは、

```js
const obj = {};
obj.propertyKey = "value";
```

### 計算されたプロパティ

式からプロパティキーを生成する場合、角括弧を使用してください。そうしなければ、プロパティ名を計算することができません。

```js-nolint example-bad
const obj = { "b"+"ar": "foo" };
// SyntaxError: missing : after property id
```

式を括弧 `[]` に入れてください。

```js example-good
const obj = { ["b" + "ar"]: "foo" };
```

## 関連情報

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
