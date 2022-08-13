---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/size
---
<div>{{JSRef}}</div>

<p><code><strong>size</strong></code> 접근자 속성은 {{jsxref("Set")}} 객체의 원소 수를 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/set-prototype-size.html")}}</div>



<h2 id="설명">설명</h2>

<p><code>size</code>의 값은 <code>Set</code> 객체가 가진 원소의 수를 나타내는 정수입니다. <code>size</code> 값의 설정자는 {{jsxref("undefined")}}입니다. 즉 값을 직접 바꿀 수는 없습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="size_사용하기"><code>size</code> 사용하기</h3>

<pre class="brush:js">var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add('some text')

mySet.size; // 3
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Set.size")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
</ul>
