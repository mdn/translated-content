---
title: 継承とプロトタイプチェーン
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
tags:
  - Inheritance
  - JavaScript
  - OOP
translation_of: Web/JavaScript/Inheritance_and_the_prototype_chain
---
<div>{{jsSidebar("Advanced")}}</div>

<p>JavaScript は動的で、 <code>class</code> の実装それ自体を提供しないことから、 Java や C++ のようなクラスベースの言語を経験した開発者にとって、やや紛らわしいものです（<code>class</code> キーワードは ES6 で導入されましたが、シンタックスシュガーであり、JavaScript は引き続きプロトタイプベースです）。</p>

<p>JavaScript には1つだけ、継承が発生する要素があります。オブジェクトです。どのオブジェクトも<strong>プロトタイプ</strong>と呼ばれる、他のオブジェクトへの内部的な繋がりを持っています。そのプロトタイプオブジェクトも自身のプロトタイプを持っており、あるオブジェクトのプロトタイプが <code>null</code> に到達するまでそれが続きます。 <code>null</code> は、定義によれば、プロトタイプを持たず、<strong>プロトタイプチェーン</strong>の最終リンクとなります。</p>

<p>これはしばしば、JavaScript の1つの弱点と見なされますが、プロトタイプの継承モデルは、実際にはクラスのモデルよりも強力です。例えば、プロトタイプのモデルの上にクラスのモデルを構築することは、実にささいなことです。</p>

<h2 id="Inheritance_with_the_prototype_chain" name="Inheritance_with_the_prototype_chain">プロトタイプチェーンと継承</h2>

<h3 id="Inheriting_properties" name="Inheriting_properties">プロパティの継承</h3>

<p>JavaScript のオブジェクトはプロパティ（<strong>自身のプロパティ</strong>を指す）の動的な「かばん」であり、プロトタイプオブジェクトへの繋がりを持っています。あるオブジェクトのプロパティにアクセスを試みるとき、そのオブジェクトのみならず、そのオブジェクトのプロトタイプ、プロトタイプのプロトタイプ…と、一致する名前のプロパティが見つかるか、プロトタイプチェーンの終端に到達するまで、そのプロパティが捜索されます。</p>

<div class="note">
<p>ECMAScript 標準に基づき、<code>someObject.[[Prototype]]</code> という記法は、 <code>someObject</code> のプロトタイプを示します。これは JavaScript の <code>__proto__</code> プロパティ（現在は非推奨）と同等です。その関数のすべてのインスタンスの <code>[[Prototype]]</code> を代わりに指定する関数の <code><em>func</em>.prototype</code> プロパティと混同するべきではありません。ECMAScript 6 から、<code>[[Prototype]]</code> は、 {{jsxref("Object.getPrototypeOf()")}} と {{jsxref("Object.setPrototypeOf()")}} のアクセサを使ってアクセスされます。</p>
</div>

<p>では、プロパティにアクセスを試みたときに、何が起こるのかを見てみましょう。</p>

<pre class="brush: js notranslate">// o というオブジェクトがあり、自身のプロパティとして a と b を持っています。
// {a: 1, b: 2}
// o.[[Prototype]] は b と c プロパティを持っています。
// {b: 3, c: 4}
// 最後に、o.[[Prototype]].[[Prototype]] は null です。
// これがプロトタイプチェーンの終端としての null であり、
// 定義によると、 null は [[Prototype]] を持っていません。
// つまり、プロトタイプチェーン全体は次のようになります。
// {a:1, b:2} ---&gt; {b:3, c:4} ---&gt; null

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
</pre>

<p>あるオブジェクトにプロパティをセットすると、自身のプロパティが作られます。この取得と設定の動作の規則の唯一の例外は、 <a href="/ja/docs/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters" title="JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">getter または setter</a> とのプロパティの継承が起こるときです。</p>

<h3 id="Inheriting_.22methods.22" name="Inheriting_.22methods.22">「メソッド」の継承</h3>

<p>JavaScript には、クラスベースの言語が定義する形式の「メソッド」はありません。 JavaScript ではどの関数も、オブジェクトのプロパティという形で追加することができます。継承された関数は、上で見せたような property shadowing （このケースではメソッドのオーバーライドの形）を含めた、他のどのプロパティとも同じようにはたらきます。</p>

<p>継承された関数が実行されるときの <a href="/ja/docs/JavaScript/Reference/Operators/this" title="JavaScript/Reference/Operators/this">this</a> の値は、その関数を自身のプロパティとして持つプロトタイプオブジェクトではなく、継承したオブジェクトを指します。</p>

