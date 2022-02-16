---
title: new 演算子
slug: Web/JavaScript/Reference/Operators/new
tags:
  - JavaScript
  - Left-hand-side expressions
  - Operator
  - Reference
  - 左辺値式
  - 演算子
translation_of: Web/JavaScript/Reference/Operators/new
---
<div>{{jsSidebar("Operators")}}</div>

<p><span class="seoSummary"><strong><code>new</code> 演算子</strong>を使用すると、開発者はユーザー定義のオブジェクト型やコンストラクタ関数を持つ組み込みオブジェクト型のインスタンスを作成することができます。</span></p>

<div>{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">new <var>constructor</var>[([<var>arguments</var>])]</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>constructor</var></code></dt>
 <dd>オブジェクトインスタンスの型を指定するクラスまたは関数です。</dd>
</dl>

<dl>
 <dt><code><var>arguments</var></code></dt>
 <dd><code><var>constructor</var></code> が呼び出される際の引数のリストです。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>


<p><strong><code>new</code></strong> 演算子は次のことを行います。</p>

<ol>
 <li>空白のプレーンな JavaScript オブジェクトを作成します。</li>
 <li>他のオブジェクトを親プロトタイプとすることで、新しく作成されたオブジェクトと他のオブジェクトをリンク（コンストラクターを設定）します。
</li>
 <li>ステップ 1 で新しく作成されたオブジェクトを <code>this</code> コンテキストとして渡します。</li>
 <li>関数がオブジェクトを返さない場合は <code>this</code> を返します。</li>
</ol>

<p>ユーザー定義のオブジェクトを生成するには、2 つのステップが必要です。</p>

<ol>
 <li>関数を記述して、オブジェクトの型を定義します。</li>
 <li><code>new</code> 演算子を使用して、オブジェクトのインスタンスを生成します。</li>
</ol>

<p>オブジェクトの型を定義するために、オブジェクトの名称やプロパティを指定する、オブジェクトの型のための関数を作成します。オブジェクトは、別のオブジェクトそのものをプロパティとして持つことができます。後述の例をご覧ください。</p>

<p>コード <code>new <em>Foo</em>(...)</code> を実行すると、以下の処理が行われます:</p>

<ol>
 <li><code><em>Foo</em>.prototype</code> を継承する、新しいオブジェクトを生成します。</li>
 <li>指定した引数を伴ってコンストラクター関数 <code><em>Foo</em></code> が呼び出され、<code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> が新たに生成したオブジェクトに紐づけられます。<code>new <em>Foo</em></code> は <code>new <em>Foo</em>()</code> と等価です。すなわち、引数を指定しない場合は <code><em>Foo</em></code> が引数なしで呼び出されます。</li>
 <li>コンストラクター関数が返すオブジェクト (null, false, 3.1415 などのプリミティブ型ではないもの) が、<code>new</code> 式の結果になります。コンストラクター関数が明示的にオブジェクトを返さない場合は、ステップ 1 で生成したオブジェクトを代わりに使用します。(通常、コンストラクターは値を返しませんが、通常のオブジェクト生成プロセスをオーバーライドしたい場合はそのようにすることができます。)</li>
</ol>

<p>以前生成したオブジェクトに、いつでもプロパティを追加できます。例えば <code>car1.color = "black"</code> という構文は、<code>color</code> プロパティを <code>car1</code> に追加して、値として "<code>black</code>" を代入します。しかし、これは他のオブジェクトには影響を与えません。同じ型のすべてのオブジェクトに新たなプロパティを追加するには、<code>Car</code> オブジェクト型の定義に対してプロパティを追加しなければなりません。</p>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype">Function.prototype</a></code> プロパティを使用して、以前定義したオブジェクトに対して共有のプロパティを追加できます。これはオブジェクト型のあるインスタンスのプロパティではなく、関数を使用して生成したすべてのオブジェクトで共有するプロパティを定義します。以下のコードでは <code>Car</code> 型のオブジェクトすべてに対して color プロパティを値 <code>"original color"</code> で定義しています。また、インスタンスオブジェクト <code>car1</code> の color プロパティに文字列の値 "<code>black</code>" を上書きしています。詳しくは <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype">prototype</a> をご覧ください。</p>

<pre class="brush: js notranslate">function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = "original color";
console.log(car1.color);    // original color

car1.color = 'black';
console.log(car1.color);   // black

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
console.log(car1.color)  // black
console.log(car2.color) // original color
</pre>

<div class="note">
<p><code>new</code> 演算子を記述しなかった場合、<strong>コンストラクターは通常の関数として扱われ</strong>、<em>オブジェクトを作成しません</em>。その際、<code>this</code> の値も異なるものになります。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Object_type_and_object_instance" name="Object_type_and_object_instance">オブジェクトの型とオブジェクトのインスタンス</h3>

<p>自動車用のオブジェクト型を作成したいとします。このオブジェクト型は <code>Car</code> という名前で、make、model、year というプロパティを持たせます。そのために、以下の関数を記述します。</p>

<pre class="brush: js notranslate">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>これで、以下のように <code>mycar</code> という名前のオブジェクトを生成できます。</p>

<pre class="brush: js notranslate">var mycar = new Car('Eagle', 'Talon TSi', 1993);
</pre>

<p>この構文は <code>mycar</code> を生成して、プロパティに特定の値を代入しています。<code>mycar.make</code> の値は文字列 "Eagle"、<code>mycar.year</code> の値は整数 1993 などとなります。</p>

<p><code>new</code> を呼び出して、<code>car</code> オブジェクトをいくつも生成できます。例えば、</p>

<pre class="brush: js notranslate">var kenscar = new Car('Nissan', '300ZX', 1992);
</pre>

<h3 id="Object_property_that_is_itself_another_object" name="Object_property_that_is_itself_another_object">それ自身が別のオブジェクトであるプロパティ</h3>

<p>以下のように、<code>Person</code> という名前のオブジェクトを定義します:</p>

<pre class="brush: js notranslate">function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
</pre>

<p>そして、以下のように <code>Person</code> オブジェクトのインスタンスを新たに 2 つ生成します。</p>

<pre class="brush: js notranslate">var rand = new Person('Rand McNally', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
</pre>

<p>さらに <code>Car</code> の定義を、以下のように <code>Person</code> オブジェクトを値としてとる <code>owner</code> プロパティを持つように書き換えます:</p>

<pre class="brush: js notranslate">function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
</pre>

<p>新しいオブジェクトを生成するため、以下のように使用します。</p>

<pre class="brush: js notranslate">var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
</pre>

<p>この構文では新しいオブジェクトを生成するときに文字列や整数のリテラル値を渡す代わりに、owner のパラメータとしてオブジェクト <code>rand</code> や <code>ken</code> を渡しています。<code>car2</code> の所有者名を調べるには、以下のようにしてプロパティにアクセスできます。</p>

<pre class="brush: js notranslate">car2.owner.name
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-new-operator', 'The new Operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.operators.new")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Reflect.construct()")}}</li>
 <li>{{jsxref("Object.prototype")}}</li>
</ul>
