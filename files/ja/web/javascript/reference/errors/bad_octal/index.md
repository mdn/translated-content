---
title: 'Warning: 08/09 is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Bad_octal
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Bad_octal
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の警告 "08 (or 09) is not a legal ECMA-262 octal constant" は、数値リテラルの
  <code>08</code> または <code>09</code> が使用されたときに発生します。これらは 8 進数として解釈することができません。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>警告です。 JavaScript の実行は停止しません。</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>10 進数リテラルは、ゼロ (<code>0</code>) から始まり、その他の 10 進数の数字を続けることができますが、先頭の <code>0</code> の後の数字がすべて 8 より小さい場合、その数値は 8 進数として解釈されます。そのため、 <code>08</code> や <code>09</code> はあり得ないため、 JavaScript はこれを警告します。</p>

<p>8 進数リテラルと 8 進エスケープシーケンスは非推奨であり、追加の非推奨警告が発生することに注意してください。 ECMAScript 6 以降では、ゼロで始まり小文字または大文字のラテン文字 "O" (<code>0o</code> または <code>0O</code>) が続く構文が使用されます。詳細は、<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#octal">字句文法</a>のページを見てください。</p>

<h2 id="Examples">例</h2>

<h3 id="Invalid_octal_numbers">無効な 8 進数</h3>

<pre class="brush: js example-bad">08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated</pre>

<h3 id="Valid_octal_numbers">有効な 8 進数</h3>

<p>先頭のゼロに続き "o" の文字を使用します。</p>

<pre class="brush: js example-good">0O755;
0o644;
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#octal">字句文法</a></li>
  <li>
    <p><a href="/ja/docs/Web/JavaScript/Reference/Errors/Deprecated_octal">SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated</a></p>
  </li>
</ul>
