---
title: URL.origin
slug: Web/API/URL/origin
tags:
  - API
  - Property
  - Read-only
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/origin
---
<div>{{APIRef("URL API")}}</div>

<p><span class="seoSummary">{{domxref("URL")}} 인터페이스의 <strong><code>origin</code></strong> 읽기 전용 속성은 표현 중인 URL의 출처를 유니코드로 직렬화한 {{domxref("USVString")}}을 반환합니다.</span> 정확한 구조는 URL의 유형에 따라 다릅니다.</p>

<ul>
 <li><code>http</code> 또는 <code>https</code> URL은 스킴 뒤 <code>'://'</code>, 도메인, <code>':'</code>, 마지막으로 포트(명시적으로 지정한 경우)로 구성됩니다.</li>
 <li><code>file:</code> URL은 브라우저마다 다릅니다.</li>
 <li><code>blob:</code> URL은 <code>blob:</code> 뒤의 URL 출처를 반환합니다. 예를 들어, <code>"blob:https://mozilla.org"</code>인 경우 <code>"https://mozilla.org"</code>를 반환합니다.</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>originString</em> = <em>url</em>.origin
</pre>

<h3 id="값">값</h3>

<p>A {{domxref("USVString")}}.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">const url = new URL("blob:https://mozilla.org:443/")
console.log(url.origin); // Logs 'https://mozilla.org'
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.origin")}}</p>
