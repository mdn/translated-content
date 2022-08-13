---
title: >-
  SyntaxError: a declaration in the head of a for-of loop can't have an
  initializer
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
tags:
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "a declaration in the head of a for-of loop can't have an initializer" は、 <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a> ループの先頭に |<code>for (var i = 0 of iterable)</code>| のように初期化子が含まれている場合に発生します。これは for-of ループでは許可されていません。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">SyntaxError: for-of loop head declarations cannot have an initializer (Edge)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)
</pre>

<h2 id="エラータイプ">エラータイプ</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a> ループの先頭に初期化式が含まれています。つまり、 |<code>for (var i = 0 of iterable)</code>| のように変数が宣言され、値が代入されています。これは、 for-of ループでは許可されていません。初期化できる <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for">for</a></code> ループを使用した方が良いかもしれません。</p>

<h2 id="例">例</h2>

<h3 id="Invalid_for-of_loop">不正な <code>for-of</code> ループ</h3>

<pre class="brush: js example-bad">let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer</pre>

<h3 id="Valid_for-of_loop">有効な <code>for-of</code> ループ</h3>

<p><code>for-of</code> ループのヘッダーから初期化子 (<code>value = 50</code>) を取り除く必要があります。おそらく、50 をオフセット値にしようとしているのでしょうから、たとえばループのボディー内で 50 を加えられます。</p>

<pre class="brush: js example-good">let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code></li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code> – strict モードでは同様に初期化できない (<a href="/ja/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer">SyntaxError: for-in loop head declarations may not have initializers</a>)</li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for">for</a></code> – 反復時に初期化子を許可している</li>
</ul>
