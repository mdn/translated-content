---
title: 継承とプロトタイプチェーン
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
tags:
  - Inheritance
  - JavaScript
  - OOP
translation_of: Web/JavaScript/Inheritance_and_the_prototype_chain
---
{{jsSidebar("Advanced")}}

JavaScript は動的で、 `class` の実装それ自体を提供しないことから、 Java や C++ のようなクラスベースの言語を経験した開発者にとって、やや紛らわしいものです（`class` キーワードは ES6 で導入されましたが、シンタックスシュガーであり、JavaScript は引き続きプロトタイプベースです）。

JavaScript には 1 つだけ、継承が発生する要素があります。オブジェクトです。どのオブジェクトも**プロトタイプ**と呼ばれる、他のオブジェクトへの内部的な繋がりを持っています。そのプロトタイプオブジェクトも自身のプロトタイプを持っており、あるオブジェクトのプロトタイプが `null` に到達するまでそれが続きます。 `null` は、定義によれば、プロトタイプを持たず、**プロトタイプチェーン**の最終リンクとなります。

これはしばしば、JavaScript の 1 つの弱点と見なされますが、プロトタイプの継承モデルは、実際にはクラスのモデルよりも強力です。例えば、プロトタイプのモデルの上にクラスのモデルを構築することは、実にささいなことです。

## プロトタイプチェーンと継承

### プロパティの継承

JavaScript のオブジェクトはプロパティ（**自身のプロパティ**を指す）の動的な「かばん」であり、プロトタイプオブジェクトへの繋がりを持っています。あるオブジェクトのプロパティにアクセスを試みるとき、そのオブジェクトのみならず、そのオブジェクトのプロトタイプ、プロトタイプのプロトタイプ…と、一致する名前のプロパティが見つかるか、プロトタイプチェーンの終端に到達するまで、そのプロパティが捜索されます。

> **Note:** ECMAScript 標準に基づき、`someObject.[[Prototype]]` という記法は、 `someObject` のプロトタイプを示します。これは JavaScript の `__proto__` プロパティ（現在は非推奨）と同等です。その関数のすべてのインスタンスの `[[Prototype]]` を代わりに指定する関数の `func.prototype` プロパティと混同するべきではありません。ECMAScript 6 から、`[[Prototype]]` は、 {{jsxref("Object.getPrototypeOf()")}} と {{jsxref("Object.setPrototypeOf()")}} のアクセサを使ってアクセスされます。

では、プロパティにアクセスを試みたときに、何が起こるのかを見てみましょう。

```js
// o というオブジェクトがあり、自身のプロパティとして a と b を持っています。
// {a: 1, b: 2}
// o.[[Prototype]] は b と c プロパティを持っています。
// {b: 3, c: 4}
// 最後に、o.[[Prototype]].[[Prototype]] は null です。
// これがプロトタイプチェーンの終端としての null であり、
// 定義によると、 null は [[Prototype]] を持っていません。
// つまり、プロトタイプチェーン全体は次のようになります。
// {a:1, b:2} ---> {b:3, c:4} ---> null

console.log(o.a); // 1
// o には、自身のプロパティとして 'a' があるでしょうか？はい、その値は1です。

console.log(o.b); // 2
// o には、自身のプロパティとして 'b' があるでしょうか？はい、その値は2です。
// o のプロトタイプにも 'b' プロパティがありますが、アクセスされません。
// これを「property shadowing」と呼びます。

console.log(o.c); // 4
// o には、自身のプロパティとして 'c' があるでしょうか？いいえ、そのプロトタイプを確認します。
// o.[[Prototype]] には、自身のプロパティとして 'c' があるでしょうか？はい、その値は4です。

console.log(o.d); // undefined
// o には、自身のプロパティとして 'd' があるでしょうか？いいえ、そのプロトタイプを確認します。
// o.[[Prototype]] には、自身のプロパティとして 'd' があるでしょうか？いいえ、そのプロトタイプを確認します。
// o.[[Prototype]].[[Prototype]] は null であるため探索を中止し、
// プロパティが見つからなかったため undefined を返します。
```

あるオブジェクトにプロパティをセットすると、自身のプロパティが作られます。この取得と設定の動作の規則の唯一の例外は、 [getter または setter](/ja/docs/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters "JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters") とのプロパティの継承が起こるときです。

### 「メソッド」の継承

