---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
browser-compat: javascript.builtins.Date.getUTCFullYear
---
<div>{{JSRef}}</div>

<p><strong>getUTCFullYear()</strong> 메서드는 표준시에 따라 지정된 날짜의 연도를 반환합니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.getUTCFullYear()</code></pre>

<h3 id="Return_value">Return value</h3>

<p>주어진 날짜의 연도를 표준시에 따라 나타내는 숫자입니다.</p>

<h2 id="Description">Description</h2>

<p><strong>getUTCFullYear()</strong>에 의해 반환 된 값은 1995 년과 같이 2000 년과 호환되는 절대 숫자입니다.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_getUTCFullYear()">Using <code>getUTCFullYear()</code></h3>

<p>다음 예제에서는 현재 연도의 4 자리 값을 변수 year에 할당합니다.</p>

<pre class="brush: js">var today = new Date();
var year = today.getUTCFullYear();
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Date.prototype.getFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setFullYear()")}}</li>
</ul>
