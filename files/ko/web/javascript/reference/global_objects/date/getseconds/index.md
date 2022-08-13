---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---
<div>{{JSRef}}</div>

<p><strong><code>getSeconds()</code> </strong>메서드는 <code>Date</code> 객체의 초 값을 현지 시간에 맞춰 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>dateObj</var>.getSeconds()</pre>

<h3 id="반환_값">반환 값</h3>

<p>현지 시간 기준 초를 나타내는 0에서 59 사이의 정수.</p>

<h2 id="예제">예제</h2>

<h3 id="getSeconds()_사용하기"><code>getSeconds()</code> 사용하기</h3>

<p>다음 예제는 {{jsxref("Date")}} 객체 <code>Xmas95</code>의 값을 사용해 변수 <code>seconds</code>에 30을 할당합니다.</p>

<pre class="brush: js">var Xmas95 = new Date('December 25, 1995 23:15:30');
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Date.getSeconds")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCSeconds()")}}</li>
 <li>{{jsxref("Date.prototype.setSeconds()")}}</li>
</ul>
