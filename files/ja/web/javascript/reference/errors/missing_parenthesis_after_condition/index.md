---
title: 'SyntaxError: missing ) after condition'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "missing ) after condition" は、 <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/if...else">if</a></code> 文の条件の書き方にエラーがあった場合に発生します。 <code>if</code> キーワードの後には括弧が必要です。
</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">SyntaxError: Expected ')' (Edge)
SyntaxError: missing ) after condition (Firefox)
</pre>

<h2 id="エラータイプ">エラータイプ</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/if...else">if</a></code> 条件の書き方にエラーがあります。どのプログラミング言語でも、コードは様々な入力に応じて決定を行い、アクションを実行する必要があります。if 文は指定した条件を満たす場合、処理を実行します。JavaScript では次のように、この条件は <code>if</code> キーワードの後に括弧を付ける必要があります。</p>

<pre class="brush: js">if (condition) {
  // do something if the condition is true
}</pre>

<h2 id="例">例</h2>

<h3 id="Missing_parenthesis">括弧の欠落</h3>

<p>ちょっとした見落としかもしれないので、慎重にコード内のすべての括弧をチェックしてください。</p>

<pre class="brush: js example-bad">if (3 &gt; Math.PI {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
</pre>

<p>このコードを修正するには、条件を閉じる括弧を追加する必要があります。</p>

<pre class="brush: js example-good">if (3 &gt; Math.PI) {
  console.log("wait what?");
}</pre>

<h3 id="Misused_is_keyword"><code>is</code> キーワードの誤用</h3>

<p>他の言語から来た人ならば、 JavaScript で同じ意味を持たないキーワードや意味のないキーワードを追加してしまいがちです。</p>

<pre class="brush: js example-bad">if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
</pre>

<p>代わりに、正しい<a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">比較演算子</a>を使うべきです。例を示します。</p>

<pre class="brush: js example-good">if (done === true) {
 console.log("we are done!");
}</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code>
  </li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">比較演算子</a></li>
  <li>
   <p><a href="/ja/docs/Learn/JavaScript/Building_blocks/conditionals">コードでの意思決定 — 条件文</a></p>
  </li>
</ul>
