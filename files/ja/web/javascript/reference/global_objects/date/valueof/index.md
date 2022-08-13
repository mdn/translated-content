---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---
<div>{{JSRef}}</div>

<p><strong><code>valueOf()</code></strong> メソッドは、{{jsxref("Date")}} オブジェクトのプリミティブ値を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-valueof.html")}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.valueOf()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 から指定された日時までの間のミリ秒単位の数値。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>valueOf()</code> メソッドは、{{jsxref("Date")}} オブジェクトのプリミティブ値を数値型で返します。これは、1970 年 1 月 1 日 00:00:00 (UTC) からのミリ秒単位の数値です。</p>

<p>このメソッドは、{{jsxref("Date.prototype.getTime()")}} メソッドと機能的に同等です。</p>

<p>このメソッドは、JavaScript によって内部的に呼ばれ、コード内で明示的に呼ばれることはありません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_valueOf" name="Using_valueOf">valueOf() の使用</h3>

<pre class="brush: js notranslate">var x = new Date(56, 6, 17);
var myVar = x.valueOf();      // myVar に -424713600000 を代入
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.valueOf")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
 <li>{{jsxref("Date.prototype.getTime()")}}</li>
</ul>
