---
title: this
slug: Web/JavaScript/Reference/Operators/this
tags:
  - JavaScript
  - 言語機能
  - 演算子
  - Primary Expressions
  - リファレンス
  - this
browser-compat: javascript.operators.this
translation_of: Web/JavaScript/Reference/Operators/this
---
{{jsSidebar("Operators")}}

**関数の `this` キーワード** は、JavaScript ではほかの言語と少々異なる動作をします。また、[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)であるかどうかでも違いがあります。

ほとんどの場合、`this` の値はどのように関数が呼ばれたかによって決定されます (実行時結合)。これは実行時に代入によって設定することはできず、関数が呼び出されるたびに異なる可能性があります。ES5 では {{jsxref("Function.prototype.bind()", "bind()")}} メソッドが導入され、関数が{{jsxref('Operators/this', "どのように呼ばれたかに関係なく `this` の値を設定する", 'The_bind_method', 1)}}することができるようになり、ES2015 では、自身では `this` の結び付けを行わない[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)が導入されました (これは包含する構文上のコンテキストの `this` の値を保持します)。

{{EmbedInteractiveExample("pages/js/expressions-this.html")}}

## 構文

```
this
```

### 値

strict モードでない場合は、実行コンテキスト (グローバル、関数、eval) のプロパティで、常にオブジェクトへの参照です。 strict モードではどのような値でも取り得ます。

## 解説

### グローバルコンテキスト

グローバル実行コンテキスト (すべての関数の外側) では、strict モードであるかどうかにかかわらず、`this` はグローバルオブジェクトを参照します。

``` js
// ウェブブラウザーでは window オブジェクトもグローバルオブジェクトです。
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

> **Note:** コードが実行されている現在のコンテキストに関係なく、グローバルの {{jsxref("globalThis")}} プロパティを使用していつでも簡単にグローバルオブジェクトを取得できます。

### 関数コンテキスト

関数内での `this` の値は、関数の呼び出し方によって異なります。

下記のコードは [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)ではないため、また呼び出し時に `this` の値が設定されないため、`this` は既定でグローバルオブジェクトとなり、これはブラウザーでは {{domxref("Window", "window")}} です。

```js
function f1() {
  return this;
}

// ブラウザー上で
f1() === window; // true

// Node 上で
f1() === global; // true
```

ただし strict モードでは、実行コンテキストに入るときに `this` 値が設定されていないと、以下の例のように `undefined` のままになります。

```js
function f2() {
  'use strict'; // strict モードにする
  return this;
}

f2() === undefined; // true
```

> **Note:** 二番目の例において、`this` が {{jsxref("undefined")}} となるのは `f2` が直接呼び出されており、オブジェクトのメソッドやプロパティ (例えば `window.f2()`) ではないためです。この機能は初めて [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)への対応が始まったとき、一部のブラウザーが実装していませんでした。結果的に、これらのブラウザーは不正確に `window` オブジェクトを返していました。

関数の呼び出し時に `this` の値を特定の値に設定するには、以下の例のように {{jsxref("Function.prototype.call()", "call()")}} または {{jsxref("Function.prototype.apply()", "apply()")}} を使用します。

### クラスコンテキスト

[クラス](/ja/docs/Web/JavaScript/Reference/Classes)は関数の機能であるため、クラスと関数の `this` の動作は似ています。ただし、いくつかの違いと注意点があります。

クラスのコンストラクター内では、`this` は通常のオブジェクトです。クラス内のすべて静的でないメソッドは `this` のプロトタイプに追加されます。

```js
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}
  second(){}
  static third(){}
}

new Example(); // ['constructor', 'first', 'second']
```

> **Note:** 静的メソッドは `this` のプロパティではありません。クラス自身のプロパティです。

### 派生クラス

基本クラスのコンストラクターとは異なり、派生コンストラクターには初期の `this` の結び付けがありません。{{jsxref("Operators/super", "super()")}} を呼び出すとコンストラクター内に `this` の結び付けが作成され、基本的に以下のコードを評価する効果があります。ここで、Base は継承されたクラスです。

```js
this = new Base();
```

> **Warning:** `this` を `super()` の呼び出しの前に参照すると、エラーが発生します。

派生クラスはでは `super()` を呼び出す前に return をしてはいけません。ただし、 `Object` を返す場合やコンストラクターがない場合を除きます。

```js
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return {a: 5};
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // 参照エラー
```

## 例

### 関数コンテキスト内の this

```js
// オブジェクトを call や apply の最初の引数として渡すと、this がそれに結び付けられます。
var obj = {a: 'Custom'};

// 変数を定義すると、その変数がグローバルの window のプロパティとして割り当てられます。
var a = 'Global';

function whatsThis() {
  return this.a;  // this の値は関数の呼び出し方によって変わります
}

