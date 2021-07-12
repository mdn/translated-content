---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
tags:
  - ECMAScript6
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/name
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">{{jsxref("Function")}} オブジェクトの <strong><code>name</code></strong> プロパティは読み取り専用で、作成時に付けられた関数の名前、もしくは無名関数の場合は <code>anonymous</code> または <code>''</code> (空文字列) を返します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/function-name.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<div>{{js_property_attributes(0,0,1)}}</div>

<div class="note">
<p>標準外であった ES2015 以前の実装では、<code>configurable</code> 属性も <code>false</code> であることに注意してください。</p>
</div>

<h2 id="JavaScript_compressors_and_minifiers" name="JavaScript_compressors_and_minifiers">JavaScript の圧縮とミニファイ</h2>

<div class="warning">
<p><strong>警告:</strong> <code>Function.name</code> を使用しているときに、 JavaScript の圧縮 (ミニファイ) や難読化のような変換を行う際には注意が必要です。これらのツールは JavaScript ビルドパイプラインの一部として、本番環境に設置する前にプログラムのサイズを縮小するためによく使用されます。それらの変換は、ビルド時に関数名を変更することがあります。</p>
</div>

<p>次のようなソースコードは、</p>

<pre class="brush: js notranslate">function Foo() {};
let foo = new Foo();

if (foo.constructor.name === 'Foo') {
  console.log("'foo' は 'Foo' のインスタンスである");
} else {
  console.log('おおっと！');
}
</pre>

<p>このように圧縮されるかもしれません。</p>

<pre class="brush: js notranslate">function a() {};
let b = new a();
if (b.constructor.name === 'Foo') {
  console.log("'foo' は 'Foo' のインスタンスである");
} else {
  console.log('おおっと！');
}
</pre>

<p>非圧縮版では、プログラムは真の方の分岐を実行し、「<code>'foo' は 'Foo' のインスタンスである</code>」と表示するのに対し、圧縮版は異なる振る舞いをし、偽の方の分岐を実行します。それゆえ、上述の例のように <code>Function.name</code> に依存するならば、ビルドパイプラインが関数名を変更しないようにするか、特定の関数名を想定しない構造にする必要があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Function_statement_name" name="Function_statement_name">関数文の名前</h3>

<p><code>name</code> プロパティは関数文の名前を返します。</p>

<pre class="brush: js notranslate">function doSomething() {}
doSomething.name; // "doSomething"
</pre>

<h3 id="Function_constructor_name" name="Function_constructor_name">Function コンストラクターの名前</h3>

<p>構文 <code>new Function(...)</code> または単に <code>Function(...)</code> で関数を作成すると、 {{jsxref("Function")}} オブジェクトが作成され、その名前は "anonymous" になります。</p>

<pre class="brush: js notranslate">(new Function).name; // "anonymous"</pre>

<h3 id="Anonymous_function_expression" name="Anonymous_function_expression">無名関数式</h3>

<p><code>function</code> キーワードを使用して生成された関数式またはアロー関数は、名前が <code>""</code> (空文字列) になっています。</p>

<pre class="brush: js notranslate">(function() {}).name; // ""
(() =&gt; {}).name; // ""
</pre>

<h3 id="Inferred_function_names" name="Inferred_function_names">関数名の推測</h3>

<p>変数とメソッドは、構文上の位置から無名関数の名前を推論できます (ECMAScript 2015 から)。</p>

