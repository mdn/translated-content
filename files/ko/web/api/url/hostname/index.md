---
title: URL.hostname
slug: Web/API/URL/hostname
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/hostname
---
<div>{{ApiRef("URL API")}}</div>

<p>{{domxref("URL")}} 인터페이스의<strong> <code>hostname</code></strong> 속성은 URL의 {{glossary("domain name", "도메인 이름")}}을 담은 {{domxref("USVString")}}을 반환합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>domain</em> = <em>url</em>.hostname
<em>url.</em>hostname = <em>domain</em></pre>

<h3 id="값">값</h3>

<p>{{domxref("USVString")}},</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">const url = new URL('https://developer.mozilla.org/ko/docs/Web/API/URL/hostname');
console.log(url.hostname); // Logs: 'developer.mozilla.org'</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.hostname")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>속성이 속한 {{domxref("URL")}} 인터페이스.</li>
</ul>
