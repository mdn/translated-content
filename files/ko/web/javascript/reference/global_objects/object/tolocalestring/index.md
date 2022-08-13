---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---
<div>{{JSRef}}</div>

<p><code><strong>toLocaleString()</strong></code> 메서드는 객체로 된 문자열을 반환합니다. 이 메서드는 지역별로 다른 객체로 재정의되어 표시됩니다.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>obj</var>.toLocaleString()</pre>

<h3 id="반환_값">반환 값</h3>

<p>객체를 나타내는 문자열.</p>

<h2 id="설명">설명</h2>

<p>{{jsxref("Object")}}의 <code>toLocaleString</code>은 {{jsxref("Object.toString", "toString()")}}을 호출 한 결과를 반환합니다.</p>

<p>이 함수는 모든 객체가 사용할 수는 없지만 객체에 일반 <code>toLocaleString</code> 메소드를 제공하기 위해 제공됩니다. 아래 목록을 참조하십시오.</p>

<h3 id="toLocaleString()을_재정의하는_객체"><code>toLocaleString()</code>을 재정의하는 객체</h3>

<ul>
 <li>{{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>


<p>{{Compat("javascript.builtins.Object.toLocaleString")}}</p>
</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
