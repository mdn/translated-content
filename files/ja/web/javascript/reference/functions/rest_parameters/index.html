---
title: 残余引数
slug: Web/JavaScript/Reference/Functions/rest_parameters
tags:
  - Functions
  - JavaScript
  - Language feature
  - Rest
  - Rest parameters
  - 残余引数
  - 言語機能
  - 関数
translation_of: Web/JavaScript/Reference/Functions/rest_parameters
---
<div>{{jsSidebar("Functions")}}</div>

<p><span class="seoSummary"><strong>残余引数</strong>構文により、不定数の引数を配列として表すことができます。</span></p>

<div>{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">function f(<var>a</var>, <var>b</var>, ...<var>theArgs</var>) {
  // ...
}</pre>

<h2 id="Description" name="Description">解説</h2>

<p>関数の最後の引数に <code>...</code> の接頭辞を付けると、(ユーザーが提供した) その位置にある残りの引数を JavaScript の「標準の」配列の中に入れることができます。</p>

<p>最後の引数のみが「残余引数」になることができます。</p>

<pre class="brush: js notranslate">function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// コンソール出力:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
</pre>

<h3 id="Difference_between_rest_parameters_and_the_arguments_object" name="Difference_between_rest_parameters_and_the_arguments_object">残余引数と <code>arguments</code> オブジェクトとの違い</h3>

<p>残余引数と {{jsxref("Functions/arguments", "arguments")}} オブジェクトの間には、主に 3 つの違いがあります。</p>

<ul>
 <li>残余引数は、各引数に個別の名前が与えられていないだけ (すなわち、正式に定義された関数式) であるのに対し、<code>arguments</code> オブジェクトは、関数に渡される<em>すべての</em>引数を含みます。</li>
 <li><code>arguments</code> オブジェクトは実配列ではありません。一方、残余引数は {{jsxref("Global_Objects/Array", "Array")}} インスタンスです。これは、{{jsxref("Array.sort", "sort")}}, {{jsxref("Array.map", "map")}}, {{jsxref("Array.forEach", "forEach")}}, {{jsxref("Array/pop", "pop")}} などのメソッドを直接適用できることを意味します。</li>
 <li><code>arguments</code> オブジェクトは、(<code>callee</code> プロパティのように) 自身への固有の追加機能を持っています。</li>
</ul>

<h3 id="From_arguments_to_an_array" name="From_arguments_to_an_array">arguments から配列へ</h3>

<p>残余引数は、引数により引き起こされる定型コードを減らすために導入されました。</p>

<pre class="brush: js notranslate">// 残余引数の登場以前は、"arguments" を普通の配列に変換するには以下のようにしていました。

function f(a, b) {

  let normalArray = Array.prototype.slice.call(arguments)
  // -- or --
  let normalArray = [].slice.call(arguments)
  // -- or --
  let normalArray = Array.from(arguments)

  let first = normalArray.shift()  // OK、最初の引数が得られる
  let first = arguments.shift()    // エラー (arguments は通常の配列ではない)
}

// 残余引数を使ってふつうの配列へのアクセスが得られるようになりました

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // OK、最初の引数が得られる
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_rest_parameters" name="Using_rest_parameters">残余引数の使用</h3>

<p>この例では、最初の引数が <code>a</code> に、2番目の引数が <code>b</code> に割り当てられますので、これらの名前付き引数はふつう通り使われます。</p>

<p>しかし、3番目の引数、<code>manyMoreArgs</code> は、3番目、4番目、5番目、6番目、・・・<var>n</var>番目 — ユーザーが入れただけの数の引数を持つ配列になります。</p>

<pre class="brush: js notranslate">function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
</pre>

<p>以下の例では・・・値が 1 つしかなくても、最後の引数は配列に入れられます。</p>

<pre class="brush: js notranslate">// 上記の例と同じ関数定義を使用

myFun("one", "two", "three")

// a, one
// b, two
// manyMoreArgs, [three]</pre>

<p>以下の例では、3番目の引数が提供されていませんが、<code>manyMoreArgs</code> は配列のままです (ただし空のものです)。</p>

<pre class="brush: js notranslate">// 上記の例と同じ関数定義を使用

myFun("one", "two")

// a, one
// b, two
// manyMoreArgs, []</pre>

<h3 id="Argument_length" name="Argument_length">引数の長さ</h3>

<p><code>theArgs</code> は配列なので、<code>length</code> プロパティを使用して要素数を取得することができます。</p>

<pre class="brush: js notranslate">function fun1(...theArgs) {
  console.log(theArgs.length)
}

fun1()         // 0
fun1(5)        // 1
fun1(5, 6, 7)  // 3
</pre>

<h3 id="Ordinary_parameter_and_rest_parameters" name="Ordinary_parameter_and_rest_parameters">通常の引数と残余引数</h3>

<p>次の例では、残余引数を使用して 2 番目の引数から最後の引数までを配列に集めています。それからそれぞれを最初の引数と乗算し、その配列を返します。</p>

<pre class="brush: js notranslate">function multiply(multiplier, ...theArgs) {
  return theArgs.map(element =&gt; {
    return multiplier * element
  })
}

let arr = multiply(2, 1, 2, 3)
console.log(arr)  // [2, 4, 6]
</pre>

<h3 id="Use_with_the_arguments_object" name="Use_with_the_arguments_object">arguments との使用</h3>

<p><code>Array</code> のメソッドを残余引数で利用することができますが、<code>arguments</code> オブジェクトでは利用できません。</p>

<pre class="brush: js notranslate">function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort()
  return sortedArgs
}

console.log(sortRestArgs(5, 3, 7, 1)) // 1, 3, 5, 7

function sortArguments() {
  let sortedArgs = arguments.sort()
  return sortedArgs  // これは実行されない
}


console.log(sortArguments(5, 3, 7, 1))
// TypeError が発生 (arguments.sort は関数ではない)
</pre>

<p><code>arguments</code> オブジェクト上で <code>Array</code> メソッドを使用するには、まずオブジェクトを実配列に変換する必要があります。</p>

<pre class="brush: js notranslate">function sortArguments() {
  let args = Array.from(arguments)
  let sortedArgs = args.sort()
  return sortedArgs
}
console.log(sortArguments(5, 3, 7, 1))  // 1, 3, 5, 7
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-definitions', 'Function Definitions')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.functions.rest_parameters")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator" title="spread operator">スプレッド構文</a> (こちらも ‘<code>...</code>’)</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments" title="arguments">arguments オブジェクト</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Array">配列</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions" title="Functions and function scope">関数</a></li>
 <li><a class="external" href="http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters">ecmascript.org のオリジナル提案</a></li>
 <li><a class="external" href="http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/">JavaScript arguments object and beyond</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">分割代入</a></li>
</ul>
