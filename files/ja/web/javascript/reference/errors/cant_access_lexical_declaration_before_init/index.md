---
title: 'ReferenceError: can''t access lexical declaration`X'' before initialization'
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
tags:
  - Error
  - Errors
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "can't access lexical declaration `<em>variable</em>' before
  initialization" は、語彙変数が初期化前にアクセスされたときに発生します。これはブロック文内で、 <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/let">let</a></code> または <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/const">const</a></code> 宣言が定義される前にアクセスされたときに発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">ReferenceError: Use before delaration (Edge)
ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("ReferenceError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>初期化前に語彙変数にアクセスしました。これはブロックステートメント内で、定義される前に<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/let">let</a></code> か <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/const">const</a></code> 宣言にアクセスすると発生します。</p>

<h2 id="Examples">例</h2>

<h3 id="Invalid_cases">不正な場合</h3>

<p>この場合、変数 "foo" はブロックステートメント内で <code>let</code> を使用して再宣言されています。</p>

<pre class="brush: js example-bad">function test() {
  let foo = 33;
  if (true) {
    let foo = (foo + 55);
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
</pre>

<h3 id="Valid_cases">有効な場合</h3>

<p>"foo" を if ステートメント内に変更するには、再宣言の原因となる <code>let</code> を取り除きます。</p>

<pre class="brush: js example-good">function test(){
   let foo = 33;
   if (true) {
      foo = (foo + 55);
   }
}
test();
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_and_errors_with_let">let における一時的なデッドゾーンとエラー</a></li>
</ul>
