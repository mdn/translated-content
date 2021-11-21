---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---
<div>{{JSRef}}</div>

<p><strong><code>Number.parseInt()</code></strong> 메서드는 문자열을 분석하고 특정 진수를 사용한 정수로 변환해 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/number-parseint.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">Number.parseInt(<var>string,</var>[ <var>radix</var>])
</pre>

<h3 id="매개변수">매개변수</h3>

<div>{{page("ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt", "매개변수")}}</div>

<h3 id="반환_값">반환 값</h3>

<p>{{page("ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt", "반환 값")}}</p>

<h2 id="설명">설명</h2>

<p><code>Number.parseInt()</code> 메서드는 전역 {{jsxref("parseInt", "parseInt()")}} 함수와 같은 기능을 가지고 있습니다.</p>

<pre class="brush: js">Number.parseInt === parseInt; // true</pre>

<p><code>Number.parseInt()</code>는 ECMAScript 2015에서 전역 범위의 모듈화를 위해 추가됐습니다. 상세한 정보와 예제는 {{jsxref("parseInt", "parseInt()")}}를 참고하세요.</p>

<h2 id="폴리필">폴리필</h2>

<pre class="brush: js">if (Number.parseInt === undefined) {
    Number.parseInt = window.parseInt;
}</pre>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-number.parseint', 'Number.parseInt')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.parseint', 'Number.parseInt')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("javascript.builtins.Number.parseInt")}}</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>메서드가 속한 {{jsxref("Number")}} 객체.</li>
 <li>전역 {{jsxref("parseInt", "parseInt()")}} 메서드.</li>
</ul>
