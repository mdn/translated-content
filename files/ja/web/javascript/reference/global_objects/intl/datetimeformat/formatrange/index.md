---
title: Intl.DateTimeFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
tags:
  - JavaScript
  - Method
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
---
<div>{{JSRef}}</div>

<p><strong><code>Intl.DateTimeFormat.prototype.formatRange()</code></strong> は、日付の範囲をもっとも簡明な方法で、 {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトがインスタンス化されたときに提供された <strong><code>locale</code></strong> と <strong><code>options</code></strong> に基づいて書式化します。</p>

<div>{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrange.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="notranslate"><code>Intl.DateTimeFormat.prototype.formatRange(<var>startDate, endDate</var>)</code></pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_formatRange_usage" name="Basic_formatRange_usage">基本的な formatRange の使用</h3>

<p>このメソッドは2つの {{jsxref("Date")}} を受け取り、 {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトがインスタンス化されたときに提供された <code>locale</code> と <code>options</code> に基づいて日付の範囲を書式化します。</p>

<pre class="brush: js notranslate">let date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
let date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
let date3 = new Date(Date.UTC(2007, 0, 20, 10, 0, 0));
// &gt; 'Wed, 10 Jan 2007 10:00:00 GMT'
// &gt; 'Wed, 10 Jan 2007 11:00:00 GMT'
// &gt; 'Sat, 20 Jan 2007 10:00:00 GMT'

let fmt1 = new Intl.DateTimeFormat("en", {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
});
console.log(fmt1.format(date1));
console.log(fmt1.formatRange(date1, date2));
console.log(fmt1.formatRange(date1, date3));
// &gt; '1/10/07, 10:00 AM'
// &gt; '1/10/07, 10:00 – 11:00 AM'
// &gt; '1/10/07, 10:00 AM – 1/20/07, 10:00 AM'

let fmt2 = new Intl.DateTimeFormat("en", {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});
console.log(fmt2.format(date1));
console.log(fmt2.formatRange(date1, date2));
console.log(fmt2.formatRange(date1, date3));
// &gt; 'Jan 10, 2007'
// &gt; 'Jan 10, 2007'
// &gt; 'Jan 10 – 20, 2007'
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
   <td>{{SpecName('Intl.DateTimeFormat.formatRange', '#sec-intl.datetimeformat.prototype.formatRange', 'formatRange()')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Intl.DateTimeFormat.formatRange")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
</ul>
