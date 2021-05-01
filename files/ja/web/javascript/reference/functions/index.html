---
title: 関数
slug: Web/JavaScript/Reference/Functions
tags:
  - Function
  - Functions
  - Guide
  - JavaScript
  - Parameter
  - parameters
browser-compat: javascript.functions
translation_of: Web/JavaScript/Reference/Functions
---
<div>{{jsSidebar("Functions")}}</div>

<p>一般的に言うと、関数とは外部 (再帰の場合は内部) から <em>呼び出す</em> ことのできる「サブプログラム」です。プログラムそのもののように、関数は関数本体 (<em>function body</em>) と呼ばれる連続した文で構成されます。値を関数に <em>渡す</em> ことができ、関数は値を<em>返す</em>ことができます。</p>

<p>JavaScript において、関数は第一級オブジェクトです。すなわち、関数はオブジェクトであり、他のあらゆるオブジェクトと同じように操作したり渡したりすることができます。具体的には、関数は <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a></code> オブジェクトです。</p>

<p>より詳細な例や解説については、<a href="/ja/docs/Web/JavaScript/Guide/Functions">JavaScript の関数のガイド</a>を参照してください。</p>

<h2 id="Description">解説</h2>

<p>JavaScript におけるすべての関数は、実際には <code>Function</code> オブジェクトです。<code>Function</code> オブジェクトのプロパティとメソッドについての情報は {{jsxref("Function")}} をご覧ください。</p>

<p>初期値以外の値を返すためには、返す値を指定する <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/return">return</a></code> 文が関数内になくてはなりません。<code>return</code> 文を持たない関数は初期値を返します。<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">コンストラクター</a>が <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/new">new</a></code> キーワードとともに呼び出された場合、その <code>this</code> 引数が初期値となります。それ以外のすべての関数が既定で返す値は {{jsxref("undefined")}} です。</p>

<p>関数の仮引数 (parameter) には、関数呼び出しにおいて実引数 (<em>argument</em>) が渡されます。実引数は、関数に<em>値渡し</em>されます。関数の中で引数の値を変更しても、その変更はグローバルスコープもしくは呼び出し元の関数内には反映されません。オブジェクト参照も「値」ですが、こちらは特別です。参照されているオブジェクトのプロパティを関数の中で変更すると、次の例にあるように、その変更を関数の外部から見ることができます。</p>

<pre class="brush: js"> /* 関数 'myFunc' を宣言 */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * 変数 'mycar' を宣言
 * 新しいオブジェクトの生成と初期化
 * 'mycar' への参照をオブジェクトに代入
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* 'Honda' を出力 */
console.log(mycar.brand);

/* オブジェクト参照を関数に渡す */
myFunc(mycar);

/*
 * オブジェクトの 'brand' プロパティの値は関数によって
 * 変更されたので 'Toyota' と出力される
 */
console.log(mycar.brand);
</pre>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/this"><code>this</code> キーワード</a>は現在実行中の関数を参照しません。よって、関数本体であっても、名前によって <code>Function</code> オブジェクトを参照しなければなりません。</p>

<h2 id="Defining_functions">関数の定義</h2>

<p>関数を定義するのにはいくつかの方法があります。</p>

<h3 id="The_function_declaration_function_statement">関数宣言 (<code>function</code> 文)</h3>

<p>関数を宣言するための特殊な構文があります。(詳細は <a href="/ja/docs/Web/JavaScript/Reference/Statements/function">function 文</a>を参照)</p>

