---
title: URL.hash
slug: Web/API/URL/hash
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/hash
---
<div>{{ APIRef("URL API") }}</div>

<p><span class="seoSummary">{{domxref("URL")}} 인터페이스의 <strong><code>hash</code></strong> 속성은 맨 앞의 <code>'#'</code>과 함께 URL의 프래그먼트 식별자를 담고 있는 {{domxref("USVString")}}입니다.</span></p>

<p>프래그먼트에는 <a href="/en-US/docs/Glossary/percent-encoding">퍼센트 디코딩</a>을 적용하지 않습니다. URL이 프래그먼트 식별자를 포함하지 않은 경우 빈 문자열을 반환합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>string</em> = <em>url</em>.hash
<em>url</em>.hash = <em>newHash</em>
</pre>

<h3 id="값">값</h3>

<p>{{domxref("USVString")}}.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">const url = new URL('https://developer.mozilla.org/ko/docs/Web/API/URL/href#예제');
console.log(url.hash); // Logs: '#예제'</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.hash")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>속성이 속한 {{domxref("URL")}} 인터페이스.</li>
</ul>
