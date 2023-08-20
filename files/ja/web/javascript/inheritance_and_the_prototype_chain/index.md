---
title: 継承とプロトタイプチェーン
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 9b38f886d21c5d0a428f58acb20c4d0fc6c2e098
---

{{jsSidebar("Advanced")}}

JavaScript は動的であり、固定的な型がないことから、クラスベースの言語（Java や C++ など）を経験した開発者にとっては少し分かりにくいものです。

継承において、 JavaScript が持っている構成要素はただひとつ、オブジェクトだけです。それぞれのオブジェクトは、その**プロトタイプ**と呼ばれる別のオブジェクトへのリンクを持つプライベートプロパティを持っています。そのプロトタイプオブジェクト自身もプロトタイプを持ち、 `null` をプロトタイプとするオブジェクトに到達するまで続きます。定義上、 `null` はプロトタイプを持たず、この**プロトタイプチェーン**の最後のリンクとして機能します。プロトタイプチェーンのどのメンバーも、実行時に変更したり交換したりすることが可能なので、[静的呼び出し](https://en.wikipedia.org/wiki/Static_dispatch)という概念は、 JavaScript には存在しません。

この混乱はしばしば JavaScript の弱点のひとつとみなされますが、プロトタイプ継承モデルそのものは、実際には古典的なモデルよりも強力なものです。例えば、プロトタイプモデルの上に古典的なモデルを構築するのはかなり手軽です。[クラス](/ja/docs/Web/JavaScript/Reference/Classes)はこうやって実装されているのです。

クラスは現在広く採用され、 JavaScript の新しいパラダイムとなっていますが、クラスが新しい継承パターンをもたらすわけではありません。クラスはプロトタイプのメカニズムのほとんどを抽象化してしまいますが、プロトタイプがその下でどのように動作するかを理解することは、今でも有用だと言えます。

## プロトタイプチェーンと継承

### プロパティの継承

JavaScript のオブジェクトはプロパティ（**自身のプロパティ**を指す）の動的な「袋」です。 JavaScript のオブジェクトは、プロトタイプオブジェクトへのリンクを持っています。あるオブジェクトのプロパティにアクセスしようとすると、オブジェクトだけでなく、オブジェクトのプロトタイプ、プロトタイプのプロトタイプへと、一致する名前のプロパティが得られるか、プロトタイプチェーンの終端に到達するまで、プロパティの探索が行われます。

> **メモ:** ECMAScript 標準に従い、 `someObject.[[Prototype]]` という表記を `someObject` のプロトタイプを示すのに使用しています。内部スロット `[[Prototype]]` には {{jsxref("Object.getPrototypeOf()")}} と {{jsxref("Object.setPrototypeOf()")}} 関数でアクセスすることができます。これは、標準ではないが、多くのJavaScriptエンジンで事実上実装されている JavaScript のアクセサー [`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) と同等のものです。混乱を避けつつ簡潔にするために、ここでは `obj.__proto__` の使用を避け、代わりに `obj.[[Prototype]]` を使用することにします。これは `Object.getPrototypeOf(obj)` に対応するものです。
>
> これを関数の `func.prototype` プロパティと混同してはいけません。このプロパティは、指定された関数がコンストラクターとして使用されたときに作成されるオブジェクトのすべての「インスタンス」に割り当てられる `[[Prototype]]` を指定します。コンストラクター関数の `prototype` プロパティについては、[後の節](#コンストラクター)で説明します。

オブジェクトの `[[Prototype]]` を指定する方法はいくつかありますが、それは [後の節](#プロトタイプチェーンを作成・変更する様々な方法) に掲載されています。今のところ、説明のために [`__proto__` 構文](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter)を使用します。ここで注目すべきは、`{ __proto__: ... }` の構文は、 `obj.__proto__` アクセサーとは異なります。前者は標準的なものであり、非推奨ではありません。

`{ a: 1, b: 2, __proto__: c }` のようなオブジェクトリテラルでは、値 `c` （これは `null` か他のオブジェクトでなければなりません）が、リテラル上で `[[Prototype]]` として表されるオブジェクトになるのに対し、 `a` や `b` など他のキーはオブジェクトの _自身のプロパティ_ となります。この構文では、 `[[Prototype]]` はオブジェクトの単なる「内部プロパティ」になるため、とても自然に読むことができます。

では、プロパティにアクセスを試みたときに、何が起こるのかを見てみましょう。

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ は [[Prototype]] を設定します。ここでは
  // 他のオブジェクトリテラルとして指定します。
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] は b と c プロパティを持っています。
// o.[[Prototype]].[[Prototype]] は Object.prototype です（意味は後で説明します）。
// そして、 o.[[Prototype]].[[Prototype]].[[Prototype]] は null です。
// null は定義上、 [[Prototype]] を持たないので、これでプロトタイプチェーンは終了です。
// したがって、完全なプロトタイプチェーンは次のようになります。
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// 'a' という自身のプロパティが o にあるでしょうか？はい、その値は 1 です。

console.log(o.b); // 2
// 'b' という自身のプロパティが o にあるでしょうか？はい、その値は 2 です。
// プロトタイプにも 'b' プロパティがありますが、アクセスされません。
// これを「プロパティの隠蔽」と呼びます。

console.log(o.c); // 4
// 'c' という自身のプロパティが o にあるでしょうか？いいえ、そのプロトタイプを確認します。
// 'c' という自身のプロパティが o.[[Prototype]] にあるでしょうか？はい、その値は 4 です。

console.log(o.d); // undefined
// 'd' という自身のプロパティが o にあるでしょうか？いいえ、そのプロトタイプを確認します。
// 'd' という自身のプロパティが o.[[Prototype]] にあるでしょうか？いいえ、そのプロトタイプを確認します。
// o.[[Prototype]].[[Prototype]] は Object.prototype であり、既定では 'd' というプロパティはありません。そのプロトタイプを確認します。
// o.[[Prototype]].[[Prototype]].[[Prototype]]  は null であるため探索を中止し、
// プロパティが見つからなかったため undefined を返します。
```

あるオブジェクトにプロパティを設定すると、自身のプロパティが作られます。この取得と設定の動作のルールの唯一の例外は、[ゲッターまたはセッター](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#ゲッターとセッターの定義)が介在するときです。

同様に、より長いプロトタイプチェーンを作成することができ、プロパティはそれらすべてに対して探索されます。

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ は [[Prototype]] を設定します。ここでは
  // 他のオブジェクトリテラルとして指定します。
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o.d); // 5
```

### 「メソッド」の継承

JavaScript には、クラスベースの言語が定義するような「[メソッド](/ja/docs/Glossary/Method)」はありません。 JavaScript ではどの関数も、オブジェクトのプロパティという形で追加することができます。継承された関数は、上で見せたようなプロパティの隠蔽（この場合はメソッドのオーバーライドの形）を含め、他のどのプロパティとも同じように動作します。

継承された関数が実行されるときの [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値は、その関数を自身のプロパティとして持つプロトタイプオブジェクトではなく、継承したオブジェクトを指します。

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// この場合に parent.method が呼び出されたとき、 'this' は parent を指します。

// child は parent を継承するオブジェクト
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// child.method が呼び出されると、 'this' は child を参照します。
// つまり、parent のメソッドを child が継承すると、child に
// プロパティ 'value' が求まることになります。しかし、child は
// 'value' という自分自身で呼び出されるプロパティを持っていないので、
// プロパティは parent.value である [[Prototype]] で見つかります。

child.value = 4; // child のプロパティ 'value' に値 4 を代入する。
// これは parent の 'value' プロパティを隠蔽するものです。
// child オブジェクトは次のように見えるようになります。
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// child には 'value' プロパティがあるので、 'this.value' は
// child.value になる
```

## コンストラクター

プロトタイプの威力は、特にメソッドの場合、すべてのインスタンスに存在する必要がある場合に、プロパティのセットを再利用できることです。例えば、いくつかのボックスを作成し、それぞれのボックスが `getValue` 関数でアクセス可能な値を含むオブジェクトであるとします。素朴な実装は次のようになります。

```js
const boxes = [
  {
    value: 1,
    getValue() {
      return this.value;
    },
  },
  {
    value: 2,
    getValue() {
      return this.value;
    },
  },
  {
    value: 3,
    getValue() {
      return this.value;
    },
  },
];
```

これは、各インスタンスが同じことを行う自分自身で関数プロパティを持つため、冗長で不要なものであり、劣悪です。その代わりに、 `getValue` をすべてのボックスの `[[Prototype]]` に移動させることができます。

```js
const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];
```

こうすることで、すべてのボックスの `getValue` メソッドが同じ関数を参照するようになり、メモリ使用量を減らすことができます。しかし、オブジェクトを生成するたびに `__proto__` を手動で結びつけるのは、まだとても不便です。そこで、オブジェクトを生成するたびに `[[Prototype]]` を自動的に設定する _コンストラクター_ 関数を使用することになります。コンストラクターは [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使って呼び出される関数です。

```js
// コンストラクター関数
function Box(value) {
  this.value = value;
}

// Box() コンストラクターで作成されたすべてのボックスには、
// 以下のプロパティがあります。
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

`new Box(1)` は `Box` コンストラクター関数から生成された「インスタンス」と言います。 `Box.prototype` は前回作成した `boxPrototype` オブジェクトと大きな違いはなく、ただのオブジェクトです。コンストラクター関数から作成されたインスタンスは、自動的にコンストラクターの [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) プロパティを `[[Prototype]]` として保有します。つまり、 `Object.getPrototypeOf(new Box()) === Box.prototype` となります。 `Constructor.prototype` は既定で [`constructor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) という自身のプロパティを 1 つ持ち、これがコンストラクター関数自身を参照します。つまり、 `Box.prototype.constructor === Box` になります。これにより、あらゆるインスタンスから元のコンストラクターにアクセスできるようになります。

> **メモ:** コンストラクター関数からプリミティブでない値が返された場合、その値が `new` 式の結果となります。この場合、`[[Prototype]]`は正しく結び付けられていないかもしれませんが、実際にはあまり起こらないはずです。

上記のコンストラクター関数は、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)で書き直すことができます。

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // Box.prototype に作成されるメソッド
  getValue() {
    return this.value;
  }
}
```

クラスはコンストラクター関数の上の糖衣構文です。つまり、すべてのインスタンスの動作を変更するために `Box.prototype` を操作することができます。しかし、クラスは基本的なプロトタイプ機構を抽象化するように設計されているので、このチュートリアルではより軽量なコンストラクター関数の構文を使用して、プロトタイプがどのように動作するかを完全に示すことにします。

`Box.prototype` はすべてのインスタンスの `[[Prototype]]` と同じオブジェクトを参照しているので、 `Box.prototype` を変更することですべてのインスタンスの振る舞いを変更することができます。

```js
function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// インスタンス作成後に Box.prototype を変更
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2
```

補足すると、 `Constructor.prototype` の再割り当て (`Constructor.prototype = ...`) は、 2 つの理由から悪い考えと言えます。

- 再割り当て前に作成されたインスタンスの `[[Prototype]]` は、再割り当て後に作成されたインスタンスの `[[Prototype]]` とは別のオブジェクトを参照するようになり、一方の `[[Prototype]]` を変更しても、もう一方は変更されません。
- `constructor` プロパティを手動で設定し直さない限り、コンストラクター関数は `instance.constructor` から辿ることができなくなり、ユーザーの期待を裏切る可能性があります。いくつかの組み込み演算子は `constructor` プロパティも読み込むので、それが設定されていない場合は期待通りに動作しない可能性があります。

`Constructor.prototype` はインスタンスを作成するときにのみ有用です。 `Constructor.[[Prototype]]` とは関係ありません。コンストラクター関数の自身のプロトタイプである `Function.prototype`、つまり、 `Object.getPrototypeOf(Constructor) === Function.prototype` とは関係がありません。

### リテラルの暗黙的なコンストラクター

JavaScript のいくつかのリテラル構文は、暗黙のうちに `[[Prototype]]` を設定したインスタンスを作成します。例えば次のようになります。

```js
// オブジェクトのリテラル（`__proto__` キーを持たない）には、
// 自動的に `Object.prototype` が `[[Prototype]]` として設定されます
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// 配列リテラルでは、自動的に `Array.prototype` が `[[Prototype]]` となります
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp リテラルでは、自動的に `RegExp.prototype` as their `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

「脱糖」してコンストラクターの形にすることができます。

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

例えば、 [`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) のような「配列のメソッド」は、単に `Array.prototype` で定義されたメソッドであり、そのため、すべての配列のインスタンスで自動的に利用することができます。

