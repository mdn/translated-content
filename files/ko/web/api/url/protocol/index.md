---
title: URL.protocol
slug: Web/API/URL/protocol
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/protocol
---
<div>{{ApiRef("URL API")}}</div>

<p>{{domxref("URL")}} 인터페이스의 <strong><code>protocol</code></strong> 속성은 URL의 프로토콜 스킴과 마지막 <code>':'</code>을 포함한 {{domxref("USVString")}}입니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>protocol</em> = <em>url</em>.protocol
<em>url</em>.protocol = <em>newProtocol</em>
</pre>

<h3 id="값">값</h3>

<p>{{domxref("USVString")}}.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
console.log(url.protocol); // Logs "https:"
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.protocol")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>속성이 속한 {{domxref("URL")}} 인터페이스.</li>
</ul>
