---
title: this
slug: Web/JavaScript/Reference/Operators/this
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`this`** キーワードは、関数本体などのコードを実行するコンテキストを指します。最も一般的な用途はオブジェクトメソッドで、この場合、`this` はメソッドが関連付けられているオブジェクトを指し、これにより、同じメソッドをさまざまなオブジェクトで再利用することができます。

JavaScript で `this` の値は、関数がどのように定義されているかではなく、どのように呼び出されるか(実行時の{{glossary("binding", "バインド方法")}})によって決まります。通常の関数がオブジェクトのメソッドとして呼び出された場合 (`obj.method()`)、`this` はそのオブジェクトを指します。単独の関数として呼び出された場合（オブジェクトに関連付けられていない func()）、this は通常、[グローバルオブジェクト](/ja/docs/Glossary/Global_object)（厳格モードでない場合）、グローバルオブジェクトまたは `undefined` （[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の場合）を指します。
{{jsxref("Function.prototype.bind()")}} メソッドは、`this` のバインドが変更されない関数を作成できます。また、{{jsxref("Function.prototype.apply()")}} および {{jsxref("Function.prototype.call()")}} メソッドは、特定の呼び出しに対して `this` の値を設定することもできます。

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)では、`this` の扱いが異なります。定義された時点で親スコープから継承します。この動作により、アロー関数はコールバックやコンテキストの保持を行う上で特に便利です。ただし、アロー関数には独自の `this` バインディングがありません。そのため、`bind()`、`apply()`、`call()` メソッドで `this` の値を設定することはできません。また、オブジェクトメソッドで現在のオブジェクトを指すこともできません。

{{InteractiveExample("JavaScript デモ: this 式")}}

```js interactive-example
const test = {
  prop: 42,
  func() {
    return this.prop;
  },
};

console.log(test.func());
// 予想される結果: 42
```

## 構文

```js-nolint
this
```

### 値

厳格モードでない場合は、`this` は常にオブジェクトを参照します。厳格モードでは、どのような値もどのような値でも取り得ます。値の決定方法に関する詳細情報は、下記を参照してください。

## 解説

`this` の値は、それが現れるコンテキスト（関数、クラス、グローバル）によって異なります。

### 関数コンテキスト

関数内での `this` の値は、関数の呼び出し方によって異なります。
`this` は関数の隠し引数と考えてください。関数定義で宣言される引数と同様に、`this` は関数本体が評価される際に言語が自動的に作成するバインディングです。

通常の関数（アロー関数やバインド済み関数などではない）において、`this` の値は関数が呼び出されるオブジェクトです。言い換えれば、関数呼び出しが `obj.f()` の方法である場合、`this` は `obj` を参照します。例を示します。

```js
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```

関数は同じですが、呼び出し方法によって `this` の値が異なることに注目してください。これは、関数への引数がどのように動作するのかと似ています。

`this` の値は、自分自身のプロパティとして機能を持つオブジェクトではなく、その機能を呼び出すために使用されるオブジェクトです。これを証明するために、[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)の上位にあるオブジェクトのメソッドを呼び出してみましょう。

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

`this` の値は、関数がオブジェクトに作成時に定義された場合でも、常にその関数がどのように呼び出されたかによって変化します。

```js
const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
```

メソッドにアクセスする値がプリミティブの場合、`this` はプリミティブ値となります。ただし、関数が厳格モードの場合のみです。

```js
function getThisStrict() {
  "use strict"; // 厳格モードに入る
  return this;
}

// デモ専用のものです。組み込みのプロトタイプを変更しないでください。
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

何らかの形でアクセスされることなく関数が呼び出された場合、`this` は `undefined` となります。ただし、関数が厳格モードの場合のみです。

```js
console.log(typeof getThisStrict()); // "undefined"
```

厳格モードではない場合、[`this` 置換](/ja/docs/Web/JavaScript/Reference/Strict_mode#this_の置き換えを行わない)と呼ばれる特別な処理により、この値が常にオブジェクトであることが保証されます。これはつまり、

- 関数が `this` を `undefined` または `null` に設定されて呼び出された場合、`this` は {{jsxref("globalThis")}} に置き換えられます。
- 関数が `this` をプリミティブ値に設定されて呼び出された場合、`this` はそのプリミティブ地のラッパーオブジェクトに置き換えられます。

```js
function getThis() {
  return this;
}

