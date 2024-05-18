---
title: オブジェクト初期化子
slug: Web/JavaScript/Reference/Operators/Object_initializer
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Operators")}}

**オブジェクト初期化子** (object initializer) は、オブジェクトのプロパティ名と関連する値の 0 個以上のペアを中括弧 (`{}`) で囲んだカンマ区切りのリストです。オブジェクトは [`Object.create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create) や [`new`](/ja/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function) 演算子で[コンストラクター関数を呼び出して](/ja/docs/Web/JavaScript/Reference/Operators/new)使用することもできます。

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

## 構文

```js-nolint
o = {
  a: "foo",
  b: 42,
  c: {},
  1: "number literal property",
  "foo:bar": "string literal property",

  shorthandProperty,

  method(parameters) {
    // …
  },

  get property() {},
  set property(value) {},

  [expression]: "computed property",

  __proto__: prototype,

  ...spreadProperty,
};
```

## 解説

オブジェクト初期化子は、{{jsxref("Object")}} の初期化を表す式です。オブジェクトはオブジェクトを表す*プロパティ*で構成されます。オブジェクトプロパティの値は、特定の[プリミティブ](/ja/docs/Glossary/Primitive)データ型か他のオブジェクトのどちらかを含みます。

### オブジェクトリテラル構文と JSON

オブジェクトリテラル構文は **J**ava**S**cript **O**bject **N**otation ([JSON](/ja/docs/Glossary/JSON)) とは異なります。両者は似ていますが、違いがあります。

- JSON は、`"property": value` 構文を使用するプロパティ定義*のみ*を許可します。プロパティ名は二重引用符で囲まなければなりません。そして、その定義を略記にすることはできません。計算されたプロパティ名も許されません。
- JSON オブジェクトプロパティの値で取りうるのは、文字列、数値、`true`、`false`、`null`、配列、他の JSON オブジェクトのみです。これはJSONがメソッドや、プレーンでないオブジェクト、例えば [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) や [`RegExp`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp) を表現できないことを意味しています。
- JSON では、 `"__proto__"` は通常のプロパティキーです。オブジェクトリテラルでは、[オブジェクトのプロトタイプを設定します](#プロトタイプセッター)。

JSON はオブジェクトリテラル構文の _厳格なサブセット_ であり、有効な JSON テキストはすべてオブジェクトリテラルとして解釈でき、構文エラーを発生させないことを意味しています。唯一の例外は、オブジェクトリテラル構文では `__proto__` キーの重複を禁止していることです。これは [`JSON.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) には適用されません。後者は `__proto__` を通常のプロパティのように扱い、最後に出現した値をプロパティの値として導きます。オブジェクトリテラルではオブジェクトのプロトタイプを設定し、 JSON では通常のプロパティを設定します。

```js
console.log(JSON.parse('{ "__proto__": 0, "__proto__": 1 }')); // {__proto__: 1}
console.log({ "__proto__": 0, "__proto__": 1 }); // SyntaxError: Duplicate __proto__ fields are not allowed in object literals

console.log(JSON.parse('{ "__proto__": {} }')); // { __proto__: {} }
console.log({ "__proto__": {} }); // {} (with {} as prototype)
```

## 例

### オブジェクトの生成

プロパティを持たない空のオブジェクトは、下記のように中括弧を記述することで生成されます。

```js
const object = {};
```

しかし、*リテラル*記法、*初期化子*記法の利点は、中括弧内にプロパティをもつオブジェクトを簡潔に生成できる点です。 `key: value` の組をカンマで区切ったリストで記述することができます。

以下のコードでは、 `"foo"`、`"age"`、`"baz"` の 3 つのプロパティをもつオブジェクトを生成します。これらのキーの値はそれぞれ、文字列の `"bar"`、数値の `42`、そして他のオブジェクトです。

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### プロパティへのアクセス

オブジェクトを生成すると、読み取ったり変更したりしたくなるでしょう。オブジェクトのプロパティには、ドット記法またはブラケット記法でアクセスすることができます。（詳細については、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)をご覧ください。）

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; //12
```

### プロパティの定義

初期化構文を使用してプロパティを記述する方法について既に学びました。多くの場合、コード内には、オブジェクトに設定したい変数があります。下記のコードをご覧ください。

```js
const a = "foo";
const b = 42;
const c = {};

const o = {
  a: a,
  b: b,
  c: c,
};
```

同じことを実現するために利用できる短い記法があります。

```js
const a = "foo";
const b = 42;
const c = {};

// 略記プロパティ名
const o = { a, b, c };

