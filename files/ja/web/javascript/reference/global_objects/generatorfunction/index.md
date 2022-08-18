---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
tags:
  - Constructor
  - ECMAScript 2015
  - GeneratorFunction
  - Iterator
  - JavaScript
  - Reference
  - コンストラクター
translation_of: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
---
<div>{{JSRef}}</div>

<p><strong><code>GeneratorFunction</code> コンストラクター</strong>は、新しい{{jsxref("Statements/function*", "ジェネレーター関数", "", 1)}}オブジェクトを生成します。 JavaScript では、すべてのジェネレーター関数が実際に <code>GeneratorFunction</code> オブジェクトです。</p>

<p><code>GeneratorFunction</code> はグローバルオブジェクトではないことに注意してください。次のコードを評価することによって得られます。</p>

<pre class="brush: js">Object.getPrototypeOf(function*(){}).constructor
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">new GeneratorFunction ([<var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]],] <var>functionBody</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>形式的な引数名として関数に使用される名前です。それぞれが有効な JavaScript の識別子であるか、カンマで区切った文字列のリストで、例えば "<code>x</code>", "<code>theValue</code>", "<code>a,b</code>" などです。</dd>
 <dt><code>functionBody</code></dt>
 <dd>関数定義を構成する JavaScript 文を含む文字列。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>GeneratorFunction</code> コンストラクターで生成された{{jsxref("Statements/function*", "ジェネレーター関数", "", 1)}}オブジェクトは、関数が生成されたときにパースされます。これは、ジェネレーター関数を {{jsxref("Statements/function*", "function* 式")}}で定義してからコード内で呼び出す方法ほど効率的ではありません。というのも、そのような関数はコードの残りの部分と共にパースされるからです。</p>

<p>関数に渡されたすべての引数は、渡された順に、作成される関数内の引数の識別子の名前として扱われます。</p>

<div class="note">
<p><strong>注:</strong> {{jsxref("Statements/function*", "ジェネレーター関数")}}が <code>GeneratorFunction</code> コンストラクターによって生成された場合、生成コンテキストのクロージャは作成されません。常にグローバルスコープに生成されます。</p>

<p>実行すると、ローカル変数とグローバルグローバル変数にのみアクセスでき、 <code>GeneratorFunction</code> コンストラクターが呼び出されたスコープの変数にはアクセスできません。</p>

<p>これは、ジェネレーター関数式のコードで {{jsxref("Global_Objects/eval", "eval")}} を使用した場合とは異なります。</p>
</div>

<p><code>GeneratorFunction</code> コンストラクターを (<code>new</code> 演算子を使用せずに) 関数として呼び出した場合、コンストラクターとして呼び出したときと同じ効果があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_a_generator_function_from_a_GeneratorFunction_constructor" name="Creating_a_generator_function_from_a_GeneratorFunction_constructor">GeneratorFunction() コンストラクターからジェネレーター関数を生成する</h3>

<pre class="brush: js">var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction('a', 'yield a * 2');
var iterator = g(10);
console.log(iterator.next().value); // 20
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-generatorfunction-objects', 'GeneratorFunction')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.GeneratorFunction")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/function*", "function* 関数", "", 1)}}</li>
 <li>{{jsxref("Operators/function*", "function* 式", "", 1)}}</li>
 <li>{{jsxref("Global_Objects/Function", "Function")}}</li>
 <li>{{jsxref("Statements/function", "関数文", "", 1)}}</li>
 <li>{{jsxref("Operators/function", "関数式", "", 1)}}</li>
 <li>{{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}</li>
</ul>