whatsThis();          // 'Global' はこの関数では関 this として設定されていないので、既定でグローバルの window オブジェクトになります
whatsThis.call(obj);  // 'Custom' が関数内の this として obj に設定されています
whatsThis.apply(obj); // 'Custom' が関数内の this として obj に設定されています
```

### this とオブジェクト変換

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// 最初の引数は 'this' として使用する
// オブジェクトで、続く引数は関数呼び出しの
// 引数として使用されます。
add.call(o, 5, 7); // 16

// 最初の引数は 'this' として使用する
// オブジェクトで、二番目の引数は関数呼び出しの
// 引数として使用される配列です。
add.apply(o, [10, 20]); // 34
```

なお、 strict モードでない場合、`call` と `apply` は、`this` として渡された値がオブジェクトではないと、内部の `ToObject` 操作を利用してオブジェクトに変換しようします。`7` や `'foo'` のようなプリミティブが渡された場合、関連するコンストラクターを使用してオブジェクトに変換されます。たとえば、プリミティブの数値である `7` は `new Number(7)` であるかのようにオブジェクトに変換され、文字列の `'foo'` は `new String('foo')` であるかのようにオブジェクトに変換されます。

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]
bar.call(undefined); // [object global]
```

### `bind` メソッド

ECMAScript 5 で {{jsxref("Function.prototype.bind()")}} が導入されました。`f.bind(someObject)` の呼び出しは、`f` と同じ内部とスコープを持つ新しい関数を生成し、ここが `this` が発生するオリジナルの関数ですが、関数がどのように使われるかにかかわらず、新しい関数では `bind` の最初の引数に永続的にバインドされます。

```js
function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind は一度しか機能しない
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
```

### アロー関数

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)では、`this` はそれを囲む構文上のコンテキストの `this` の値が設定されます。グローバルコードでは、グローバルオブジェクトが設定されます。

```js
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

> **Note:** アロー関数の呼び出し時に `this` 引数が `call`, `bind`, `apply` に渡されても無視されます。呼び出しに引数を加えることはできますが、最初の引数 (`thisArg`) は `null` を設定してください。


```js
// オブジェクトのメソッドとして呼び出す。
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// call を使用して this の設定を試みる
console.log(foo.call(obj) === globalObject); // true

// bind を使用して this の設定を試みる
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

何があっても、`foo` の `this` は生成されたときの値が設定されています (上記の例ではグローバルオブジェクトです)。同様のことが、ほかの関数内で生成したアロー関数にも適用されます。それらの `this` には、それを包含する構文上のコンテキストのものになります。

```js
// this を返す関数を返す bar メソッドを持つ
// obj を生成します。返された関数はアロー関数
// として生成されているため、その this は
// それを包含する関数の this に永続的に拘束
// されます。bar の値は呼び出し時に設定でき、
// 返値の関数の値に順に設定します。
var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// bar を obj のメソッドとして呼び出す際、その this を obj に設定します
// 返値の関数への参照を fn に割り当てます。
var fn = obj.bar();

// strict モードでは、this を設定せずに fn を呼び出すと
// 通常はグローバルオブジェクトか undefined が既定値となります。
console.log(fn() === obj); // true

// しかし obj のメソッドを call することなく参照するのは要注意です。
var fn2 = obj.bar;
// するとアロー関数の呼び出しで this は bar の
// this に従うため window と同じになります。
console.log(fn2()() == window); // true
```

上記では、関数 (この無名関数を A と呼びます) に `obj.bar` が返すアロー関数として生成されたほかの関数 (この無名関数を B と呼びます) を割り当てています。結果として、呼び出されたときに関数 B の `this` は、永続的に `obj.bar` (関数 A) の `this` が設定されます。返された関数 (関数 B) が呼びされるとき、その `this` は常に最初に設定されたものになります。上記のコード例では、関数 B の `this` は `obj` である関数 A の `this` が設定されているため、通常はその `this` に `undefined` かグローバルオブジェクト (または、以前の例のグローバルコンテキストのように、いずれかのメソッド) が設定されますが、`obj` の設定が残ります。

### オブジェクトのメソッドとして

関数がオブジェクトのメソッドとして呼び出されるとき、その `this` にはメソッドが呼び出されたオブジェクトが設定されます。

次の例では、`o.f()` が起動したとき、関数内の `this` には、`o` オブジェクトが関連付けられます。

```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

この動作は、関数定義の方法や場所に全く影響を受けないことに注意してください。前述の例では、`o` の定義中に `f` メンバーとして関数をインラインに定義しています。しかし、関数を最初に定義して、後から `o.f` に付け足すことができます。その結果は同じ動作になります。

```js
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```

これは、関数が `o` の `f` のメンバーとして呼び出されることだけが重要なことを示しています。

同様に、`this` の関連付けは、最も直近のメンバー参照にのみ影響を受けます。次の例では、関数が呼び出すとき、オブジェクト `o.b` の `g` メソッドとして呼び出しています。実行時に、関数内の `this` は `o.b` を参照します。オブジェクト自体が `o` のメンバーであるという事実は何の意味もありません。最も直近の参照のみが重要なのです。

```js
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42
```

#### オブジェクトのプロトタイプチェーン上の `this`