// In other words,
console.log(o.a === { a }.a); // true
```

#### 重複したプロパティ名

プロパティに対して同じ名前を使用するとき、二番目のプロパティは最初のプロパティを上書きします。

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

ES2015 以降、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode#プロパティ名の重複)を含むあらゆる場所でプロパティ名の重複が許されるようになりました。また、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)内でプロパティ名の重複を保有することもできます。ただし、[プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)だけは例外で、クラス本体で固有のプロパティでなければなりません。

### メソッドの定義

オブジェクトのプロパティは[関数](/ja/docs/Web/JavaScript/Reference/Functions)、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)メソッド、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)メソッドも参照することができます。

```js
const o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

略記法が利用可能ですので、キーワード "`function`" は必要なくなりました。

```js
// メソッド名の略記法
const o = {
  property(parameters) {},
};
```

ジェネレーター関数であるプロパティを簡潔に定義する方法があります。

```js
const o = {
  *generator() {
    // …
  },
};
```

これは ES5 のような記法と同じです（ただし、 ES5 にはジェネレーターがないことに注意してください）。

```js
const o = {
  generator: function* () {
    // …
  },
};
```

メソッドの詳細や例については、[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)をご覧ください。

### 計算プロパティ名

オブジェクト初期化子構文でも、計算プロパティ名に対応します。角括弧 `[]` の中に式を記述することができ、それが計算されてプロパティ名として使用されます。これは、プロパティの読み込みと設定に使用したことのある、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)構文のブラケット表記を彷彿とさせるものです。

今では、オブジェクトリテラルでも同様な構文を使うことができます。

```js
// 計算プロパティ名
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

const items = ["A", "B", "C"];
const obj = {
  [items]: "Hello",
};
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]); // "Hello"

const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### スプレッドプロパティ

オブジェクトリテラルは[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)に対応しています。これは、指定されたオブジェクトから新しいオブジェクトに自分自身で列挙可能なプロパティをコピーされます。

{{jsxref("Object.assign()")}} を使うよりも短いコードで `prototype` を除いたシャロークローンの作成や、マージしたオブジェクトの作成を書くことができます。

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> **警告:** {{jsxref("Object.assign()")}} は[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を起動しますが、スプレッド構文は起動しません。

### プロトタイプセッター

`__proto__: value` 形式、または `"__proto__": value` 形式でプロパティを定義しても、 `__proto__` という名をもつプロパティを生成しません。代わりに、与えられた値がオブジェクトまたは [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の場合、その値に生成されたオブジェクトの `[[Prototype]]` を変更します（その値がオブジェクト、または `null` ではない場合、オブジェクトは変更されません）。

`__proto__` キーは標準化された構文であり、標準外でパフォーマンスの低い [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) アクセサーとは対照的であることに注意してください。プロトタイプチェーンを変更する代わりに、 {{jsxref("Object.create")}} と同様にオブジェクト作成時に `[[Prototype]]` を設定します。

```js-nolint
const obj1 = {};
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true

const obj2 = { __proto__: null };
console.log(Object.getPrototypeOf(obj2)); // null

const protoObj = {};
const obj3 = { "__proto__": protoObj };
console.log(Object.getPrototypeOf(obj3) === protoObj); // true

const obj4 = { __proto__: "not an object or null" };
console.log(Object.getPrototypeOf(obj4) === Object.prototype); // true
console.log(Object.hasOwn(obj4, "__proto__")); // false
```

オブジェクトリテラルでは、単一のプロトタイプセッターのみが許可されています。すなわち、複数のプロトタイプセッターがあると構文エラーになります。

「コロン」表記法を使用しないプロパティ定義は、プロトタイプセッターにはなりません。任意の他の名称を使用する同様の定義と同じように動作するプロパティ定義です。

```js
const __proto__ = "variable";

const obj1 = { __proto__ };
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.hasOwn(obj1, "__proto__")); // true
console.log(obj1.__proto__); // "variable"

const obj2 = { __proto__() { return "hello"; } };
console.log(obj2.__proto__()); // "hello"

const obj3 = { ["__proto__"]: 17 };
console.log(obj3.__proto__); // 17

// プロトタイプセッターと "__proto__" キーによる通常の自分自身のプロパティの混合
const obj4 = { ["__proto__"]: 17, __proto__: {} }; // {__proto__: 17} (with {} as prototype)
const obj5 = {
  ["__proto__"]: 17,
  __proto__: {},
  __proto__: null, // SyntaxError: 複数の __proto__ フィールドはオブジェクトリテラルでは許可されていない
};
const obj6 = {
  ["__proto__"]: 17,
  ["__proto__"]: "hello",
  __proto__: null,
}; // {__proto__: "hello"} (null プロトタイプ)
const obj7 =  {
  ["__proto__"]: 17,
  __proto__,
  __proto__: null,
}; // {__proto__: "variable"} (null プロトタイプ)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メンバー演算子](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/ja/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/ja/docs/Web/JavaScript/Reference/Functions/set)
- [メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
