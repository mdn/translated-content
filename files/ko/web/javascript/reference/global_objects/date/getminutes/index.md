---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---
<div>{{JSRef}}</div>

<p><code><strong>getMinutes()</strong></code> 메서드는 <code>Date</code> 인스턴스의 분을 현지 시간 기준으로 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getminutes.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>dateObj</var>.getMinutes()</pre>

<h3 id="반환_값">반환 값</h3>

<p>주어진 날짜의 현지 시간 기준 분을 나타내는 0에서 59 사이의 정수.</p>

<h2 id="예제">예제</h2>

<h3 id="getMinutes()_사용하기"><code>getMinutes()</code> 사용하기</h3>

<p>다음 예제는 {{jsxref("Date")}} 객체 <code>Xmas95</code>의 분을 사용해 변수 <code>minutes</code>에 15를 할당합니다.</p>

<pre class="brush: js">var Xmas95 = new Date('December 25, 1995 23:15:30');
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Date.getMinutes")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCMinutes()")}}</li>
 <li>{{jsxref("Date.prototype.setMinutes()")}}</li>
</ul>
