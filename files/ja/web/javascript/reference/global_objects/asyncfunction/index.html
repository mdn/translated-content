---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
tags:
  - Constructor
  - JavaScript
  - Reference
  - コンストラクター
translation_of: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---
<div>{{JSRef}}</div>

<p><strong><code>AsyncFunction</code> コンストラクター</strong>は、新しい{{jsxref("Statements/async_function", "非同期関数", "", 1)}}オブジェクトを生成します。 JavaScript では、すべての非同期関数が実際に <code>AsyncFunction</code> オブジェクトです。</p>

<p><code>AsyncFunction</code> はグローバルオブジェクトでは<em>ない</em>ことに注意してください。これは以下のようなコードで取得することができます。</p>

<pre class="brush: js">Object.getPrototypeOf(async function(){}).constructor
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">new AsyncFunction([<var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]],] <var>functionBody</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>形式的な引数名として関数に使用される名前です。それぞれが有効な JavaScript の識別子であるか、カンマで区切った文字列のリストで、例えば "<code>x</code>", "<code>theValue</code>", "<code>a,b</code>" などです。</dd>
 <dt><code>functionBody</code></dt>
 <dd>関数定義を構成する JavaScript 文を含む文字列。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>AsyncFunction</code> コンストラクターで生成された{{jsxref("Statements/async_function", "非同期関数", "", 1)}}オブジェクトは、関数が生成されたときにパースされます。これは、非同期関数を{{jsxref("Statements/async_function", "非同期関数式", "", 1)}}で定義してからコード内で呼び出す方法ほど効率的ではありません。というのも、そのような関数はコードの残りの部分と共にパースされるからです。</p>

<p>関数に渡されたすべての引数は、渡された順に、作成される関数内の引数の識別子の名前として扱われます。</p>

<div class="note">
<p><strong>注:</strong> {{jsxref("Statements/async_function", "非同期関数", "", 1)}}が <code>AsyncFunction</code> コンストラクターによって生成された場合、生成コンテキストのクロージャは生成されません。常にグローバルスコープに生成されます。</p>

<p>実行すると、ローカル変数とグローバル変数にのみアクセスでき、 <code>AsyncFunction</code> コンストラクターが呼び出されたスコープの変数にはアクセスできません。</p>

<p>これは、非同期関数式のコードで {{jsxref("Global_Objects/eval", "eval")}} を使用した場合とは異なります。</p>
</div>

<p><code>AsyncFunction</code> コンストラクターを (<code>new</code> 演算子を使用せずに) 関数として呼び出した場合、コンストラクターとして呼び出したときと同じ効果があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="AsyncFunction_コンストラクターから非同期関数を生成する">AsyncFunction() コンストラクターから非同期関数を生成する</h3>

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
}

let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

let a = new AsyncFunction('a',
                          'b',
                          'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');

a(10, 20).then(v =&gt; {
  console.log(v); // prints 30 after 4 seconds
});
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-async-function-objects', 'AsyncFunction object')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.AsyncFunction")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/async_function", "async function 関数", "", 1)}}</li>
 <li>{{jsxref("Operators/async_function", "async function 式", "", 1)}}</li>
 <li>{{jsxref("Global_Objects/Function", "Function")}}</li>
 <li>{{jsxref("Statements/function", "関数文", "", 1)}}</li>
 <li>{{jsxref("Operators/function", "関数式", "", 1)}}</li>
 <li>{{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}</li>
</ul>