JavaScript には、クラスベースの言語が定義する形式の「メソッド」はありません。 JavaScript ではどの関数も、オブジェクトのプロパティという形で追加することができます。継承された関数は、上で見せたような property shadowing （このケースではメソッドのオーバーライドの形）を含めた、他のどのプロパティとも同じようにはたらきます。

継承された関数が実行されるときの [this](/ja/docs/JavaScript/Reference/Operators/this "JavaScript/Reference/Operators/this") の値は、その関数を自身のプロパティとして持つプロトタイプオブジェクトではなく、継承したオブジェクトを指します。

```js
var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// この場合に o.m が呼び出されたとき、 'this' は o を指します。

var p = Object.create(o);
// p は o から継承するオブジェクトです。

p.a = 4; // p に 'a' という自身のプロパティを作ります。
console.log(p.m()); // 5
// p.m が呼び出されるとき、 'this' は p　を指します。
// p が o の m を継承するとき、'this.a' は、
// p 自身の 'a' プロパティとして p.a を意味します。
```

## オブジェクトの色々な作成方法と、発生するプロトタイプチェーン

### 構文構造によるオブジェクト生成

```js
var o = {a: 1};

// 新たに生成されたオブジェクト o は、その [[Prototype]] として Object.prototype を持ちます。
// o は自身に 'hasOwnProperty' という名のプロパティを持っていません。
// hasOwnProperty は Object.prototype 自身のプロパティです。
// Object.prototype のプロトタイプは null です。
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// 配列は Array.prototype（indexOf、forEach などのようなメソッドを持っている）から継承します。
// プロトタイプチェーンは以下のようになります。
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// 関数は Function.prototype（call、bind などのようなメソッドを持つ）から継承します。
// f ---> Function.prototype ---> Object.prototype ---> null
```

### コンストラクタ関数を用いる方法

JavaScript における「コンストラクタ」は、[new 演算子](/ja/docs/JavaScript/Reference/Operators/new "JavaScript/Reference/Operators/new")を使って呼び出される関数です。

```js
function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertexes.push(v);
  }
};

var g = new Graph();
// g は 'vertexes' と 'edges' の自身のプロパティを持つオブジェクトです。
// g.[[Prototype]] は new Graph() が実行される時点の Graph.prototype の値です。
```

他の関数と区別しやすくする目的で、コンストラクタ関数の関数名の最初の一文字を大文字にしておく慣例があります。

### Object.create メソッドを用いる方法

ECMAScript 5 は [Object.create](/ja/docs/JavaScript/Reference/Global_Objects/Object/create "JavaScript/Reference/Global_Objects/Object/create") という新しいメソッドを導入しました。このメソッドを呼び出すと、新しいオブジェクトが生成されます。関数の最初の引数が、このオブジェクトのプロトタイプになります。

```js
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (継承された)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined、なぜなら d は Object.prototype から継承していないからです。
```

### `class` キーワードを用いる方法

ECMAScript 6 はクラスを実装する新たなキーワードのセットを導入しました。これらの要素はクラスベースの言語の開発者にはよく知られたもののようですが、同じではありません。JavaScript は引き続き、プロトタイプベースの言語です。新たなキーワードは {{jsxref("Statements/class","class")}}、{{jsxref("Classes/constructor","constructor")}}、{{jsxref("Classes/static", "static")}}、{{jsxref("Classes/extends", "extends")}}、{{jsxref("Operators/super", "super")}} です。

```js
"use strict";

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

var square = new Square(2);
```

### `性能`

プロトタイプチェーンの上層にあるプロパティの検索時間は、性能に悪影響を及ぼす可能性があり、性能が重要であるコードにおいて、意義深いものになるかもしれません。加えて、存在しないプロパティへのアクセスは、常にプロトタイプチェーン全体を通過します。

また、オブジェクトのプロパティを順に処理する際、プロトタイプチェーンにある**すべての**列挙可能なプロパティが列挙されます。

あるプロパティがプロトタイプチェーンのどこかではなく、オブジェクト自身に定義されたものであるかどうかを調べるには、すべてのオブジェクトが `Object.prototype` から継承している [hasOwnProperty](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) メソッドを使う必要があります。

[hasOwnProperty](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) は JavaScript において唯一、プロトタイプチェーンを通らずにプロパティを扱うものです。

注: プロパティが [undefined](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) かどうかを調べるだけでは不十分です。そのプロパティが存在するが、偶然、値に undefined がセットされているだけという可能性も大いにあります。

