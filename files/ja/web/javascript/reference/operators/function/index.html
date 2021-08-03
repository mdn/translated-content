---
title: 関数式
slug: Web/JavaScript/Reference/Operators/function
tags:
  - Function
  - JavaScript
  - Language feature
  - Operator
  - Primary Expressions
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/function
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong><code>function</code></strong> キーワードは、式の中で関数を定義するために使用されます。</p>

<p>{{jsxref("Function/Function", "Function")}} コンストラクターや{{jsxref("Statements/function", "関数宣言", "", 1)}}を用いて関数を定義することもできます。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html", "shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">let <var>myFunction</var> = function [<var>name</var>]([<var>param1</var>[, <var>param2[</var>, ..., <var>paramN</var>]]]) {
   <var>statements</var>
};</pre>

<p>ES2015 からは{{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}も使えます。</p>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>name</var></code> {{optional_inline}}</dt>
 <dd>関数名。省略可能で、その場合は関数は<em>無名</em>になります。 name は関数本体のみのローカルです。</dd>
 <dt><code><var>paramN</var></code> {{optional_inline}}</dt>
 <dd>関数に渡される引数の名前です。</dd>
 <dt><code><var>statements</var></code> {{optional_inline}}</dt>
 <dd>関数の本体を構成する文です。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>関数式は関数宣言とよく似ており、ほとんど同じ書式でもあります (詳しくは {{jsxref("Statements/function", "function")}} 文を参照してください)。関数式と関数宣言の主な相違点は、<em>関数名</em>です。関数式では、<em>無名</em>関数を生成するために、関数名を省略できます。関数式は、定義するとすぐに実行する <strong>IIFE</strong> (即時実行関数)として使用できます。詳細については、{{jsxref("Functions", "関数", "", 1)}}の章を参照してください。</p>

<h3 id="Function_expression_hoisting" name="Function_expression_hoisting">関数式の巻き上げ</h3>

<p>JavaScript の関数式は、{{jsxref("Statements/function", "関数宣言", "#Function_declaration_hoisting", 1)}}と違って巻き上げられません。定義前に関数式を使用することはできません。</p>

<pre class="brush: js">console.log(notHoisted) // undefined
// 変数名は巻き上げが行われますが、定義は行われません。そのため undefined になります。
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
</pre>

<h3 id="Named_function_expression" name="Named_function_expression">名前付き関数式</h3>

<p>関数内でその関数自身を参照する必要がある場合は、名前付き関数式を作成する必要があります。<u><strong>この名前は関数本体 (スコープ) に対してのみローカルです</strong></u>。これにより非標準の {{jsxref("Functions/arguments/callee", "arguments.callee")}} プロパティの使用も避けられます。</p>

<pre class="brush: js">let math = {
  'factit': function factorial(n) {
    console.log(n)
    if (n &lt;= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
};

math.factit(3) //3;2;1;
</pre>

<p>関数式が代入された変数は <code>name</code> プロパティを持ちます。別の変数に代入しても name は変わりません。関数名が省略された場合、変数名になります (暗黙的ｇな名前)。関数名が存在したら、それが関数名になります (明示的な名前)。これは{{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}にもあてはまります (アローは名前がないので変数名を暗黙的な名前として与える)。</p>

<pre class="brush: js">var foo = function() {}
foo.name // "foo"

var foo2 = foo
foo2.name // "foo"

var bar = function baz() {}
bar.name // "baz"

console.log(foo === foo2); // true
console.log(typeof baz); // undefined
console.log(bar === baz); // false (errors because baz == undefined)
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_an_unnamed_function" name="Creating_an_unnamed_function">無名関数の作成</h3>

<p>次の例では、無名関数を定義してそれを <code>x</code> に割り当てます。 関数は引数の 2 乗を返します。</p>

<pre class="brush: js">var x = function(y) {
   return y * y;
};
</pre>

<h3 id="Using_a_function_as_a_callback" name="Using_a_function_as_a_callback">関数をコールバックとして使用</h3>

<p>より一般的には{{Glossary("Callback_function", "コールバック")}}として使われます。</p>

<pre class="brush: js">button.addEventListener('click', function(event) {
    console.log('button is clicked!')
})</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.function")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Arrow_functions", "アロー関数", "", 1)}}</li>
 <li>{{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}</li>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Statements/function", "function")}} 文</li>
 <li>{{jsxref("Statements/function*", "function*")}} 文</li>
 <li>{{jsxref("Operators/function*", "function*")}} 式</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
 <li>{{jsxref("Statements/async_function", "非同期関数", "", 1)}}</li>
 <li>{{jsxref("Operators/async_function", "非同期関数式", "", 1)}}</li>
</ul>
