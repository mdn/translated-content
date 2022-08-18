---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---
<div>{{JSRef}}</div>

<p><strong><code>toJSON()</code></strong> メソッドは、{{jsxref("Date")}} オブジェクトの文字列表現を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-tojson.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.toJSON()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた日付を表す文字列。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Date")}} インスタンスは、特定の時点を参照します。<code>toJSON()</code> の呼び出しは、{{jsxref("Date")}} オブジェクトの値を表す文字列 ({{jsxref("Date.prototype.toISOString()", "toISOString()")}} を使用) を返します。このメソッドは、一般的に、{{Glossary("JSON")}} シリアライズを目的として {{jsxref("Date")}} オブジェクトをシリアライズするために使用されます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_toJSON" name="Using_toJSON">toJSON() を使う</h3>

<pre class="brush:js notranslate">var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
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
   <td>{{SpecName('ESDraft', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.toJSON")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toUTCString()")}}</li>
</ul>
