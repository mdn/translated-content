---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
tags:
- Classes
- ECMAScript 2015
- JavaScript
- Language feature
- Reference
translation_of: Web/JavaScript/Reference/Operators/new.target
---
<div>{{JSSidebar("Operators")}}</div>

<p><strong><code>new.target</code></strong> は擬似プロパティで、関数やコンストラクターが <a href="/ja/docs/Web/JavaScript/Reference/Operators/new">new</a> 演算子を使用して呼び出されたかどうかを検出することができます。 <a href="/ja/docs/Web/JavaScript/Reference/Operators/new">new</a> 演算子を使用して呼び出されたコンストラクターや関数の中では、 <code>new.target</code> はコンストラクターや関数への参照を返します。通常の関数呼び出しの場合、 <code>new.target</code> は {{jsxref("undefined")}} になります。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">new.target</pre>

<h2 id="Description">解説</h2>

<p><code>new.target</code> の構文は、<code>new</code> キーワードとドット、 <code>target</code> 識別子で構成されています。通常、ドットの左側はプロパティアクセスが行われるオブジェクトですが、ここでの <code>new</code> はオブジェクトではありません。</p>

<p><code>new.target</code> は、すべての関数で使用できる擬似プロパティです。</p>

<p>クラスのコンストラクターでは、構築されたクラスを参照します。</p>

<p>通常の関数では、<a href="/ja/docs/Web/JavaScript/Reference/Operators/new">new</a> 演算子を介して呼び出されたと仮定して、関数自体を参照します。それ以外の場合、<code>new.target</code> は {{jsxref("undefined")}} になります。</p>

<p><a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>では、<code>new.target</code> は周囲のスコープから継承されます。</p>

<h2 id="Examples">例</h2>

<h3 id="new.target_in_function_calls">関数呼び出しにおける new.target の使用</h3>

<p>通常の関数呼び出しでは (コンストラクター関数の呼び出しとは対照的に)、 <code>new.target</code> は {{jsxref("undefined")}} になります。これにより、関数が <a href="/ja/docs/Web/JavaScript/Reference/Operators/new">new</a> でコンストラクターとして呼び出されたかを検出できます。</p>

<pre class="brush: js">function Foo() {
  if (!new.target) { throw 'Foo() must be called with new' }
  console.log('Foo instantiated with new')
}

new Foo()  // logs "Foo instantiated with new"
Foo()      // throws "Foo() must be called with new"
</pre>

<h3 id="new.target_in_constructors">コンストラクターにおける new.target</h3>

<p>クラスのコンストラクターでは、<code>new.target</code> は <code>new</code> で直接実行されたコンストラクターを参照します。これは、コンストラクターが親クラスにあり、子コンストラクターから委任された場合も同様です。</p>

<pre class="brush: js">class A {
  constructor() {
    console.log(new.target.name)
  }
}

class B extends A { constructor() { super() } }

let a = new A()  // logs "A"
let b = new B()  // logs "B"

class C { constructor() { console.log(new.target)  } }
class D extends C { constructor() { super()  } }

let c = new C()  // logs class C{constructor(){console.log(new.target);}}
let d = new D()  // logs class D extends C{constructor(){super();}}</pre>

<p class="summary">上記の <code>C</code> および <code>D</code> クラスの例から、 <code>new.target</code> は初期化されたクラスのクラス定義を指しているように見えます。たとえば、<code>d</code> を <code>new D()</code> で初期化した場合は、 <code>D</code> のクラス定義が出力され、同様に <code>c</code> の場合は <code>C</code> のクラスが出力されます。</p>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-built-in-function-objects', 'Built-in Function Objects')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.new_target")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions">関数</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Classes">クラス</a></li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/new">new</a></code></li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code></li>
</ul>