<pre class="brush: js notranslate">var o = {
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
</pre>

<h2 id="Different_ways_to_create_objects_and_the_resulting_prototype_chain" name="Different_ways_to_create_objects_and_the_resulting_prototype_chain">オブジェクトの色々な作成方法と、発生するプロトタイプチェーン</h2>

<h3 id="Objects_created_with_syntax_constructs" name="Objects_created_with_syntax_constructs">構文構造によるオブジェクト生成</h3>

<pre class="brush: js notranslate">var o = {a: 1};

// 新たに生成されたオブジェクト o は、その [[Prototype]] として Object.prototype を持ちます。
// o は自身に 'hasOwnProperty' という名のプロパティを持っていません。
// hasOwnProperty は Object.prototype 自身のプロパティです。
// Object.prototype のプロトタイプは null です。
// o ---&gt; Object.prototype ---&gt; null

var a = ["yo", "whadup", "?"];

// 配列は Array.prototype（indexOf、forEach などのようなメソッドを持っている）から継承します。
// プロトタイプチェーンは以下のようになります。
// a ---&gt; Array.prototype ---&gt; Object.prototype ---&gt; null

function f() {
  return 2;
}

// 関数は Function.prototype（call、bind などのようなメソッドを持つ）から継承します。
// f ---&gt; Function.prototype ---&gt; Object.prototype ---&gt; null</pre>

<h3 id="With_a_constructor" name="With_a_constructor">コンストラクタ関数を用いる方法</h3>

<p>JavaScript における「コンストラクタ」は、<a href="/ja/docs/JavaScript/Reference/Operators/new" title="JavaScript/Reference/Operators/new">new 演算子</a>を使って呼び出される関数です。</p>

<pre class="brush: js notranslate">function Graph() {
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
</pre>

<p>他の関数と区別しやすくする目的で、コンストラクタ関数の関数名の最初の一文字を大文字にしておく慣例があります。</p>

<h3 id="With_Object.create" name="With_Object.create">Object.create メソッドを用いる方法</h3>

<p>ECMAScript 5 は <a href="/ja/docs/JavaScript/Reference/Global_Objects/Object/create" title="JavaScript/Reference/Global_Objects/Object/create">Object.create</a> という新しいメソッドを導入しました。このメソッドを呼び出すと、新しいオブジェクトが生成されます。関数の最初の引数が、このオブジェクトのプロトタイプになります。</p>

<pre class="brush: js notranslate">var a = {a: 1};
// a ---&gt; Object.prototype ---&gt; null

var b = Object.create(a);
// b ---&gt; a ---&gt; Object.prototype ---&gt; null
console.log(b.a); // 1 (継承された)

var c = Object.create(b);
// c ---&gt; b ---&gt; a ---&gt; Object.prototype ---&gt; null

var d = Object.create(null);
// d ---&gt; null
console.log(d.hasOwnProperty);
// undefined、なぜなら d は Object.prototype から継承していないからです。
</pre>

<h3 id="class_キーワードを用いる方法"><code>class</code> キーワードを用いる方法</h3>

<p>ECMAScript 6 はクラスを実装する新たなキーワードのセットを導入しました。これらの要素はクラスベースの言語の開発者にはよく知られたもののようですが、同じではありません。JavaScript は引き続き、プロトタイプベースの言語です。新たなキーワードは {{jsxref("Statements/class","class")}}、{{jsxref("Classes/constructor","constructor")}}、{{jsxref("Classes/static", "static")}}、{{jsxref("Classes/extends", "extends")}}、{{jsxref("Operators/super", "super")}} です。</p>

<pre class="brush: js notranslate">"use strict";

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

var square = new Square(2);</pre>

<h3 id="性能"><code>性能</code></h3>

<p>プロトタイプチェーンの上層にあるプロパティの検索時間は、性能に悪影響を及ぼす可能性があり、性能が重要であるコードにおいて、意義深いものになるかもしれません。加えて、存在しないプロパティへのアクセスは、常にプロトタイプチェーン全体を通過します。</p>

<p>また、オブジェクトのプロパティを順に処理する際、プロトタイプチェーンにある<strong>すべての</strong>列挙可能なプロパティが列挙されます。</p>

<p>あるプロパティがプロトタイプチェーンのどこかではなく、オブジェクト自身に定義されたものであるかどうかを調べるには、すべてのオブジェクトが <code>Object.prototype</code> から継承している <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a> メソッドを使う必要があります。</p>

<p><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a> は JavaScript において唯一、プロトタイプチェーンを通らずにプロパティを扱うものです。</p>

<p>注: プロパティが <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined">undefined</a> かどうかを調べるだけでは不十分です。そのプロパティが存在するが、偶然、値に undefined がセットされているだけという可能性も大いにあります。</p>

<h3 id="悪い例_ネイティブのプロトタイプの拡張">悪い例: ネイティブのプロトタイプの拡張</h3>

<p>しばしば見られる設計ミスの1つが、<code>Object.prototype</code> あるいは他のビルトインプロトタイプの拡張です。</p>

<p>このテクニックは、モンキーパッチと呼ばれ、<em>カプセル化</em>を破壊します。Prototype.js のような人気のあるフレームワークに使用されるとしても、<em>非標準の</em>機能性の追加によってビルトインの型を散らかす正当な理由は未だありません。</p>

<p>ビルトインプロトタイプを拡張する<strong>唯一の</strong>正当な理由は、例えば <code>Array.forEach</code> など、新しい JavaScript エンジンの機能を移植する場合のみです。</p>

<h2 id="例">例</h2>

<p>B は A から継承します。</p>

<pre class="brush: js notranslate">function A(a){
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
b.doSomething();</pre>

<p>次の点は重要です。</p>

<ul>
 <li>.prototype に型が定義されています。</li>
 <li>継承に Object.create() を使ってください。</li>
</ul>

<h2 id="プロトタイプと_Object.getPrototypeOf">プロトタイプと <code>Object.getPrototypeOf</code></h2>

<p>JavaScript はすべてが動的で、すべてが実行時であり、一切クラスを持たないことから、 Java や C++から来た開発者にとっていささか紛らわしいものです。すべてはインスタンス（オブジェクト）です。私たちが「クラス」を装っているのは、関数オブジェクトです。</p>

<p>恐らく、<code>function A</code> が <code>prototype</code> という特別なプロパティを持っていることに、既に気付いているでしょう。この特別なプロパティは JavaScript の <code>new</code> 演算子と連携しています。プロトタイプオブジェクトへの参照は、新たなインスタンスの内部 <code>[[Prototype]]</code> プロパティへとコピーされます。例えば、<code>var a1 = new A()</code> とするとき（オブジェクトがメモリ内に生成された後、かつ <code>this</code> が定義されて関数 <code>A()</code> が実行される前） 、JavaScript は <code>a1.[[Prototype]] = A.prototype</code> をセットします。そうしてインスタンスのプロパティにアクセスするとき、 JavaScript は最初にそのオブジェクトに直接、それらが存在するかどうかを調べ、もし存在しなければ、 <code>[[Prototype]]</code> を見ます。これは <code>prototype</code> に定義したすべての要素がすべてのインスタンスで効果的に共有されていることを意味しており、もし望むのであれば、後で prototype の一部を変更して、すべての存在するインスタンスにその変更を及ぼすことができます。</p>

<p>もし上の例で、 <code>var a1 = new A(); var a2 = new A();</code> とすると、 <code>a1.doSomething</code> は実際には、<code>Object.getPrototypeOf(a1).doSomething</code> （定義した  <code>A.prototype.doSomething</code> と同じ）を参照します。つまり、 <code>Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething</code> です。</p>

<p>要するに、 <code>prototype</code> は型のためのもので、<code>Object.getPrototypeOf()</code> はインスタンスのためのものと同じです。</p>

<p><code>[[Prototype]]</code> は再帰的に見えます。つまり、<code>a1.doSomething</code>、<code>Object.getPrototypeOf(a1).doSomething</code>、<code>Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething </code>…と、それが見つかるか <code>Object.getPrototypeOf</code> が null を返すまで続きます。</p>

<p>そう、</p>

<pre class="brush: js notranslate">var o = new Foo();</pre>

<p>これを呼び出したとき、 JavaScript は、</p>

<pre class="brush: js notranslate">var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);</pre>

<p>実際にはこれ（あるいはこのような何か）を行っており、</p>

<pre class="brush: js notranslate">o.someProp;</pre>

<p>後にこうすると、 <code>o</code> が <code>someProp</code> プロパティを持っているかどうかを調べ、もし持っていなければ <code>Object.getPrototypeOf(o).someProp</code> を、そこにも存在しなければ <code>Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp</code> を…と調べていきます。</p>

<h2 id="まとめ">まとめ</h2>

<p>使用する複雑なコードを書く前に、プロトタイプの継承モデルを理解することは<strong>必要不可欠</strong>です。また、起こり得る性能の問題を回避するために、コードの中のプロトタイプチェーンの長さに気づき、それを解消してください。さらに、ネイティブプロトタイプは、新たな JavaScript の機能の互換性のためでない限り、<strong>決して</strong>拡張されるべきでは<strong>ありません</strong>。　</p>
