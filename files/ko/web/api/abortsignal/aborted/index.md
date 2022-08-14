---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
tags:
  - API
  - AbortSignal
  - aborted
  - 레퍼런스
  - 실험적
  - 프로퍼티
translation_of: Web/API/AbortSignal/aborted
---
<div>{{APIRef("DOM")}}{{SeeCompatTable}}</div>

<p><strong><code>aborted</code></strong> 읽기 전용 프로퍼티는 신호가 통신하는 DOM 요청이 취소되었는지(<code>true</code>) 그렇지 않은지(<code>false</code>)를 나타내는 {{domxref("Boolean")}}을 반환한다.</p>

<h2 id="구문">구문</h2>

<pre class="brush: js">var isAborted = abortSignal.aborted;</pre>

<h3 id="값">값</h3>

<p>{{domxref("Boolean")}}</p>

<h2 id="예제">예제</h2>

<p>다음 스니펫에서는 새로운 <code>AbortController</code> 객체를 생성하고 {{domxref("AbortSignal")}}를 얻는다(<code>signal</code> 프로퍼티에서 가능). 그 다음 <code>aborted</code> 프로퍼티를 사용해 신호가 취소되었는지 확인하고 콘솔로 적절한 로그를 전송한다.</p>

<pre class="brush: js">var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted ? console.log('Request has been aborted') : console.log('Request not aborted');
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.AbortSignal.aborted")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Fetch_API">Fetch API</a></li>
</ul>
