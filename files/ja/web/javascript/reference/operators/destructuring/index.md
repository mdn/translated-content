---
title: 構造分解（分割代入）
slug: Web/JavaScript/Reference/Operators/Destructuring
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**構造分解**（destructuring、旧：分割代入）構文は、配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする JavaScript の構文です。これは、データを受け取る場所（代入の左辺や、新しい識別子バインディングを作成する場所ならどこでも）で使用できます。

{{InteractiveExample("JavaScript デモ: 構造分解", "taller")}}

```js interactive-example
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// 期待される出力: 10

console.log(b);
// 期待される出力: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// 期待される出力: Array [30, 40, 50]
```

## 構文

```js-nolint
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // 括弧が必要
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```

## 解説

オブジェクトリテラルと配列リテラルは、いくつかのデータを*アドホック*にまとめる簡単な方法を提供します。

```js
const arr = [a, b, c];
```

構造分解は、同様の構文を代入の左辺で使用します。これは、集合のそれぞれの要素を別個の変数として宣言することにより、配列の宣言と逆の操作を行います。

```js
const arr = [1, 2, 3];
const [a, b, c] = arr;
// a = 1, b = 2, c = 3
```

オブジェクトの場合は、下記の 2 組の記述を比較し、それぞれの組の中でどのように対応しているのかを確認してください。

```js
const obj = { a, b, c };
const { a, b, c } = obj;
// 次の文と同等
// const a = obj.a, b = obj.b, c = obj.c;

const obj = { prop1: x, prop2: y, prop3: z };
const { prop1: x, prop2: y, prop3: z } = obj;
// 次の文と同等
// const x = obj.prop1, y = obj.prop2, z = obj.prop3;
```

この機能は、 Perl や Python などの言語に存在する機能に似ています。

