---
title: let
slug: Web/JavaScript/Reference/Statements/let
tags:
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Statement
  - Variable declaration
  - Variables
  - let
  - 変数
  - 変数宣言
  - 文
  - 言語機能
translation_of: Web/JavaScript/Reference/Statements/let
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>let</code></strong> 文はブロックスコープのローカル変数を宣言します。任意で値を代入して初期化できます。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-let.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <var>var1</var> [= <var>value1</var>] [, <var>var2</var> [= <var>value2</var>]] [, ..., <var>varN</var> [= <var>valueN</var>];</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>var1</var></code>, <code><var>var2</var></code>, …, <code><var>varN</var></code></dt>
 <dd>宣言する変数または複数の変数の名前です。それぞれは JavaScript の正式な識別子である必要があります。</dd>
 <dt><code><var>value1</var></code>, <code><var>value2</var></code>, …, <code><var>valueN</var></code> {{optional_inline}}</dt>
 <dd>宣言される変数ごとに、任意で初期値を JavaScript の正式な式で指定することができます。</dd>
</dl>

<p><a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">分割代入</a>構文は、変数の宣言にも使用できます。</p>

<pre class="syntaxbox notranslate">let <var>{ bar }</var> = <em>foo</em>; // where foo = { bar:10, baz:12 };
/* これは、値が 10 の 'bar' という名前の変数を作成します。*/</pre>

<h2 id="Description" name="Description">解説</h2>

<p><strong><code>let</code></strong> を使用することで、それが使用された{{jsxref("statements/block", "ブロック", "", 1)}}、文または式にスコープを限定した変数を宣言することができます。これは {{jsxref("statements/var", "var")}} キーワードのように、変数をブロックスコープに関係なく、グローバルや関数全体のローカルに定義するようなことはありません。他にも、{{jsxref("statements/var", "var")}} と <code>let</code> は、後者は<a href="#Temporal_dead_zone">パーサーが評価したときのみ</a>値の初期化が行われる点が異なります。(下記参照)</p>

<p>{{jsxref("statements/const", "const", "Description")}} と同様に、<code>let</code> はグローバル (一番上のスコープ) で宣言されたときに {{domxref("window")}} オブジェクトのプロパティを生成<em>しません</em>。</p>

<p>なぜ "<strong>let</strong>" という名前が選ばれたのかについては、<a href="https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri">こちら</a> で解説されています。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Scoping_rules_2" name="Scoping_rules_2">スコープのルール</h3>

<p><strong><code>let</code></strong> で定義された変数は、自身が定義されたブロックと、そこに含まれるサブブロックがスコープになります。この点において <strong><code>let</code></strong> のふるまいは <strong><code>var</code></strong> にとてもよく似ています。大きな違いは、<strong><code>var</code></strong> で定義された変数のスコープはそれを含んでいる関数全体になるということです。</p>

<pre class="brush:js notranslate">function varTest() {
  var x = 1;
  {
    var x = 2;  // 同じ変数です!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // 異なる変数
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
</pre>

<p id="Scoping_rules">プログラムや関数の最上位においては、<strong><code>let</code></strong> は <strong><code>var</code></strong> とは異なり、グローバルオブジェクト上にプロパティを生成しません。</p>

<pre class="brush:js notranslate">var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
</pre>

<h3 id="Emulating_private_members" name="Emulating_private_members">プライベートメンバーの模倣</h3>

<p>{{Glossary("Constructor", "コンストラクター")}}の処理の中で <strong><code>let</code></strong> を使用すれば、<a href="/ja/docs/Web/JavaScript/Closures">クロージャ</a>を使用することなくプライベートメンバーを結び付けることができます。</p>

<pre class="brush:js notranslate">var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
</pre>

<p>ローカル変数をクロージャで閉じた場合と同様に、<code>var</code> を使ってプライバシーパターンを作成できますが、上の例のようなブロックスコープではなく、関数スコープ（通常はモジュールパターンの IIFE）が必要です。</p>

<h3 id="Redeclarations" name="Redeclarations">再宣言</h3>

<p>同じ関数やブロックのスコープ内で同じ変数を再宣言すると {{jsxref("SyntaxError")}} が発生します。</p>

<pre class="brush: js example-bad notranslate">if (x) {
  let foo;
  let foo; // SyntaxError が発生します。
}
</pre>

<p>{{jsxref("Statements/switch", "switch")}} 文には 1 つのブロックしかないため、エラーを発生させてしまうかもしれません。</p>

<pre class="brush: js example-bad notranslate">let x = 1;
switch(x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // 再宣言のため TypeError
    break;
}</pre>

<p>ただし、指摘しておくべき重要な点として、case 節の中で入れ子にしたブロックを使えば、新しいブロックスコープの字句環境を作ることができるため、上記のような再宣言エラーが発生しなくなります。</p>

<pre class="brush: js notranslate">let x = 1;

switch(x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}</pre>

<h3 id="Temporal_dead_zone" name="Temporal_dead_zone">一時的なデッドゾーン</h3>

<p>{{jsxref("Statements/var", "var", "var_hoisting")}} で宣言された変数が <code>undefined</code> の値で始まるのとは異なり、<code>let</code> の変数は定義が評価されるまで初期化されません。変数を宣言より前で参照すると {{jsxref("ReferenceError")}} が発生します。変数はブロックの先頭から初期化が行われるまで、「一時的なデッドゾーン」にあるのです。</p>

<pre class="brush: js example-bad notranslate">function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}</pre>

<h3 id="The_temporal_dead_zone_and_typeof" name="The_temporal_dead_zone_and_typeof">一時的なデッドゾーンと <code>typeof</code></h3>

<p>単純に宣言されていない変数や <code>undefined</code> の値を持つ変数とは異なり、<code>typeof</code> 演算子を使用して一時的なデッドゾーン内の変数の型を確認するしようとすると、{{jsxref("ReferenceError")}} が発生します。</p>

<pre class="brush: js example-bad notranslate">// 'undefined' を表示
console.log(typeof undeclaredVariable);

// 'ReferenceError' が発生します
console.log(typeof i);
let i = 10;</pre>

<h3 id="Another_example_of_temporal_dead_zone_combined_with_lexical_scoping" name="Another_example_of_temporal_dead_zone_combined_with_lexical_scoping">一時的なデッドゾーンとレキシカルスコープと組み合わせた例</h3>

<p>字句スコープのため、式 <code>(foo + 55)</code> の中にある識別子 <code>foo</code> は <code>if</code> ブロックの <code>foo</code> と評価され、その上にある変数 <code>foo</code> (<code>33</code> の値を持つ) とは評価されません。</p>

<p>同じ行では、<code>if</code> ブロックの <code>foo</code> が字句環境よりすでに生成されていますが、初期化に達していない (完了していない) 状態です (その分自身の一部であるため)。</p>

<p>このブロックの <code>foo</code> は一時的なデッドゾーンの中にあります。</p>

<pre class="brush: js example-bad notranslate">function test(){
   var foo = 33;
   if(foo) {
      let foo = (foo + 55); // ReferenceError
   }
}
test();</pre>

<p>この現象は、以下のような状況で混乱を催すかもしれません。<code>let n of n.a</code> という命令は、すでに for ループブロックの私的スコープの中になります。そのため、識別子 <code>n.a</code> は命令自身 (<code>let n</code>) の最初の部分にある '<code>n</code>' オブジェクトのプロパティ '<code>a</code>' として解決されます。</p>

<p>その宣言文にはまだ到達・完了していないため、まだ一時的なデッドゾーン内にあるとみなされます。</p>

<pre class="brush: js example-bad notranslate">function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) { // ReferenceError
    console.log(n);
  }
}

