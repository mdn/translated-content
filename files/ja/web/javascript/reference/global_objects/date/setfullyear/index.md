---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---
<div>{{JSRef}}</div>

<p><strong><code>setFullYear()</code></strong> メソッドは、地方時に基づき、指定された日付の「年」を設定します。新しいタイムスタンプを返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.setFullYear(<var>yearValue</var>[, <var>monthValue</var>[, <var>dateValue</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>yearValue</var></code></dt>
 <dd>「年」の数字を指定する整数値。例えば、1995。</dd>
 <dt><code><var>monthValue</var></code></dt>
 <dd>任意。1 月から 12 月を表す 0 から 11 までの間の整数値。</dd>
 <dt><code><var>dateValue</var></code></dt>
 <dd>「日」を表す 1 から 31 までの間の整数値。<code><var>dateValue</var></code> 引数を指定した場合、<code><var>monthValue</var></code> も指定しなければなりません。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日付までの間のミリ秒単位の数値。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><var>monthValue</var></code> 引数と <code><var>dateValue</var></code> 引数を指定しない場合、{{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} メソッドと {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} メソッドから返される値が使われます。</p>

<p>指定した値が期待される日付の範囲外の場合、それに応じて <code>setFullYear()</code> が他の引数と {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、<code><var>monthValue</var></code> に 15 を指定した場合、年に 1 が加算 (<code><var>yearValue</var> + 1</code>) され、月が 3 になります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_setFullYear" name="Using_setFullYear">setFullYear() の使用</h3>

<pre class="brush: js notranslate">var theBigDay = new Date();
theBigDay.setFullYear(1997);
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.setfullyear', 'Date.prototype.setFullYear')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.setFullYear")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setYear()")}}</li>
</ul>
