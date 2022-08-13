---
title: 'Date.prototype[@@toPrimitive]'
slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---
<div>{{JSRef}}</div>

<p><code><strong>[@@toPrimitive]()</strong></code> メソッドは、<code>Date</code> オブジェクトをプリミティブ値に変換します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Date()[Symbol.toPrimitive](<var>hint</var>);</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた {{jsxref("Date")}} オブジェクトのプリミティブ値です。引数に応じて、このメソッドは文字列と数値のどちらかを返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Date")}} オブジェクトの <code>[@@toPrimitive]()</code> メソッドは、プリミティブ値を返します。これは、数値型か文字列型です。</p>

<p><code><var>hint</var></code> が <code>string</code> または <code>default</code> の場合、<code>[@@toPrimitive]()</code> は {{jsxref("Object.prototype.toString()", "toString")}} メソッドを呼び出そうとします。<code>toString</code> メソッドが存在しなければ、{{jsxref("Object.prototype.valueOf()", "valueOf")}} メソッドを呼び出そうとします。<code>valueOf</code> メソッドも存在しなければ、<code>[@@toPrimitive]()</code> は {{jsxref("TypeError")}} を発生させます。</p>

<p><code>hint</code> が <code>number</code> の場合、<code>[@@toPrimitive]()</code> は初めに <code>valueOf</code> メソッドを呼び出そうとします。これが失敗した場合は、<code>toString</code> メソッドを呼び出します。</p>

<p>JavaScript は、<code>[@@toPrimitive]()</code> メソッドを呼び出してオブジェクトをプリミティブ値に変換します。<code>[@@toPrimitive]()</code> メソッドを自分で呼び出す必要はほとんどありません。JavaScript は、プリミティブ値が期待されるオブジェクトに遭遇した時、自動的にこれを呼び出します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Returning_date_primitives" name="Returning_date_primitives">日付プリミティブの返却</h3>

<pre class="brush: js notranslate">const testDate = new Date(1590757517834);
// "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('string');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('number');
// Returns "1590757517834"

testDate[Symbol.toPrimitive]('default');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype-@@toprimitive', 'Date.prototype.@@toPrimitive')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.@@toPrimitive")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
