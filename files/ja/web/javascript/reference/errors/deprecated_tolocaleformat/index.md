---
title: 'Warning: Date.prototype.toLocaleFormat is deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
tags:
  - Error
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の警告 "Date.prototype.toLocaleFormat is deprecated; consider using
  Intl.DateTimeFormat instead" は、標準外の {{jsxref("Date.prototype.toLocaleFormat")}} メソッドが使用されたときに発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>警告です。 JavaScript の実行は停止しません。</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>非標準の {{jsxref("Date.prototype.toLocaleFormat")}} メソッドは非推奨のため、使用すべきではありません。これは C 言語の <code>strftime()</code> 関数が期待するものと同じフォーマットの文字列を使用します。<strong>この関数は Firefox 58 以降では利用できなくなりました。</strong></p>

<h2 id="Examples">例</h2>

<h3 id="Deprecated_syntax">非推奨の構文</h3>

<p>{{jsxref("Date.prototype.toLocaleFormat")}} メソッドは非推奨で、削除される予定です (クロスブラウザーの対応はなく、 Firefox でのみ使用できます)。</p>

<pre class="brush: js example-bad">var today = new Date();
var date = today.toLocaleFormat('%A, %e. %B %Y');

console.log(date);
// In German locale
// "Freitag, 10. März 2017"</pre>

<h3 id="Alternative_standard_syntax_using_the_ECMAScript_Intl_API">ECMAScript Intl API を使用した代わりの標準構文</h3>

<p>ECMA-402 (ECMAScript Intl API) 標準では、言語に敏感な日付と時刻の書式設定を可能にする標準的なオブジェクトとメソッドを指定しています (Chrome 24 以降、Firefox 29 以降、IE11 以降、Safari10 以降で使用できます)。</p>

<p>ある日付のフォーマットを指定する場合、 {{jsxref("Date.prototype.toLocaleDateString")}} メソッドを使用すべきです。</p>

<pre class="brush: js example-good">var today = new Date();
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var date = today.toLocaleDateString('de-DE', options);

console.log(date);
// "Freitag, 10. März 2017"
</pre>

<p>または、 {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトを使用できます。これにより、ほとんど計算が完了したオブジェクトをキャッシュして、書式設定が高速になります。これは、日付の書式化を繰り返すときに役立ちます。</p>

<pre class="brush: js example-good">var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
             Date.UTC(2014, 04, 12, 8, 0, 0)];

dates.forEach(date =&gt; console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
</pre>

<h3 id="Alternative_standard_syntax_using_Date_methods">Date メソッドを使用した代わりの標準構文</h3>

<p>{{jsxref("Date")}} オブジェクトは、カスタム日付文字列を構築するいくつかのメソッドを提供しています。</p>

<pre class="brush: js example-bad">(new Date()).toLocaleFormat("%Y%m%d");
// "20170310"
</pre>

<p>以下のように変換できます。</p>

<pre class="brush: js example-good">let now = new Date();
let date = now.getFullYear() * 10000 +
          (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Date.prototype.toLocaleFormat")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleDateString")}}</li>
  <li>{{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
</ul>
