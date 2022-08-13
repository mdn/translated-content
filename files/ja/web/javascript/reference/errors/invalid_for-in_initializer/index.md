---
title: 'SyntaxError: for-in loop head declarations may not have initializers'
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
tags:
  - Error
  - JavaScript
  - Strict Mode
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の <a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>専用の例外である "for-in loop head declarations may not have initializers" は、 <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> の先頭に初期化構文が含まれていた場合、例えば |<code>for (var i = 0 in obj)</code>| のような場合に発生します。これは strict モードの for-in ループでは許可されていません。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">SyntaxError: for-in loop head declarations cannot have an initializer (Edge)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
</pre>

<h2 id="エラータイプ">エラータイプ</h2>

<p><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>でのみ、{{jsxref("SyntaxError")}}。</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> ループの先頭に初期化式が含まれています。つまり、 |<code>for (var i = 0 in obj)</code>| のように変数を宣言して値を代入しています。 strict モードでない場合は、このヘッダー宣言は暗黙に無視され、<code>|for (var i in obj)|</code> のように動作します。しかし、<a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>では <code>SyntaxError</code> が発生します。</p>

<h2 id="例">例</h2>

<p>この例では <code>SyntaxError</code> が発生します。</p>

<pre class="brush: js example-bad">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
</pre>

<h3 id="Valid_for-in_loop">有効な for-in ループ</h3>

<p>for-in ループのヘッダーから初期化子 (<code>i = 0</code>) を削除してください。</p>

<pre class="brush: js example-good">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
</pre>

<h3 id="Array_iteration">Array の反復処理</h3>

<p>for...in ループは <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in">Array の反復処理で使用すべきではありません</a>。 {{jsxref("Array")}} を反復するのに、 <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for">for</a></code> ループを <code>for-in</code> ループの代わりに使うつもりだったのでしょうか。 <code>for</code> ループならば、初期化子を設定することができます。</p>

<pre class="brush: js example-good">var arr = [ "a", "b", "c" ]

for (var i = 2; i &lt; arr.length; i++) {
  console.log(arr[i]);
}

// "c"</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code>
  </li>
  <li>
    <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code> – こちらも strict モードであろうとなかろうと初期化子が使用できない。</li>
  <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for">for</a></code> – 配列の反復処理に向いており、初期化子を定義できる。</li>
</ul>
