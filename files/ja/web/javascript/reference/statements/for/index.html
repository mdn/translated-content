---
title: for
slug: Web/JavaScript/Reference/Statements/for
tags:
  - JavaScript
  - Language feature
  - Loop
  - Reference
  - Statement
  - for
translation_of: Web/JavaScript/Reference/Statements/for
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong>for 文</strong>は、括弧で囲みセミコロンで区切った3つの引数と、続いてループ内で実行される文 (ふつうは<a href="/ja/docs/Web/JavaScript/Reference/Statements/block">ブロック文</a>) から成るループを構成します。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-for.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">for ([<var>initialization</var>]; [<var>condition</var>]; [<var>final-expression</var>])
   <var>statement</var></pre>

<dl>
 <dt><code><var>initialization</var></code></dt>
 <dd>ループが始まる前に一度だけ評価される (代入式を含む) 式または変数宣言。ふつうはカウンター変数を初期化するために使われます。この式では任意で、 <code>var</code> キーワードを用いて新しい変数を宣言することもできます。 <code>var</code> で宣言された変数はループ内のローカル変数にはなりません。すなわち、 <code>for</code> ループが属するスコープと同じスコープになります。 <code>let</code> で宣言された変数は文内のローカル変数になります。</dd>
 <dd>この式の結果は捨て去られます。</dd>
 <dt><code><var>condition</var></code></dt>
 <dd>ループのそれぞれの反復処理が行われる前に評価される式です。この式が true と評価された場合は、 <code><var>statement</var></code> が実行されます。この条件テストは省略可能です。省略された場合は、条件は常に true に評価されます。もしこの式が false と評価された場合は、実行は <code>for</code> 構造に続く最初の式に飛びます。</dd>
 <dt><code><var>final-expression</var></code></dt>
 <dd>ループのそれぞれの反復処理の最後に評価される式です。これは、次の <code><var>condition</var></code> の評価前に行われます。一般的には、カウンター変数を更新または増加するために使われます。</dd>
 <dt><code><var>statement</var></code></dt>
 <dd>条件が true と評価された場合に限り実行される文です。ループ内で複数の文を実行するには、{{jsxref("Statements/block", "ブロック", "", 0)}}文 (<code>{ ... }</code>) を使用して文をグループ化してください。ループ内で文を実行しないようにするには、{{jsxref("Statements/empty", "空文", "", 0)}} (<code>;</code>) を使用してください。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_for" name="Using_for">for の使用</h3>

<p>次の <code>for</code> 文は、変数 <code>i</code> を宣言し、それを <code>0</code> に初期化することから始まります。<code>i</code> が 9 より小さいことをチェックし、続く 2 つの文を実行し、ループを通過した後ごとに <code>i</code> を 1 増加します。</p>

<pre class="brush: js notranslate">for (let i = 0; i &lt; 9; i++) {
   console.log(i);
   // その他の文
}
</pre>

<h3 id="Optional_for_expressions" name="Optional_for_expressions">省略可能な for の式</h3>

<p><code>for</code> ループの先頭にある 3 つの式は、省略可能です。</p>

<p>例えば、 <code><var>initialization</var></code> ブロックで変数を初期化する必要はありません。</p>

<pre class="brush: js notranslate">var i = 0;
for (; i &lt; 9; i++) {
    console.log(i);
    // その他の文
}
</pre>

<p><code><var>initialization</var></code> ブロックと同様に、 <code><var>condition</var></code> ブロックも省略可能です。この式を省略した場合は、本体の中でループを脱出できるようにして、無限ループにならないようにしなければなりません。</p>

<pre class="brush: js notranslate">for (let i = 0;; i++) {
   console.log(i);
   if (i &gt; 3) break;
   // その他の文
}</pre>

<p>3 つのブロックをすべて省略することもできます。繰り返しますが、 {{jsxref("Statements/break", "break")}} 文を使用してループを終了させ、また break 文の条件がある時点で true になるように、変数を変更 (増加) させていることを確認してください。</p>

<pre class="brush: js notranslate">var i = 0;

for (;;) {
  if (i &gt; 3) break;
  console.log(i);
  i++;
}
</pre>

<h3 id="Using_for_without_a_statement" name="Using_for_without_a_statement">文を持たない for の使用</h3>

<p>以下の <code>for</code> の繰り返しでは、 <code><var>final-expression</var></code> 句の中でにおけるノードのオフセット位置を検索しています。 <code><var>statement</var></code> 節を使用する必要がない場合は、代わりにセミコロンを使用してください。</p>

<pre class="brush: js notranslate">function showOffsetPos(sId) {

  var nLeft = 0, nTop = 0;

  for (

    var oItNode = document.getElementById(sId); /* initialization */

    oItNode; /* condition */

    nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent /* final-expression */

  ); /* semicolon */

  console.log('Offset position of \'' + sId + '\' element:\n left: ' + nLeft + 'px;\n top: ' + nTop + 'px;');

}

/* 呼び出しの例 */

showOffsetPos('content');

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"</pre>

<div class="note"><strong>注:</strong> これは、<strong>セミコロンが必須</strong>となる JavaScript の数少ないケースの1つです。セミコロンがないと、繰り返し宣言の次の行が繰り返す文と見なされます。</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-for-statement', 'for statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.for")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/empty", "空文", "", 0)}}</li>
 <li>{{jsxref("Statements/break", "break")}}</li>
 <li>{{jsxref("Statements/continue", "continue")}}</li>
 <li>{{jsxref("Statements/while", "while")}}</li>
 <li>{{jsxref("Statements/do...while", "do...while")}}</li>
 <li>{{jsxref("Statements/for...in", "for...in")}}</li>
 <li>{{jsxref("Statements/for...of", "for...of")}}</li>
</ul>