配列またはオブジェクトの構造分解に関する機能については、以下の個々の[例](#例)を参照してください。

### バインドと代入

オブジェクトと配列の構造分解には、2 種類の構造分解のパターンがあります。**{{Glossary("binding","バインド")}}パターン**と**代入パターン**であり、構文が若干異なります。

バインドパターンでは、宣言キーワード（`var`、`let`、`const`）から始めます。次に、個々のプロパティを変数にバインドするか、さらに構造分解する必要があります。

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// `a` と `d` の 2 つの変数はバインドされます。
```

すべての変数で同じ宣言を共有するので、ある変数だけ再代入可能にし、他は読み取り専用にしたい場合は、`let` で 1 回、`const` で 1 回の 2 回の構造分解が必要になる場合があります。

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a は定数
let {
  b: { c: d },
} = obj; // d は再代入可能
```

言語が変数をバインドする他の多くの構文でも、構造分解のバインドパターンが使用できます。これには次のようなものがあります。

- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)、[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of)、[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループのループ変数
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)の引数
- [`catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) のバインド変数

代入パターンでは、パターンはキーワードで始まりません。それぞれの構造分解されたプロパティが、代入先に代入されます。この代入先は `var` や `let` であらかじめ宣言されているか、他のオブジェクトのプロパティです。一般的には、代入式の左辺に現れることができるものなら何でも構いません。

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// `a` および `b` プロパティが `numbers` へ代入される
```

> [!NOTE]
> 宣言なしでオブジェクトリテラルの構造分解を使用する場合、代入文を囲む括弧 `( ... )` が必要です。
>
> `{ a, b } = { a: 1, b: 2 }` は、左辺の `{ a, b }` が[式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)のルールによりオブジェクトリテラルではなくブロックとみなされるため、単体では有効な構文ではありません。しかし、`({ a, b } = { a: 1, b: 2 })` は有効であり、`const { a, b } = { a: 1, b: 2 }` も同様です。
>
> もし、お使いのコーディングスタイルで末尾のセミコロンを記述していない場合は、`( ... )` 式の前にセミコロンを記述する必要がありますし、前の行の関数を実行するために使用される可能性もあります。

上のコードの等価なバインドパターンは、有効な構文ではないことに注意してください。

```js-nolint example-bad
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// これは次のものと等価です。
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// これは完全に正しくありません。
```

代入パターンをは[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)の左辺としてのみ使用できます。`+=` や `*=` などの複合代入演算子では使用できません。

### 既定値

それぞれの構造分解されたプロパティは、_既定値_ を持つことができます。既定値は、プロパティが存在しないか、値が `undefined` である場合に使用されます。プロパティが値 `null` を持つ場合は使用されません。

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

既定値には、任意の式を指定することができます。必要なときだけ評価されます。

```js
const { b = console.log("hey") } = { b: 2 };
// `b` が定義されており、既定値を評価する必要がないため、何らかのログを出力することはありません。
```

### 残余プロパティと残余要素

構造分解パターンは、残余プロパティ `...rest` で終了することができます。配列の構造分解の場合、反復可能オブジェクトの残りの要素が `rest` （または任意の名前） という新しい配列に収められます。オブジェクトの構造分解の場合、オブジェクトの構造分解パターンによってまだ選択されていない、列挙可能なすべてのプロパティが `rest` という新しいオブジェクトにコピーされます。

より正式には、 `...rest` 構文は、配列の構造分解では「残余要素」、オブジェクトの構造分解では「残余プロパティ」と呼ばれますが、多くの場合、これらはまとめて「残余プロパティ」と呼ばれます。

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

残余プロパティは、パターンの最後のものでなければならず、末尾のカンマがあってはなりません。

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// 常に最後の要素として残余演算子を使用することを考慮してください。
```

## 例

### 配列の構造分解

#### 簡単な例

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### 代入元より多い要素を持つ構造分解

代入の右側に指定された長さ _N_ の配列から構造分解する場合、代入の左側に指定された変数の数が _N_ より大きい場合、最初の _N_ 個の変数にのみ値が代入されます。残りの変数の値は undefined となります。

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### 変数の入れ替え

構造分解を使用して、複数の変数の値を入れ替えることができます。

構造分解を使用せずに 2 つの値を交換するには、一時変数（または、一部の低水準言語においては [XOR 交換アルゴリズム](https://ja.wikipedia.org/wiki/XOR%E4%BA%A4%E6%8F%9B%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)）が必要です。

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
```

#### 関数から返された配列の解析

関数は配列を返すことがあります。構造分解によって、返された配列の使用をより簡潔に記述できます。

この例では、`f()` は出力として値 `[1, 2]` を返しており、構造分解により 1 行で解析できます。

```js
function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### 返値の無視

関心のない返値は無視することができます。

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```

このようにすべての返値を無視することもできます。

```js
[, ,] = f();
```

ただし、この場合は、関数を呼び出して構造分解をまったく使用しないほうがより明確でしょう。必ずしも返値を使用する必要はありません。

#### 残余プロパティとしてのバインドパターンの使用

配列の構造分解の残余プロパティは、別の配列やオブジェクトの結合パターンにすることができます。残りの要素を集めた後に作成された配列から、内部の構造分解で構造を分解します。そのため、この方法では元の反復可能な要素に存在するプロパティにアクセスすることはできません。

```js
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1
```

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
```

これらのバインドパターンは、それぞれの残余プロパティがリストの最後のものである限り、入れ子にすることも可能です。

```js
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
```

一方、オブジェクトの構造分解では、残余プロパティとして識別子しか保有することができません。

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### 正規表現に一致するものからの値の展開

正規表現オブジェクトの [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドは一致するものを見つけ、最初に一致した文字列全体の一部と、正規表現内の各括弧で囲まれたグループに一致した文字列の部分を含む配列を返します。構造分解によって、簡単にこの配列の一部分を取り出せます。また必要でない場合は、完全一致を無視できます。

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/ja/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "ja/docs/Web/JavaScript"]

  const [, protocol, fullHost, fullPath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/ja/docs/Web/JavaScript"),
);
// "https"
```

#### 任意のイテレーターで配列の構造分解の使用

配列の構造分解を行うと、右辺の[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)が呼び出されます。したがって、配列に限らず、任意の反復可能オブジェクトを構造分解することができます。

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

反復可能でないものは、配列として構造分解できません。

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

反復可能オブジェクトは、すべてのバインドが代入されるまでしか反復処理しません。

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b] = obj; // 0 と 1 のみ出力
```

残りのバインドは貪欲に評価され、古い反復可能オブジェクトを使用する代わりに、新しい配列を作成します。

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b, ...rest] = obj; // Logs 0 1 2 3
console.log(rest); // [2, 3] （配列）
```

### オブジェクトの構造分解

#### 基本的な例

```js
const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true
```

#### 新しい変数名への代入