同じ概念が、オブジェクトのプロトタイプチェーンのどこかに定義されたメソッドにも当てはまります。メソッドがオブジェクトのプロトタイプチェーン上にあった場合、メソッドがオブジェクト上にあるかのように、`this` はメソッドを呼び出したオブジェクトを参照します。

```js
var o = {f: function() { return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

この例では、変数 `p` に割り当てられたオブジェクト自身は `f` プロパティを持たず、プロトタイプから継承しています。しかし、`f` に対する検索が、最終的に `o` でその名前を持つメンバーを見つけることは重要ではありません。検索は `p.f` への参照から開始されるため、関数内の `this` は `p` として参照されるオブジェクトの値を取ります。`f` は `p` のメソッドとして呼ばれたため、その `this` は `p` を参照します。これは、JavaScript のプロトタイプ継承の興味深い機能です。

#### ゲッター/セッターと `this`

再度、同じ概念が、ゲッターやセッターから呼ばれる関数にも当てはまります。ゲッターやセッターとして使用される関数は、このプロパティを設定するか、または得られている元のオブジェクトに関連付けられている `this` を持ちます。

```js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true});

console.log(o.average, o.sum); // 2, 6
```

### コンストラクターとして

関数がコンストラクターとして ({{jsxref("Operators/new", "new")}} キーワードとともに) 使用されたとき、その `this` は生成された新しいオブジェクトに関連付けられます。

> **Note:** コンストラクターの既定では、`this` で参照されるオブジェクトを返しますが、代わりにほかのオブジェクトを返すことができます (返値がオブジェクトではない場合、`this` オブジェクトが返されます)。

```js
/*
 * コンストラクターは下記のように動作します。
 *
 * function MyConstructor(){
 *   // 実際の関数本体のコードはこちらになります。
 *   // プロパティに代入することで、 |this| に必要な
 *   // プロパティを作成します。例えば、
 *   this.fum = "nom";
 *   // など...
 *
 *   // 関数にオブジェクトを返す return 文があれば、
 *   // そのオブジェクトが |new| 式の結果になります。
 *   // そうでなければ、式の結果は現在 |this| に
 *   // バインドされているオブジェクトになります
 *   // (つまり、最もよく見られる一般的なケースです)。
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a); // 38
```

最後の例 (`C2`) では、構築中にオブジェクトを返しているので、`this` が結び付けられている新しいオブジェクトは単に破棄されています。(これは根本的に "`this.a = 37;`" 文を死んだコードにしてしまっています。これは実行されるので、正確には死んだコードではありませんが、外部への影響がありません。)

### DOM イベントハンドラーとして

関数がイベントハンドラとして使用された場合、その `this` はリスナーが配置されている要素に設定されます ({{domxref("EventTarget/addEventListener", "addEventListener()")}} 以外のメソッドで動的に追加されたリスナーについては、この規約に従わないブラウザーもあります)。

```js
// リスナーとして呼び出された場合は、関連づけられた要素を青にする
function bluify(e) {
  // 常に true
  console.log(this === e.currentTarget);
  // currentTarget と target が同じオブジェクトであれば true
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// 文書内の各要素の一覧を取得
var elements = document.getElementsByTagName('*');

// クリックリスナーとして bluify を追加することで、
// 要素をクリックすると青くなるようになる
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}
```

### インラインイベントハンドラー内

コードがインラインの [on-イベントハンドラー](/ja/docs/Web/Events/Event_handlers)から呼び出されたとき、その `this` にはリスナーが配置されている DOM 要素が設定されます。

```html
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

上記のアラートは `button` と表示します。ただし、外側のコードがこのように設定された `this` を持っているだけだということに注意してください。

```html
<button onclick="alert((function() { return this; })());">
  Show inner this
</button>
```

この場合、内側の関数の `this` は設定されていないので、グローバルの window オブジェクトを返します (つまり、`this` が呼び出しによって設定されていないので、非 strict モードの既定オブジェクトです)。

### クラス内の this

通常の関数と同様に、メソッド内の `this` の値は、どのように呼び出されるかによって異なります。クラス内の `this` が常にクラスのインスタンスを参照するように、この動作をオーバーライドしておくと便利な場合もあります。これを実現するには、コンストラクターでクラスのメソッドをバインドします。

```js
class Car {
  constructor() {
    // 違いを示すために sayHi ではなく sayBye をバインドする
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}

class Bird {
  get name() {
    return 'Tweety';
  }
}

const car = new Car();
const bird = new Bird();

// メソッドの 'this' の値は呼び出し元に依存します
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// バインドされたメソッドの場合、'this' は呼び出し元に依存しません
bird.sayBye = car.sayBye;
bird.sayBye();  // Bye from Ferrari
```

> **Note:** クラスは常に strict モードのコードです。これを定義せずに `this` でメソッドを呼び出すとエラーが発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- [Gentle
  explanation of 'this' keyword in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
- グローバルコンテキストの取得: {{jsxref("globalThis")}}
