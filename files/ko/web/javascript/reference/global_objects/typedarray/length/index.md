---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/length
---
<div>{{JSRef}}</div>

<p><strong><code>length</code></strong> 접근자(accessor) 속성(property)은 형식화 배열의 (요소) 길이를 나타냅니다.</p>

<h2 id="설명">설명</h2>

<p><code>length</code> 속성은 set 접근자 함수가 <code>undefined</code>인 접근자 속성입니다, 이 속성을 읽을 수만 있음을 뜻하는. 값은 <em>TypedArray</em>가 만들어질 때 수립되어 변경될 수 없습니다. <em>TypedArray</em>가 <code>byteOffset</code> 또는 <code>length</code>를 지정하지 않은 경우, 참조되는 {{jsxref("ArrayBuffer")}}의 길이가 반환됩니다. <em>TypedArray</em>는 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_객체">TypedArray 객체 유형</a> 중 하나입니다.</p>

<h2 id="예제">예제</h2>

<h3 id="length_속성_사용"><code>length</code> 속성 사용</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.length; // 8 (버퍼의 길이와 일치)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (Uint8Array를 만들 때 지정된 대로)

var uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (만든 Uint8Array의 오프셋으로 인해)
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.TypedArray.length")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Typed_arrays">JavaScript 형식화 배열</a></li>
 <li>{{jsxref("TypedArray")}}</li>
</ul>
