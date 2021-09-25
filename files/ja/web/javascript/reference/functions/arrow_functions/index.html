---
title: アロー関数式
slug: Web/JavaScript/Reference/Functions/Arrow_functions
tags:
- ECMAScript 2015
- Functions
- Intermediate
- JavaScript
- Language feature
- Reference
translation_of: Web/JavaScript/Reference/Functions/Arrow_functions
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong>アロー関数式</strong>は、従来の <a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a>の簡潔な代替構文ですが、制限があり、すべての場面で使用することができるわけではできません。</p>

<p><strong>相違点と制限事項:</strong></p>

<ul>
  <li><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> や <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/super">super</a></code> への結びつけを持たないので、<code><a href="/ja/docs/Glossary/Method">メソッド</a></code>として使用することはできません。</li>
  <li><code><a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a></code> や <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a></code> キーワードがありません。</li>
  <li><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call</a></code>、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">apply</a></code>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"><code>bind</code></a> のような、一般に<a href="/ja/docs/Glossary/Scope">スコープ</a>の設定のためのメソッドには適していません。</li>
<li><a href="/ja/docs/Glossary/Constructor">コンストラクター</a>として使用することはできません。</li>
<li>本体内で <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> を使用することはできません。</li>
</ul>

<div>{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}</div>

<h3 id="Comparing_traditional_functions_to_arrow_functions">従来の関数とアロー関数の比較</h3>

<p>「従来の関数」を分解して、最もシンプルな「アロー関数」に段階的に変えていきましょう。<br>
注: 途中の各ステップは有効な「アロー関数」です。</p>

<pre class="brush: js">// 伝統的な関数
function (a){
  return a + 100;
}

// アロー関数に分解

// 1. "function" という語を削除し、引数と本体の開始中括弧の間に矢印を配置する
(a) =&gt; {
  return a + 100;
}

// 2. 本体の中括弧を削除と "return" という語を削除 -- return は既に含まれています。
(a) =&gt; a + 100;

// 3. 引数の括弧を削除
a =&gt; a + 100;</pre>

<div class="notecard note">
  <p>上記の通り、 { 中括弧 } と ( 括弧 ) と "return" は省略可能ですが、必要になる場合もあります。</p>
</div>

<p>例えば、<strong>複数の引数</strong>や<strong>引数なし</strong>の場合、引数の周りの括弧を入れなおす必要があります。</p>

<pre class="brush: js">// 従来の関数
function (a, b){
  return a + b + 100;
}

// アロー関数
(a, b) =&gt; a + b + 100;

// 従来の関数 (引数なし)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// アロー関数 (引数なし)
let a = 4;
let b = 2;
() =&gt; a + b + 100;</pre>

<p>同様に、本文に処理の<strong>追加の行</strong>が必要な場合は、中括弧<strong>に加えて "return"</strong> を入れなおす必要があります (アロー関数は "return" する場所や返値を魔法のように推測できるわけではありません)。</p>

<pre class="brush: js">// 従来の関数
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// アロー関数
(a, b) =&gt; {
  let chuck = 42;
  return a + b + chuck;
}</pre>

<p>そして最後に、<strong>名前付き関数</strong>については、変数のようにアロー関数式を扱います。</p>

<pre class="brush: js">// 従来の関数
function bob (a){
  return a + 100;
}

// アロー関数
let bob = a =&gt; a + 100;</pre>

<h2 id="Syntax">構文</h2>

<h3 id="Basic_syntax">基本的な構文</h3>

<p class="brush: js">引数が単一の場合。単純な式ならば return は不要です。</p>

<pre class="brush: js">param =&gt; expression</pre>

<p class="brush: js">引数が複数の場合は括弧が必要です。単純な式ならば return は不要です。</p>

<pre class="brush: js">(param1, paramN) =&gt; expression</pre>

<p class="brush: js">複数行の文ならば、本体の中括弧と return が必要です。
</p>

<pre class="brush: js">param =&gt; {
  let a = 1;
  return a + param;
}</pre>

<p class="brush: js">引数が複数の場合は括弧が必要です。複数行の文ならば、本体の中括弧と return が必要です。</p>

<pre class="brush: js">(param1, paramN) =&gt; {
   let a = 1;
   return a + param1 + paramN;
}</pre>

<h3 id="Advanced_syntax">高度な構文</h3>

<p class="brush: js">オブジェクトリテラル式を返す場合は、式の周りに括弧が必要です。</p>

<pre
  class="brush: js">params =&gt; ({foo: "a"}) // オブジェクト {foo: "a"} を返す</pre>

<p class="brush: js"><a href="/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters">残余引数</a>に対応しています。</p>

<pre class="brush: js">(a, b, ...r) =&gt; expression</pre>

<p class="brush: js"><a href="/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters">デフォルト引数</a>に対応しています。</p>

