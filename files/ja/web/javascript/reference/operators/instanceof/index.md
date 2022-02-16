---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
tags:
  - JavaScript
  - Language feature
  - Object
  - Operator
  - Prototype
  - Relational Operators
  - instanceof
translation_of: Web/JavaScript/Reference/Operators/instanceof
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong><code>instanceof</code></strong> 演算子は、オブジェクトが自身のプロトタイプにコンストラクタの <code>prototype</code> プロパティを持っているかを確認します。戻り値はブール値です。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>object</var> instanceof <var>constructor</var></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>object</var></code></dt>
 <dd>確認するオブジェクト</dd>
</dl>

<dl>
 <dt><code><var>constructor</var></code></dt>
 <dd>オブジェクトに対して確認を行う関数</dd>
</dl>

<h2 id="説明">説明</h2>

<p><code>instanceof</code> 演算子は、<code>object</code> のプロトタイプチェインで <code>constructor.prototype</code> の存在を確認します。</p>

<pre class="brush: js notranslate">// コンストラクタを定義
function C() {}
function D() {}

let o = new C()

// true なぜなら: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false D.prototype は o のプロトタイプチェーンのどこにも存在しない
o instanceof D;

o instanceof Object;          // true なぜなら...
C.prototype instanceof Object // true だから

C.prototype = {}
let o2 = new C()

o2 instanceof C; // true

// false C.prototype は o のプロトタイプチェーンの
// どこにも存在しない
o instanceof C;

D.prototype = new C(); // 継承を使用
let o3 = new D()
o3 instanceof D; // true
o3 instanceof C; // true o3 のプロトタイプチェーンに C.prototype があるため。
</pre>

<p>注意事項: <code>instanceof</code> による確認結果はコンストラクタの <code>prototype</code> プロパティの変化に従って変わることがあります。また、オブジェクトのプロトタイプを <code>Object.setPrototypeOf</code> を用いて変更した場合や、非標準の <code>__proto__</code> 疑似プロパティを用いた場合も変わりえます。</p>

<h3 id="instanceof_and_multiple_context_e.g._frames_or_windows" name="instanceof_and_multiple_context_e.g._frames_or_windows"><code>instanceof</code> と複数のコンテキスト (例: frame や window)</h3>

<p>異なるスコープは、別々の実行環境を持ちます。つまり、それらは別々の組み込み物 (別々のグローバルオブジェクト、別々のコンストラクタ 等々) を持ちます。これにより予期せぬ結果になる場合があります。例えば、<code>[] instanceof window.frames[0].Array</code> は、<code>Array.prototype !== window.frames[0].Array</code> であることおよび配列が以前から継承していることから <code>false</code> を返します。</p>

<p>これは、始めはわかりにくいかもしれませんが、スクリプトで複数のフレームやウィンドウを扱い始め、オブジェクトをあるコンテキストから別のコンテキストへ関数を経由して渡すようになると、正当かつ重要な事項になります。例えば、<code>Array.isArray(<var>myObj</var>)</code> を使用して、与えられたオブジェクトが実際に配列であるかどうかを安全にチェックできます。</p>

<p>例えば、別のコンテキストで <a href="/ja/docs/Web/API/Node">Nodes</a> が <a href="/ja/docs/Web/API/SVGElement">SVGElement</a> であるかどうかをチェックするには、<code>myNode instanceof myNode.ownerDocument.defaultView.SVGElement</code> を使用します。</p>

<div class="note">
<p><strong>Mozilla 開発者への注意点</strong></p>

<p>XPCOM を用いるコードでは <code>instanceof</code> に特別な効果があります: <code>obj instanceof <em>xpcomInterface</em></code> (例えば <code>Components.interfaces.nsIFile</code>) は <code>obj.QueryInterface(<em>xpcomInterface</em>)</code> を呼び出し、<code>QueryInterface</code> が成功した場合に <code>true</code> を返します。</p>

<p>このような呼び出しの副作用として、<code>instanceof</code> による確認の成功後に <code><var>obj</var></code> の <code>xpcomInterface</code> のプロパティを利用できることがあります。標準 JavaScript の環境と異なり、<code>obj</code> が異なるスコープ由来であっても <code><var>obj</var> instanceof <var>xpcomInterface</var></code> での確認は期待どおりに動作します。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Demonstrating_that_String_and_Date_are_of_type_Object_and_exceptional_cases" name="Demonstrating_that_String_and_Date_are_of_type_Object_and_exceptional_cases"><code>String</code> や <code>Date</code> が <code>Object</code> タイプであることの実証</h3>

<p>以下のコードは、<code>String</code> や <code>Date</code> オブジェクトが <code>Object</code> タイプでもある (<code>Object</code> から派生している) ことの実証に <code>instanceof</code> を用いています。</p>

<p>また、オブジェクトリテラルを用いて作成されたオブジェクトに対する例外、つまり、prototype が <code>undefined</code> であるにも関わらず <code>instanceof Object</code> が <code>true</code> を報告する例を示します。</p>

<pre class="brush: js notranslate">let simpleStr = 'This is a simple string'
let myString  = new String()
let newStr    = new String('コンストラクターで作成された文字列')
let myDate    = new Date()
let myObj     = {}
let myNonObj  = Object.create(null)

simpleStr instanceof String  // false を返す 文字列リテラルはオブジェクトではありません。
myString  instanceof String  // true を返す
newStr    instanceof String  // true を返す
myString  instanceof Object  // true を返す

myObj    instanceof Object   // true を返す すべてのオブジェクトリテラルはプロトタイプとして Object.prototype を持っています。
({})     instanceof Object   // true を返す 上記と同じ
myNonObj instanceof Object   // false を返す プロトタイプはプロトタイプチェーンの終わりです（null）
myString instanceof Date     // false を返す

myDate instanceof Date      // true を返す
myDate instanceof Object    // true を返す
myDate instanceof String    // false を返す
</pre>

<h3 id="Demonstrating_that_mycar_is_of_type_Car_and_type_Object" name="Demonstrating_that_mycar_is_of_type_Car_and_type_Object"><code>mycar</code> が <code>Car</code> タイプおよび <code>Object</code> タイプであることの実証</h3>

<p>以下のコードは、<code>Car</code> オブジェクトタイプとそのインスタンスである <code>mycar</code> を生成しています。<code>instanceof</code> 演算子で、<code>mycar</code> は <code>Car</code> タイプおよび <code>Object</code> タイプであることを実証します。</p>

<pre class="brush: js notranslate">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let mycar = new Car('Honda', 'Accord', 1998)
let a = mycar instanceof Car     // true を返す
let b = mycar instanceof Object  // true を返す
</pre>

<h3 id="Not_an_instanceof" name="Not_an_instanceof">インスタンスではないことの実証</h3>

<p>オブジェクトが特定のコンストラクタの <code>instanceof</code> でないかどうかを確認するには次のようにします。</p>

<pre class="brush: js notranslate">if (!(mycar instanceof Car)) {
  // Do something, like:
  // mycar = new Car(mycar)
}
</pre>

<p>これは実際には次のものとは異なります。</p>

<pre class="brush: js notranslate">if (!mycar instanceof Car)</pre>

<p>これは常に <code>false</code> になります。(<code>!mycar</code> は <code>instanceof</code> の前に評価され、常に <code>Car</code> のインスタンスを確認したブール値になります)。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.operators.instanceof")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/typeof" title="/ja/docs/JavaScript/Reference/Operators/typeof">typeof</a></code></li>
 <li>{{jsxref("Symbol.hasInstance")}}</li>
 <li>{{jsxref("Object.prototype.isPrototypeOf")}}</li>
</ul>
