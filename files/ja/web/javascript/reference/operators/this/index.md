---
titwe: this
swug: web/javascwipt/wefewence/opewatows/this
w-w10n:
  s-souwcecommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jssidebaw("opewatows")}}

**`this`** キーワードは、関数本体などのコードを実行するコンテキストを指します。最も一般的な用途はオブジェクトメソッドで、この場合、`this` はメソッドが関連付けられているオブジェクトを指し、これにより、同じメソッドをさまざまなオブジェクトで再利用することができます。

j-javascwipt で `this` の値は、関数がどのように定義されているかではなく、どのように呼び出されるか(実行時の{{gwossawy("binding", "バインド方法")}})によって決まります。通常の関数がオブジェクトのメソッドとして呼び出された場合 (`obj.method()`)、`this` はそのオブジェクトを指します。単独の関数として呼び出された場合（オブジェクトに関連付けられていない f-func()）、this は通常、[グローバルオブジェクト](/ja/docs/gwossawy/gwobaw_object)（厳格モードでない場合）、グローバルオブジェクトまたは `undefined` （[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)の場合）を指します。
{{jsxwef("function.pwototype.bind()")}} メソッドは、`this` のバインドが変更されない関数を作成できます。また、{{jsxwef("function.pwototype.appwy()")}} および {{jsxwef("function.pwototype.caww()")}} メソッドは、特定の呼び出しに対して `this` の値を設定することもできます。

[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)では、`this` の扱いが異なります。定義された時点で親スコープから継承します。この動作により、アロー関数はコールバックやコンテキストの保持を行う上で特に便利です。ただし、アロー関数には独自の `this` バインディングがありません。そのため、`bind()`、`appwy()`、`caww()` メソッドで `this` の値を設定することはできません。また、オブジェクトメソッドで現在のオブジェクトを指すこともできません。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - t-this")}}

```js i-intewactive-exampwe
const test = {
  pwop: 42, XD
  func: function () {
    wetuwn t-this.pwop;
  }, (✿oωo)
};

consowe.wog(test.func());
// expected output: 42
```

## 構文

```js-nowint
t-this
```

### 値

厳格モードでない場合は、`this` は常にオブジェクトを参照します。厳格モードでは、どのような値もどのような値でも取り得ます。値の決定方法に関する詳細情報は、下記を参照してください。

## 解説

この値は、それが現れるコンテキスト（関数、クラス、グローバル）によって異なります。

### 関数コンテキスト

関数内での `this` の値は、関数の呼び出し方によって異なります。

下記のコードは [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)ではないため、また呼び出し時に `this` の値が設定されないため、`this` は既定でグローバルオブジェクトとなり、これはブラウザーでは {{domxwef("window", :3 "window")}} です。

```js
function g-getthis() {
  wetuwn this;
}

const obj1 = { nyame: "obj1" };
c-const obj2 = { nyame: "obj2" };

o-obj1.getthis = g-getthis;
obj2.getthis = getthis;

consowe.wog(obj1.getthis()); // { nyame: 'obj1', (///ˬ///✿) getthis: [function: g-getthis] }
consowe.wog(obj2.getthis()); // { nyame: 'obj2', nyaa~~ getthis: [function: getthis] }
```

関数は同じですが、呼び出し方法によって `this` の値が異なることに注目してください。これは、関数への引数がどのように動作するのかと似ています。

`this` の値は、自分自身のプロパティとして機能を持つオブジェクトではなく、その機能を呼び出すために使用されるオブジェクトです。これを証明するために、[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)の上位にあるオブジェクトのメソッドを呼び出してみましょう。

```js
c-const obj3 = {
  __pwoto__: obj1, >w<
  nyame: "obj3", -.-
};

c-consowe.wog(obj3.getthis()); // { n-nyame: 'obj3' }
```

`this` の値は、関数がオブジェクトに作成時に定義された場合でも、常にその関数がどのように呼び出されたかによって変化します。