> **警告:** かつて使用されていた誤った使い方が 1 つあります。 `Object.prototype` または他の組み込みプロトタイプのいずれかを拡張することです。この誤った使い方の例として、`Array.prototype.myMethod = function () {...}` を定義して、すべての配列インスタンスで `myMethod` できるようにするというものがあります。
>
> この誤った使い方は、「モンキーパッチ」と呼ばれています。モンキーパッチは前方互換性を損なう危険性があり、将来、言語がこのメソッドを別のシグネチャで追加した場合、コードが壊れてしまうからです。 [SmooshGate](https://developer.chrome.com/blog/smooshgate/) のような事件を引き起こし、 JavaScript が「ウェブを壊さない」ようにしようとするため、言語の進歩にとって非常に厄介な存在となりえます。
>
> 組み込みのプロトタイプを拡張する理由として**唯一の**良いものは、新しい JavaScript エンジンの機能、たとえば `Array.prototype.forEach` などをバックポートすることです。

歴史的な理由により、いくつかの組み込みコンストラクターの `prototype` プロパティはインスタンスそのものであることに注目すると興味深いかもしれません。例えば、 `Number.prototype` は数字の 0、 `Array.prototype` は空の配列、 `RegExp.prototype` は `/(?:)/` となります。

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype はそれ自身では何もしない関数
```

しかし、ユーザー定義されたコンストラクターや、 `Map` のような現代のコンストラクターでは、このようなことは起こりません。

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### より長い継承のチェーンの構築

`Constructor.prototype` プロパティは、コンストラクターのインスタンスの `[[Prototype]]` となり、 `Constructor.prototype` 自身の `[[Prototype]]` も含めてそのままの形で表示されます。既定で、 `Constructor.prototype` は _プレーンオブジェクト_ です。つまり、 `Object.getPrototypeOf(Constructor.prototype) === Object.prototype` になります。唯一の例外は `Object.prototype` 自身で、その `[[Prototype]]` は `null` です - つまり、 `Object.getPrototypeOf(Object.prototype) === null` ということです。したがって、典型的なコンストラクターは以下のようなプロトタイプチェーンを構築します。

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

もっと長いプロトタイプチェーンを構築する場合は、 `Constructor.prototype` の `[[Prototype]]` を [`Object.setPrototypeOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 関数で設定することができます。

```js
function Base() {}
function Derived() {}
// `Derived.prototype` の `[[Prototype]]` を
// `Base.prototype` に設定
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

クラスの用語では、これは [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends) 構文を使用するのと同じです。

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

また、古いコードで [`Object.create`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create) を使用しているものを見かけることがあります。しかし、これは `prototype` プロパティを再割り当てするため、以前にここで説明した理由から、悪しき習慣と言えます。

```js example-bad
function Base() {}
function Derived() {}
// `Derived.prototype` に `Base.prototype` を `[[Prototype]]` とした
// 新しいオブジェクトを再代入う
// これは使わないでください。 — 代わりに Object.setPrototypeOf で変更してください。
Derived.prototype = Object.create(Base.prototype);
```

## プロトタイプの調査：より深く掘り下げてみる

その裏側で何が起こっているのか、もう少し詳しく見てみましょう。

JavaScript では、前述したように、関数はプロパティを持つことができます。すべての関数は `prototype` という名前の特別なプロパティがあります。以下のコードは独立したものであることに注意してください（このウェブページには、以下のコード以外に他の JavaScript は存在しないと考えてよいでしょう）。最高の学習体験をするためには、コンソールを開き、「コンソール」タブに移動して、以下の JavaScript コードをコピー＆ペーストし、 Enter/Return キーを押して実行することを強くお勧めします。（コンソールは、ほとんどのウェブブラウザーの開発者ツールに記載されています。詳しい情報は [Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)、[Chrome 開発者ツール](https://developer.chrome.com/docs/devtools/)、[Edge 開発者ツール](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/)を参照してください。

```js
function doSomething() {}
console.log(doSomething.prototype);
// 関数をどのように宣言するかは問題ではありません。
// JavaScript の関数は常に既定のプロトタイププロパティを
// 保有します。ただし、例外が 1 つあります。アロー関数は
// 既定のプロトタイププロパティを持ちません。
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
```

上で見たように、`doSomething()` は既定で `prototype` プロパティを所持しており、コンソールに表示されているようになります。このコードの実行後、コンソールにはこのようなオブジェクトが表示されているはずです。

```
{
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

> **メモ:** Chrome のコンソールでは、 `[[Prototype]]` を使用してオブジェクトのプロトタイプを示しており、仕様の用語に従っています。Firefoxでは `<prototype>` を使用しています。一貫性を保つために、ここでは `[[Prototype]]` を使用します。

以下のように、 `doSomething()` のプロトタイプにプロパティを追加することができます。

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

結果は次の通りです。

```
{
  foo: "bar",
  constructor: ƒ doSomething(),
  [[Prototype]]: {
    constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf()
  }
}
```

ここで、 `new` 演算子を使用して、このプロトタイプを元に `doSomething()` のインスタンスを作成することができます。 new 演算子を使用するには、関数を呼び出す際に `new` という接頭辞を付ける以外は通常通り行います。 `new` 演算子を用いて関数を呼び出すと、その関数のインスタンスであるオブジェクトを返します。そして、このオブジェクトにプロパティを追加することができます。

以下のコードを試してみてください。

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // プロトタイプにプロパティを追加
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // オブジェクトにプロパティを追加
console.log(doSomeInstancing);
```

この結果、以下のような出力が得られます。

```
{
  prop: "some value",
  [[Prototype]]: {
    foo: "bar",
    constructor: ƒ doSomething(),
    [[Prototype]]: {
      constructor: ƒ Object(),
      hasOwnProperty: ƒ hasOwnProperty(),
      isPrototypeOf: ƒ isPrototypeOf(),
      propertyIsEnumerable: ƒ propertyIsEnumerable(),
      toLocaleString: ƒ toLocaleString(),
      toString: ƒ toString(),
      valueOf: ƒ valueOf()
    }
  }
}
```

上で見たように、`doSomeInstancing`の `[[Prototype]]` は `doSomething.prototype` です。しかし、これは何をするものなのでしょうか？ `doSomeInstancing` のプロパティにアクセスするとき、ランタイムはまず `doSomeInstancing` がそのプロパティを持っているかどうかを調べます。

もし `doSomeInstancing` がそのプロパティを持っていない場合、ランタイムは `doSomeInstancing.[[Prototype]]` （別名 `doSomething.prototype`）でそのプロパティを探します。もし、 `doSomeInstancing.[[Prototype]]` が探しているプロパティを保有している場合、 `doSomeInstancing.[[Prototype]]` 上のそのプロパティが使用されます。

そうでなければ、 `doSomeInstancing.[[Prototype]]` がそのプロパティを持っていなかった場合、 `doSomeInstancing.[[Prototype]].[[Prototype]]` がそのプロパティを調べることになります。既定で、任意の関数の `prototype` プロパティの `[[Prototype]]` は `Object.prototype` です。そこで、`doSomeInstancing.[[Prototype]].[[Prototype]]` （別名 `doSomething.prototype.[[Prototype]]` （別名 `Object.prototype`））は、検索対象のプロパティを調べることになります。

もしそのプロパティが `doSomeInstancing.[[Prototype]].[[Prototype]]` の中に見つからなければ、 `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` を探します。しかし、 `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` は存在しません。なぜなら、 `Object.prototype.[[Prototype]]` は `null` であるからです。そして、 `[[Prototype]]` のプロトタイプチェーン全体が調べられた後、ランタイムはプロパティが存在しないことを主張し、プロパティの値は `undefined` であると結論付けます。

コンソールにもう少しコードを入力してみましょう。

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop);
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);
console.log("doSomething.prop:          ", doSomething.prop);
console.log("doSomething.foo:           ", doSomething.foo);
console.log("doSomething.prototype.prop:", doSomething.prototype.prop);
console.log("doSomething.prototype.foo: ", doSomething.prototype.foo);
```

この結果は以下のようになります。

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## プロトタイプチェーンを作成・変更する様々な方法

これまで、オブジェクトを作成し、そのプロトタイプチェーンを変更する多くの方法に触れてきました。それぞれの手法の長所と短所を比較しながら、さまざまな方法を体系的にまとめていきます。

### 構文で作成されたオブジェクト

```js
const o = { a: 1 };
// オブジェクト o を新しく作成すると、 Object.prototype が [[Prototype]] になります。
// Object.prototype はプロトタイプが null です。
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
// 配列は Array.prototype を継承します。
// （indexOf, forEach, などのメソッドがあります。）
// プロトタイプチェーンは次のようになります。
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// 関数は Function.prototype を継承します。
// （call, bind, などのメソッドがあります。）
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// 新しく作成したオブジェクトの [[Prototype]] は、 __proto__ リテラル
// プロパティを介して指し示すことができます。
// （Object.prototype.__proto__ アクセサーと混同しないでください。）
// p ---> o ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    <code>__proto__</code> キーを<a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">オブジェクト初期化子</a>で使用する方法の長所と短所
  </caption>
  <tbody>
    <tr>
      <th scope="row">長所</th>
      <td>
        現代のすべてのエンジンで対応しています。オブジェクトでないものを <code>__proto__</code> キーで指しても、例外を発生させずに暗黙に失敗するだけです。 {{jsxref("Object/proto", "Object.prototype.__proto__")}} セッターとは対照的に、オブジェクトリテラル初期化子の <code>__proto__</code> は標準化、最適化されており、 {{jsxref("Object.create")}} よりもパフォーマンスが高くなることさえあります。オブジェクトの作成時に自分自身で追加のプロパティを宣言することは、 {{jsxref("Object.create")}} よりも人間工学的に優れています。
      </td>
    </tr>
    <tr>
      <th scope="row">短所</th>
      <td>
        IE10 以下では対応していません。 {{jsxref("Object/proto", "Object.prototype.__proto__")}} アクセサーと混同しやすいので、違いを知らない人は注意してください。
      </td>
    </tr>
  </tbody>
</table>

### コンストラクター関数で

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g は自身のプロパティ 'vertices' と 'edges' を持つオブジェクトです。
// g.[[Prototype]] は Graph.prototype の new Graph() が実行されたときの値です。
```

<table class="standard-table">
  <caption>
    コンストラクター関数を使用する方法の長所と短所
  </caption>
  <tbody>
    <tr>
      <th scope="row">長所</th>
      <td>
        IE 5.5 までさかのぼり、すべてのエンジンにおいて対応しています。また、とても高速で、とても標準的であり、とても JIT で最適化できます。
      </td>
    </tr>
    <tr>
      <th scope="row">短所</th>
      <td>
        <ul>
          <li>このメソッドを使用するためには、当該関数を初期化する必要があります。この初期化の際に、コンストラクターはオブジェクトごとに生成する必要がある固有の情報を格納することがあります。この固有の情報は一度しか生成されないため、問題が発生する可能性があります。</li>
          <li>コンストラクターの初期化により、不要なメソッドがオブジェクトに搭載される可能性があります。</li>
        </ul>
        <p>どちらも、実際には一般的に問題になることはありません。</p>
      </td>
    </tr>
  </tbody>
</table>

### Object.create() で

{{jsxref("Object.create()")}} を呼び出すと、新しいオブジェクトが作成されます。このオブジェクトの `[[Prototype]]` がこの関数の最初の引数になります。

```js
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 （継承）

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null （d はプロトタイプとして直接 null を持つオブジェクト）
console.log(d.hasOwnProperty);
// undefined。 Object.prototype を継承していないため
```

<table class="standard-table">
  <caption>
    {{jsxref("Object.create")}} の長所と短所
  </caption>
  <tbody>
    <tr>
      <th scope="row">長所</th>
      <td>
        現代のすべてのエンジンで対応しています。オブジェクトの作成時に <code>[[Prototype]]</code> を直接設定することができ、ランタイムがオブジェクトをさらに最適化することを可能にします。また、<code>Object.create(null)</code>を使用して、プロトタイプを持たないオブジェクトの作成も可能です。
      </td>
    </tr>
    <tr>
      <th scope="row">短所</th>
      <td>
        IE8 以下では対応していません。しかし、 Microsoft は IE8 以下を搭載したシステムの拡張サポートを終了しているため、ほとんどのアプリケーションでは気にする必要はないでしょう。さらに、 2 つ目の引数を使用した場合、オブジェクト記述子のプロパティがそれぞれ別個の記述子オブジェクトを持つため、オブジェクトの初期化が遅くなり、パフォーマンスのブラックホールとなる可能性があります。オブジェクトの形成する形で何十万ものオブジェクト記述子を扱う場合、その遅延時間は深刻な問題になるかもしれません。
      </td>
    </tr>
  </tbody>
</table>

### クラスで

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  get area() {
    return this.height * this.width;
  }

  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

const square = new Square(2);
// square ---> Square.prototype ---> Polygon.prototype ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    クラスの長所と短所
  </caption>
  <tbody>
    <tr>
      <th scope="row">長所</th>
      <td>
        現代のすべてのエンジンで対応しています。とても高い可読性と保守性。<a href="/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields">プライベートプロパティ</a>は、プロトタイプ継承において些細な置き換えのない機能です。
      </td>
    </tr>
    <tr>
      <th scope="row">短所</th>
      <td>
        クラス、特にプライベートプロパティを持つクラスは、従来のものに比べて最適化されていません（ただし、エンジンの実装者はこの点を改善するよう作業しています）。古い環境では対応しておらず、実運用でクラスを使用するためには通常トランスパイラーが必要です。
      </td>
    </tr>
  </tbody>
</table>

### Object.setPrototypeOf() で

上記のすべてのメソッドはオブジェクト生成時にプロトタイプチェーンを設定するのに対し、 [`Object.setPrototypeOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) は既存のオブジェクトの `[[Prototype]]` 内部プロパティを変更することができます。

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    {{jsxref("Object.setPrototypeOf")}} の長所と短所
  </caption>
  <tbody>
    <tr>
      <th scope="row">長所</th>
      <td>
        現代のすべてのエンジンで対応しています。オブジェクトのプロトタイプを動的に操作することができ、<code>Object.create(null)</code> で作成したプロトタイプのないオブジェクトにプロトタイプを強制的に作成することもできます。
      </td>
    </tr>
    <tr>
      <th scope="row">短所</th>
      <td>
        パフォーマンスが悪い。オブジェクト生成時にプロトタイプを設定することが可能であれば、避けるべきです。多くのエンジンはプロトタイプを最適化し、インスタンスを呼び出すときにメモリー上のメソッドの位置を事前に推測しようとします。しかし、プロトタイプを動的に設定すると、これらの最適化がすべて中断されます。これは、エンジンによっては、コードを仕様通りに動作させるために、最適化を解除して再コンパイルするような事態を発生させるかもしれません。IE8 以前は対応していません。
      </td>
    </tr>
  </tbody>
</table>

### \_\_proto\_\_ アクセサーで

すべてのオブジェクトは [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) セッターを継承しており、これを使用して既存のオブジェクトの `[[Prototype]]` を設定することができます（`__proto__` キーがオブジェクトでオーバーライドされていない場合）。

> **警告:** `Object.prototype.__proto__` アクセサーは**標準外**で非推奨です。 代わりに、常に `Object.setPrototypeOf` を使用する必要があります。

```js
const obj = {};
// 使用しないでください。例示のためのものです。
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

<table class="standard-table">
  <caption>
    {{jsxref("Object/proto","__proto__")}} プロパティの設定の長所と短所
  </caption>
  <tbody>
    <tr>
      <th scope="row">長所</th>
      <td>
        現代のすべてのエンジンで対応しています。{{jsxref("Object/proto","__proto__")}} をオブジェクトでないものに設定すると、暗黙に失敗するだけです。例外は発生しません。
      </td>
    </tr>
    <tr>
      <th scope="row">短所</th>
      <td>
        非公認かつ非推奨です。多くのエンジンはプロトタイプを最適化し、インスタンスを呼び出すときにメモリー内のメソッドの位置を事前に推測しようとします。しかし、プロトタイプを動的に設定すると、これらの最適化をすべて中断し、一部のエンジンでは、コードを最適化しないように再コンパイルして、仕様どおりに動作するように強制することさえあります。 IE10 以下では対応していません。 {{jsxref("Object/proto","__proto__")}} セッターは、通常は省略可能なので、すべてのプラットフォームで動作するわけではありません。代わりに、常に {{jsxref("Object.setPrototypeOf")}} を使用してください。
      </td>
    </tr>
  </tbody>
</table>

## パフォーマンス

プロトタイプチェーンの上位にあるプロパティを参照する時間は、パフォーマンスにマイナスの影響を与える可能性があり、パフォーマンスが重要視されるコードでは、この影響は大きいかもしれません。さらに、存在しないプロパティにアクセスしようとすると、常にプロトタイプチェーンを完全に縦断することになります。

また、オブジェクトのプロパティを反復処理するときに、プロトタイプチェーン上にある**すべての** 列挙可能なプロパティが列挙されることになります。オブジェクトがプロトタイプチェーンのどこかではなく、\_自分自身に定義されたプロパティを持っているかどうかを調べるには、 [`hasOwnProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) または [`Object.hasOwn`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) メソッドを使用しなければいけません。 `[[Prototype]]` として `null` を持つオブジェクトを除くすべてのオブジェクトは、 [`hasOwnProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) を `Object.prototype` から継承ししています。ただし、プロトタイプチェーンのさらに下でオーバーライドされている場合を除きます。具体的な例を挙げるために、上記のグラフの例のようなコードを使って説明しましょう。

```js
console.log(g.hasOwnProperty("vertices"));
// true

console.log(Object.hasOwn(g, "vertices"));
// true

console.log(g.hasOwnProperty("nope"));
// false

console.log(Object.hasOwn(g, "nope"));
// false

console.log(g.hasOwnProperty("addVertex"));
// false

console.log(Object.hasOwn(g, "addVertex"));
// false

console.log(Object.getPrototypeOf(g).hasOwnProperty("addVertex"));
// true
```

注: あるプロパティが [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) であるかどうかを調べるだけでは十分では**ありません**。プロパティがしっかり存在していて、たまたま `undefined` に設定されているだけかもしれないからです。

## まとめ

JavaScript は Java や C++ から来た開発者にとっては少し戸惑うかもしれません。なぜなら、JavaScript はすべて動的で、すべて実行時であり、静的な型はまったくないからです。すべてがオブジェクト（インスタンス）か関数（コンストラクター）であり、関数自体も `Function` コンストラクターのインスタンスです。構文の構成要素である「クラス」でさえ、実行時にはコンストラクター関数に過ぎないのです。

JavaScript のすべてのコンストラクター関数は `prototype` という特別なプロパティを保有しており、このプロパティは `new` 演算子と組み合わせて動作します。プロトタイプオブジェクトへの参照は、新しいインスタンスの内部プロパティ `[[Prototype]]` にコピーされます。例えば、 `const a1 = new A()` とすると、 JavaScript は（オブジェクトをメモリー上で作成した後、 `this` を定義した関数 `A()` を実行する前に） `a1.[[Prototype]] = A.prototype` を設定します。その後、インスタンスのプロパティにアクセスするとき、 JavaScript はまずそのオブジェクトに直接存在するかどうかを調べ、存在しない場合は `[[Prototype]]` を探します。すなわち、 `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` など、見つかるまで、あるいは `Object.getPrototypeOf` が `null` を返すまで再帰的に調べられます。これは、 `prototype` で定義されたすべてのプロパティが、事実上すべてのインスタンスで共有され、後で`prototype`の一部を変更しても、その変更が既存のすべてのインスタンスに現れることを意味します。

上の例で、`const a1 = new A(); const a2 = new A();` とした場合、`a1.doSomething` は実際には `Object.getPrototypeOf(a1).doSomething` となります - この値は、定義した `A.prototype` と同じものです。 つまり、 `Object.getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething` と定義したことになります。

プロトタイプ継承モデルを使用する複雑なコードを書く前に、プロトタイプ継承モデルを理解することが重要です。また、コード中のプロトタイプチェーンの長さを意識し、パフォーマンスの問題を避けるために、必要に応じてそれを分割してください。さらに、ネイティブのプロトタイプは、新しい JavaScript の機能との互換性をとるためでない限り、**決して**拡張してはいけません。
