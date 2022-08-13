---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
browser-compat: javascript.builtins.Date.getUTCSeconds
---
<div>{{JSRef}}</div>

<p><strong>getUTCSeconds()</strong> 메서드는 표준시에 따라 지정된 날짜의 초를 반환합니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.getUTCSeconds()</code></pre>

<h3 id="Return_value">Return value</h3>

<p>0부터 59까지의 정수로, 표준시에 따라 지정된 날짜의 초를 나타냅니다.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_getUTCSeconds()">Using <code>getUTCSeconds()</code></h3>

<p>다음 예제에서는 현재 시간의 초 부분을 초 변수에 지정합니다.</p>

<pre class="brush: js">var today = new Date();
var seconds = today.getUTCSeconds();
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Date.prototype.getSeconds()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCSeconds()")}}</li>
</ul>
