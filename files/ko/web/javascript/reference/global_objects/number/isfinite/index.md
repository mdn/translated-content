---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
tags:
  - JavaScript
  - Method
  - Number
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---
<div>{{JSRef}}</div>

<p><strong><code>Number.isFinite()</code></strong> 메서드는 주어진 값이 유한수인지 판별합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">Number.isFinite(<var>value</var>)</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>유한수인지 판별할 값.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>유한수 여부에 대한 {{jsxref("Boolean")}} 값.</p>

<h2 id="설명">설명</h2>

<p>전역 함수 {{jsxref("isFinite", "isFinite()")}}와 비교했을 때, <code>Number.isFinite()</code> 메서드는 매개변수를 숫자로 변환하지 않습니다. 즉 값이 숫자이며 동시에 유한수일 때만 <code>true</code>를 반환합니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false
                            // 전역함수 isFinite('0')라면 true
Number.isFinite(null);      // false
                            // 전역함수 isFinite(null)라면 true
</pre>

<h2 id="폴리필">폴리필</h2>

<pre class="brush: js">if (Number.isFinite === undefined) Number.isFinite = function(value) {
    return typeof value === 'number' &amp;&amp; isFinite(value);
}</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("javascript.builtins.Number.isFinite")}}</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>메서드가 속한 {{jsxref("Number")}} 객체.</li>
 <li>전역 함수 {{jsxref("isFinite")}}.</li>
</ul>
