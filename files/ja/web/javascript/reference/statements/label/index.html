---
title: label
slug: Web/JavaScript/Reference/Statements/label
tags:
  - JavaScript
  - Language feature
  - Statement
translation_of: Web/JavaScript/Reference/Statements/label
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong>ラベル付き文</strong>は、 {{jsxref("Statements/break", "break")}} 文や {{jsxref("Statements/continue", "continue")}} 文と組み合わせて使用することができます。これは文に参照先となる識別子の接頭辞をつけます。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-label.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div class="note">
<p><strong>注:</strong> ループやブロックに名前を付けることはめったにありません。ふつうは、ジャンプによるループの代わりに関数呼び出しを使用することができます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>ラベル</em> :
  <em>文</em>
</pre>

<dl>
 <dt><code><em>ラベル</em></code></dt>
 <dd>予約語ではない任意の JavaScript の識別子。</dd>
 <dt><code><em>文</em></code></dt>
 <dd>文。 <code>break</code> は任意のラベル付き文で使うことができ、 <code>continue</code> はループのラベル付き文で使うことができます。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>ループを識別するためにラベルを使い、そして、プログラムがループを中断すべきか、またはその実行を継続すべきかを指し示すために、<code>break</code> または <code>continue</code> 文を使うことができます。</p>

<p>JavaScript には <strong><code>goto</code> 文がなく</strong>、ラベルと <code>break</code> または <code>continue</code> のみ使用できます。</p>

<p><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">厳格モード</a>のコードでは、 "<code>let</code>" をラベル名として使用することができません。この場合、 {{jsxref("SyntaxError")}} が発生します (let は予約語です)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_a_labeled_continue_with_for_loops" name="Using_a_labeled_continue_with_for_loops">ラベル付き continue を for ループで使用する</h3>

<pre class="brush: js notranslate">var i, j;

loop1:
for (i = 0; i &lt; 3; i++) {      // 1 番目の for 文に "loop1" というラベルをつける
   loop2:
   for (j = 0; j &lt; 3; j++) {   // 2 番目の for 文に "loop2" というラベルをつける
      if (i === 1 &amp;&amp; j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// 結果:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// "i = 1, j = 1" と "i = 1, j = 2" をスキップしていることに注目
</pre>

<h3 id="Using_a_labeled_continue_statement" name="Using_a_labeled_continue_statement">ラベル付き continue 文を使用する</h3>

<p>配列 items と tests について、このサンプルはすべてを tests に渡した items の数を数えます。</p>

<pre class="brush: js notranslate">var itemsPassed = 0;
var i, j;

top:
for (i = 0; i &lt; items.length; i++) {
  for (j = 0; j &lt; tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}</pre>

<h3 id="Using_a_labeled_break_with_for_loops" name="Using_a_labeled_break_with_for_loops">for ループでラベル付き break を使用する</h3>

<pre class="brush: js notranslate">var i, j;

loop1:
for (i = 0; i &lt; 3; i++) {      // 1 番目の for 文に "loop1" というラベルをつける
   loop2:
   for (j = 0; j &lt; 3; j++) {   // 2 番目の for 文に "loop2" というラベルをつける
      if (i === 1 &amp;&amp; j === 1) {
         break loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// 結果:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// continue の例との違いに注目</pre>

<h3 id="Using_a_labeled_break_statement" name="Using_a_labeled_break_statement">ラベル付き break 文を使用する</h3>

<p>配列 items と tests について、このサンプルは items のすべてを tests に渡したかを判断します。</p>

<pre class="brush: js notranslate">var allPass = true;
var i, j;

top:
for (i = 0; i &lt; items.length; i++) {
  for (j = 0; j &lt; tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
  }
}</pre>

<h3 id="Using_a_labeled_block_with_break" name="Using_a_labeled_block_with_break">break を使用したラベル付きブロックの使用</h3>

<p>ラベルを単純なブロックの中でも使用することができますが、ループ以外のラベルでは break 文のみが意味を持ちます。</p>

<pre class="brush: js notranslate">foo: {
  console.log('face');
  break foo;
  console.log('this will not be executed');
}
console.log('swap');

// this will log:

// "face"
// "swap" </pre>

<h3 id="Labeled_function_declarations" name="Labeled_function_declarations">ラベル付き関数宣言</h3>

<p>ECMAScript 2015 から、ラベル付き関数宣言が <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations">web compatibility annex of the specification</a> において、厳格モード以外のコードで標準化されました。</p>

<pre class="brush: js notranslate">L: function F() {}</pre>

<p>ただし、<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">厳格モード</a>のコードでは {{jsxref("SyntaxError")}} が発生します。</p>

<pre class="brush: js notranslate">'use strict';
L: function F() {}
// SyntaxError: functions cannot be labelled</pre>

<p><a href="/ja/docs/Web/JavaScript/Reference/Statements/function*">ジェネレーター関数</a>は、厳格モードであってもなくてもラベル付けすることはできません。</p>

<pre class="brush: js notranslate">L: function* F() {}
// SyntaxError: generator functions cannot be labelled
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
   <td>{{SpecName('ESDraft', '#sec-labelled-statements', 'Labelled statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.label")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/break", "break")}}</li>
 <li>{{jsxref("Statements/continue", "continue")}}</li>
</ul>