### 悪い例: ネイティブのプロトタイプの拡張

しばしば見られる設計ミスの 1 つが、`Object.prototype` あるいは他のビルトインプロトタイプの拡張です。

このテクニックは、モンキーパッチと呼ばれ、*カプセル化*を破壊します。Prototype.js のような人気のあるフレームワークに使用されるとしても、*非標準の*機能性の追加によってビルトインの型を散らかす正当な理由は未だありません。

ビルトインプロトタイプを拡張する**唯一の**正当な理由は、例えば `Array.forEach` など、新しい JavaScript エンジンの機能を移植する場合のみです。

## 例

B は A から継承します。

```js
function A(a){
  this.varA = a;
}

// 上の A 関数の定義で示すように、A.prototype.varA は常に、
// this.varA によって隠されるのに、 varA を prototype に含む目的は何か？
A.prototype = {
  varA : null,
      // 我々は何もせず、プロトタイプから varA を叩き落とすべきではないのでしょうか？
      // 恐らく、最適化として隠れたクラスにスペースを割り当てることを意図したものです。
      // https://developers.google.com/speed/articles/optimizing-javascript#Initializing
      // もし varA がどのインスタンスでも独自に初期化されなかったとしても、インスタンスの変数は妥当となるでしょう。
  doSomething : function(){
    // ...
  }
};

function B(a, b){
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB : {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true
  },
  doSomething : {
    value: function(){ // オーバーライド
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
```

次の点は重要です。

- .prototype に型が定義されています。
- 継承に Object.create() を使ってください。

## プロトタイプと `Object.getPrototypeOf`

JavaScript はすべてが動的で、すべてが実行時であり、一切クラスを持たないことから、 Java や C++から来た開発者にとっていささか紛らわしいものです。すべてはインスタンス（オブジェクト）です。私たちが「クラス」を装っているのは、関数オブジェクトです。

恐らく、`function A` が `prototype` という特別なプロパティを持っていることに、既に気付いているでしょう。この特別なプロパティは JavaScript の `new` 演算子と連携しています。プロトタイプオブジェクトへの参照は、新たなインスタンスの内部 `[[Prototype]]` プロパティへとコピーされます。例えば、`var a1 = new A()` とするとき（オブジェクトがメモリ内に生成された後、かつ `this` が定義されて関数 `A()` が実行される前） 、JavaScript は `a1.[[Prototype]] = A.prototype` をセットします。そうしてインスタンスのプロパティにアクセスするとき、 JavaScript は最初にそのオブジェクトに直接、それらが存在するかどうかを調べ、もし存在しなければ、 `[[Prototype]]` を見ます。これは `prototype` に定義したすべての要素がすべてのインスタンスで効果的に共有されていることを意味しており、もし望むのであれば、後で prototype の一部を変更して、すべての存在するインスタンスにその変更を及ぼすことができます。

もし上の例で、 `var a1 = new A(); var a2 = new A();` とすると、 `a1.doSomething` は実際には、`Object.getPrototypeOf(a1).doSomething` （定義した `A.prototype.doSomething` と同じ）を参照します。つまり、 `Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething` です。

要するに、 `prototype` は型のためのもので、`Object.getPrototypeOf()` はインスタンスのためのものと同じです。

`[[Prototype]]` は再帰的に見えます。つまり、`a1.doSomething`、`Object.getPrototypeOf(a1).doSomething`、`Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething `…と、それが見つかるか `Object.getPrototypeOf` が null を返すまで続きます。

そう、

```js
var o = new Foo();
```

これを呼び出したとき、 JavaScript は、

```js
var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);
```

実際にはこれ（あるいはこのような何か）を行っており、

```js
o.someProp;
```

後にこうすると、 `o` が `someProp` プロパティを持っているかどうかを調べ、もし持っていなければ `Object.getPrototypeOf(o).someProp` を、そこにも存在しなければ `Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp` を…と調べていきます。

## まとめ

使用する複雑なコードを書く前に、プロトタイプの継承モデルを理解することは**必要不可欠**です。また、起こり得る性能の問題を回避するために、コードの中のプロトタイプチェーンの長さに気づき、それを解消してください。さらに、ネイティブプロトタイプは、新たな JavaScript の機能の互換性のためでない限り、**決して**拡張されるべきでは**ありません**。
