---
title: 厳格モードへの移行
slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
tags:
  - Advanced
  - Guide
  - JavaScript
  - ガイド
  - 上級者
translation_of: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
---
<div>{{jsSidebar("More")}}</div>

<p>ECMAScript 第5版では<ruby><a href="/ja/docs/JavaScript/Strict_mode">厳格モード</a><rp> (</rp><rt>strict mode</rt><rp>) </rp></ruby>を導入し、主要なブラウザーすべて (IE10 を含む) に実装されました。ウェブブラウザーにコードを厳密モードとして解釈させるのは簡単ですが (ソースコードの先頭に <code>'use strict';</code> を追加するだけです)、既存のコードベースを厳格モードに移行するには、もう少し作業が必要です。</p>

<p>この記事の目的は、開発者へのガイダンスを提供することです。</p>

<h2 id="Gradual_transition" name="Gradual_transition">段階的移行</h2>

<p>厳格モードは、段階的に移行できるように設計されています。ファイルごとに個別に変更することもできますし、関数の粒度で厳格モードにコードを移行することも可能です。</p>

<h2 id="Differences_from_non-strict_to_strict" name="Differences_from_non-strict_to_strict">非厳格モードと厳格モードの違い</h2>

<h3 id="Syntax_errors" name="Syntax_errors">構文エラー</h3>

<p><code>'use strict';</code>を追加すると、スクリプトが実行される前に、以下のケースでは{{jsxref("SyntaxError")}} をスローします。</p>