go({a: [1, 2, 3]});
</pre>

<h3 id="Other_situations" name="Other_situations">そのほかの場面</h3>

<p>ブロックの中で使えば、<strong><code>let</code></strong> の変数のスコープはそのブロックの中に制限されます。スコープが自身の宣言された関数全体になる <code><strong>var</strong></code> との違いに注意してください。</p>

<pre class="brush: js notranslate">var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // スコープはグローバル
  let b = 22; // スコープは if ブロック内

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2
</pre>

<p>しかし、下記の <strong><code>var</code></strong> と <strong><code>let</code></strong> 宣言の組み合わせは、<strong><code>var</code></strong> がブロックの先頭に配置されているため、{{jsxref("SyntaxError")}} になります。これによって、変数が暗黙的に再宣言されるからです。</p>

<pre class="brush: js example-bad notranslate">let x = 1;

{
  var x = 2; // 再宣言のため SyntaxError
}
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.let")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/var", "var")}}</li>
 <li>{{jsxref("Statements/const", "const")}}</li>
 <li><a href="https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/">ES6 In Depth: <code>let</code> and <code>const</code></a></li>
 <li><a href="https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/">Breaking changes in <code>let</code> and <code>const</code> in Firefox 44</a></li>
 <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md">You Don't Know JS: Scope &amp; Closures: Chapter 3: Function vs. Block Scope</a></li>
 <li><a href="https://stackoverflow.com/a/33198850/1125029">StackOverflow: What is the Temporal Dead Zone</a>?</li>
 <li><a href="https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable">StackOverflow: What is the difference between using <code>let</code> and <code>var</code>?</a></li>
</ul>