<pre class="brush: js">(a=400, b=20, c) =&gt; expression</pre>

<p class="brush: js">引数の<a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">分割代入</a>に対応しています。</p>

<pre class="brush: js">([a, b] = [10, 20]) =&gt; a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) =&gt; a + b; // result is 30
</pre>

<h2 id="Description">解説</h2>

<h3 id="Arrow_functions_used_as_methods">メソッドとして使われるアロー関数</h3>

<p>前に述べたように、アロー関数式は非メソッド型の関数に最もよく合っています。これをメソッドとして使った時のことを見てみましょう。</p>

<pre class="brush: js">'use strict';

var obj = { // 新しいスコープを作成しない
  i: 10,
  b: () =&gt; console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}</pre>

<p>アロー関数は自身の <code>this</code> を持ちません。{{jsxref("Object.defineProperty()")}} を使った他の例です。</p>

<pre class="brush: js">'use strict';

var obj = {
  a: 10
};

Object.defineProperty(obj, 'b', {
  get: () =&gt; {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  }
});
</pre>

<h3 id="call_apply_and_bind">call、apply、bind</h3>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call</a></code>、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">apply</a></code>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"><code>bind</code></a> の各メソッドは、アロー関数には<strong>ふさわしくありません</strong>。これらは異なるスコープ内でメソッドを実行できるようにするために設計されているものです。<strong>アロー関数は、アロー関数が定義されているスコープに基づいて "this" を確立する</strong>からです。</p>

<p>例えば、 <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call</a></code>、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">apply</a></code>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"><code>bind</code></a> は、従来の関数ではそれぞれのメソッドにスコープを確立するので、期待通りに動作します。</p>

<pre class="brush: js">// ----------------------
// 従来の関数の例
// ----------------------
// 単純化されたオブジェクトで "this" を持つ
var obj = {
    num: 100
}

// "num" を window に設定し、使用されていないことを表す。
window.num = 2020; // yikes!

// 単純な従来の関数で "this" を運用する
var add = function (a, b, c) {
  return this.num + a + b + c;
}

// call
var result = add.call(obj, 1, 2, 3) // "obj" としてスコープを確立
console.log(result) // result 106

// apply
const arr = [1, 2, 3]
var result = add.apply(obj, arr) // "obj" としてスコープを確立
console.log(result) // result 106

// bind
var result = add.bind(obj) // "obj" としてスコープを確立
console.log(result(1, 2, 3)) // result 106</pre>

<p>アロー関数では、 <code>add</code> 関数は基本的に <code>window</code> (グローバル) スコープで作成されているので、 <code>this</code> は window だと仮定されます。</p>

<pre class="brush: js">// ----------------------
// アロー関数の例
// ----------------------

// 単純化されたオブジェクトで "this" を持つ
var obj = {
    num: 100
}

// "num" を window に設定し、どのように扱われるかを見る。
window.num = 2020; // yikes!

// アロー関数
var add = (a, b, c) =&gt; this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)) // result 2026

// apply
const arr = [1, 2, 3]
console.log(add.apply(obj, arr)) // result 2026

// bind
const bound = add.bind(obj)
console.log(bound(1, 2, 3)) // result 2026
</pre>

<p>アロー関数を使用する最大の利点は、 DOM レベルのメソッド (setTimeout、setInterval、addEventListener) で、通常、関数が適切なスコープで実行されることを保証するために、クロージャ、call、apply、bind などが必要でした。</p>

<p><strong>従来の関数の例:</strong></p>