// デモ専用のものです。組み込みのプロトタイプを変更しないでください。
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

一般的な関数呼び出しでは、この値は関数の接頭辞（ドットの前の部分）を通して暗黙的に引数として渡されます。また、`this` の値は {{jsxref("Function.prototype.call()")}}、{{jsxref("Function.prototype.apply()")}}、{{jsxref("Reflect.apply()")}} のメソッドを使用して、明示的に設定することもできます。{{jsxref("Function.prototype.bind()")}} を使用すると、関数の呼び出し方法に関わらず変更されない特定の `this` 値を持つ新しい関数を作成することができます。これらのメソッドを使用する場合、関数が厳格モードでない場合でも、上記の `this` の置換ルールが適用されます。

#### コールバック

関数がコールバックとして渡される場合、`this` の値はコールバックがどのように呼び出されるかによって決まり、これはAPIの実装者によって決定されます。コールバックは通常、`this` の値が `undefined` で（オブジェクトに関連付けずに直接）呼び出されます。これは、関数が厳格モードでない場合、`this` の値はグローバルオブジェクト ({{jsxref("globalThis")}}) であることを意味します。これは、[反復処理可能な配列メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)、[`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) コンストラクターなどにも当てはまります。

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
```

API によっては、コールバックの呼び出し時に `this` の値を設定することができます。例えば、すべての反復処理配列メソッドと、{{jsxref("Set.prototype.forEach()")}} のような関連メソッドでは、オプションの `thisArg` 引数を受け入れます。/\

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

時には、`this` 値が `undefined` 以外でコールバックが呼び出されることもあります。例えば、{{jsxref("JSON.parse()")}} の `reviver` 引数と {{jsxref("JSON.stringify()")}} の `replacer` 引数はどちらも、この値が解釈/シリアライズできるプロパティが属するオブジェクトに設定されて呼び出されます。

#### アロー関数

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)では、`this` 値は周囲の字句コンテキストの `this` の値を保持します。言い換えれば、アロー関数の本体を評価する際、言語は新しい `this` のバインドを作成しません。

