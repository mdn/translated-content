---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getHours
---
<div>{{JSRef}}</div>

<p><strong><code>getHours()</code></strong> メソッドは、地方時に基づき、指定された日時の「時」を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-gethours.html","shorter")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.getHours()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>地方時に基づき、与えた日時の「時」を表す 0 から 23 の間の整数値。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_getHours" name="Using_getHours">getHours() の使用</h3>

<p>以下の 2 行目の文は、 {{jsxref("Global_Objects/Date", "Date")}} オブジェクト <code>Xmas95</code> の値に基づき、23 という値を変数 <code>hours</code> に代入します。</p>

<pre class="brush: js notranslate">let Xmas95 = new Date('December 25, 1995 23:15:30');
let hours = Xmas95.getHours();

console.log(hours); // 23
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.getHours")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCHours()")}}</li>
 <li>{{jsxref("Date.prototype.setHours()")}}</li>
</ul>
