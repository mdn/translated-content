---
title: URL.port
slug: Web/API/URL/port
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/port
---
<div>{{ApiRef("URL API")}}</div>

<p>{{domxref("URL")}} 인터페이스의 <strong><code>port</code></strong> 속성은 URL의 포트 숫자를 담은 {{domxref("USVString")}}입니다. URL이 명시적인 포트 번호를 포함하고 있지 않으면 빈 문자열(<code>''</code>)입니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>portNumber</em> = <em>url</em>.port
<em>url</em>.port = <em>newPortNumber</em>
</pre>

<h3 id="값">값</h3>

<p>A {{domxref("USVString")}}.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">const url = new URL('<span class="message-body-wrapper"><span class="message-flex-body"><span class="devtools-monospace message-body"><span class="cm-string">https://mydomain.com:80/svn/Repos/</span></span></span></span>');
console.log(url.port); // Logs '80'
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.port")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>속성이 속한 {{domxref("URL")}} 인터페이스.</li>
</ul>