オブジェクトから変数を取り出して、オブジェクトのプロパティとは異なる名前の変数に代入することができます。

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

ここで、例えば、`const {p: foo} = o` はオブジェクト `o` から `p` という名前のプロパティを取り、`foo` という名前のローカル変数へ代入します。

#### 新しい変数名の割り当てと既定値の提供

プロパティは、次のようにすることができます。

- オブジェクトから取り出して異なる名前の変数に代入します。
- 取り出した値が `undefined` である場合に備えて、既定値を割り当てます。

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### 関数の引数として渡されたオブジェクトからのプロパティの展開

関数の引数に渡されたオブジェクトは、変数に展開し、関数本体内でアクセスすることも可能です。
オブジェクトの代入に関しては、構造分解構文により、新しい変数に元のプロパティと同じ名前または異なる名前を持たせることができ、元のオブジェクトがプロパティを定義していない場合の既定値を割り当てることができます。

ユーザーに関する情報を格納したオブジェクトを考えてみましょう。

```js
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
```

ここでは、合格したオブジェクトのプロパティを同じ名前の変数に展開する方法を示します。
引数値 `{ id }` は、関数に渡されたオブジェクトの `id` プロパティを同じ名前の変数に展開し、関数内で使用できるようにすることを示します。

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

展開した変数の名前を定義することができます。
ここでは、`displayName` というプロパティを展開し、関数本体内で使用するために `dname` という名前に変更しています。

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

入れ子になっているオブジェクトも展開することができます。
下記の例では、プロパティ `fullname.firstName` が `name` という変数に展開されています。

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### 関数の引数に対する既定値の設定

既定値は `=` で指定することができ、指定したプロパティが渡されたオブジェクトに存在しない場合、変数の値として使用されます。

既定値が、サイズが `'big'` で、座標が `x: 0, y: 0` で、半径が 25 の関数です。

```js
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // グラフの描画
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

上記の `drawChart` の関数呼び出し形式では、次のようにして、構造分解された左辺に、右辺側で空のオブジェクトリテラルを代入しています。

右辺の代入がない関数を書くこともできます。しかし、右辺の代入を取り除いた場合、関数は実行されたときに少なくともひとつの引数が提供されることを期待しますが、この形式では何も引数を指定せずに単純に `drawChart()` を呼び出すことができます。この設計は引数を指定せずに関数を呼び出せるようにしたい場合に役に立ちますし、もう一方の形式は、オブジェクトを確実に関数に渡したい場合に役に立ちます。

詳しくは、[デフォルト引数 > 既定値のある構造分解の引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters#既定値のある構造分解の引数)を参照してください。

### 入れ子になったオブジェクトと配列の構造分解

```js
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/ja/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

#### イテレーターでの構造分解の利用

```js
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

#### 計算されたオブジェクトのプロパティの名前と構造分解

[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)のような計算されたプロパティの名前も構造分解で使用できます。

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### 無効な JavaScript 識別子をプロパティ名として使用する

JavaScript で有効な代替識別子を与えることにより、JavaScript で有効ではない{{Glossary("Identifier", "識別子")}}であるプロパティ名を構造分解で使用できます。

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### プリミティブ値の構造分解

オブジェクトの構造分解は、[プロパティへのアクセス](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)とほぼ等価です。 つまり、プリミティブ値を分解しようとすると、値が対応するラッパーオブジェクトに取得され、プロパティはラッパーオブジェクトにアクセスされることになります。

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

プロパティへのアクセシビリティと同様に、`null` や `undefined` を構造分解すると {{jsxref("TypeError")}} が発生します。

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

これは、パターンが空のときにも起こります。

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### 配列とオブジェクトの構造分解の組み合わせ

配列とオブジェクトの構造分解は組み合わせることができます。配列 `props` の 3 番目の要素にあるオブジェクトの `name` プロパティが欲しい場合、次の操作ができます。

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### オブジェクトが分割されるときにはプロトタイプチェーンが参照される

オブジェクトが分割されるときで、自分自身のプロパティがアクセスされない場合は、プロトタイプチェーンを辿って参照が続けられます。

```js
const obj = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj;

console.log(self); // "123"
console.log(prot); // "456"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [代入演算子](/ja/docs/Web/JavaScript/Reference/Operators#代入演算子)
- [ES6 in Depth: Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) (hacks.mozilla.org, 2015)
