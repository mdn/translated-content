---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---
<div>{{JSRef}}</div>

<p><strong><code>getUTCMinutes()</code></strong> メソッドは、協定世界時に基づき、指定された日時の「分」を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.getUTCMinutes()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>協定世界時に基づき、与えられた日時の「分」を表す 0 から 59 までの間の整数値。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_getUTCMinutes" name="Using_getUTCMinutes">getUTCMinutes() の使用</h3>

<p>次の例は、現在時刻の「分」部を変数 <code>minutes</code> に代入します。</p>

<pre class="brush: js notranslate">var today = new Date();
var minutes = today.getUTCMinutes();
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.getUTCMinutes")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.getMinutes()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCMinutes()")}}</li>
</ul>