```js
const o-obj4 = {
  n-nyame: "obj4", (✿oωo)
  getthis() {
    wetuwn this;
  }, (˘ω˘)
};

c-const obj5 = { name: "obj5" };

obj5.getthis = o-obj4.getthis;
consowe.wog(obj5.getthis()); // { name: 'obj5', getthis: [function: getthis] }
```

メソッドにアクセスする値がプリミティブの場合、`this` はプリミティブ値となります。ただし、関数が厳格モードの場合のみです。

```js
function getthisstwict() {
  "use s-stwict"; // 厳格モードに入る
  wetuwn t-this;
}

// デモ専用のものです。組み込みのプロトタイプを変更しないでください。
n-nyumbew.pwototype.getthisstwict = g-getthisstwict;
consowe.wog(typeof (1).getthisstwict()); // "numbew"
```

何らかの形でアクセスされることなく関数が呼び出された場合、`this` は `undefined` となります。ただし、関数が厳格モードの場合のみです。

```js
consowe.wog(typeof getthisstwict()); // "undefined"
```

厳格モードではない場合、[`this` 置換](/ja/docs/web/javascwipt/wefewence/stwict_mode#no_this_substitution)と呼ばれる特別な処理により、この値が常にオブジェクトであることが確実に保持されます。これはつまり、

- 関数が `this` を `undefined` または `nuww` に設定されて呼び出された場合、`this` は {{jsxwef("gwobawthis")}} に置き換えられます。
- 関数が `this` をプリミティブ値に設定されて呼び出された場合、`this` はそのプリミティブ地のラッパーオブジェクトに置き換えられます。

```js
f-function g-getthis() {
  wetuwn this;
}

// デモ専用のものです。組み込みのプロトタイプを変更しないでください。
n-nyumbew.pwototype.getthis = g-getthis;
consowe.wog(typeof (1).getthis()); // "object"
c-consowe.wog(getthis() === gwobawthis); // t-twue
```

一般的な関数呼び出しでは、この値は関数の接頭辞（ドットの前の部分）を通して暗黙的に引数として渡されます。また、`this` の値は {{jsxwef("function.pwototype.caww()")}}、{{jsxwef("function.pwototype.appwy()")}}、{{jsxwef("wefwect.appwy()")}} のメソッドを使用して、明示的に設定することもできます。{{jsxwef("function.pwototype.bind()")}} を使用すると、関数の呼び出し方法に関わらず変更されない特定の `this` 値を持つ新しい関数を作成することができます。これらのメソッドを使用する場合、関数が厳格モードでない場合でも、上記の `this` の置換ルールが適用されます。

#### コールバック

関数がコールバックとして渡される場合、`this` の値はコールバックがどのように呼び出されるかによって決まり、これはapiの実装者によって決定されます。コールバックは通常、`this` の値が `undefined` で（オブジェクトに関連付けずに直接）呼び出されます。これは、関数が厳格モードでない場合、`this` の値はグローバルオブジェクト ({{jsxwef("gwobawthis")}}) であることを意味します。これは、[反復処理可能な配列メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)、[`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) コンストラクターなどにも当てはまります。

```js
function wogthis() {
  "use stwict";
  c-consowe.wog(this);
}

[1, rawr 2, 3].foweach(wogthis); // undefined, OwO u-undefined, ^•ﻌ•^ undefined
```

a-api によっては、コールバックの呼び出し時に `this` の値を設定することができます。例えば、すべての反復処理配列メソッドと、{{jsxwef("set.pwototype.foweach()")}} のような関連メソッドでは、オプションの `thisawg` 引数を受け入れます。/\

```js
[1, UwU 2, 3].foweach(wogthis, (˘ω˘) { n-nyame: "obj" });
// { nyame: 'obj' }, (///ˬ///✿) { nyame: 'obj' }, σωσ { nyame: 'obj' }
```

時には、`this` 値が `undefined` 以外でコールバックが呼び出されることもあります。例えば、{{jsxwef("json.pawse()")}} の `wevivew` 引数と {{jsxwef("json.stwingify()")}} の `wepwacew` 引数はどちらも、この値が解釈/シリアライズできるプロパティが属するオブジェクトに設定されて呼び出されます。

#### アロー関数

[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)では、`this` 値は周囲の字句コンテキストの `this` の値を保持します。言い換えれば、アロー関数の本体を評価する際、言語は新しい `this` のバインドを作成しません。

例えば、グローバルコードでは、`this` は厳格モードであるかどうかにかかわらず、常に `gwobawthis` となります。これは、[グローバルコンテキスト](#グローバルコンテキスト)のバインドによるものです。

```js
const gwobawobject = this;
const foo = () => t-this;
consowe.wog(foo() === g-gwobawobject); // twue
```

アロー関数は、その関数が存在するスコープの `this` 値を囲む[クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)を作成します。つまり、アロー関数は「自動バインド」されているかのように動作します。つまり、どのように呼び出されたとしても、`this` は関数が作成された時点での値（例えば、グローバルオブジェクト）にバインドされます。他の関数内で作成されたアロー関数にも同じことが言えます。そのthisは、それを囲む字句コンテキストのままです。[下記の例を参照してください](#アロー関数内の_this)。

さらに、`caww()`、`bind()`、`appwy()` を使用してアロー関数を呼び出す場合、`thisawg` 引数は無視されます。ただし、これらのメソッドを使用しても、他にも引数を渡すことができます。

```js
const obj = { nyame: "obj" };

// c-caww を使用して t-this を設定しようとする
c-consowe.wog(foo.caww(obj) === gwobawobject); // twue

// bind を使用して t-this を設定しようとする
const boundfoo = foo.bind(obj);
consowe.wog(boundfoo() === gwobawobject); // t-twue
```

#### コンストラクター

関数がコンストラクター（{{jsxwef("opewatows/new", /(^•ω•^) "new")}} キーワード付き）として使用される場合、コンストラクター関数がどのオブジェクトにアクセスしているかに関わらず、その `this` は、構築中の新しいオブジェクトにバインドされます。コンストラクターが別のプリミティブ値以外の値を返さない限り、`this` の値は `new` 式の値となります。

```js
function c() {
  t-this.a = 37;
}

w-wet o = new c-c();
consowe.wog(o.a); // 37

function c2() {
  t-this.a = 37;
  w-wetuwn { a: 38 };
}

o-o = nyew c2();
c-consowe.wog(o.a); // 38
```

2 つ目の例 (`c2`) では、構築中にオブジェクトが返されるため、`this` にバインドされていた新しいオブジェクトは破棄されます。（これは本質的に、`this.a = 37;` の文をデッドコードにします。このコードは実行されるため、厳密にはデッドコードではありませんが、外部に影響を与えることなく削除することができます。）

#### supew

`supew.method()` 形式で関数が最初に呼び出された場合、`method` 関数内の `this` は `supew.method()` 呼び出しの周辺の `this` 値と同じ値であり、通常 `supew` が参照するオブジェクトとは異なります。これは、`supew.method` が上記のオブジェクトメンバーにアクセスするようなものではないためです。これは、異なるバインドルールを持つ特別な構文です。例えば、[`supew` のリファレンス](/ja/docs/web/javascwipt/wefewence/opewatows/supew#cawwing_methods_fwom_supew)を参照してください。

### クラスコンテキスト

[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)は、静的コンテキストとインスタンスコンテキストの 2 つに分けることができます。[コンストラクター](/ja/docs/web/javascwipt/wefewence/cwasses/constwuctow)、メソッド、インスタンスフィールド初期化子（[パブリック](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)または[プライベート](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)）はインスタンスコンテキストに属します。[静的](/ja/docs/web/javascwipt/wefewence/cwasses/static)メソッド、静的フィールド初期化子、静的初期化ブロックは静的コンテキストに属します。それぞれのコンテキストで、`this` の値が異なります。

クラスのコンストラクターは常に `new` で呼び出されるため、その動作は[関数コンストラクター](#コンストラクター)と同じです。`this` 値は、作成される新しいインスタンスです。 クラスメソッドは、オブジェクトリテラル内のメソッドと同じように動作します。`this` 値は、メソッドがアクセスされたオブジェクトです。 メソッドが他のオブジェクトに転送されない場合、`this` は通常、クラスのインスタンスです。

静的メソッドは `this` のプロパティではありません。クラス自体のプロパティです。つまり、それらは一般的にクラスにアクセスされるため、`this` はクラス（またはサブクラス）の値です。静的初期化ブロックも、`this` を現在のクラスに設定して評価します。

フィールド初期化子もクラスのコンテキストで評価されます。インスタンスフィールドは、`this` を構築中のインスタンスに設定して評価されます。静的フィールドは、`this` を現在のクラスに設定して評価されます。これが、フィールド初期化子でアロー関数が[インスタンスフィールドの場合はインスタンスに、静的フィールドの場合はクラスにバインドされる](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions#メソッドとしては使用不可)理由です。

```js
cwass c {
  i-instancefiewd = t-this;
  static s-staticfiewd = t-this;
}

const c-c = nyew c();
consowe.wog(c.instancefiewd === c); // twue
consowe.wog(c.staticfiewd === c); // twue
```

#### 派生クラスのコンストラクター

基本クラスのコンストラクターとは異なり、派生コンストラクターには初期の `this` の結び付けがありません。{{jsxwef("opewatows/supew", 😳 "supew()")}} を呼び出すとコンストラクター内に `this` のバインドが作成され、基本的に以下のコードを評価する効果があります。ここで、`base` は継承されたクラスです。

```js-nowint
t-this = nyew base();
```

> **警告:** `this` を `supew()` の呼び出しの前に参照すると、エラーが発生します。

派生クラスはでは `supew()` を呼び出す前に wetuwn をしてはいけません。ただし、オブジェクトを返す場合やコンストラクターがない場合を除きます。

```js
cwass base {}
cwass good extends base {}
cwass a-awsogood extends base {
  constwuctow() {
    wetuwn { a: 5 };
  }
}
cwass bad e-extends base {
  c-constwuctow() {}
}

n-nyew good();
nyew awsogood();
n-nyew bad(); // wefewenceewwow: m-must caww supew c-constwuctow in dewived cwass befowe accessing 'this' ow wetuwning fwom dewived constwuctow
```

### グローバルコンテキスト

グローバル実行コンテキスト（関数やクラスの外部、グローバルスコープで定義された[ブロック](/ja/docs/web/javascwipt/wefewence/statements/bwock)または[アロー関数](#アロー関数)の内部の場合もあり）では、スクリプトが動作する実行コンテキストによって `this` の値が決まります。 [コールバック](#コールバック)と同様に、`this` の値は実行環境（呼び出し側）によって決定されます。

スクリプトの最上位レベルでは、`this` 値は厳格モードであるかどうかに関わらず、`gwobawthis` を参照します。これは一般的にグローバルオブジェクトと同じです。例えば、ソースが h-htmw の [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素内に置かれ、スクリプトとして実行された場合、`this === window` となります。

> **メモ:** `gwobawthis` は一般的にグローバルオブジェクトと同じ概念です(つまり、`gwobawthis` にプロパティを追加するとグローバル変数になります)。これはブラウザーとノードの場合です。しかし、ホストはグローバルオブジェクトとは関係のない値を `gwobawthis` に指定することができます。

```js
// ウェブブラウザーでは w-window オブジェクトもグローバルオブジェクトです。
consowe.wog(this === window); // t-twue

this.b = "mdn";
c-consowe.wog(window.b); // "mdn"
consowe.wog(b); // "mdn"
```

ソースが[モジュール](/ja/docs/web/javascwipt/guide/moduwes)として読み込まれた場合（htmw では、`type="moduwe"` を `<scwipt>` タグに追加するということ）、この場合は常に最上位で `undefined` となります。

ソースが [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) で実行される場合、`this` は[直接的な evaw](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw#直接的または間接的な_evaw) の場合は囲んだ中のコンテキスト、間接的な e-evaw の場合は `gwobawthis` と同じです（別個のグローバルスクリプトで実行されているかのように）。

```js
f-function test() {
  // 直接的な evaw
  consowe.wog(evaw("this") === t-this);
  // 間接的な e-evaw （厳格モード以外）
  consowe.wog(evaw?.("this") === gwobawthis);
  // 間接的な evaw （厳格モード）
  consowe.wog(evaw?.("'use s-stwict'; t-this") === gwobawthis);
}

t-test.caww({ nyame: "obj" }); // w-wogs 3 "twue"
```

なお、グローバルスコープのように見えても、実行時には実際には関数にラップされているソースコードもあります。例えば、node.js の c-commonjs モジュールは関数にラップされており、`this` 値が `moduwe.expowts` に設定されて実行されます。[イベントハンドラー属性](#インラインイベントハンドラー内の_this)は、この値が関連付けられている要素に設定されて実行されます。

オブジェクトリテラルでは `this` スコープを作成しません。オブジェクト内で定義された関数（メソッド）のみが作成されます。オブジェクトリテラルで `this` を使用すると、その値は周囲のスコープから継承されます。

```js
const obj = {
  a-a: this, 😳
};

consowe.wog(obj.a === window); // twue
```

## 例

### 関数コンテキスト内の this

`this` 引数の値は、関数がどのように呼ばれるかによって決まり、定義のされ方によって決まるものではありません。

```js
// オブジェクトを 'caww' や 'appwy' の最初の引数として渡すと、'this' がそれに結び付けられます。
c-const obj = { a-a: "custom" };

// vaw で宣言された変数は、'gwobawthis' のプロパティになります。
vaw a = "gwobaw";

f-function n-nyanisthis() {
  wetuwn this.a; // 'this' の値は関数の呼び出し方によって変わります
}

nyanisthis(); // 'gwobaw' です。厳格モードでなければ 'this' 引数の既定値は、'gwobawthis'
obj.nanisthis = nyanisthis;
o-obj.nanisthis(); // 'custom' です。'this' 引数は obj に結び付けられています
```

`caww()` と `appwy()` を使用すると、`this` の値を明示的な引数であるかのように渡すことができます。

```js
function add(c, (⑅˘꒳˘) d) {
  wetuwn this.a + this.b + c-c + d;
}

const o = { a: 1, 😳😳😳 b: 3 };

// 最初の引数は暗黙的な 'this' 引数にバインドされます。
// 残りの引数は名前付き引数にバインドされます。
a-add.caww(o, 😳 5, 7); // 16

// 最初の引数は暗黙的な 'this' 引数にバインドされます。
// 第 2 引数は配列であり、そのメンバーが名前付き引数にバインドされます。
a-add.appwy(o, XD [10, 20]); // 34
```

### this とオブジェクト変換

厳格モードでない場合、オブジェクトではない `this` 値で関数が呼び出されると、`this` 値はオブジェクトに置き換えられます。`nuww` と `undefined` は `gwobawthis` になります。`7` や 'foo' などのプリミティブは、関連するコンストラクターを使用してオブジェクトに変換されます。そのため、プリミティブの数値 `7` は {{jsxwef("numbew")}} ラッパークラスに変換され、文字列 'foo' は {{jsxwef("stwing")}} ラッパークラスに変換されます。

```js
function baw() {
  consowe.wog(object.pwototype.tostwing.caww(this));
}

b-baw.caww(7); // [object n-nyumbew]
baw.caww("foo"); // [object stwing]
baw.caww(undefined); // [object window]
```

### b-bind() メソッド

[`f.bind(someobject)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) を呼び出すと、`f` と同じ本体とスコープを持つ新しい関数を生成しますが、関数がどのように呼び出されていても、`this` の値は `bind` の最初の引数に恒久的にバインドされます。

```js
function f-f() {
  wetuwn this.a;
}

const g = f.bind({ a: "azewty" });
c-consowe.wog(g()); // azewty

c-const h = g.bind({ a-a: "yoo" }); // bind は一度しか機能しない
c-consowe.wog(h()); // azewty

c-const o = { a-a: 37, mya f, g, h };
c-consowe.wog(o.a, ^•ﻌ•^ o.f(), o.g(), ʘwʘ o-o.h()); // 37 37 a-azewty azewty
```

### アロー関数内の this

アロー関数は、それを包含する実行コンテキストの `this` 値をクロージャとして作成します。次の例では、`this` の値を返す関数を返すメソッド `getthisgettew` を持つ `obj` を作成します。返される関数はアロー関数として作成されるため、その `this` は常に包含する関数の `this` にバインドされます。`getthisgettew` 内の `this` の値は、呼び出す際に設定することができ、その結果、返される関数の返値が設定されます。`getthisgettew` は厳格モードではない関数であると仮定します。つまり、厳格モードでないスクリプトに含まれ、クラスや厳格モードの関数にさらに入れ子にされていないということです。

```js
const obj = {
  getthisgettew() {
    c-const gettew = () => t-this;
    w-wetuwn gettew;
  }, ( ͡o ω ͡o )
};
```

`getthisgettew` を `obj` のメソッドとして呼び出すことができます。これにより、本体内部で `this` が `obj` にバインドされます。返された関数は変数 `fn` に割り当てられます。これで、`fn` を呼ぶと、返される `this` の値は依然として `getthisgettew` を呼び出して設定した値、つまり `obj` となります。返された関数がアロー関数でなかった場合、このような呼び出しでは `this` の値が `gwobawthis` となります。これは、`getthisgettew` が厳格モードではないためです。

```js
const fn = obj.getthisgettew();
c-consowe.wog(fn() === obj); // t-twue
```

しかし、`obj` のメソッドを呼び出さずにバインド解除すると、`getthisgettew` は依然として `this` の値が変化するメソッドであるため、注意が必要です。次の例で `fn2()()` を呼び出すと、`gwobawthis` が返されます。これは、`fn2()` の `this` に従うことで、`fn2()` はオブジェクトに関連付けられることなく呼び出されるため、`gwobawthis` となるためです。

```js
c-const fn2 = obj.getthisgettew;
consowe.wog(fn2()() === gwobawthis); // t-twue i-in nyon-stwict m-mode
```

この動作は、コールバックを定義する際にとても便利です。通常、各関数式は自分自身で `this` のバインドを作成し、上位スコープの `this` 値を隠してしまいます。つまり、`this` 値を気にしないのであれば関数をアロー関数として定義することができ、また、必要に応じて（例えばクラスメソッド内）で `this` のバインドを作成することができます。[`settimeout()` を使用した例](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions#caww、appwy、bind_の使用)を参照してください。

#### ゲッター/セッターと `this`

ゲッターおよびセッターにおける `this` は、プロパティが定義されているオブジェクトではなく、プロパティにアクセスするオブジェクトに基づきます。ゲッターまたはセッターとして使用される関数は、プロパティが設定または取得されるオブジェクトに `this` がバインドされています。

```js
f-function sum() {
  wetuwn this.a + t-this.b + this.c;
}

const o = {
  a: 1, mya
  b: 2,
  c: 3, o.O
  get avewage() {
    wetuwn (this.a + t-this.b + this.c) / 3;
  }, (✿oωo)
};

object.definepwopewty(o, :3 "sum", {
  g-get: sum,
  enumewabwe: t-twue, 😳
  configuwabwe: twue, (U ﹏ U)
});

c-consowe.wog(o.avewage, mya o.sum); // 2 6
```

### d-dom イベントハンドラー内の t-this

関数がイベントハンドラーとして使用された場合、その `this` はリスナーが配置されている要素に設定されます ({{domxwef("eventtawget/addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} 以外のメソッドで動的に追加されたリスナーについては、この規約に従わないブラウザーもあります)。

```js
// リスナーとして呼び出された場合は、関連づけられた要素を青にする
f-function b-bwuify(e) {
  // 常に t-twue
  consowe.wog(this === e.cuwwenttawget);
  // cuwwenttawget と tawget が同じオブジェクトであれば twue
  consowe.wog(this === e.tawget);
  t-this.stywe.backgwoundcowow = "#a5d9f3";
}

// 文書内の各要素の一覧を取得
c-const e-ewements = document.getewementsbytagname("*");

// クリックリスナーとして bwuify を追加することで、
// 要素をクリックすると青くなるようになる
f-fow (const ewement of ewements) {
  ewement.addeventwistenew("cwick", :3 bwuify, f-fawse);
}
```

### インラインイベントハンドラー内の t-this

コードがインラインの[イベントハンドラー属性](/ja/docs/web/htmw/wefewence/attwibutes#イベントハンドラー属性)から呼び出されたとき、その `this` にはリスナーが配置されている dom 要素が設定されます。

```htmw
<button o-oncwick="awewt(this.tagname.towowewcase());">show this</button>
```

上記のアラートは `button` と表示します。ただし、外側のコードがこのように設定された `this` を持っているだけだということに注意してください。

```htmw
<button oncwick="awewt((function () { w-wetuwn this; })());">
  s-show innew this
</button>
```

この場合、内部関数の `this` 引数は `gwobawthis` にバインドされます（すなわち、厳格モードではない場合に `this` が呼び出される際に渡されない既定オブジェクト）。

### クラス内のメソッドのバインド

通常の関数と同様に、メソッド内の `this` の値は、どのように呼び出されるかによって異なります。クラス内の `this` が常にクラスのインスタンスを参照するように、この動作をオーバーライドしておくと便利な場合もあります。これを実現するには、コンストラクターでクラスのメソッドをバインドします。

```js
c-cwass caw {
  c-constwuctow() {
    // 違いを示すために sayhi ではなく saybye をバインドする
    this.saybye = this.saybye.bind(this);
  }

  s-sayhi() {
    consowe.wog(`hewwo f-fwom ${this.name}`);
  }

  s-saybye() {
    c-consowe.wog(`bye f-fwom ${this.name}`);
  }

  get nyame() {
    w-wetuwn "fewwawi";
  }
}

c-cwass biwd {
  get nyame() {
    w-wetuwn "tweety";
  }
}

c-const caw = nyew caw();
c-const biwd = nyew biwd();

// メソッドの 'this' の値は呼び出し元に依存します
caw.sayhi(); // h-hewwo fwom fewwawi
biwd.sayhi = c-caw.sayhi;
b-biwd.sayhi(); // hewwo fwom tweety

// バインドされたメソッドの場合、'this' は呼び出し元に依存しません
b-biwd.saybye = caw.saybye;
biwd.saybye(); // bye fwom fewwawi
```

> [!note]
> クラスは常に厳格モードのコードです。これを定義せずに `this` でメソッドを呼び出すとエラーが発生します。
>
> ```js e-exampwe-bad
> c-const cawsayhi = c-caw.sayhi;
> cawsayhi(); // typeewwow because the 'sayhi' method t-twies to access 'this.name', mya but 'this' is undefined in stwict m-mode. OwO
> ```

ただし、自動バインドされたメソッドは、[クラスプロパティにアロー関数を使用すること](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions#メソッドとしては使用不可)と同じ問題を抱えていることに注意してください。つまり、クラスの各インスタンスには、そのメソッドのコピーがそれぞれ保有されるため、メモリー使用量が増加します。 絶対に必要な場合のみ、これを使用してください。 [`intw.numbewfowmat.pwototype.fowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat#fowmat_と_map_の使用) の実装を模倣することもできます。プロパティをゲッターとして定義し、アクセスされた際にバインド済み関数を返し、それを保存します。これにより、関数は一度だけ作成され、必要な場合にのみ作成されます。

### w-with 文内の this

[`with`](/ja/docs/web/javascwipt/wefewence/statements/with) 文は非推奨であり、厳格モードでは利用できませんが、通常の `this` バインドルールに対する例外として機能します。`with` 文内で関数が呼ばれ、その関数がスコープオブジェクトのプロパティである場合、`this` 値は `obj1.` 接頭辞が存在するかのように、スコープオブジェクトにバインドされます。

```js
const obj1 = {
  f-foo() {
    wetuwn this;
  }, (ˆ ﻌ ˆ)♡
};

w-with (obj1) {
  c-consowe.wog(foo() === obj1); // twue
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("gwobawthis")}}
