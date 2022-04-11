---
title: var
slug: Web/JavaScript/Reference/Statements/var
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
  - 文
  - 言語機能
translation_of: Web/JavaScript/Reference/Statements/var
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>var</code> 文</strong>は関数スコープまたはグローバルスコープの変数を宣言し、任意でそれをある値に初期化します。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-var.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>varname1</var> [= <var>value1</var>] [, <var>varname2</var> [= <var>value2</var>] ... [, <var>varname<strong>N</strong></var> [= <var>value<strong>N</strong></var>]]];</pre>

<dl>
 <dt><code><var>varname<strong>N</strong></var></code></dt>
 <dd>変数名。任意の有効な識別子。</dd>
</dl>

<dl>
 <dt><code><var>value<strong>N</strong></var></code> {{optional_inline}}</dt>
 <dd>その変数の初期値です。有効な式なら何でも取ることができます。既定値は <code>undefined</code> です。</dd>
</dl>

<p>あるいは、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">分割代入</a>を使用して変数を宣言することもできます。

</p><pre class="notranslate">var <var>{ bar }</var> = <em>foo</em>; // where foo = { bar:10, baz:12 };
/* これは、値が 10 の「bar」という名前の変数を作成します。 */</pre>

<h2 id="Description" name="Description">解説</h2>

<p><code>var</code> 宣言は、現れる場所に関係なく、コードを実行する前に処理されます。これは<dfn>巻き上げ</dfn>と呼ばれており、後述します。</p>

<p><code>var</code> で宣言された変数のスコープは、その現在の<em>実行コンテキストとそのクロージャ</em>であり、その中で宣言された関数、あるいは関数の外で宣言された変数の場合はグローバルになります。<code>var</code> を使用して変数を重複して宣言しても、厳格モードであってもエラーは発生せず、別の代入が実行されない限り、変数の値は失われません。</p>

<pre class="brush: js notranslate">'use strict';
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();
</pre>

<p><code>var</code> を使用して宣言された変数は、コードが実行されるよりも前に生成され、これは巻き上げと呼ばれています。これらの変数の初期値は <code>undefined</code> です。</p>

<pre class="brush: js notranslate">'use strict';
console.log(x);                // undefined (注: ReferenceError ではない)
console.log('still going...'); // still going...
var x = 1;
console.log(x);                // 1
console.log('still going...'); // still going...</pre>

<p>グローバルコンテキストにおいては、<code>var</code> を使用して宣言された変数は、グローバルオブジェクトの構成不可能なプロパティとして追加されます。これは、プロパティ記述子を変更することができず、{{jsxref("delete")}} を使用して削除することができないことを意味します。対応する名前は <a href="https://www.ecma-international.org/ecma-262/10.0/index.html#sec-global-environment-records">グローバル環境レコード</a> (グローバル字句環境の一部の形) 内部の <code>[[VarNames]]</code> スロットにも追加されます。<code>[[VarNames]]</code> 内の名前のリストにより、ランタイムがグローバル変数とグローバルオブジェクトの直接のプロパティを区別することができます。</p>

<p>グローバル変数用のグローバルオブジェクトに作成されたプロパティは、グローバルオブジェクトの直接のプロパティではなく、識別子を変数として扱うことになるため、構成不可に設定されています。JavaScript には自動メモリー管理機能があるため、グローバル変数に <code>delete</code> 演算子を使えるようにしても意味がありません。</p>

<pre class="brush: js notranslate">'use strict';
var x = 1;
globalThis.hasOwnProperty('x'); // true
delete globalThis.x; // 厳格モードでは TypeError。それ以外の場合は暗黙に失敗します。
delete x;  // 厳格モードでは SyntaxError。それ以外の場合は暗黙に失敗します。
</pre>

<p>なお、NodeJS の <a href="http://www.commonjs.org/">CommonJS</a> モジュールとネイティブの <a href="/ja/docs/Web/JavaScript/Guide/Modules">ECMAScript モジュール</a>のどちらも、最上位の変数宣言はそのモジュールのスコープとなるので、グローバルオブジェクトのプロパティとしては追加されません。</p>

<h3 id="Unqualified_identifier_assignments" name="Unqualified_identifier_assignments">無修飾の識別子の代入</h3>

<p>グローバルオブジェクトは、スコープチェインの最上位に位置します。名前を値に解決しようとすると、スコープチェインが検索されます。これは、グローバルオブジェクトのプロパティをすべてのスコープから、<code>globalThis.</code> や <code>window.</code> や <code>global.</code> などの修飾名なしで便利に見ることができることを意味します。</p>

<p>ですから、次のように記述することができます。</p>

<pre class="brush: js notranslate">function foo() {
  String('s') // `String` 関数が暗黙に見える
}</pre>

<p>...したがって、</p>

<pre class="brush: js notranslate">globalThis.hasOwnProperty('String') // true</pre>

<p>つまり、グローバルオブジェクトは最終的に修飾されていない識別子を検索することになります。globalThis.String と記述する必要はなく、修飾されていない <code>String</code> と記述すればよいのです。厳格モードでない場合は、スコープチェインで宣言されている同名の変数がない場合は、グローバルオブジェクト上にその名前のプロパティを作成しようとしていると仮定して、非修飾識別子に代入することになります。</p>