<pre class="brush: js">function <var>name</var>([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>関数名です。</dd>
  <dt><code><var>param</var></code></dt>
  <dd>関数に渡される引数の名前です。</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>関数の本体を構成する文です。</dd>
</dl>

<h3 id="The_function_expression_function_expression">関数式 (<code>function</code> 式)</h3>

<p>関数式は、関数宣言と似ており、同じ構文を持っています (詳細は <a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a>を参照)。関数式はより大きな式の一部になることもあります。「名前付き」の関数式を定義することもできます (例えばその名前はコールスタック内で使われるかもしれません) し、「無名の」関数式を定義することもできます。関数式はスコープの開始時に「巻き上げ」られないので、コード内でそれらが登場するより前に使用することはできません。</p>

<pre class="brush: js">function [<var>name</var>]([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>関数名。省略することができ、その場合は関数は無名関数と見なされます。</dd>
  <dt><code><var>param</var></code></dt>
  <dd>関数に渡される引数の名前です。</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>関数の本体を構成する文です。</dd>
</dl>

<p>以下は<strong>無名の</strong>関数式の例です (<code>name</code> が使われていない)。</p>

<pre class="brush: js">var myFunction = function() {
    statements
}</pre>

<p>定義の中で名前を提供することで、<strong>名前付きの</strong>関数式を作ることも可能です。</p>

<pre class="brush: js">var myFunction = function namedFunction(){
    statements
}
</pre>

<p>名前付きの関数式を作ることのメリットの 1 つは、エラーに遭遇したとき、スタックトレースがその関数の名前を含めるため、エラーの発生源をより容易に特定できるということです。</p>

<p>ここまで見てきたように、どちらの例も <code>function</code> キーワードから開始されていません。 <code>function</code> から開始せずに関数を含んでいる文が関数式です。</p>

<p>関数を一度だけ使われるとき、一般的なパターンが <a
      href="/ja/docs/Glossary/IIFE">即時実行関数式 (IIFE, Immediately Invoked Function Expression)</a> です。</p>

<pre class="brush: js">(function() {
    statements
})();</pre>

<p>即時実行関数式は、関数を宣言した直後に実行する関数式です。</p>

<h3 id="The_generator_function_declaration_function*_statement">ジェネレーター関数宣言 (<code>function*</code> 文)</h3>

<p>ジェネレーター関数の宣言のための特別な構文です (詳細は {{jsxref('Statements/function*', 'function* 文')}} を参照してください)。</p>

<pre class="brush: js">function* <var>name</var>([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>関数名。</dd>
  <dt><code><var>param</var></code></dt>
  <dd>関数に渡される引数の名前です。</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>関数の本体を構成する文。</dd>
 </dl>

<h3 id="The_generator_function_expression_function*_expression">ジェネレーター関数式 (<code>function*</code> 式)</h3>

<p>ジェネレーター関数式は、ジェネレーター関数宣言と似ており、同じ構文を持っています （詳細は {{jsxref('Operators/function*', 'function* 式')}} を参照してください）。</p>

<pre class="brush: js">function* [<var>name</var>]([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>関数名。省略することができ、その場合関数は無名関数と見なされます。</dd>
  <dt><code><var>param</var></code></dt>
  <dd>関数に渡される引数の名前です。</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>関数の本体を構成する文です。</dd>
</dl>

<h3 id="The_arrow_function_expression_>">アロー関数式 (=&gt;)</h3>

<p>アロー関数式はより短い構文で、 <code>this</code> 値を語彙的に結合します (詳細は<a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>を参照)。</p>

<pre class="brush: js">([param[, param]]) =&gt; {
   statements
}

param =&gt; expression
</pre>

<dl>
  <dt><code><var>param</var></code></dt>
 <dd>引数の名前。引数が 0 個の場合は <code>()</code> で示すことが必要です。引数が 1 個の場合のみ、丸括弧は必須ではありません。(例えば <code>foo =&gt; 1</code>)</dd>
  <dt><code><var>statements</var></code> または <code><var>expression</var></code></dt>
 <dd>複数の文は中括弧で括らなければなりません。単一の式では、中括弧は必須ではありません。式は、関数の暗黙的な返値でもあります。</dd>
</dl>

<h3 id="The_Function_constructor"><code>Function</code> コンストラクター</h3>

<div class="note">
<p><strong>注:</strong> <code>Function</code> コンストラクターによる関数の生成は推奨されません。これは、文字列として関数本体が必要であり、JS エンジンによる最適化を妨げたり、他の問題を引き起こしたりする場合があるためです。</p>
</div>

<p>他のすべてのオブジェクトと同じように、<code>new</code> 演算子を使って {{jsxref("Function")}} オブジェクトを作成することができます。</p>

<pre class="brush: js">new Function (<var>arg1</var>, <var>arg2</var>, ... <var>argN</var>, <var>functionBody</var>)
</pre>

<dl>
  <dt><code><var>arg1</var>, <var>arg2</var>, ... <var>argN</var></code></dt>
  <dd>関数で仮引数名として使われる、0 個以上の名前。それぞれが、妥当な JavaScript 識別子に相当する文字列、もしくはそういった文字列のカンマで分割されたリストでなくてはなりません。</dd>
  <dt><code><var>functionBody</var></code></dt>
  <dd>関数定義を構成する JavaScript 文を含む文字列。</dd>
</dl>

<p><code>Function</code> コンストラクターを関数として (<code>new</code> 演算子を使わずに) 呼び出しても、コンストラクターとして呼び出すのと同じ効果があります。</p>

<h3 id="The_GeneratorFunction_constructor"><code>GeneratorFunction</code> コンストラクター</h3>

<div class="note">
<p><strong>注:</strong> <code>GeneratorFunction</code> はグローバルオブジェクトではありませんが、ジェネレーター関数のインスタンスから得ることができます (詳細は {{jsxref("GeneratorFunction")}} を参照してください)。</p>
</div>

<div class="note">
<p><strong>注:</strong> <code>GeneratorFunction</code> コンストラクターによる関数の生成は推奨されません。これは、文字列として関数本体が必要で、JS エンジンによる最適化を妨げたり、他の問題を引き起こしたりする場合があるためです。</p>
</div>

<p>他のすべてのオブジェクトと同じように、 <code>new</code> 演算子を使って {{jsxref("GeneratorFunction")}} オブジェクトを作成することができます。</p>

<pre class="brush: js">new GeneratorFunction (<var>arg1</var>, <var>arg2</var>, ... <var>argN</var>, <var>functionBody</var>)
</pre>

<dl>
  <dt><code><var>arg1</var>, <var>arg2</var>, ... <var>argN</var></code></dt>
  <dd>関数で仮引数名として使われる、0 個以上の名前。それぞれが、妥当な JavaScript 識別子に相当する文字列、もしくはそういった文字列のカンマで分割されたリストでなくてはなりません。例えば "<code>x</code>"、"<code>theValue</code>"、"<code>a,b</code>" などです。</dd>
  <dt><code><var>functionBody</var></code></dt>
  <dd>関数定義を構成する JavaScript 文を含む文字列です。</dd>
</dl>

<p><code>Function</code> コンストラクターを関数として (<code>new</code> 演算子を使わずに) 呼び出しても、コンストラクターとして呼び出すのと同じ効果があります。</p>

<h2 id="Function_parameters">関数の引数</h2>

<h3 id="Default_parameters">デフォルト引数</h3>

<p>関数のデフォルト引数で、関数に値が渡されなかった場合や <code>undefined</code> が渡された場合に、既定値で初期化される形式上の引数を指定できます。詳細は<a href="/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters">デフォルト引数</a>を参照してください。</p>

<h3 id="Rest_parameters">残余引数</h3>

<p>残余引数とは、不特定多数の引数を配列として受け取る構文です。詳細は<a href="/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters">残余引数</a>を参照してください。</p>

<h2 id="The_arguments_object"><code>arguments</code> オブジェクト</h2>

<p><code>arguments</code> オブジェクトを使って、関数内部で関数の引数を参照することができます。<a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a> を参照してください。</p>

<ul>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a></code>:
    現在実行中の関数に渡された引数を格納する配列状オブジェクト。</li>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee</a></code> :
    現在実行中の関数。</li>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments/caller">arguments.caller</a></code> :
    現在実行中の関数を実行した関数。</li>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments/length">arguments.length</a></code>:
    関数に渡された引数の数。</li>
</ul>

<h2 id="Defining_method_functions">メソッドを定義する</h2>

<h3 id="Getter_and_setter_functions">ゲッターおよびセッター関数</h3>

<p>ゲッター (アクセサーメソッド) およびセッター (ミューテーターメソッド) は、標準組み込みオブジェクトでもユーザー定義オブジェクトでも、新しいプロパティの追加に対応していれば定義することができます。ゲッターとセッターを定義するための構文は、オブジェクトリテラル構文を使用します。</p>

<dl>
  <dt><a href="/ja/docs/Web/JavaScript/Reference/Functions/get">get</a></dt>
  <dd>オブジェクトのプロパティを、そのプロパティが検索されたときに呼び出される関数に束縛します。</dd>
  <dt><a href="/ja/docs/Web/JavaScript/Reference/Functions/set">set</a></dt>
  <dd>あるオブジェクトのプロパティを、そのプロパティに代入しようとしたときに呼び出される関数に結びつけます。</dd>
</dl>

<h3 id="Method_definition_syntax">メソッド定義構文</h3>

<p>ECMAScript 2015 からは、独自のメソッドを、ゲッターとセッターに似たより短い構文で定義することができます。詳細は<a href="/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions">メソッド定義</a>を参照してください。</p>

<pre class="brush: js">var obj = {
  foo() {},
  bar() {}
};</pre>

<h2 id="Constructor_vs._declaration_vs._expression">コンストラクターか関数宣言か関数式か</h2>

<p>以下のものを比較してみて下さい。</p>

<p><code>Function</code> <em>コンストラクター</em>によって定義され、変数 <code>multiply</code> に代入された関数です。</p>

<pre class="brush: js">var multiply = new Function('x', 'y', 'return x * y');</pre>

<p><code>multiply</code> と命名された関数の<em>関数宣言</em>です。</p>

<pre class="brush: js">function multiply(x, y) {
   return x * y;
} // ここにセミコロンは必要ありません
</pre>

<p>変数 <code>multiply</code> に代入された、無名関数の<em>関数式</em>です。</p>

<pre class="brush: js">var multiply = function(x, y) {
   return x * y;
};
</pre>

<p>変数 <code>multiply</code> に代入された、<code>func_name</code> と命名された関数式です。</p>

<pre class="brush: js">var multiply = function func_name(x, y) {
   return x * y;
};
</pre>

<h3 id="Differences">相違点</h3>

<p>これらはすべて、おおよそ同じ働きをしますが、いくつか微妙に異なる点があります。</p>

<p>関数名と関数が代入された変数の間には違いがあります。関数名は変えることができませんが、関数が代入された変数は再代入することができます。関数名は関数本体の内部でのみ使用することができます。関数本体の外側でそれを使用しようとするとエラー (その関数名がそれより前に <code>var</code> 文によって宣言されていれば <code>undefined</code> ) になります。例えば、</p>

<pre class="brush: js">var y = function x() {};
alert(x); // エラーが発生する
</pre>

<p>関数名は <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"><code>Function</code> の toString メソッド</a>によってシリアライズしたときにも現れます。</p>

<p>一方、関数が代入された変数はそのスコープ内でのみ有効で、そのスコープは関数が宣言されたスコープを含んでいることが保証されています。</p>

<p>4 つ目の例にあるように、関数名はその関数が代入される変数と違っていても構いません。互いの間に関連性はありません。関数宣言は同時にその関数名と同じ名前の変数を作成します。よって、関数式で定義されたものと違って、関数宣言で定義された関数は定義されたスコープ内でも、その名前によってアクセスできます。</p>

<p><code>new Function</code> によって定義された関数は関数名を持ちません。しかし、JavaScript エンジンの <a href="/ja/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a> では、その関数をシリアライズされた形式にすると "anonymous" という名前を持っているかのように表示されます。例えば、<code>alert(new Function())</code> はこのように出力されます。</p>

<pre class="brush: js">function anonymous() {
}
</pre>

<p>この関数は実際には名前を持っていないので、<code>anonymous</code> は関数内部でアクセスできる変数ではありません。例えば、次の文はエラーになります。</p>

<pre class="brush: js">var foo = new Function("alert(anonymous);");
foo();
</pre>

<p>関数式や <code>Function</code> コンストラクターで定義されたものとは違い、関数宣言で定義された関数は、関数自体が宣言される前に使用することができます。例えば、</p>

<pre class="brush: js">foo(); // FOO! とアラート表示
function foo() {
   alert('FOO!');
}
</pre>

<p>関数式で定義された関数は現在のスコープを継承します。つまり、関数がクロージャを形成します。一方、<code>Function</code> コンストラクターで定義された関数は (あらゆる関数が継承する) グローバルスコープ以外はどんなスコープも継承しません。</p>

<pre class="brush: js">/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */
</pre>

<p>関数式と関数宣言で定義された関数は一度しか解析されませんが、<code>Function</code> コンストラクターで定義された関数はそうではありません。つまり、<code>Function</code> コンストラクターに渡された関数本体を表す文字列が、評価されるたびに必ず解析されます。関数式は毎回クロージャを作成しますが、関数本体は再解析されないので、"<code>new Function(...)</code>" よりは関数式の方がまだ高速です。したがって <code>Function</code> コンストラクターはできる限り避けるべきでしょう。</p>

<p>ただし、<code>Function</code> コンストラクターの文字列を解析することで生成された関数内で入れ子にされている関数式や関数宣言は、繰り返し解析されないことに注意してください。例えば、</p>

<pre class="brush: js">var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
foo(); // 関数本体の文字列で "function() {\n\talert(bar);\n}" の部分は再解析されません</pre>

<p>関数宣言はとても簡単に (しばしば意図せずに) 関数式に変化します。関数宣言は以下のようなときには関数宣言ではなくなります。</p>

<ul>
 <li>式の一部になったとき</li>
 <li>関数またはスクリプト自体の「ソース要素 (source element)」でなくなったとき。「ソース要素」はスクリプトや関数本体の中で入れ子にされていない文の事です。</li>
</ul>

<pre class="brush: js">var x = 0;               // ソース要素
if (x === 0) {           // ソース要素
   x = 10;               // ソース要素ではない
   function boo() {}     // ソース要素ではない
}
function foo() {         // ソース要素
   var y = 20;           // ソース要素
   function bar() {}     // ソース要素
   while (y === 10) {    // ソース要素
      function blah() {} // ソース要素ではない
      y++;               // ソース要素ではない
   }
}
</pre>

<h3 id="Examples">例</h3>

<pre class="brush: js">// 関数宣言
function foo() {}

// 関数式
(function bar() {})

// 関数式
x = function hello() {}

if (x) {
   // 関数式
   function world() {}
}

// 関数宣言
function a() {
   // 関数宣言
   function b() {}
   if (0) {
      // 関数式
      function c() {}
   }
}
</pre>

<h2 id="Block-level_functions">ブロックレベル関数</h2>

<p><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>では ES2015 から、ブロック内の関数はそのブロックに新しいスコープを形成します。 ES2015 より前では、ブロックレベル関数は strict モードでは禁止されています。</p>

<pre class="brush: js">'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// 非 strict モードでは f() === 2
</pre>

<h3 id="Block-level_functions_in_non-strict_code">非 strict コードにおけるブロックレベル関数</h3>

<p>一言で言えば、使わないでください。</p>

<p>非 strict コードでは、ブロック内の関数宣言は奇妙な動作をします。次の例を見てください。</p>

<pre class="brush: js">if (shouldDefineZero) {
   function zero() {     // 危険: 互換性リスク
      console.log("This is zero.");
   }
}
</pre>

<p>ES2015 では <code>shouldDefineZero</code> が false の場合、このブロックが実行されることはないので、<code>zero</code> は決して定義されないとされています。しかし、これは標準において新しいパーツです。歴史的には、このことは仕様とならないまま残されていました。いくつかのブラウザーでは、ブロックが実行されてもされなくても、<code>zero</code> を定義したでしょう。</p>

<p><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>では、ES2015 に対応するブラウザーはすべて、これを同じように扱います。 <code>zero</code> は <code>shouldDefineZero</code> が true の場合のみ定義され、かつ <code>if</code> ブロックのスコープに限られます。</p>

<p>条件付きで関数を定義するより安全な方法は、変数に関数式を代入することです。</p>

<pre class="brush: js">var zero;
if (shouldDefineZero) {
   zero = function() {
      console.log("This is zero.");
   };
}
</pre>

<h2 id="Examples_2">例</h2>

<h3 id="Returning_a_formatted_number">整形された数値を返す</h3>

<p>次の関数は、数値の先頭にゼロを足して固定長にした形で表される文字列を返します。</p>

<pre class="brush: js">// この関数は先頭にゼロを足して固定長にした文字列を返す
function padZeros(num, totalLen) {
   var numStr = num.toString();             // 戻り値を文字列に初期化する
   var numZeros = totalLen - numStr.length; // ゼロの数を計算する
   for (var i = 1; i &lt;= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}
</pre>

<p>次の文で padZeros 関数を呼び出します。</p>

<pre class="brush: js">var result;
result = padZeros(42,4); // "0042" を返す
result = padZeros(42,2); // "42" を返す
result = padZeros(5,4);  // "0005" を返す
</pre>

<h3 id="Determining_whether_a_function_exists">関数が存在するかどうか確認する</h3>

<p><code>typeof</code> 演算子を使うと関数が存在するかどうかを確かめることができます。次の例では、<code>window</code> オブジェクトが <code>noFunc</code> という関数のプロパティを持つかどうかを確かめるためのテストが行われます。もし持っていたら、それが使われます。そうでなければ、他の行動が取られます。</p>

<pre class="brush: js"> if ('function' == typeof window.noFunc) {
   // noFunc() を使う
 } else {
   // 何か他のことをする
 }
</pre>

<p><code>if</code> のテストの中で、<code>noFunc</code> への参照が使われているのに注目してください。関数名の後に括弧 "()" が無いので、実際の関数は呼ばれません。</p>

<h2 id="Specifications">仕様書</h2>

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

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Statements/function", "function 文")}}</li>
  <li>{{jsxref("Operators/function", "function 式")}}</li>
  <li>{{jsxref("Statements/function*", "function* 文")}}</li>
  <li>{{jsxref("Operators/function*", "function* 式")}}</li>
  <li>{{jsxref("Function")}}</li>
  <li>{{jsxref("GeneratorFunction", "ジェネレーター関数")}}</li>
  <li>{{jsxref("Functions/Arrow_functions", "アロー関数")}}</li>
  <li>{{jsxref("Functions/Default_parameters", "デフォルト引数")}}</li>
  <li>{{jsxref("Functions/rest_parameters", "残余引数")}}</li>
  <li>{{jsxref("Functions/arguments", "arguments オブジェクト")}}</li>
  <li>{{jsxref("Functions/get", "getter")}}</li>
  <li>{{jsxref("Functions/set", "setter")}}</li>
  <li>{{jsxref("Functions/Method_definitions", "メソッド定義")}}</li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Functions">関数と関数スコープ</a></li>
</ul>
