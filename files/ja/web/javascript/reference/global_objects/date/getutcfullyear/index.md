---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---
<div>{{JSRef}}</div>

<p><strong><code>getUTCFullYear()</code></strong> メソッドは、協定世界時に基づき、指定された日時の「年」を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.getUTCFullYear()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>協定世界時に基づき、与えられた日付の「年」を表す数値。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>getUTCFullYear()</code> が返す値は、 2000 年問題に対応した表記に従う絶対的な値、例えば 1995 などです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_getUTCFullYear" name="Using_getUTCFullYear">getUTCFullYear() の使用</h3>

<p>次の例は、現在の年を表す 4 桁の値を変数 <code>year</code> に代入します。</p>

<pre class="brush: js notranslate">var today = new Date();
var year = today.getUTCFullYear();
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.getUTCFullYear")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.getFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setFullYear()")}}</li>
</ul>
