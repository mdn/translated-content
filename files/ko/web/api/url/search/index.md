---
title: URL.search
slug: Web/API/URL/search
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/search
---
<div>{{ApiRef("URL API")}}</div>

<p>{{domxref("URL")}} 인터페이스의 <strong><code>search</code></strong> 속성은 맨 앞의 <code>'?'</code>와 함께 URL의 쿼리 문자열, 즉 검색 매개변수를 나타내는 {{domxref("USVString")}}입니다.</p>

<p>신형 브라우저에서는 {{domxref("URL.searchParams")}} 속성을 통해 간편한 쿼리 문자열 분석을 지원합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>searchParams</em> = <em>object</em>.search
<em>url</em>.search = <em>newSearchParams</em>
</pre>

<h3 id="값">값</h3>

<p>{{domxref("USVString")}}.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const url = new URL('https://developer.mozilla.org/ko/docs/Web/API/URL/search?q=123');
console.log(url.search); // Logs "?q=123"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.URL.search")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>속성이 속한 {{domxref("URL")}} 인터페이스.</li>
</ul>
