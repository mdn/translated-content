---
title: URL.searchParams
slug: Web/API/URL/searchParams
tags:
  - API
  - Property
  - Read-only
  - Reference
  - URL
  - URLSearchParams
translation_of: Web/API/URL/searchParams
---
<div>{{APIRef("URL API")}}</div>

<p>{{domxref("URL")}} 인터페이스의 <strong><code>searchParams</code></strong> 읽기 전용 속성은 URL 내의 {{httpmethod("GET")}} 디코딩 된 쿼리 매개변수에 접근할 수 있는 {{domxref("URLSearchParams")}} 객체를 반환합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>urlSearchParams</em> = <em>url</em>.searchParams</pre>

<h3 id="값">값</h3>

<p>{{domxref("URLSearchParams")}} 객체.</p>

<h2 id="예제">예제</h2>

<p>페이지의 URL을 <code>https://example.com/?name=Jonathan%20Smith&amp;age=18</code>로 가정했을 때, <code>name</code>과 <code>age</code> 매개변수는 다음과 같이 가져올 수 있습니다.</p>

<pre class="brush: js">let params = (new URL(document.location)).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.searchParams")}}</p>
