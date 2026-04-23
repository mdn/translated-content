---
title: プロパティアクセサー
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**プロパティアクセサー**はオブジェクトのプロパティへのアクセスを提供するもので、ドット記法またはブラケット記法を使用します。

{{InteractiveExample("JavaScript デモ: プロパティアクセサー", "taller")}}

```js interactive-example
const person1 = {};
person1["firstName"] = "Mario";
person1["lastName"] = "Rossi";

console.log(person1.firstName);
// 予想される結果: "Mario"

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person2["lastName"]);
// 予想される結果: "Doe"
```

## 構文

```js-nolint
object.propertyName
object[expression]
object.#privateProperty
```

## 解説

オブジェクトは実際には連想配列（別名 _map_、 _dictionary_、 _hash_、 _lookup table_）とみなすことができます。この配列における*キー*はオブジェクトの[プロパティ](/ja/docs/Glossary/Property/JavaScript)の名前です。

プロパティにアクセスするには、*ドット記法*と*ブラケット記法*の 2 通りがあります。

### ドット記法

`object.propertyName` の構文では、 `propertyName` は有効な JavaScript の [識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)でなければならず、[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)であっても構いません。例えば、 `object.$1` は有効であるのに対し、 `object.1` は有効ではありません。

```js
const variable = object.propertyName;
object.propertyName = value;
```

```js
const object = {};
object.$1 = "foo";
console.log(object.$1); // 'foo'
```

```js-nolint example-bad
const object = {};
object.1 = "bar"; // SyntaxError
console.log(object.1); // SyntaxError
```

ここで、 `createElement` というメソッドを `document` から取得し、呼び出します。

```js
document.createElement("pre");
```

数値リテラルに対してメソッドを使用する場合で、その数値リテラルに指数や小数点がない場合、メソッド呼び出しをするドットの前に[ホワイトスペース](/ja/docs/Glossary/Whitespace)を入れることで、ドットが小数点とみなされることを防ぐことができます。

```js-nolint
77 .toExponential();
// or
77
.toExponential();
// or
(77).toExponential();
// or
77..toExponential();
// or
77.0.toExponential();
// 77. と 77.0 は同じものとして評価されます
```

さらに、[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)は、それを定義するクラス内でドット記法を使用してのみアクセスすることができます。

### ブラケット記法

`object[expression]` の構文では、`expression` は文字列または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)です。ですから、これは任意の文字列、例えば `'1foo'`、`'!bar!'`、または `' '` (空白) であっても構いません。

```js
const variable = object[propertyName];
object[propertyName] = value;
```

これは前の例とまったく同じです。

```js
document["createElement"]("pre");
```

ブラケット記法の前には空白を入れることができます。

```js-nolint
document ["createElement"]("pre");
```

プロパティ名として評価される式を渡すと、プロパティ名を直に直接渡すのと同じことが行われます。

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // "Michel" を返す
Obj[key]; // Obj["name"] と解釈され、 "Michel" を返す
Obj[getKey()]; // Obj["name"] と解釈され、 "Michel" を返す
```

ただし、外部入力で指定された名前のプロパティにアクセスするために角括弧を使用することには注意が必要です。これにより、コードが[オブジェクトインジェクション攻撃](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md)を許しやすくなる可能性があります。

### プロパティ名

プロパティ名は文字列または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)です。それ以外の値は、数値を含めて、文字列へ強制変換されます。これは `'value'` を出力します。 `1` が `'1'` に強制変換されるからです。

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

こちらも `'value'` を出力します。`foo` と `bar` は同じ文字列に変換されるからです。

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### メソッドのバインド

オブジェクトのプロパティについて話す場合は、プロパティとメソッドを区別するのが一般的です。しかし、プロパティとメソッドの区別は、単なる慣習にすぎません。メソッドは、呼び出すことができるプロパティです（例えば、{{jsxref("Function")}} インスタンスへの参照を値として保有している場合など）。

メソッドは、そのメソッドが所属するオブジェクトにバインドされているわけではありません。特に、 `this` はメソッド内で固定されているわけではなく、必ずしもそのメソッドを含んでいるオブジェクトを参照しているとは限りません。 `this` は関数呼び出し時に「渡される」ものです。[`this` のリファレンス](/ja/docs/Web/JavaScript/Reference/Operators/this)を参照してください。

## 例

### ブラケット記法と eval()

JavaScript 初心者はしばしば、代わりにブラケット記法を使えるところで {{jsxref("eval", "eval()")}} を使用してしまう間違いを犯します。

例えば、以下のような構文がたくさんのスクリプトで見られます。

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` は低速であり、可能な限り避けるべきです。また、 `strFormControl` は ID を必要としますが、フォームコントロールの名前と `id` は必須ではありません。代わりにブラケット記法を使った方が良いでしょう。

```js
const x = document.forms.form_name.elements[strFormControl].value;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
- [オプショナルチェーン (`?.`)](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
