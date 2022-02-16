---
title: super
slug: Web/JavaScript/Reference/Operators/super
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Left-hand-side expressions
  - Operator
translation_of: Web/JavaScript/Reference/Operators/super
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>super</strong> キーワードは、オブジェクトの親の関数を呼び出すために使用できます。</p>

<p><code>super.prop</code> および <code>super[expr]</code> 式は、<a href="/ja/docs/Web/JavaScript/Reference/Classes">class</a> と <a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">オブジェクトリテラル</a> の両方におけるあらゆる<a href="/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions">メソッド定義</a>で有効です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">super([arguments]); // 親コンストラクターを呼び出します。
super.functionOnParent([arguments]);
</pre>

<h2 id="Description" name="Description">解説</h2>

<p>コンストラクターで使用する場合、<code>super</code> キーワードを単独で置き、<code>this</code> キーワードが使われる前に使用する必要があります。<code>super</code> キーワードは、親オブジェクトの関数を呼び出すためにも使用できます。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Using_super_in_classes" name="Using_super_in_classes">クラス内での <code>super</code> の使用</h3>

<p>このコードスニペットは、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">classes sample</a> (<a href="https://googlechrome.github.io/samples/classes-es6/index.html">実際のデモ</a>) からとっています。<code>super()</code> を利用することで、<code>Rectangle</code> と <code>Square</code> のコンストラクターに共通する処理を重複して記述しないようにしています。</p>

<pre class="brush: js notranslate">class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError になります。super を先に呼び出さなければなりません！

    // length の値で親クラスの constructor を呼びます。
    // Rectangle の width と height になります。
    super(length, length);

    // Note: 'this' を使う前に super() をコールしなければなりません。
    // でないと reference error になります。
    this.name = 'Square';
  }
}</pre>

<h3 id="Super-calling_static_methods" name="Super-calling_static_methods">静的メソッドでの super の呼び出し</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Classes/static">static</a> メソッドでも super を呼び出すことができます。</p>

<pre class="brush: js notranslate">class Rectangle {
  constructor() {}
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
</pre>

<h3 id="Deleting_super_properties_will_throw_an_error" name="Deleting_super_properties_will_throw_an_error">super プロパティの削除でエラーが発生</h3>

<p>親クラスのプロパティを削除するために、<a href="/ja/docs/Web/JavaScript/Reference/Operators/delete">delete 演算子</a> や <code>super.prop</code>、<code>super[expr]</code> を使うことはできません。{{jsxref("ReferenceError")}} がスローされます。</p>

<pre class="brush: js notranslate">class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'. </pre>

<h3 id="super.prop_cannot_overwrite_non-writable_properties" name="super.prop_cannot_overwrite_non-writable_properties"><code>super.prop</code> は書き込み不可能なプロパティを上書きできない</h3>

<p>{{jsxref("Object.defineProperty")}} などで書き込み不可プロパティを定義した場合、<code>super</code> はプロパティの値を上書きできません。</p>

<pre class="brush: js notranslate">class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;   // 値を上書きできない
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" は読み取り専用
console.log(y.prop); // 1
</pre>

<h3 id="Using_super.prop_in_object_literals" name="Using_super.prop_in_object_literals">オブジェクトリテラル内での <code>super.prop</code> の使用</h3>

<p>super は <a href="/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer / literal</a> 記法内でも使用できます。この例では、二つのオブジェクトがメソッドを定義しています。二つ目のオブジェクトの中で、<code>super</code> が最初のオブジェクトのメソッドを呼び出しています。これは {{jsxref("Object.setPrototypeOf()")}} の助けで動作し、これは <code>obj2</code> のプロトタイプを <code>obj1</code> に設定するので、<code>super</code> は <code>method1</code> を <code>obj1</code> 上で見つけることができます。</p>

<pre class="brush: js notranslate">var obj1 = {
  method1() {
    console.log('method 1');
  }
}

var obj2 = {
  method2() {
    super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
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
			<td>{{SpecName('ESDraft', '#sec-super-keyword', 'super')}}</td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.operators.super")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
	<li><a href="/ja/docs/Web/JavaScript/Reference/Classes">クラス</a></li>
</ul>
