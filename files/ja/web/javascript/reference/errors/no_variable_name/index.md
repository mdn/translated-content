---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/No_variable_name
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "missing variable name" は、開発者がよく経験するエラーです。入力間違いや変数名を忘れた場合によく発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>変数の名前がありません。原因は、タイプミスや変数名の忘れがほとんどです。変数名が <code>=</code> 記号の前に記載されていることを確認してください。</p>

<p>複数の変数を同時に宣言する場合は、前の行/宣言がセミコロンではなくカンマで終わっていないことを確認してください。</p>

<h2 id="Examples">例</h2>

<h3 id="Missing_a_variable_name">変数名を忘れている</h3>

<pre class="brush: js example-bad">var = "foo";
</pre>

<p>分かりやすい変数名を考えることは、ほとんどの開発者にとって難しいことです。しかし、時間が経てば簡単になります。</p>

<pre class="brush: js example-good">var description = "foo";</pre>

<h3 id="Reserved_keywords_cant_be_variable_names">予約語は変数名にできない</h3>

<p>いくつか<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#keywords">予約語</a>である変数名があります。使用できません。ごめんね:(</p>

<pre class="brush: js example-bad">var debugger = "whoop";
// SyntaxError: missing variable name
</pre>

<h3 id="Declaring_multiple_variables">複数の変数宣言</h3>

<p>複数の変数を宣言するときは、カンマに特別な注意を払ってください。余分なカンマがありませんか?誤ってセミコロンの代わりにカンマを加えていませんか?</p>

<pre class="brush: js example-bad">var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
</pre>

<p>修正版は次の通りです。</p>

<pre class="brush: js example-good">var x, y = "foo";
var x = "foo";

var first = document.getElementById('one');
var second = document.getElementById('two');</pre>

<h3 id="Arrays">配列</h3>

<p>JavaScript の {{jsxref("Array")}} リテラルは、値を角括弧で囲む必要があります。これは動作しません。</p>

<pre class="brush: js example-bad">var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
</pre>

<p>正しくは次の通りです。</p>

<pre class="brush: js example-good">var arr = [1,2,3,4,5];</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://wiki.c2.com/?GoodVariableNames">良い変数名</a></li>
 <li>{{jsxref("Statements/var", "var")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Grammar_and_types#declarations">JavaScript ガイドの変数の宣言</a></li>
</ul>