<pre class="brush: js notranslate">let f = function() {};
let object = {
  someMethod: function() {}
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
</pre>

<p>{{jsxref("Operators/Function", "関数式", "", 1)}} で名前を持つ関数を定義することができます。</p>

<pre class="brush: js notranslate">let object = {
  someMethod: function object_someMethod() {}
};
console.log(object.someMethod.name); // "object_someMethod" と表示

try { object_someMethod } catch(e) { console.log(e); }
// ReferenceError: object_someMethod is not defined
</pre>

<p>name プロパティは読み取り専用であり、代入演算子で変更することはできません。</p>

<div class="hidden">
<p>以下の例は、この節の冒頭で言われていることと矛盾しており、記述通りには動作しません。</p>
</div>

<pre class="brush: js notranslate"> let object = {
  // anonymous
  someMethod: function() {}
};

object.someMethod.name = 'otherMethod';
console.log(object.someMethod.name); // someMethod
</pre>

<p>変更したければ、{{jsxref("Object.defineProperty()")}} を使ってください。</p>

<h3 id="Shorthand_method_names" name="Shorthand_method_names">短縮メソッドの名前</h3>

<pre class="brush: js notranslate">var o = {
  foo(){}
};
o.foo.name; // "foo";</pre>

<h3 id="Bound_function_names" name="Bound_function_names">バインドされた関数の名前</h3>

<p>{{jsxref("Function.bind()")}} が関数を作成する時、その名前は "bound " とその関数名を合わせたものとなります。</p>

<pre class="brush: js notranslate">function foo() {};
foo.bind({}).name; // "bound foo"
</pre>

<h3 id="Function_names_for_getters_and_setters" name="Function_names_for_getters_and_setters">ゲッターとセッターの関数名</h3>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/get">get</a></code> と <code><a href="/ja/docs/JavaScript/Reference/Operators/set">set</a></code> を使う時は、 "get" や "set" が関数名に含まれます。</p>

<pre class="brush: js notranslate">let o = {
  get foo(){},
  set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";</pre>

<h3 id="Function_names_in_classes" name="Function_names_in_classes">クラスでの関数名</h3>

<p><code>obj.constructor.name</code> でオブジェクトの「クラス」を知ることができます (ただし、下記の警告を確認してください)。</p>

<pre class="brush: js notranslate">function Foo() {}  // ES2015 構文の場合: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo" と表示
</pre>

<div class="warning">
<p><strong>警告:</strong> スクリプトインタープリターは、関数が自身の <em>name</em> プロパティを持っていない場合に限り、組み込みの <code>Function.name</code> プロパティを設定します (<a href="http://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname">9.11.2. of the ECMAScript2015 Language Specification</a> セクションをご覧ください)。しかし ES2015 では、<em>static</em> キーワードを指定すると、その静的メソッドはクラスのコンストラクタ関数の OwnProperty として設定されます (ECMAScript2015, <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation">14.5.14.21.b</a> + <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation">12.2.6.9</a>)。</p>
</div>

<p>従って、<code>name()</code> という静的メソッドを持つクラスでは、事実上そのクラス名を取得することはできません:</p>

<pre class="brush: js notranslate">class Foo {
  constructor() {}
  static name() {}
}
</pre>

<p><code>static name()</code> メソッドが存在する場合、<code>Foo.name</code> はクラス名ではなく、 <code>name()</code> 関数オブジェクトへの参照を持つことになります。Chrome や Firefox では、上記の ES2015 の構文によるクラス定義は、下記の ES5 構文のコードと同じような挙動をします:</p>

<pre class="brush: js notranslate">function Foo() {}
Object.defineProperty(Foo, 'name', { writable: true });
Foo.name = function() {};
</pre>

<p><code>fooInstance.constructor.name</code> で <code>fooInstance</code> のクラスを取得しようとしても、得られるのはクラス名ではなく静的メソッドへの参照です。例えば:</p>

<pre class="brush: js notranslate">let fooInstance = new Foo();
console.log(fooInstance.constructor.name); // 関数 name() を表示
</pre>

<p>先ほどの ES5 の構文の例では、Chrome や Firefox での <code>Foo.name</code> の静的な定義の際に <em>writable</em> を指定しています。このような独自の手法を用いなければ、デフォルトでは <em>read-only</em> となります:</p>

<pre class="brush: js notranslate">Foo.name = 'Hello';
console.log(Foo.name); // Foo が static name() を持つ場合は "Hello"、そうでなければ "Foo" と表示する。
</pre>

<p>従って、<code>Function.name</code> プロパティが常にクラス名を保持しているとは考えないほうがいいでしょう。</p>

<h3 id="Symbols_as_function_names" name="Symbols_as_function_names">関数名としての Symbol</h3>

<p>{{jsxref("Symbol")}} を関数名として使用し、Symbol が description を持っている場合、関数名はブラケット <code>[ ]</code> 内の description となります。</p>

<pre class="brush: js notranslate">let sym1 = Symbol("foo");
let sym2 = Symbol();
let o = {
  [sym1]: function(){},
  [sym2]: function(){}
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-instances-name', 'name')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Function.name")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
</div>
