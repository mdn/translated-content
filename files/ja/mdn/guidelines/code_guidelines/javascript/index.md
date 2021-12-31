---
title: JavaScript ガイドライン
slug: MDN/Guidelines/Code_guidelines/JavaScript
tags:
  - Code
  - Guide
  - Guidelines
  - JavaScript
  - MDN Meta
---
{{MDNSidebar}}

以下のガイドラインでは、MDNのコードの例でどのようにJavaScriptを記述するのかを学習します。

以下はとてもシンプルな一連のJavaScriptのガイドラインです。もっと深く掘り下げることができますが、基本的には、複雑なウェブアプリケーションを書くための詳細なガイドラインより、より多くの人が理解できるような簡潔な例を書くためのシンプルなガイドラインを提供したいです。さらに深く知りたい場合は、こちらのガイドラインとの互換性がある[AirBnB JavaScript スタイルガイド(英語)](https://github.com/airbnb/javascript)をお勧めします。


## この記事では

- [JavaScriptガイドラインの概要](#general_javascript_guidelines)

  - [拡張されたシンタックスを使う](#use_expanded_syntax)
  - [JavaScript コメント](#javascript_comments)
  - [モダンな JS 機能を使う](#use_modern_js_features)

- [変数](#variables)

  - [変数の命名規則](#variable_naming)
  - [変数宣言](#declaring_variables)

- [演算子と比較](#operators_and_comparison)

  - [三項演算子](#ternary_operators)
  - [厳密等価演算子を使う](#use_strict_equality)
  - [ブーリアンテストでのショートカットを使う](#use_shortcuts_for_boolean_tests)

- [制御文](#control_statements)
- [文字列](#strings)

  - [テンプレート文字列を使う](#use_template_literals)
  - [innerHTMLではなく、 textContentを使う](#use_textcontent_not_innerhtml)

- [条件文](#conditionals)

  - [汎用性のあるループ](#general_purpose_looping)
  - [switch 文](#switch_statements)

- [関数とオブジェクト](#functions_and_objects)

  - [関数の命名規則](#function_naming)
  - [関数の定義](#defining_functions)
  - [オブジェクトの作成](#creating_objects)
  - [オブジェクトクラス](#object_classes)
  - [オブジェクトの命名規則](#object_naming)

- [配列](#arrays)

  - [配列の作成](#creating_arrays)
  - [配列への追加](#adding_to_an_array)

- [エラーハンドリング](#error_handling)

## JavaScript ガイドライン概要

### 拡張シンタックスを使う

私たちはJavaScriptでは、各行のJSを新しい行に書き、ブロックの始まりの角括弧はそれに関連した宣言と同じ行に収め、ブロックを閉じる角括弧は新しい行に書く、拡張シンタックスを使用しています。これはコードを非常に読み易くし、MDNでの統一性を高めます。

推奨

```js 良い例
function myFunc() {
  console.log('Hello!');
};
```

非推奨

```js 悪い例
function myFunc() { console.log('Hello!'); };
```

他にもスペースに関する言語特有の固有のルールがいくつかあります。演算子、オペランド、パラメーターなどの間にはスペースを入れる必要があります。

こちらの方が読みやすいです。

```js 良い例
if(dayOfWeek === 7 && weather === 'sunny') {
  goOnTrip('beach', 'car', ['ice cream', 'bucket and spade', 'beach towel']);
}
```

こちらよりも

```js 悪い例
if(dayOfWeek===7&&weather==='sunny'){
  goOnTrip('beach','car',['ice cream','bucket and spade','beach towel']);
}
```

加えて、以下の詳細を心に留めておいてください：

- 丸括弧を開けた後と、閉じる前に一文字分のスペースを入れないでください。 — `(myVar)`は良いですが、`( myVar )`は良くないです。
- 全てのステートメントはセミコロンで終えてください (";")。厳密にいうとJavaScriptではこのルールは任意ですが、MDNでは全てのコードサンプルにおいて必須です、なぜなら コードが明確になり、どこで各ステートメントが終わっているのかがはっきりすると考ているからです。
- 構文にてシングルクウォートが必要とされるいかなる箇所でも、JavaScriptではシングルクウォートを使ってください。
- 制御文キーワード、関数、ループキーワードと、丸括弧を開ける前にはスペースを入れないでください (例 `if() { ... }`, `function myFunc() { ... }, for(...) { ... }`)。
- 先の項目で説明したようなケースでは、丸括弧と中括弧を開ける前に一文字のスペースが必要です。

### JavaScriptコメント

自己文章化コードでないコードにコメントする際、JS-スタイルのコメントを使う：

```js 良い例
// これは JavaScript-スタイルのコメントです
```

コメントを参照している前途のコードの別の列に挿入する：

```js 良い例
function myFunc() {
  // 文字列"Hello"をブラウザのJSコンソールに出力
  console.log('Hello');
  //　新しい段落を作成、コンテンツでそれを埋める、そしてそれを<body>に追加
  let para = document.createElement('p');
  para.textContent = 'My new paragraph';
  document.body.appendChild(para);
}
```

両方の場合において、二つのスラッシュとコメントの間に一文字分のスペースを入れることに注意してください

### モダンなJS機能を使う

通常の使用状況下では、MDNの例にある、サポートされたモダンなJS機能を使ってください([アロー関数](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [プロミス](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await), [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)/[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), [テンプレート文字列](/en-US/docs/Web/JavaScript/Reference/Template_literals)、そして [スプレッド構文](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)のような) 。ウェブ業界では既にそれらの機能は多くの人に十分理解されている段階に来ていると考えられるので、私たちはこのガイドラインのたくさんの箇所にこれらを取り入れています。そして、まだそれらの機能をお使いになっていない方々には、スキルを磨くのをサポートするためにMDNをご活用ください。

> **注意:** 「通常の使用状況」とは、一般的な例の書き方という意味です。 参照先のページでは特別なJS機能　Reference pages covering specific JS features obviously need to use the features they are documenting!

## Variables

### Variable naming

For variable names use lowerCamelCasing, and use concise, human-readable, semantic names where appropriate.

Do this:

```js example-good
let playerScore = 0;

let speed = distance / time;
```

Not this:

```js example-bad
let thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;

let s = d/t;
```

> **Note:** The only place where it is OK to not use human-readable semantic names is where a very common recognized convention exists, such as using `i`, `j`, etc. for loop iterators.

### Declaring variables

When declaring variables and constants, use the [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) keywords, not [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var).

If a variable will not be reassigned, prefer `const`:

```js example-good
const myName = 'Chris';
console.log(myName);
```

Otherwise, use `let`:

```js example-good
let myAge = '40';
myAge++;
console.log('Happy birthday!');
```

This example uses `let` where it should prefer `const`. It will work but should be avoided in MDN code examples:

```js example-bad
let myName = 'Chris';
console.log(myName);
```

This example uses const for a variable that gets reassigned. The reassignment will throw an error:

```js example-bad
const myAge = '40';
myAge++;
console.log('Happy birthday!');
```

This example uses `var`, which should be avoided in MDN code examples unless it is really needed:

```js example-bad
var myAge = '40';
var myName = 'Chris';
```

## Operators and comparison

### Ternary operators

Ternary operators should be put on a single line:

```js example-good
let status = (age >= 18) ? 'adult' : 'minor';
```

Not nested:

```js example-bad
let status = (age >= 18)
  ? 'adult'
  : 'minor';
```

This is much harder to read.

### Use strict equality

Always use strict equality and inequality.

Do this:

```js example-good
name === 'Chris';
age !== 25;
```

Not this:

```js example-bad
name == 'Chris';
age != 25;
```

### Use shortcuts for boolean tests

Use shortcuts for boolean tests — use `x` and `!x`, not `x === true` and `x === false`.

## Control statements

Write control statements like this:

```js example-good
if(iceCream) {
  alert('Woo hoo!');
}
```

Not this:

```js example-bad
if (iceCream){
  alert('Woo hoo!');
}
```

Also bear in mind:

- There should be _no space_ between a control statement keyword and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.

## Strings

### Use template literals

For inserting values into strings, use string literals.

Do this:

```js example-good
let myName = 'Chris';
console.log(`Hi! I'm ${myName}!`);
```

Not this:

```js example-bad
let myName = 'Chris';
console.log('Hi! I\'m' + myName + '!');
```

### Use textContent, not innerHTML

When inserting strings into DOM nodes, use {{DOMxRef("Node.textContent")}}:

```js example-good
let text = 'Hello to all you good people';
const para = document.createElement('p');
para.textContent = text;
```

Not {{DOMxRef("Element.innerHTML")}}:

```js example-bad
let text = 'Hello to all you good people';
const para = document.createElement('p');
para.innerHTML = text;
```

`textContent` is a lot more efficient, and less error-prone than `innerHTML`.

## Conditionals

### General purpose looping

When [loops](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) are required, feel free to choose an appropriate loop out of the available ones ([`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while), etc.) Just make sure to keep the code as understandable as possible.

When using `for`/`for...of` loops, make sure to define the initializer properly, with a `let` keyword:

```js example-good
let cats = ['Athena', 'Luna'];
for(let i of cats) {
  console.log(i);
}
```

Not

```js example-bad
let cats = ['Athena', 'Luna'];
for(i of cats) {
  console.log(i);
}
```

Also bear in mind:

- There should be _no space_ between a loop keyword and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.

### Switch statements

Format switch statements like this:

```js example-good
let expr = 'Papayas';
switch(expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}`);
}
```

## Functions and objects

### Function naming

For function names use lowerCamelCasing, and use concise, human-readable, semantic names where appropriate.

Do this:

```js example-good
function sayHello() {
  alert('Hello!');
};
```

Not these:

```js example-bad
function SayHello() {
  alert('Hello!');
};

function notVeryObviousName() {
  alert('Hello!');
};
```

### Defining functions

Where possible, use the `function` declaration to define functions over function expressions:

Do this:

```js example-good
function sum(a, b) {
  return a + b;
}
```

Not this:

```js example-bad
let sum = function(a, b) {
  return a + b;
}
```

When using anonymous functions inside a method that requires a function as a parameter, it is acceptable (although not required) to use an arrow function to make the code shorter and cleaner.

So instead of this:

```js example-good
const array1 = [1, 2, 3, 4];
let sum = array1.reduce(function(a, b) {
  return a + b;
});
```

you could write this:

```js example-good
const array1 = [1, 2, 3, 4];
let sum = array1.reduce((a, b) =>
  a + b
);
```

Also bear in mind:

- There should be _no space_ between a function name and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.

### Creating objects

Use literals — not constructors — for creating general objects (i.e., when classes are not involved):

Do this:

```js example-good
let myObject = { };
```

Not this:

```js example-bad
let myObject = new Object();
```

### Object classes

Use ES class syntax for objects, not old-style constructors.

For example:

```js example-good
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
}
```

Use `extends` for inheritance:

```js example-good
class Teacher extends Person {
  ...
}
```

### Object naming

When defining an object class (as seen above), use UpperCamelCasing (also known as PascalCasing) for the class name, and lowerCamelCasing for the object property and method names.

When defining an object instance, either a literal or via a constructor, use lowerCamelCase for the instance name:

```js example-good
let hanSolo = new Person('Han Solo', 25, 'male');

let hanSolo = {
  name: 'Han Solo',
  age: 25,
  gender: 'male'
}
```

## Arrays

### Creating arrays

Use literals — not constructors — for creating arrays:

Do this:

```js example-good
let myArray = [ ];
```

Not this:

```js example-bad
let myArray = new Array(length);
```

### Adding to an array

When adding items to an array, use [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), not direct assignment. Given the following array:

```js
const pets = [];
```

do this:

```js example-good
pets.push('cat');
```

not this:

```js example-bad
pets[pets.length] = 'cat';
```

## Error handling

If certain states of your program throw uncaught errors, they will halt execution and potentially reduce the usefulness of the example. You should therefore catch errors using a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block:

```js example-good
try {
  console.log(results);
}
catch(e) {
  console.error(e);
}
```

## Good JavaScript examples on MDN

You can find good, concise, meaningful JavaScript snippets at the top of our [JavaScript language reference](/en-US/docs/Web/JavaScript/Reference) pages — browse through it to find some.

Our interactive (and other) examples are generally written to follow the above guidelines, although be aware that they may differ in some places as they were mostly written before the guidelines were newly written.

For API examples, we'd like to highlight a few examples we think are good:

- [`fetch()` examples](/en-US/docs/Web/API/fetch#examples)
- [`fillRect()` examples](/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect#examples) (the Canvas 2D examples are generally good, although they still use old-style `var`).
- [Payment Request API `show()`](/en-US/docs/Web/API/PaymentRequest/show) (The {{DOMxRef("PaymentRequest")}} examples are generally quite good).
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) (general good practices for HTML, CSS, and JavaScript, and a good demonstration of how to use snippets and link to full examples elsewhere).
- [Using the Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API) (more general good practices for using code snippets in a guide).