<pre class="brush: js notranslate">foo = 'f' // 厳格モードでない場合は、`foo` という名前のプロパティを作成しようとしていると見なす
globalThis.hasOwnProperty('foo') // true
</pre>

<p>ECMAScript 5 において、この動作は<a href="/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">厳格モード</a>で変更されました。厳格モードで修飾されていない識別子への代入しようとすると、<code>ReferenceError</code> が発生し、グローバルオブジェクトに意図せずプロパティが生成されることを防ぎます。</p>

<p>上記の意味合いは、一般的に誤解されていますが、JavaScript には暗黙の変数や宣言されていない変数をは存在せず、単にそのように見える構文を持っているだけだということに注意してください。</p>

<h3 id="var_hoisting" name="var_hoisting">var の巻き上げ</h3>

<p>変数の宣言 (および一般的な宣言) はコードを実行する前に処理されますので、変数はコード内のどこで宣言しても、コードの先頭で宣言したものと等価になります。また、変数を宣言する前に変数を使用することもできます。この動作は、変数の宣言が関数やグローバルのコードの先頭に移動したように見えるため、"<dfn>巻き上げ</dfn> (hoisting)" と呼ばれます。</p>

<pre class="brush: js notranslate">bla = 2;
var bla;

// 次のように見なされます。

var bla;
bla = 2;
</pre>

<p>このため、変数は常にスコープ (グローバルのコードまたは関数のコード) の先頭で宣言することをお勧めします。そうすればどの変数が関数スコープ (ローカル) であるか、あるいはスコープチェインによって解決されたものかが明確になります。</p>

<p>ここで重要なのは、巻き上げは変数の宣言には影響しますが、値の初期化には影響しないということです。値は、実際には代入文に到達したときに代入されます。</p>

<pre class="brush: js notranslate">function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

// ...これは、暗黙的には次のように解釈されます。

function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Declaring_and_initializing_two_variables" name="Declaring_and_initializing_two_variables">二つの変数を宣言して初期化する</h3>

<pre class="brush: js notranslate">var a = 0, b = 0;
</pre>

<h3 id="Assigning_two_variables_with_single_string_value" name="Assigning_two_variables_with_single_string_value">二つの変数に一つの文字列を代入する</h3>

<pre class="brush: js notranslate">var a = 'A';
var b = a;

// 以下と等価です

var a, b = a = 'A';
</pre>

<p>順番に注意してください。</p>

<pre class="brush: js notranslate">var x = y, y = 'A';
console.log(x + y); // undefinedA
</pre>

<p>ここではコードを実行する前に <code>x</code> と <code>y</code> が宣言され、そのあとに代入を行います。"<code>x = y</code>" を実行したとき、<code>y</code> が存在しますので <code>ReferenceError</code> は発生せず、値は <code>undefined</code> になります。よって、<code>x</code> に undefined 値が代入されます。そして、<code>y</code> に値 'A' が代入されます。その結果、1 行目の後は <code>x === undefined &amp;&amp; y === 'A'</code> となり、最終結果に至ります。</p>

<h3 id="Initialization_of_several_variables" name="Initialization_of_several_variables">複数の変数を初期化する</h3>

<pre class="brush: js notranslate">var x = 0;
function f() {
  var x = y = 1; // x はローカルで宣言されます。y は違います!
}
f();

console.log(x, y); // 0 1

// 厳格モードではない場合:
// x は想定どおり、グローバル側の変数です。
// しかし、y は関数の外部に漏れ出ています!</pre>

<p>上記と同じ例を厳格モードで実行した場合:</p>

<pre class="brush: js notranslate">'use strict';

var x = 0;
function f() {
  var x = y = 1; // 厳格モードでは ReferenceError が発生します。
}
f();

console.log(x, y);</pre>

<h3 id="Implicit_globals_and_outer_function_scope" name="Implicit_globals_and_outer_function_scope">暗黙のグローバル変数と関数スコープの外部</h3>

<p>暗黙的にグローバルに現れた変数は、関数スコープの外部で参照することができます：</p>

<pre class="brush: js notranslate">var x = 0; // x はファイルスコープで宣言して、値 0 を代入

console.log(typeof z); // z はまだ存在していないため、undefined になる

function a() { // a を呼び出すと、
  var y = 2; // y を関数 a のスコープで宣言して、値 2 を代入

  console.log(x, y); // 0 2

  function b() {
    x = 3; // ファイルスコープにある x に 3 を代入
    y = 4; // 外側の y に 4 を代入
    z = 5; // 新たなグローバル変数 z を生成して、値 5 を代入
           // (厳格モードでは ReferenceError が発生)
  }

  b(); // グローバル変数として z を生成
  console.log(x, y, z); // 3 4 5
}

a(); // b も呼び出す
console.log(x, z);     // 3 5
console.log(typeof y); // y は関数 a のローカル変数であるため "undefined" になる</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-variable-statement', 'variable statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.statements.var")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/let", "let")}}</li>
 <li>{{jsxref("Statements/const", "const")}}</li>
</ul>
