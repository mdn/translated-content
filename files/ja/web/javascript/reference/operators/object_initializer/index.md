---
title: オブジェクト初期化子
slug: Web/JavaScript/Reference/Operators/Object_initializer
---

{{JsSidebar("Operators")}}

オブジェクトは [`new Object()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)、[`Object.create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create)、*リテラル*表記法 (*初期化子*表記法) を使用して初期化されます。オブジェクト初期化子はオブジェクトのプロパティ名と関連した値のゼロ以上のペアのリストで、中括弧 (`{}`) で囲まれます。

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

## 構文

```js
let o = {};
let o = { a: "foo", b: 42, c: {} };

let a = "foo",
  b = 42,
  c = {};
let o = { a: a, b: b, c: c };

let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

### ECMAScript 2015 での新しい表記法

これらの表記をサポートするための互換性の表を参照してください。非サポート環境では、これらの表記は、構文エラーにつながります。

```js
// 略記プロパティ名 (ES2015)
let a = "foo",
  b = 42,
  c = {};
let o = { a, b, c };

// 略記メソッド名 (ES2015)
let o = {
  property(parameters) {},
};

// 計算プロパティ名 (ES2015)
let prop = "foo";
let o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};
```

## 解説

オブジェクト初期化子は、{{jsxref("Object")}} の初期化を表す式です。オブジェクトはオブジェクトを表す*プロパティ*で構成されます。オブジェクトプロパティの値は、特定の[プリミティブ](/ja/docs/Glossary/Primitive)データ型か他のオブジェクトのどちらかを含みます。

### オブジェクトリテラル表記法 vs JSON

オブジェクトリテラル表記法は **J**ava**S**cript **O**bject **N**otation ([JSON](/ja/docs/Glossary/JSON)) とは異なります。両者は似ていますが、ちがいがあります。

- JSON は、`"property": value` 構文を使用するプロパティ定義*のみ*を許可します。プロパティ名は二重引用符で囲まなければなりません。そして、その定義を略記にすることはできません。
- JSON で値とすることができるのは、文字列、数値、配列、`true`、`false`、`null`、別の (JSON) オブジェクトのみです。
- 関数の値（後述の「メソッド」を参照）は JSON では値を割り当てることができません。
- {{jsxref("Date")}} のようなオブジェクトは、 {{jsxref("JSON.parse()")}} の後で文字列になります。
- {{jsxref("JSON.parse()")}} では計算プロパティ名は拒否され、エラーが発生します。

## 例

### オブジェクトの生成

プロパティを持たない空のオブジェクトは、下記のように中括弧を記述することで生成されます。

```js
let object = {};
```

しかし、*リテラル*記法、*初期化子*記法の利点は、中括弧内にプロパティをもつオブジェクトを簡潔に生成できる点です。 `key: value` の組をカンマで区切ったリストで記述することができます。

以下のコードでは、 `"foo"`、`"age"`、`"baz"` の 3 つのプロパティをもつオブジェクトを生成します。これらのキーの値はそれぞれ、文字列の `"bar"`、数値の `42`、そして他のオブジェクトです。

```js
let object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### プロパティへのアクセス

オブジェクトを生成すると、読み取ったり変更したりしたくなるでしょう。オブジェクトのプロパティには、ドット記法またはブラケット記法でアクセスすることができます。（詳細については、[プロパティへのアクセス](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)をご覧ください。）

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; //12
```

### プロパティの定義

初期化構文を使用してプロパティを記述する方法について既に学びました。多くの場合、コード内には、オブジェクトに設定したい変数があります。下記のコードをご覧ください。

```js
let a = "foo",
  b = 42,
  c = {};

let o = {
  a: a,
  b: b,
  c: c,
};
```

ECMAScript 2015 では、同じことを実現するために利用できる短い記法があります。

```js
let a = "foo",
  b = 42,
  c = {};

// 略記プロパティ名 (ES2015)
let o = { a, b, c };

