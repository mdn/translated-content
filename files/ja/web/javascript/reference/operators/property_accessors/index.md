---
title: プロパティアクセサー
slug: Web/JavaScript/Reference/Operators/Property_accessors
---

{{jsSidebar("Operators")}}

**プロパティアクセサー**はオブジェクトのプロパティへのアクセスを提供するもので、ドット表記法またはブラケット表記法を使用します。

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}

## 構文

```js
object.property;
object["property"];
```

## 解説

オブジェクトは実際には*連想配列* (別名 _map_、 _dictionary_、 _hash_、 _lookup table_) とみなすことができます。この配列における*キー*はオブジェクトのプロパティ名です。

一般的に、オブジェクトのプロパティについて説明する際には、プロパティとメソッドを区別します。しかし、プロパティとメソッドの区別は慣習的なものにすぎません。メソッドは呼び出すことができるプロパティです (例えば、値として {{jsxref("Function")}} インスタンスへの参照を持っているようなものです)。

プロパティにアクセスするには、*ドット表記法*と*ブラケット表記法*の 2 通りがあります。

### ドット表記法

`object.property` の構文では、 `property` は有効な JavaScript の [識別子](/ja/docs/Glossary/Identifier)でなければなりません。 (ECMAScript 標準では、プロパティの名前は技術的には "IdentifierNames" であり、 "Identifiers" ではないので、予約語を使用することができますがお勧めしません)。例えば、 `object.$1` は有効であるのに対し、 `object.1` は有効ではありません。

```js
const variable = object.property_name;

object.property_name = value;
```

```js
const object = {};

object.$1 = 'foo';
console.log(object.$1);  // 'foo'

object.1 = 'bar';        // SyntaxError
console.log(object.1);   // SyntaxError
```

ここで、 `createElement` というメソッドを `document` から取得し、呼び出します。

```js
document.createElement("pre");
```

数値リテラルに対してメソッドを使用する場合で、その数値リテラルに指数や小数点がない場合、メソッド呼び出しをするドットの前に[ホワイトスペース](/ja/docs/Glossary/Whitespace)を入れることで、ドットが小数点とみなされることを防ぐことができます。

```js
(77).toExponential();
// or
(77).toExponential();
// or
(77).toExponential();
// or
(77).toExponential();
// or
(77.0).toExponential();
// because 77. === 77.0, no ambiguity
```

### ブラケット表記法

`object[property_name]` の構文では、 `property_name` は文字列または[シンボル](/ja/docs/Glossary/Symbol)です。ですから、これは任意の文字列、例えば `'1foo'`、`'!bar!'`、または `' '` (空白) であっても構いません。

```js
const variable = object[property_name];
object[property_name] = value;
```

これは前の例とまったく同じです。

```js
document["createElement"]("pre");
```

ブラケット表記法の前には空白を入れることができます。

```js
document["createElement"]("pre");
```

### プロパティ名

プロパティ名は文字列または[シンボル](/ja/docs/Glossary/Symbol)です。それ以外の値は、数値を含めて、文字列へ強制変換されます。これは `'value'` を出力します。 `1` が `'1'` に強制変換されるからです。

```js
let object = {};
object["1"] = "value";
console.log(object[1]);
```

こちらも `'value'` を出力します。`foo` と `bar` は同じ文字列に変換されるからです。

```js
let foo = { unique_prop: 1 },
  bar = { unique_prop: 2 },
  object = {};
object[foo] = "value";
console.log(object[bar]);
```

[SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) JavaScript エンジンでは、この文字列は "`[object Object]`" となります。

### メソッドのバインド

メソッドは、そのメソッドが所属するオブジェクトにバインドされているわけではありません。特に、 `this` はメソッド内で固定されていません。つまり、 `this` は必ずしもそのメソッドを含んでいるオブジェクトを参照しているとは限りません。 `this` は関数呼び出し時に「渡される」ものです。[メソッドのバインド](/ja/docs/Web/JavaScript/Reference/Operators/this#method_binding)を参照してください。

## 例

### ブラケット表記法と `eval`

JavaScript 初心者はしばしば、代わりにブラケット表記法を使えるところで {{jsxref("eval", "eval()")}} を使用してしまう間違いを犯します。

例えば、以下のような構文がたくさんのスクリプトで見られます。

```js
x = eval("document.forms.form_name.elements." + strFormControl + ".value");
```

`eval()` は低速であり、可能な限り避けるべきです。また、 `strFormControl` は ID を必要としますが、フォームコントロールの名前と `id` は必須ではありません。代わりにブラケット表記法を使った方が良いでしょう。

```js
x = document.forms["form_name"].elements[strFormControl].value;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.operators.property_accessors")}}

## 関連情報

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
- [オプショナルチェイニング](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
