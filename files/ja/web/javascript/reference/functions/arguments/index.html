---
title: arguments
slug: Web/JavaScript/Reference/Functions/arguments
tags:
  - Functions
  - JavaScript
  - Namespace
  - Reference
  - arguments
  - 名前空間
translation_of: Web/JavaScript/Reference/Functions/arguments
---
<div>{{JSSidebar("Functions")}}</div>

<p><strong><code>arguments</code></strong> は<ruby>配列風<rp> (</rp><rt><code>Array</code>-like</rt><rp>) </rp></ruby>オブジェクトであり、<a href="/ja/docs/Web/JavaScript/Guide/Functions">関数</a>に渡された引数の値を含んでおり、関数内からアクセスすることができます。</p>

<div>{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Description" name="Description">解説</h2>

<div class="blockIndicator note">
<p><strong>注:</strong> ES6 互換のコードを書く場合は、<a href="/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters">残余引数</a>が推奨されます。</p>
</div>

<div class="note">
<p><strong>注:</strong> 「配列風」とは、 <code>arguments</code> が {{jsxref("Functions/arguments/length", "length")}} プロパティと 0 から始まる添字のプロパティを持っているものの、 {{JSxRef("Array")}} の組込みメソッド、例えば {{jsxref("Array.forEach", "forEach()")}} や {{jsxref("Array.map", "map()")}} を持っていないということです。詳しくは <a href="#Description">解説</a>の節を見てください。</p>
</div>

<p><code>arguments</code> オブジェクトはすべての（<a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー</a>ではない）関数内で利用可能なローカル変数です。<code>arguments</code> オブジェクトを使うことにより、関数内で関数の引数を参照できます。このオブジェクトは、関数に渡された各引数に対する入力を含みます。最初の入力の添え字は 0 から始まります。</p>

<p>たとえば、もし関数に 3 つの引数が渡されたなら、次のようにその引数を参照できます。</p>

<pre class="brush: js notranslate">arguments[0] // 1 番目の引数
arguments[1] // 2 番目の引数
arguments[2] // 3 番目の引数
</pre>

<p>引数を設定したり再代入したりすることもできます。</p>

<pre class="brush: js notranslate">arguments[1] = 'new value';
</pre>

<p><code>arguments</code> オブジェクトは {{jsxref("Array")}} ではありません。似ていますが、 <code>Array</code> のプロパティは {{jsxref("Array.length", "length")}} 以外ありません。たとえば、 {{jsxref("Array.pop", "pop()")}} メソッドはありません。</p>

<p>しかしながら、本当の <code>Array</code> に変換することはできます。</p>

<pre class="brush: js notranslate">var args = Array.prototype.slice.call(arguments);
// 配列リテラルを使用すると上記よりも短くなりますが、空の配列を作成します
var args = [].slice.call(arguments);
</pre>

<p><code>arguments</code> に限らず、配列様オブジェクトは ES2015 の {{jsxref("Array.from()")}} メソッドや<a href="/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator">スプレッド構文</a>によって、本当の配列に変換することができます。</p>

<pre class="brush: js notranslate">var args = Array.from(arguments);
var args = [...arguments];
</pre>

<p><code>arguments</code> オブジェクトは、あらかじめ定義された引数の数よりも多くの引数で呼び出される関数に便利です。このテクニックは <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/min">Math.min()</a></code> などの 可変数の引数を受け入れる関数に便利です。この例の関数は、任意の数の文字列が引数で、引数の中で一番長い文字列を返します。</p>

<pre class="brush: js notranslate">function longestString() {
  var longest = '';
  for (var i=0; i &lt; arguments.length; i++) {
    if (arguments[i].length &gt; longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
</pre>

<p>呼び出された関数に渡された引数を数えるために {{jsxref("Functions/arguments/length", "arguments.length")}} を使用することができます。関数が受け取る引数を数えたいのであれば、関数の {{jsxref("Function.length", "length")}} プロパティを調べてください。</p>

<h3 id="Using_typeof_with_Arguments" name="Using_typeof_with_Arguments">arguments に対する typeof の使用</h3>

<p>{{jsxref("Operators/typeof", "typeof")}} 演算子を <code>arguments</code> に対して使用すると、 <code>'object'</code> が返されます。</p>

<pre class="brush: js notranslate">console.log(typeof arguments); // 'object' </pre>

<p>個々の引数の型は、 <code>arguments</code> に添字を使用して判断することができます。</p>

<pre class="notranslate">console.log(typeof arguments[0]); // 最初の引数の型を返す</pre>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{jsxref("Functions/arguments/callee", "arguments.callee")}}</dt>
 <dd>個の引数が所属する、現在実行中の関数を参照します。厳格モードでは禁止されています。</dd>
 <dt>{{jsxref("Functions/arguments/length", "arguments.length")}}</dt>
 <dd>関数に渡された引数の数を示します。</dd>
 <dt>{{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}}</dt>
 <dd>新しい {{jsxref("Array/@@iterator", "Array iterator", "", 0)}} オブジェクトで、 <code>arguments</code> のそれぞれの要素の値を含みます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Defining_a_function_that_concatenates_several_strings" name="Defining_a_function_that_concatenates_several_strings">複数の文字列を連結する関数を定義する</h3>

<p>この例では、複数の文字列を連結する関数を定義します。この関数の唯一の仮引数は、連結する項目を区切る文字を指定する文字列です。この関数は次のように定義されます。</p>

<pre class="brush:js notranslate">function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}</pre>

<p>この関数へは好きな数だけ引数を渡すことができます。これはリスト中のそれぞれの引数を使用した文字列リストを返します。</p>

<pre class="brush:js notranslate">// "red, orange, blue" を返します
myConcat(', ', 'red', 'orange', 'blue');

// "elephant; giraffe; lion; cheetah" を返します
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// "sage. basil. oregano. pepper. parsley" を返します
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');</pre>

<h3 id="Defining_a_function_that_creates_HTML_lists" name="Defining_a_function_that_creates_HTML_lists">HTML のリストを作る関数の定義</h3>

<p>この例では、リストのための HTML を含む文字列を作る関数を定義します。この関数の第 1 引数には、順不同リスト (中黒付き) なら "<code>u</code>"、順序リスト (番号付き) なら "<code>o</code>" を指定します。関数は次のように定義します。</p>

<pre class="brush:js notranslate">function list(type) {
  var html = '&lt;' + type + 'l&gt;&lt;li&gt;';
  var args = Array.prototype.slice.call(arguments, 1);
  html += args.join('&lt;/li&gt;&lt;li&gt;');
  html += '&lt;/li&gt;&lt;/' + type + 'l&gt;'; // end list
  return html;
}</pre>

<p>この関数には任意の数の引数を渡すことができ、それぞれの引数を指定された型のリストに項目として追加します。例を示します。</p>

<pre class="brush:js notranslate">var listHTML = list('u', 'One', 'Two', 'Three');

/* listHTML の内容は以下のような文字列となります。
"&lt;ul&gt;&lt;li&gt;One&lt;/li&gt;&lt;li&gt;Two&lt;/li&gt;&lt;li&gt;Three&lt;/li&gt;&lt;/ul&gt;"
*/</pre>

<h3 id="Rest_default_and_destructured_parameters" name="Rest_default_and_destructured_parameters">残余引数、デフォルト引数、分割引数</h3>

<div>
<p><code>arguments</code> オブジェクトを <a href="/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters">残余</a>、<a href="/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters">デフォルト</a>、<a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">分割</a>引数と組み合わせて使用できます。</p>
</div>

<pre class="brush: js notranslate">function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1, 2, 3]
</pre>

<p>厳格モードのコードでは、残余引数、デフォルト引数、分割引数があっても <a href="/ja/docs/Web/JavaScript/Reference/Strict_mode#Making_eval_and_arguments_simpler"><code>arguments</code> オブジェクトの動作は変わりません</a>が、厳格モードでない場合は微妙な違いがあります。</p>

<p>厳格モードでは、 <code>arguments</code> オブジェクトは関数に残余引数、デフォルト引数、分割引数が渡されたかどうかにかかわらず同じ動作をします。すなわち、関数の本体で変数に新しい値を代入しても、 <code>arguments</code> オブジェクトには影響しません。また、 <code>arguments</code> オブジェクトに新しい変数を代入しても、変数の値には影響ありません。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> <code>"use strict";</code> ディレクティブを、残余引数、デフォルト引数、分割引数を受け付ける関数の本体に書くことはできません。そうすると、<a href="/ja/docs/Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params">構文エラー</a>が発生します。</p>
</div>

<p>厳格モードでない関数で、単純な引数のみを渡した場合 (すなわち、残余引数、デフォルト引数、分割引数ではない場合)、関数の本体で変数の値を新しい値にすると、 <code>arguments</code> オブジェクトと同期します。</p>

<pre class="brush: js notranslate">function func(a) {
  arguments[0] = 99; // arguments[0] を更新すると a も更新される
  console.log(a);
}
func(10); // 99
</pre>

<p>および</p>

<pre class="brush: js notranslate">function func(a) {
  a = 99; // a を更新すると arguments[0] も更新される
  console.log(arguments[0]);
}
func(10); // 99
</pre>

<p>それに対して、厳格モードでない関数で、残余引数、デフォルト引数、分割引数が<strong>渡される</strong>と、関数の本体で引数の変数に新しい値が代入されても、 <code>arguments</code> オブジェクトと同期<strong>されません</strong>。複雑な引数を持つ厳格モードでない関数の <code>arguments</code> オブジェクトは、関数が呼び出されたときに関数に渡された値を<strong>常に反映します</strong> (これは、渡される変数の型に関係なく、すべての厳格モードの関数の場合と同じ動作です)。</p>

<pre class="brush: js notranslate">function func(a = 55) {
  arguments[0] = 99; // arguments[0] を更新しても a は更新されない
  console.log(a);
}
func(10); // 10</pre>

<p>および</p>

<pre class="brush: js notranslate">function func(a = 55) {
  a = 99; // a を更新しても arguments[0] は更新されない
  console.log(arguments[0]);
}
func(10); // 10
</pre>

<p>および</p>

<pre class="brush: js notranslate">// デフォルト引数は追跡されません。
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.functions.arguments")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{JSxRef("Function")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters">残余引数</a></li>
</ul>