<ul>
 <li>8進数構文 <code>var n = 023;</code></li>
 <li>{{jsxref("Statements/with", "with")}} 文</li>
 <li>{{jsxref("Operators/delete", "delete")}} を変数名に対して使用すること <code>delete myVariable</code>;</li>
 <li>{{jsxref("eval")}} や {{jsxref("arguments")}} を変数または関数の引数名として使用すること</li>
 <li>(ECMAScript 2015 を見越した) 新しい<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords">予約語</a>、 <code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, <code>yield</code> のうちの一つの使用</li>
 <li>ブロック内での関数宣言 <code>if (a &lt; b) { function f() {} }</code></li>
 <li>明らかなエラー
  <ul>
   <li>オブジェクトリテラル内でプロパティ名に同じ名前を 2 回宣言すること <code>{a: 1, b: 3, a: 7}</code> これは ECMAScript 2015 では問題なくなりました (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1041128">bug 1041128</a>)。</li>
   <li>関数の2つの引数を同じ名前で宣言すること <code>function f(a, b, b) {}</code></li>
  </ul>
 </li>
</ul>

<p>単純なエラーや悪習を明らかにするので、こういったエラーは良いものです。これらのエラーは、コードが実行される前に発生します。</p>

<h3 id="New_runtime_errors" name="New_runtime_errors">新しい実行時エラー</h3>

<p>JavaScript は以前、何をしたかがエラーになるような状況では、暗黙に失敗していました。厳格モードでは、そのような場合に例外を発生させます。コードベースにそのようなケースが含まれている場合、何も壊れていないことを確認するためにテストが必要になります。繰り返しになりますが、これは関数の粒度レベルで起こる可能性があります。</p>

<h4 id="Setting_a_value_to_an_undeclared_variable" name="Setting_a_value_to_an_undeclared_variable">宣言していない変数への値設定</h4>

<pre class="brush: js">function f(x) {
  'use strict';
  var a = 12;
  b = a + x * 35; // エラー!
}
f(42);
</pre>

<p>これはグローバルオブジェクトの値を変更するために使われてきましたが、それが期待される効果であることはまれでした。本当にグローバルオブジェクトに値を設定したい場合は、引数として渡し、明示的にプロパティとして代入してください。</p>

<pre class="brush: js">var global = this; // 最上位のコンテキストでは、 "this" は常に
                   // グローバルオブジェクトを参照します
function f(x) {
  'use strict';
  var a = 12;
  global.b = a + x * 35;
}
f(42);
</pre>

<h4 id="Trying_to_delete_a_non-configurable_property" name="Trying_to_delete_a_non-configurable_property">設定不可能なプロパティを削除しようとすること</h4>

<pre class="brush: js">'use strict';
delete Object.prototype; // エラー!
</pre>

<p>厳格モードでない場合は、ユーザーの予想に反して、暗黙に失敗します。</p>

<h4 id="Poisoned_arguments_and_function_properties" name="Poisoned_arguments_and_function_properties">ポイズン引数と関数プロパティ</h4>

<p>厳格モードでは <code>arguments.callee</code>, <code>arguments.caller</code>, <code>anyFunction.caller</code>, <code>anyFunction.arguments</code> にアクセスするとエラーが発生します。唯一の合法的な利用法は、以下のように関数を再利用することでしょう。</p>

<pre class="brush: js">// example taken from vanillajs: http://vanilla-js.com/
var s = document.getElementById('thing').style;
s.opacity = 1;
(function() {
  if ((s.opacity-=.1) &lt; 0)
    s.display = 'none';
  else
    setTimeout(arguments.callee, 40);
})();</pre>

<p>上記は以下のように書き換えられます。</p>

<pre class="brush: js">'use strict';
var s = document.getElementById('thing').style;
s.opacity = 1;
(function fadeOut() { // 関数名
  if((s.opacity-=.1) &lt; 0)
    s.display = 'none';
  else
    setTimeout(fadeOut, 40); // 関数名を使用する
})();</pre>

<h3 id="Semantic_differences" name="Semantic_differences">意味的な違い</h3>

<p>以下の違いは非常に微妙な違いです。テストスイートはこの種の微妙な差を捉えない可能性があります。これらの違いがコードの意味に影響を与えないことを確認するためには、コードベースの慎重なレビューが必要になるでしょう。幸いなことに、この慎重なレビューによって機能の粒度を徐々に下げていくことができます。</p>

<h4 id="this_in_function_calls" name="this_in_function_calls">関数呼び出しにおける <code>this</code></h4>

<p><code>f()</code> のような関数呼び出しでは、 <code>this</code> の値はグローバルオブジェクトでした。厳格モードでは <code>undefined</code> になりました。関数が {{jsxref("Function/call", "call")}} または {{jsxref("Function/apply", "apply")}} で呼び出されたとき、この値がプリミティブ値であった場合は、オブジェクト (または <code>undefined</code> や <code>null</code> に対してはグローバルオブジェクト) にボックス化されていました。厳格モードでは、値は変換または置換せずに直接渡されます。</p>

<h4 id="arguments_doesnt_alias_named_function_arguments" name="arguments_doesnt_alias_named_function_arguments"><code>arguments</code> は関数の名前付き引数の別名ではない</h4>

<p>厳格モードでない場合、 <code>arguments</code> オブジェクト内の値を変更すると、対応する名前付きの引数も変更されます。これは JavaScript エンジンの最適化を複雑にし、コードを呼んだり理解したりするのを難しくしていました。厳格モードでは、 <code>arguments</code> オブジェクトは名前付き引数と同じ値で作成・初期化されますが、 <code>arguments</code> オブジェクトや名前付き引数の変更は互いに反映されません。</p>

<h4 id="Change_to_eval" name="Change_to_eval"><code>eval</code> への変更</h4>

<p>厳格モードのコードでは、 <code>eval</code> は呼び出されたスコープ内に新しい変数を作成しません。また厳格モードでは、もちろん文字列は厳格モードの規則で評価されます。何も破綻していないことを確認するためには、徹底的なテストが必要になります。本当に必要ではない場合は eval を使わないというのも現実的な解決策かもしれません。</p>

<h2 id="Strictness-neutral_code" name="Strictness-neutral_code">厳格性に中立なコード</h2>

<p>厳格なコードを厳格モードに移行する上での潜在的な「欠点」は、厳密モードを実装していない古いブラウザーでは意味が異なる可能性があることです。まれに起こることですが (連結やミニ化の失敗などで)、コードも書いてテストしたモードで実行されないこともあります。ここでは、コードの厳格性への依存をなくす規則を示します。</p>

<ol>
 <li>コードを厳格モードで書き、厳格モードでしか発生しないエラー (上記の「新しい実行時エラー」の節にあるもの) が発生しないことを確認してください。</li>
 <li>意味の違いから離れてみてください。
  <ol>
   <li><code>eval</code>: 何をやっているか分かる場合にのみ、使用してください。</li>
   <li><code>arguments</code>: 関数の引数へは、常に名前を経由してアクセスするか、 arguments のオブジェクトのコピーを行うために、<br>
    <code>var args = Array.prototype.slice.call(arguments)</code><br>
    を関数の最初の行に追加してください。</li>
   <li><code>this</code>: 自ら生成したオブジェクトへ参照するときのみ <code>this</code> を使用してください。</li>
  </ol>
 </li>
</ol>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">厳格モード</a></li>
</ul>
