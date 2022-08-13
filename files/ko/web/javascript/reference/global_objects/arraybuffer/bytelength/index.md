---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
tags:
  - ArrayBuffer
  - JavaScript
  - Property
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---
<div>{{JSRef}}</div>

<p><code><strong>byteLength</strong></code> 접근자 속성은 {{jsxref("ArrayBuffer")}}의 길이를 바이트 단위로 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>arr</var>aybuffer.byteLength</pre>

<h2 id="설명">설명</h2>

<p><code>byteLength</code> 속성은 설정자 속성이 <code>undefined</code>인 접근자 속성으로, 오직 읽기만 가능합니다. <code>byteLength</code>는 배열 버퍼를 처음 생성할 때 정해지며 바꿀 수 없습니다. <code>ArrayBuffer</code>가 분리된 경우 0을 반환합니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.ArrayBuffer.byteLength")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
