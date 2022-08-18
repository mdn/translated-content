---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---
<div>{{JSRef}}</div>

<p><strong><code>getUTCMilliseconds()</code></strong> メソッドは、協定世界時に基づき、指定された日時の「ミリ秒」を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.getUTCMilliseconds()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>協定世界時に基づき、与えられた日時の「ミリ秒」を表す 0 から 999 までの間の整数値。このメソッドは、時間部分、分部分などを提供する他のUTCベースのメソッドのコンパニオンです。このメソッドはミリ秒の部分を与えます。</p>

<p>Unix 元期の時刻と混同しないでください。1970/01/01からの経過ミリ秒を取得するには、".getTime()" メソッドを使用してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_getUTCMilliseconds" name="Using_getUTCMilliseconds">getUTCMilliseconds() の使用</h3>

<p>次の例は、現在時刻の「ミリ秒」部を変数 <code>milliseconds</code> に代入します。</p>

<pre class="brush: js notranslate">var today = new Date();
var milliseconds = today.getUTCMilliseconds();
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.getUTCMilliseconds")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.getMilliseconds()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCMilliseconds()")}}</li>
</ul>
