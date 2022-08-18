---
title: 'SyntaxError: missing ; before statement'
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "missing ; before statement" は、どこかでセミコロンが欠けており、 <a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion">自動セミコロン挿入 (ASI)</a> によって追加できない場合に発生します。 JavaScript がソースコードを正しく解釈するためには、セミコロンを置く必要があります。</p>

<h2 id="Message">メッセージ</h2>

<pre class="brush: js">SyntaxError: Expected ';' (Edge)
SyntaxError: missing ; before statement (Firefox)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>どこかでセミコロン (<code>;</code>) を忘れています。<a href="/ja/docs/Web/JavaScript/Reference/Statements">JavaScript の文</a>はセミコロンで終えなければなりません。一部は、<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion">自動セミコロン挿入 (ASI)</a> の影響を受けますが、この場合に JavaScript がソースコードを正確に解釈するためには、セミコロンを置く必要があります。</p>

<p>しかし、多くの場合、このエラーは、文字列の不適切なエスケープや <code>var</code> の誤った使用など、その他のエラーの結果として発生します。また、どこかで括弧が多すぎるかもしれません。このエラーが発生した場合は、注意深く構文をチェックしてください。</p>

<h2 id="Examples">例</h2>

<h3 id="Unescaped_strings">エスケープされていない文字列</h3>

<p>このエラーは、次のように、適切に文字列をエスケープしておらず、文字列がすでに終了していると JavaScript エンジンが予測したときによく発生します。</p>

<pre class="brush: js example-bad">var foo = 'Tom's bar';
// SyntaxError: missing ; before statement</pre>

<p>二重引用符を使用するか、アポストロフィをエスケープするかしてください。</p>

<pre class="brush: js example-good">var foo = "Tom's bar";
var foo = 'Tom\'s bar';
</pre>

<h3 id="Declaring_properties_with_var">var を使用したプロパティ宣言</h3>

<p>オブジェクトや配列のプロパティを <code>var</code> を使って宣言することは<strong>できません</strong>。</p>

<pre class="brush: js example-bad">var obj = {};
var obj.foo = 'hi'; // SyntaxError missing ; before statement

var array = [];
var array[0] = 'there'; // SyntaxError missing ; before statement
</pre>

<p><code>var</code> キーワードを省略してください。</p>

<pre class="brush: js example-good">var obj = {};
obj.foo = 'hi';

var array = [];
array[0] = 'there';
</pre>

<h3 id="Bad_keywords">誤ったキーワード</h3>

<p>他のプログラミング言語から来た人は、 JavaScript では同じ意味を持たない、あるいはまったく意味を持たないキーワードを使ってしまうこともよくあります。</p>

<pre class="brush: js example-bad">def print(info){
  console.log(info);
}; // SyntaxError missing ; before statement</pre>

<p><code>function</code> を <code>def</code> の代わりに使用してください。</p>

<pre class="brush: js example-good">function print(info){
  console.log(info);
};</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion">自動セミコロン挿入 (ASI)</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Statements">JavaScript 文</a></li>
</ul>
