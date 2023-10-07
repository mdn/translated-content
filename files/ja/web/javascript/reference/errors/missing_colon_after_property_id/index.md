---
title: "SyntaxError: missing : after property id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing : after property id" は、オブジェクトが[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の構文を使用して生成されたときに発生します。コロン (`:`) はオブジェクトのプロパティのキーと値を区切ります。おそらく、このコロンがないか場所が間違っているかです。

## エラーメッセージ

```js
SyntaxError: Expected ':' (Edge)
SyntaxError: missing : after property id (Firefox)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)構文でオブジェクトを生成する場合、オブジェクトのプロパティのキーと値をコロン (`:`) で区切ります。

```js
var obj = { propertyKey: "value" };
```

## 例

### コロンと代入記号

この方法で代入記号をオブジェクト初期化子構文として使用できないため、このコードは失敗します。

```js example-bad
var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
```

正しくはコロンを使用するか、オブジェクトを生成した後に角括弧を使用して新しいプロパティを割り当てます。

```js example-good
var obj = { propertyKey: "value" };

// または

var obj = {};
obj["propertyKey"] = "value";
```

### 空のプロパティ

次のような方法では、プロパティを生成することができません。

```js example-bad
var obj = { propertyKey; };
// SyntaxError: missing : after property id
```

値がないプロパティを定義する必要がある場合、値として {{jsxref("null")}} を使用することができます。

```js example-good
var obj = { propertyKey: null };
```

### 計算されたプロパティ

式からプロパティキーを生成する場合、角括弧を使用してください。そうしなければ、プロパティ名を計算することができません。

```js example-bad
var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
```

式を括弧 `[]` に入れてください。

```js example-good
var obj = { ["b" + "ar"]: "foo" };
```

## 関連項目

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