例えば、グローバルコードでは、`this` は厳格モードであるかどうかにかかわらず、常に `globalThis` となります。これは、[グローバルコンテキスト](#グローバルコンテキスト)のバインドによるものです。

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

アロー関数は、その関数が存在するスコープの `this` 値を囲む[クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)を作成します。つまり、アロー関数は「自動バインド」されているかのように動作します。つまり、どのように呼び出されたとしても、`this` は関数が作成された時点での値（例えば、グローバルオブジェクト）にバインドされます。他の関数内で作成されたアロー関数にも同じことが言えます。そのthisは、それを囲む字句コンテキストのままです。[下記の例を参照してください](#アロー関数内の_this)。

さらに、`call()`、`bind()`、`apply()` を使用してアロー関数を呼び出す場合、`thisArg` 引数は無視されます。ただし、これらのメソッドを使用しても、他にも引数を渡すことができます。

```js
const obj = { name: "obj" };

// call を使用して this を設定しようとする
console.log(foo.call(obj) === globalObject); // true

// bind を使用して this を設定しようとする
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### コンストラクター

関数がコンストラクター（{{jsxref("Operators/new", "new")}} キーワード付き）として使用される場合、コンストラクター関数がどのオブジェクトにアクセスしているかに関わらず、その `this` は、構築中の新しいオブジェクトにバインドされます。コンストラクターが別のプリミティブ値以外の値を返さない限り、`this` の値は `new` 式の値となります。

```js
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38
```

2 つ目の例 (`C2`) では、構築中にオブジェクトが返されるため、`this` にバインドされていた新しいオブジェクトは破棄されます。（これは本質的に、`this.a = 37;` の文をデッドコードにします。このコードは実行されるため、厳密にはデッドコードではありませんが、外部に影響を与えることなく削除することができます。）

#### super

`super.method()` 形式で関数が最初に呼び出された場合、`method` 関数内の `this` は `super.method()` 呼び出しの周辺の `this` 値と同じ値であり、通常 `super` が参照するオブジェクトとは異なります。これは、`super.method` が上記のオブジェクトメンバーにアクセスするようなものではないためです。これは、異なるバインドルールを持つ特別な構文です。例えば、[`super` のリファレンス](/ja/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super)を参照してください。

### クラスコンテキスト

[クラス](/ja/docs/Web/JavaScript/Reference/Classes)は、静的コンテキストとインスタンスコンテキストの 2 つに分けることができます。[コンストラクター](/ja/docs/Web/JavaScript/Reference/Classes/constructor)、メソッド、インスタンスフィールド初期化子（[パブリック](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)または[プライベート](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)）はインスタンスコンテキストに属します。[静的](/ja/docs/Web/JavaScript/Reference/Classes/static)メソッド、静的フィールド初期化子、静的初期化ブロックは静的コンテキストに属します。それぞれのコンテキストで、`this` の値が異なります。

クラスのコンストラクターは常に `new` で呼び出されるため、その動作は[関数コンストラクター](#コンストラクター)と同じです。`this` 値は、作成される新しいインスタンスです。 クラスメソッドは、オブジェクトリテラル内のメソッドと同じように動作します。`this` 値は、メソッドがアクセスされたオブジェクトです。 メソッドが他のオブジェクトに転送されない場合、`this` は通常、クラスのインスタンスです。

静的メソッドは `this` のプロパティではありません。クラス自体のプロパティです。つまり、それらは一般的にクラスにアクセスされるため、`this` はクラス（またはサブクラス）の値です。静的初期化ブロックも、`this` を現在のクラスに設定して評価します。

フィールド初期化子もクラスのコンテキストで評価されます。インスタンスフィールドは、`this` を構築中のインスタンスに設定して評価されます。静的フィールドは、`this` を現在のクラスに設定して評価されます。これが、フィールド初期化子でアロー関数が[インスタンスフィールドの場合はインスタンスに、静的フィールドの場合はクラスにバインドされる](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#メソッドとしては使用不可)理由です。

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```

#### 派生クラスのコンストラクター

基本クラスのコンストラクターとは異なり、派生コンストラクターには初期の `this` の結び付けがありません。{{jsxref("Operators/super", "super()")}} を呼び出すとコンストラクター内に `this` のバインドが作成され、基本的に以下のコードを評価する効果があります。ここで、`Base` は継承されたクラスです。

```js-nolint
this = new Base();
```

> [!WARNING]
> `this` を `super()` の呼び出しの前に参照すると、エラーが発生します。

派生クラスはでは `super()` を呼び出す前に return をしてはいけません。ただし、オブジェクトを返す場合やコンストラクターがない場合を除きます。

```js
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

### グローバルコンテキスト

グローバル実行コンテキスト（関数やクラスの外部、グローバルスコープで定義された[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)または[アロー関数](#アロー関数)の内部の場合もあり）では、スクリプトが動作する実行コンテキストによって `this` の値が決まります。 [コールバック](#コールバック)と同様に、`this` の値は実行環境（呼び出し側）によって決定されます。

スクリプトの最上位レベルでは、`this` 値は厳格モードであるかどうかに関わらず、{{jsxref("globalThis")}} を参照します。これは一般的にグローバルオブジェクトと同じです。例えば、ソースが HTML の [`<script>`](/ja/docs/Web/HTML/Reference/Elements/script) 要素内に置かれ、スクリプトとして実行された場合、`this === window` となります。

> [!NOTE]
> `globalThis` は一般的にグローバルオブジェクトと同じ概念です(つまり、`globalThis` にプロパティを追加するとグローバル変数になります)。これはブラウザーとノードの場合です。しかし、ホストはグローバルオブジェクトとは関係のない値を `globalThis` に指定することができます。

```js
// ウェブブラウザーでは window オブジェクトもグローバルオブジェクトです。
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

ソースが[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)として読み込まれた場合（HTML では、`type="module"` を `<script>` タグに追加するということ）、この場合は常に最上位で `undefined` となります。

ソースが [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) で実行される場合、`this` は[直接的な eval](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#直接的または間接的な_eval) の場合は囲んだ中のコンテキスト、間接的な eval の場合は `globalThis` と同じです（別個のグローバルスクリプトで実行されているかのように）。

```js
function test() {
  // 直接的な eval
  console.log(eval("this") === this);
  // 間接的な eval （厳格モード以外）
  console.log(eval?.("this") === globalThis);
  // 間接的な eval （厳格モード）
  console.log(eval?.("'use strict'; this") === globalThis);
}

test.call({ name: "obj" }); // Logs 3 "true"
```

なお、グローバルスコープのように見えても、実行時には実際には関数にラップされているソースコードもあります。例えば、Node.js の CommonJS モジュールは関数にラップされており、`this` 値が `module.exports` に設定されて実行されます。[イベントハンドラー属性](#インラインイベントハンドラー内の_this)は、この値が関連付けられている要素に設定されて実行されます。

オブジェクトリテラルでは `this` スコープを作成しません。オブジェクト内で定義された関数（メソッド）のみが作成されます。オブジェクトリテラルで `this` を使用すると、その値は周囲のスコープから継承されます。

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## 例

### 関数コンテキスト内の this

`this` 引数の値は、関数がどのように呼ばれるかによって決まり、定義のされ方によって決まるものではありません。

```js
// オブジェクトを 'call' や 'apply' の最初の引数として渡すと、'this' がそれに結び付けられます。
const obj = { a: "Custom" };

// var で宣言された変数は、'globalThis' のプロパティになります。
var a = "Global";

function whatsThis() {
  return this.a; // 'this' の値は関数の呼び出し方によって変わります
}

whatsThis(); // 'Global' です。厳格モードでなければ 'this' 引数の既定値は、'globalThis'
obj.whatsThis = whatsThis;
obj.whatsThis(); // 'Custom' です。'this' 引数は obj に結び付けられています
```

`call()` と `apply()` を使用すると、`this` の値を明示的な引数であるかのように渡すことができます。

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

// 最初の引数は暗黙的な 'this' 引数にバインドされます。
// 残りの引数は名前付き引数にバインドされます。
add.call(o, 5, 7); // 16

// 最初の引数は暗黙的な 'this' 引数にバインドされます。
// 第 2 引数は配列であり、そのメンバーが名前付き引数にバインドされます。
add.apply(o, [10, 20]); // 34
```

### this とオブジェクト変換

厳格モードでない場合、オブジェクトではない `this` 値で関数が呼び出されると、`this` 値はオブジェクトに置き換えられます。`null` と `undefined` は `globalThis` になります。`7` や 'foo' などのプリミティブは、関連するコンストラクターを使用してオブジェクトに変換されます。そのため、プリミティブの数値 `7` は {{jsxref("Number")}} ラッパークラスに変換され、文字列 'foo' は {{jsxref("String")}} ラッパークラスに変換されます。

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### bind() メソッド

[`f.bind(someObject)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) を呼び出すと、`f` と同じ本体とスコープを持つ新しい関数を生成しますが、関数がどのように呼び出されていても、`this` の値は `bind` の最初の引数に恒久的にバインドされます。

```js
function f() {
  return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" }); // bind は一度しか機能しない
console.log(h()); // azerty

const o = { a: 37, f, g, h };
console.log(o.a, o.f(), o.g(), o.h()); // 37 37 azerty azerty
```

### アロー関数内の this

アロー関数は、それを包含する実行コンテキストの `this` 値をクロージャとして作成します。次の例では、`this` の値を返す関数を返すメソッド `getThisGetter` を持つ `obj` を作成します。返される関数はアロー関数として作成されるため、その `this` は常に包含する関数の `this` にバインドされます。`getThisGetter` 内の `this` の値は、呼び出す際に設定することができ、その結果、返される関数の返値が設定されます。`getThisGetter` は厳格モードではない関数であると仮定します。つまり、厳格モードでないスクリプトに含まれ、クラスや厳格モードの関数にさらに入れ子にされていないということです。

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

`getThisGetter` を `obj` のメソッドとして呼び出すことができます。これにより、本体内部で `this` が `obj` にバインドされます。返された関数は変数 `fn` に割り当てられます。これで、`fn` を呼ぶと、返される `this` の値は依然として `getThisGetter` を呼び出して設定した値、つまり `obj` となります。返された関数がアロー関数でなかった場合、このような呼び出しでは `this` の値が `globalThis` となります。これは、`getThisGetter` が厳格モードではないためです。

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

しかし、`obj` のメソッドを呼び出さずにバインド解除すると、`getThisGetter` は依然として `this` の値が変化するメソッドであるため、注意が必要です。次の例で `fn2()()` を呼び出すと、`globalThis` が返されます。これは、`fn2()` の `this` に従うことで、`fn2()` はオブジェクトに関連付けられることなく呼び出されるため、`globalThis` となるためです。

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // 厳格モードでなければ true
```

この動作は、コールバックを定義する際にとても便利です。通常、各関数式は自分自身で `this` のバインドを作成し、上位スコープの `this` 値を隠してしまいます。つまり、`this` 値を気にしないのであれば関数をアロー関数として定義することができ、また、必要に応じて（例えばクラスメソッド内）で `this` のバインドを作成することができます。[`setTimeout()` を使用した例](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#call、apply、bind_の使用)を参照してください。

#### ゲッター/セッターと this

ゲッターおよびセッターにおける `this` は、プロパティが定義されているオブジェクトではなく、プロパティにアクセスするオブジェクトに基づきます。ゲッターまたはセッターとして使用される関数は、プロパティが設定または取得されるオブジェクトに `this` がバインドされています。

```js
function sum() {
  return this.a + this.b + this.c;
}

const o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(o, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});

console.log(o.average, o.sum); // 2 6
```

### DOM イベントハンドラー内の this

関数がイベントハンドラーとして使用された場合、その `this` はリスナーが配置されている要素に設定されます ({{domxref("EventTarget/addEventListener", "addEventListener()")}} 以外のメソッドで動的に追加されたリスナーについては、この規約に従わないブラウザーもあります)。

```js
// リスナーとして呼び出された場合は、関連づけられた要素を青にする
function bluify(e) {
  // 常に true
  console.log(this === e.currentTarget);
  // currentTarget と target が同じオブジェクトであれば true
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 文書内の各要素の一覧を取得
const elements = document.getElementsByTagName("*");

// クリックリスナーとして bluify を追加することで、
// 要素をクリックすると青くなるようになる
for (const element of elements) {
  element.addEventListener("click", bluify, false);
}
```

### インラインイベントハンドラー内の this

コードがインラインの[イベントハンドラー属性](/ja/docs/Web/HTML/Reference/Attributes#イベントハンドラー属性)から呼び出されたとき、その `this` にはリスナーが配置されている DOM 要素が設定されます。

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

上記のアラートは `button` と表示します。ただし、外側のコードがこのように設定された `this` を持っているだけだということに注意してください。

```html
<button onclick="alert((function () { return this; })());">
  Show inner this
</button>
```

この場合、内部関数の `this` 引数は `globalThis` にバインドされます（すなわち、厳格モードではない場合に `this` が呼び出される際に渡されない既定オブジェクト）。

### クラス内のメソッドのバインド

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
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
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
bird.sayBye(); // Bye from Ferrari
```

> [!NOTE]
> クラスは常に厳格モードのコードです。これを定義せずに `this` でメソッドを呼び出すとエラーが発生します。
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError because the 'sayHi' method tries to access 'this.name', but 'this' is undefined in strict mode.
> ```

ただし、自動バインドされたメソッドは、[クラスプロパティにアロー関数を使用すること](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#メソッドとしては使用不可)と同じ問題を抱えていることに注意してください。つまり、クラスの各インスタンスには、そのメソッドのコピーがそれぞれ保有されるため、メモリー使用量が増加します。 絶対に必要な場合のみ、これを使用してください。 [`Intl.NumberFormat.prototype.format()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#format_と_map_の使用) の実装を模倣することもできます。プロパティをゲッターとして定義し、アクセスされた際にバインド済み関数を返し、それを保存します。これにより、関数は一度だけ作成され、必要な場合にのみ作成されます。

### with 文内の this

[`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文は非推奨であり、厳格モードでは利用できませんが、通常の `this` バインドルールに対する例外として機能します。`with` 文内で関数が呼ばれ、その関数がスコープオブジェクトのプロパティである場合、`this` 値は `obj.` 接頭辞が存在するかのように、スコープオブジェクトにバインドされます。

```js
const obj = {
  foo() {
    return this;
  },
};

with (obj) {
  console.log(foo() === obj); // true
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("globalThis")}}