// In other words,
console.log(o.a === { a }.a); // true
```

#### 重複したプロパティ名

プロパティに対して同じ名前を使用するとき、二番目のプロパティは最初のプロパティを上書きします。

```js
let a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

ECMAScript 5 の厳格モードのコードでは、重複したプロパティの名前は {{jsxref("SyntaxError")}} とみなされます。実行時に重複を可能にする計算プロパティ名の導入により、 ECMAScript 2015 ではこの制限は取り除かれました。

```js
function haveES2015DuplicatePropertySemantics() {
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // 厳格モードで重複するプロパティ名が許可されているため、エラーが発生しない場合。
    return true;
  } catch (e) {
    // 厳格モードで重複が禁止されているため、エラーが発生する場合。
    return false;
  }
}
```

### メソッドの定義

オブジェクトのプロパティは[関数](/ja/docs/Web/JavaScript/Reference/Functions)、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)メソッド、[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)メソッドも参照することができます。

```js
let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

ECMAScript 2015 では、略記法が利用可能ですので、キーワード "`function`" は必要なくなりました。

```js
// メソッド名の略記法 (ES2015)
let o = {
  property(parameters) {},
};
```

ECMAScript 2015 では、ジェネレーター関数であるプロパティを簡潔に定義する方法があります。

```js
let o = {
  *generator() {
    ...........
  }
};
```

ECMAScript 5 では、下記のように記述します（ただし、 ES5 にはジェネレーターがないことに注意してください）。

```js
let o = {
  generator: function* () {
    ...........
  }
};
```

メソッドの詳細や例については、[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)をご覧ください。

### 計算プロパティ名

ECMAScript 2015 から、オブジェクト初期化子構文でも、計算プロパティ名に対応します。括弧 `[]` の中に式を記述することができ、それが計算されてプロパティ名として使用されます。これは、プロパティの読み込みと設定に使用したことのある、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)構文のブラケット表記を彷彿とさせるものです。

今では、オブジェクトリテラルでも同様な構文を使うことができます。

```js
// Computed property names (ES2015)
let i = 0;
let a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
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

let param = "size";
let config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### スプレッドプロパティ

[ECMAScript proposal の Rest/Spread プロパティ](https://github.com/tc39/proposal-object-rest-spread) （ステージ 4） では、オブジェクトリテラルに[スプレッド](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)プロパティを追加します。 渡されたオブジェクトから新しいオブジェクトに独自の列挙可能なプロパティをコピーします。

{{jsxref("Object.assign()")}} を使うよりも短いコードで `prototype` を除いた浅いコピーの作成や、マージしたオブジェクトの作成を書くことができます。

```js
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

> **警告:** {{jsxref("Object.assign()")}} は[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を起動しますが、スプレッド構文は起動しません。

### プロトタイプの変更

`__proto__: value` 形式、または `"__proto__": value` 形式でプロパティを定義しても、 `__proto__` という名をもつプロパティを生成しません。代わりに、与えられた値がオブジェクトまたは [`null`](/ja/docs/Web/JavaScript/Reference/Global_Objects/null) の場合、その値に生成されたオブジェクトの `[[Prototype]]` を変更します（その値がオブジェクト、または null ではない場合、オブジェクトは変更されません）。

```js
let obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

let obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

let protoObj = {};
let obj3 = { __proto__: protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

let obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

オブジェクトリテラルでは、単一のプロトタイプの変更のみが許可されています。すなわち、複数のプロトタイプを変更すると構文エラーになります。

「コロン」表記法を使用しないプロパティ定義は、プロトタイプの変更にはなりません。任意の他の名称を使用する同様の定義と同じように動作するプロパティ定義です。

```js
let __proto__ = "variable";

let obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

let obj2 = {
  __proto__() {
    return "hello";
  },
};
assert(obj2.__proto__() === "hello");

let obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メンバー演算子](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/ja/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/ja/docs/Web/JavaScript/Reference/Functions/set)
- [メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
