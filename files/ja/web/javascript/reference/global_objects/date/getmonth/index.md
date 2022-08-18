---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---
<div>{{JSRef}}</div>

<p><strong><code>getMonth()</code></strong> メソッドは、地方時に基づき、指定された日付の「月」を表す 0 を基点とした値 (すなわち 0 が年の最初の月を示す) を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-getmonth.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.getMonth()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>地方時に基づき、与えた日付の「月」を表す 0 から 11 までの間の整数値。0 は 1 月、1 は 2 月、11 は 12 月に対応します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_getMonth" name="Using_getMonth">getMonth() の使用</h3>

<p>以下の 2 行目の文は、{{jsxref("Global_Objects/Date", "Date")}} オブジェクト <code>Xmas95</code> の値に基づき、変数 <code>month</code> に 11 という値を代入します。</p>

<pre class="brush: js notranslate">var Xmas95 = new Date('December 25, 1995 23:15:30');
var month = Xmas95.getMonth();

console.log(month); // 11
</pre>

<div class="blockIndicator note">
<p><strong>注:</strong> 必要であれば、月の完全な名前 (例えば <code>January</code> ) は <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Using_options">Intl.DateTimeFormat()</a></code> に <code>options</code> 引数を付けることで取得することができます。このメソッドを使用すれば、国際化がより簡単になります。</p>

<pre class="brush: js notranslate">var options = { month: 'long'};
console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
// December
console.log(new Intl.DateTimeFormat('de-DE', options).format(Xmas95));
// Dezember
</pre>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getmonth', 'Date.prototype.getMonth')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.getMonth")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCMonth()")}}</li>
 <li>{{jsxref("Date.prototype.setMonth()")}}</li>
</ul>
