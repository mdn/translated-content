---
title: 分割代入
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
tags:
  - Destructuring
  - 分割代入
  - ECMAScript 2015
  - ES6
  - JavaScript
  - 言語機能
  - 階層オブジェクトと配列の分割代入
  - 演算子
browser-compat: javascript.operators.destructuring
translation_of: Web/JavaScript/Reference/Operators/Destructuring_assignment
---
{{jsSidebar("Operators")}}

**分割代入** (Destructuring assignment) 構文は、配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする JavaScript の式です。

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html", "taller")}}

## 構文

```js
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## 解説

オブジェクトリテラルと配列リテラルは、いくつかのデータを*アドホック*にまとめる簡単な方法を提供します。

```js
const x = [1, 2, 3, 4, 5];
```

分割代入は似たような構文を使用しますが、代入の左辺が元の変数からどの値を受け取るかを定義します。

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

同様に、配列を代入の左辺で分割することができます。

```js
const [firstElement, secondElement] = list;
// これは以下のものと同様です
// const firstElement = list[0];
// const secondElement = list[1];
```

この機能は、Perl や Python などの言語に存在する機能に似ています。

## 例

### 配列の分割代入

#### 簡単な例

```js
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### 宣言後の割り当て

変数は宣言とは別に、分割代入によって値を代入することができます。

```js
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

代入の右辺に指定された長さ _N_ の配列からの配列分割では、代入の左辺に指定された変数の数が _N_ より大きい場合、最初の _N_ 個の変数にのみ値が割り当てられます。残りの変数の値は undefined となります。

```js
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined
```

#### 既定値

配列から取り出した値が `undefined` だった場合に使用される既定値を指定できます。

```js
let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

#### 変数の入れ替え

分割代入を使用して、複数の変数の値を入れ替えることができます。

分割代入を使用せずに 2 つの値を交換するには、一時変数 (または、一部の低水準言語においては [XOR 交換アルゴリズム](https://ja.wikipedia.org/wiki/XOR%E4%BA%A4%E6%8F%9B%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)) が必要です。

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```

#### 関数から返された配列の解析

関数は配列を返すことができます。分割代入によって、返された配列の使用をより簡潔に記述できます。

この例では、`f()` は出力として値 `[1, 2]` を返しており、分割代入により  1 行で解析できます。

```js
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
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
[,,] = f();
```

#### 配列の残余部分への変数の代入

配列を分割するときに残余パターンを使用して、配列の残りの部分を取り出して変数に代入できます。

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

左辺側で残余要素とともに末尾のカンマが使用されていると、{{jsxref("SyntaxError")}} が発生しますので注意してください。

```js example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest 要素の末尾にカンマがあってはなりません
// 常に最後の要素として rest 演算子を使用してください。
```

#### 正規表現の一致からの値取得

正規表現オブジェクトの [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドは一致するものを見つけ、最初に一致した文字列全体の一部と、正規表現内の各括弧で囲まれたグループに一致した文字列の部分を含む配列を返します。分割代入によって、簡単にこの配列の一部分を取り出せます。また必要でない場合は、完全一致を無視できます。

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// "https"
```

### オブジェクトの分割代入

#### 基本的な例

```js
const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true
```

#### 宣言から代入を分離

分割代入は代入文で宣言することなく行うことができます。

```js
let a, b;

({a, b} = {a: 1, b: 2});
```

> **Note:** 代入文の周りの `( ... )` は宣言のないオブジェクトリテラル分割代入を使用するときに必要な構文です。
>
> `{a, b} = {a: 1, b: 2}` は有効なスタンドアロンの構文ではありません。というのも、左辺の `{a, b}` はブロックでありオブジェクトリテラルではないと考えられるからです。
>
> ですが、`({a, b} = {a: 1, b: 2})` 形式は有効です。`const {a, b} = {a: 1, b: 2}` と考えられるためです。
>
> `( ... )` の式の前にセミコロンが必要です。そうしなければ、前の行の関数を実行に使用される可能性があります。

#### 新しい変数名への代入

オブジェクトから変数を取り出して、オブジェクトのプロパティとは異なる名前の変数に代入することができます。

```js
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

ここで、例えば、`const {p: foo} = o` はオブジェクト `o` から `p` という名前のプロパティを取り、`foo` という名前のローカル変数へ代入します。

#### 既定値

オブジェクトから取り出した値が `undefined` であるときの既定値を、変数に割り当てることができます。

```js
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

#### 新しい変数名の割り当てと既定値の提供

両方ともプロパティにすることができます。

- オブジェクトから取り出して異なる名前の変数に代入します。
- 取り出した値が `undefined` である場合に備えて、既定値を割り当てます。

```js
const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
```

#### 引数に指定されたオブジェクトの属性への参照

```js
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"
```

上記では `id`、`displayName`、`firstName` をオブジェクトから取得し、出力します。

#### 関数の引数に対する既定値の設定

```js
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
  // グラフの描画
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});
```

> **Note:** 上記の **`drawChart`** の関数シグネチャでは、次のようにして、分割代入の左辺に、右辺側で空のオブジェクトリテラルを代入しています。
> ```js
> {size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}
> ```
> 右辺の代入がない関数を書くこともできます。
> しかし、右辺の代入を取り除いた場合、関数は実行されたときに少なくともひとつの引数が提供されることを期待しますが、この形式では何も引数を指定せずに単純に **`drawChart()`** を呼び出すことができます。
> この設計は引数を指定せずに関数を呼び出せるようにしたい場合に役に立ちますし、もう一方の形式は、オブジェクトを確実に関数に渡したい場合に役に立ちます。

### 入れ子になったオブジェクトと配列の分割代入

```js
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/ja/docs/Tools/Scratchpad'
};

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

#### イテレーターでの分割代入の利用

```js
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

#### 計算されたオブジェクトのプロパティの名前と分割代入

[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)のような計算されたプロパティの名前も分割代入で使用できます。

```js
let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"
```

#### オブジェクトの分割代入の残り

[Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) の提案 (ステージ 4) は、分割代入に [rest](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters) 構文を追加しています。残余プロパティは、分割パターンによってすでに取り出されていない、残りの列挙可能なプロパティのキーを収集します。

```js
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

#### 無効な JavaScript 識別子をプロパティ名として使用する

JavaScript で有効な代替識別子を与えることにより、JavaScript で有効ではない{{glossary("Identifier", "識別子")}}であるプロパティ名を分割代入で使用できます。

```js
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

#### 配列とオブジェクトの分割代入の組み合わせ

配列とオブジェクトの分割代入は組み合わせることができます。配列 `props` の 3 番目の要素にあるオブジェクトの `name` プロパティが欲しい場合、次の操作ができます。

```js
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;

console.log(name); // "FizzBuzz"
```

#### オブジェクトが分割されるときにはプロトタイプチェーンが参照される

オブジェクトが分割されるときで、自分自身のプロパティがアクセスされない場合は、プロトタイプチェーンを辿って参照が続けられます。

```js
let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
// self "123"
// prot "456" (プロトタイプチェーンへのアクセス)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [代入演算子](/ja/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
