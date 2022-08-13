---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
browser-compat: javascript.builtins.Date.setUTCFullYear
---
<div>{{JSRef}}</div>

<p><strong>setUTCFullYear()</strong> 메서드는 지정된 날짜의 전체 연도를 표준시에 따라 설정합니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.setUTCFullYear(<var>yearValue</var>[, <var>monthValue</var>[, <var>dayValue</var>]])</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>yearValue</code></dt>
 <dd>연도의 숫자 값을 지정하는 정수입니다 (예 : 1995).</dd>
 <dt><code>monthValue</code></dt>
 <dd>선택 과목. 1 월에서 12 월까지의 월을 나타내는 0에서 11 사이의 정수입니다.</dd>
 <dt><code>dayValue</code></dt>
 <dd>선택 과목. 한 달의 날짜를 나타내는 1 - 31 사이의 정수입니다. dayValue 매개 변수를 지정하는 경우 monthValue도 지정해야합니다.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.</p>

<h2 id="Description">Description</h2>

<p>monthValue 및 dayValue 매개 변수를 지정하지 않으면 {{jsxref ( "Date.prototype.getUTCMonth ()", "getUTCMonth()")}} 및 {{jsxref("Date.prototype.getUTCDate)","getUTCDate()")}} 메소드가 사용됩니다.</p>

<p>지정한 매개 변수가 예상 범위를 벗어난 경우 setUTCFullYear ()는 다른 매개 변수와 {{jsxref("Date")}} 객체의 날짜 정보를 그에 따라 업데이트하려고 시도합니다. 예를 들어, monthValue에 15를 지정하면 연도가 1 (yearValue + 1)만큼 증가하고 3은 해당 월에 사용됩니다.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_setUTCFullYear()">Using <code>setUTCFullYear()</code></h3>

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setFullYear()")}}</li>
</ul>
