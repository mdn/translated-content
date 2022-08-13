---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
tags:
  - ArrayBuffer
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---
<div>{{JSRef}}</div>

<p><code><strong>slice()</strong></code> 메서드는 현재 <code>ArrayBuffer</code>를 주어진 시작과 끝점에 맞춰 자른 새로운 <code>ArrayBuffer</code>를 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><em>arraybuffer</em>.slice(<em>begin</em>[, <em>end</em>])</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>begin</code></dt>
 <dd>자르기 시작할 지점을 나타내는 0 기반 인덱스.</dd>
</dl>

<dl>
 <dt><code>end</code> {{optional_inline}}</dt>
 <dd>자르기 끝낼 지점을 나타내는 바이트 인덱스. 지정하지 않은 경우 새로운 <code>ArrayBuffer</code>는 지정한 시작점부터 현재 <code>ArrayBuffer</code>의 끝까지 가지게 됩니다.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>새로운 {{jsxref("ArrayBuffer")}} 객체.</p>

<h2 id="설명">설명</h2>

<p><code>slice()</code> 메서드는 <code>end</code> 매개변수로 지정한 바이트 위치 바로 앞까지 현재 배열 버퍼를 복사합니다. <code>begin</code>과 <code>end</code>는 음의 값인 경우 배열의 시작부터 위치를 세지 않고 끝에서부터 셉니다.</p>

<p><code>end</code> 값이 유효한 범위를 벗어날 경우 버퍼 길이에 맞춰 잘라냅니다. 또한 새로운 ArrayBuffer의 길이가 음의 값이 나올 경우 0으로 처리합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="ArrayBuffer_복사하기"><code>ArrayBuffer</code> 복사하기</h3>

<pre class="brush: js">const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.ArrayBuffer.slice")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
