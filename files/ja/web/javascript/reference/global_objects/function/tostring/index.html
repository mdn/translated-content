---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
tags:
  - Function
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Function/toString
---
<div>{{JSRef}}</div>

<p><code><strong>toString()</strong></code> メソッドは、関数のソースコードを表す文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/function-tostring.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>function</var>.toString()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>関数のソースコードを表す文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Function")}} オブジェクトは、 {{jsxref("Object")}} から継承した {{jsxref("Object.prototype.toString", "toString")}} メソッドをオーバーライドします。つまり、 {{jsxref("Object.prototype.toString")}} を継承しません。 {{jsxref("Function")}} オブジェクトについて、 <code>toString</code> メソッドは関数宣言を表現するオブジェクトを表す文字列を返します。</p>

<p>{{jsxref("Function")}} を文字列値として表現するとき、JavaScript は自動的に <code>toString</code> メソッドを呼び出します。例えば、関数が文字列と連結されるときです。</p>

<p><code>this</code> 値のオブジェクトが <code>Function</code> オブジェクトでない場合、 <code>toString()</code> メソッドは {{jsxref("TypeError")}} 例外 ("Function.prototype.toString called on incompatible object") を発生します。</p>

<pre class="brush: js example-bad notranslate">Function.prototype.toString.call('foo'); // TypeError
</pre>

<p><code>toString()</code> メソッドが組込み関数オブジェクトや <code>Function.prototype.bind</code> 作成された関数に対して呼び出されると、 <code>toString()</code> は、次のような<em>ネイティブ関数文字列</em>を返します。</p>

<pre class="brush: js notranslate">"function () {\n    [native code]\n}"
</pre>

<p><code>toString()</code> メソッドが <code>Function</code> コンストラクターで生成された関数に対して呼び出されると、 <code>toString()</code> は "anonymous" という名前の関数宣言に、提供された引数と関数の本体を合成したソースコードを返します。</p>

<p><code>+</code> 演算子を使用して、関数の文字列表現を明示的に取得することもできます。</p>

<pre class="brush: js notranslate">function foo() { return 'bar' }
console.log(foo + ''); // "function foo() { return 'bar' }"</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Comparing_actual_source_code_and_toString_results" name="Comparing_actual_source_code_and_toString_results">実際のソースコードと toString の結果との比較</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Function</th>
   <th scope="col">Function.prototype.toString の結果</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    <pre class="notranslate">
function f(){}</pre>
   </td>
   <td>
    <pre class="notranslate">
"function f(){}"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
class A { a(){} }</pre>
   </td>
   <td>
    <pre class="notranslate">
"class A { a(){} }"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
function* g(){}</pre>
   </td>
   <td>
    <pre class="notranslate">
"function* g(){}"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
a =&gt; a</pre>
   </td>
   <td>
    <pre class="notranslate">
"a =&gt; a"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
({ a(){} }.a)</pre>
   </td>
   <td>
    <pre class="notranslate">
"a(){}"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
({ *a(){} }.a)</pre>
   </td>
   <td>
    <pre class="notranslate">
"*a(){}"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
({ [0](){} }[0])</pre>
   </td>
   <td>
    <pre class="notranslate">
"[0](){}"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
Object.getOwnPropertyDescriptor({
    get a(){}
}, "a").get</pre>
   </td>
   <td>
    <pre class="notranslate">
"get a(){}"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
Object.getOwnPropertyDescriptor({
    set a(x){}
}, "a").set</pre>
   </td>
   <td>
    <pre class="notranslate">
"set a(x){}"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
Function.prototype.toString</pre>
   </td>
   <td>
    <pre class="notranslate">
"function toString() { [native code] }"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
(function f(){}.bind(0))</pre>
   </td>
   <td>
    <pre class="notranslate">
"function () { [native code] }"</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="notranslate">
Function("a", "b")</pre>
   </td>
   <td>
    <pre class="notranslate">
"function anonymous(a\n) {\nb\n}"</pre>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function.prototype.tostring', 'Function.prototype.toString')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Function.toString")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
