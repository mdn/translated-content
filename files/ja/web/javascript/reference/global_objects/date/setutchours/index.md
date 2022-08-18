---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---
<div>{{JSRef}}</div>

<p><strong><code>setUTCHours()</code></strong> メソッドは、協定世界時に基づき、指定された日付の「時」を設定し、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された {{jsxref("Date")}} インスタンスが表す時刻までの間のミリ秒単位の数値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.setUTCHours(<var>hoursValue</var>[, <var>minutesValue</var>[, <var>secondsValue</var>[, <var>msValue</var>]]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>hoursValue</var></code></dt>
 <dd>「時」を表す 0 から 23 までの間の整数値。</dd>
 <dt><code><var>minutesValue</var></code></dt>
 <dd>任意。「分」を表す 0 から 59 までの間の整数値。</dd>
 <dt><code><var>secondsValue</var></code></dt>
 <dd>任意。「秒」を表す 0 から 59 までの間の整数値。<code><var>secondsValue</var></code> 引数を指定した場合、<code><var>minutesValue</var></code> も指定しなければなりません。</dd>
 <dt><code><var>msValue</var></code></dt>
 <dd>任意。ミリ秒を表す 0 から 999 までの間の整数値。<code><var>msValue</var></code> 引数を指定した場合、<code><var>minutesValue</var></code> と <code><var>secondsValue</var></code> も指定しなければなりません。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><var>minutesValue</var></code>, <code><var>secondsValue</var></code> および <code><var>msValue</var></code> 引数を指定しない場合、{{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}} と {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}}、{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} メソッドから返される値が使われます。</p>

<p>指定した値が期待される日付の範囲外の場合、それに応じて <code>setUTCHours()</code> が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、<code><var>secondsValue</var></code> に 100 を指定した場合、分に 1 が加算 (<code><var>minutesValue</var> + 1</code>) され、秒が 40 になります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_setUTCHours" name="Using_setUTCHours">setUTCHours() の使用</h3>

<pre class="brush: js notranslate">var theBigDay = new Date();
theBigDay.setUTCHours(8);
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.setutchours', 'Date.prototype.setUTCHours')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.setUTCHours")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCHours()")}}</li>
 <li>{{jsxref("Date.prototype.setHours()")}}</li>
</ul>