<pre
  class="brush: js">var obj = {
    count : 10,
    doSomethingLater : function (){
        setTimeout(function(){ // 関数を window スコープで実行
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater(); // コンソールに "NaN" と表示。 "count" プロパティは window スコープではないため。</pre>

<p><strong>アロー関数の例:</strong></p>

<pre class="brush: js">var obj = {
    count : 10,
    doSomethingLater : function(){ // もちろん、アロー関数はメソッドには向いていない
        setTimeout( () =&gt; { // アロー関数が "obj" 内で作成されるので、それがオブジェクトの "this" と見なされる
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater();</pre>

<h3 id="No_binding_of_arguments"><code>arguments</code> のバインドがない</h3>

<p>アロー関数は自身の <a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments"><code>arguments</code> オブジェクト</a>を持ちません。そのため、この例では、<code>arguments</code> は囲っているスコープでの同名変数への参照にすぎません。</p>

<pre class="brush: js">var arguments = [1, 2, 3];
var arr = () =&gt; arguments[0];

arr(); // 1

function foo(n) {
  var f = () =&gt; arguments[0] + n; // foo は arguments をバインドしている。 arguments[0] は n である
  return f();
}

foo(3); // 3 + 3 = 6</pre>

<p>多くの場合、<a href="/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters">残余引数</a>が <code>arguments</code> オブジェクトの代わりに使えます。</p>

<pre class="brush: js">function foo(n) {
  var f = (...args) =&gt; args[0] + n;
  return f(10);
}

foo(1); // 11</pre>

<h3 id="Use_of_the_new_operator"><code>new</code> 演算子の使用</h3>

<p>アロー関数はコンストラクターとして使用できず、<code>new</code> と共に使うとエラーが発生します。</p>

<pre class="brush: js">var Foo = () =&gt; {};
var foo = new Foo(); // TypeError: Foo is not a constructor</pre>

<h3 id="Use_of_prototype_property"><code>prototype</code> プロパティの使用</h3>

<p>アロー関数には <code>prototype</code> プロパティはありません。</p>

<pre class="brush: js">var Foo = () =&gt; {};
console.log(Foo.prototype); // undefined
</pre>

<h3 id="Use_of_the_yield_keyword"><code>yield</code> キーワードの使用</h3>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> キーワードはアロー関数内で使用できません (内部で入れ子になった関数が許可されている場合を除く)。結果として、アロー関数はジェネレーターとして使用できません。</p>

<h3 id="Function_body">関数の本体</h3>

<p>アロー関数は、「簡潔文体 (concise body)」か、もしくはより一般的な「ブロック文体 (block body) 」のどちらかを使用することができます。</p>

<p>簡潔文体 (concise body) においては、単一の式しか記述できないので、その式が暗黙的に return される値となります。しかし、ブロック文体においては、自動的に return はされないので、明示的に <code>return</code> 文を使用する必要があります。</p>

<pre class="brush: js">var func = x =&gt; x * x;
// 簡潔構文の場合、暗黙の "return" があります
var func = (x, y) =&gt; { return x + y; };
// ブロック文体では、明示的な "return" が必要です
</pre>

<h3 id="Returning_object_literals">オブジェクトリテラルを返す</h3>

<p>簡潔文体 <code>params =&gt; {object:literal}</code> を使ってオブジェクトリテラルを返そうとしても、期待通りに動作しないことに注意しましょう。</p>

<pre class="brush: js">var func = () =&gt; { foo: 1 };
// 呼び出した func() は undefined を返す！

var func = () =&gt; { foo: function() {} };
// SyntaxError: function 文には名前が必要
</pre>

<p>これは、括弧 ({}) 内のコードが文の列として構文解析されてしまっているからです (つまり、<code>foo</code> はオブジェクトリテラル内のキーでなく、ラベルとして扱われています)。</p>

<p>オブジェクトリテラルは括弧で囲むのを忘れないでください。</p>

<pre class="brush: js">var func = () =&gt; ({ foo: 1 });</pre>

<h3 id="Line_breaks">改行</h3>

<p>アロー関数では、括弧とアロー (矢印) の間に改行を入れることができません。</p>

<pre class="brush: js">var func = (a, b, c)
  =&gt; 1;
// SyntaxError: expected expression, got '=&gt;'</pre>

<p>しかし、矢印の後に改行を入れたり、以下のように括弧や中括弧を使用して、コードがきれいで滑らかになるように修正することができます。また、引数同士の間にも改行を入れることができます。</p>

<pre class="brush: js">var func = (a, b, c) =&gt;
  1;

var func = (a, b, c) =&gt; (
  1
);

var func = (a, b, c) =&gt; {
  return 1
};

var func = (
  a,
  b,
  c
) =&gt; 1;

// SyntaxError は発生しない</pre>

<h2 id="Parsing_order">解釈の順序</h2>

<p>アロー関数のアロー (矢印) は演算子ではありませんが、アロー関数には特別な解釈ルールがあり、通常の関数とは<a href="/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">演算子の優先順位</a>の扱いが異なります。</p>

<pre class="brush: js">let callback;

callback = callback || function() {}; // ok

callback = callback || () =&gt; {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() =&gt; {});    // ok
</pre>

<h2 id="Examples">例</h2>

<h3 id="Basic_usage">基本的な例</h3>

<pre class="brush: js">// 空のアロー関数は undefined を返します
let empty = () =&gt; {};

(() =&gt; 'foobar')();
// "foobar" を返します
// (これは、即時起動型の関数式です。)

var simple = a =&gt; a &gt; 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) =&gt; a &gt; b ? a : b;

// 簡単な配列のフィルターリング、マッピング等

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) =&gt; a + b);
// 66

var even = arr.filter(v =&gt; v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v =&gt; v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// さらに簡潔な promise チェーン
promise.then(a =&gt; {
  // ...
}).then(b =&gt; {
  // ...
});

// 見た目に解析が簡単な引数なしのアロー関数
setTimeout( () =&gt; {
  console.log('I happen sooner');
  setTimeout( () =&gt; {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-arrow-function-definitions', 'Arrow Function')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.functions.arrow_functions")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/">hacks.mozilla.org サイトの "ES6 In Depth: Arrow functions"</a></li>
</ul>
